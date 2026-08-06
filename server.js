const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());

// Diagnostic log
app.use((req, res, next) => {
  console.log(`[Diagnostic Log] Request: ${req.method} ${req.url}`);
  next();
});

// Nodemailer Transporter Configuration
const createTransporter = () => {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT) || 465;
  const secure = process.env.SMTP_SECURE === 'true' || port === 465;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass || pass === 'BurayaSmtpSifreniziYazin') {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
    tls: {
      rejectUnauthorized: false
    }
  });
};

// API Route: Contact Form
app.post('/api/contact', async (req, res) => {
  try {
    const { ad_soyad, email, telefon, konu, mesaj } = req.body;

    if (!ad_soyad || !email || !telefon || !mesaj) {
      return res.status(400).json({ success: false, message: 'Lütfen tüm zorunlu alanları doldurun.' });
    }

    const transporter = createTransporter();
    const recipient = process.env.NOTIFICATION_EMAIL || 'info@kutupgrup.com';

    const mailOptions = {
      from: `"Kutup Grup Web Sitesi" <${process.env.SMTP_USER || 'info@kutupgrup.com'}>`,
      to: recipient,
      replyTo: email,
      subject: `[Web İletişim Formu] ${konu || 'Yeni İletişim Mesajı'} - ${ad_soyad}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #eee; border-radius: 8px;">
          <h2 style="color: #0284c7; border-bottom: 2px solid #0284c7; padding-bottom: 8px;">Yeni İletişim Formu Mesajı</h2>
          <p>Web sitenizdeki iletişim formundan yeni bir mesaj gönderildi:</p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 8px; font-weight: bold; width: 120px; border-bottom: 1px solid #eee;">Ad Soyad:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${ad_soyad}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">E-Posta:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Telefon:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="tel:${telefon}">${telefon}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Konu:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${konu || 'Belirtilmedi'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee; vertical-align: top;">Mesaj:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee; white-space: pre-wrap;">${mesaj}</td>
            </tr>
          </table>
          <p style="font-size: 12px; color: #777; margin-top: 25px;">Tarih: ${new Date().toLocaleString('tr-TR')}</p>
        </div>
      `,
    };

    if (transporter) {
      await transporter.sendMail(mailOptions);
      console.log(`[Email Sent] Contact form email sent from ${email} to ${recipient}`);
    } else {
      console.log(`[Email Logged (No active SMTP settings)] Form data:`, req.body);
    }

    return res.status(200).json({ success: true, message: 'Mesajınız başarıyla iletildi.' });
  } catch (error) {
    console.error('[Email Error] Contact form email error:', error);
    return res.status(500).json({ success: false, message: 'Mesaj gönderilirken bir hata oluştu.' });
  }
});

// API Route: Newsletter Subscription
app.post('/api/newsletter', async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ success: false, message: 'E-posta adresi gereklidir.' });
    }

    const transporter = createTransporter();
    const recipient = process.env.NOTIFICATION_EMAIL || 'info@kutupgrup.com';

    const mailOptions = {
      from: `"Kutup Grup Web Sitesi" <${process.env.SMTP_USER || 'info@kutupgrup.com'}>`,
      to: recipient,
      subject: `[Bülten Aboneliği] Yeni Abone: ${email}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #eee; border-radius: 8px;">
          <h2 style="color: #0284c7;">Yeni Bülten Aboneliği</h2>
          <p>Web siteniz üzerinden yeni bir e-bülten aboneliği kaydı yapıldı:</p>
          <p><strong>E-Posta Adresi:</strong> <a href="mailto:${email}">${email}</a></p>
          <p style="font-size: 12px; color: #777; margin-top: 20px;">Tarih: ${new Date().toLocaleString('tr-TR')}</p>
        </div>
      `,
    };

    if (transporter) {
      await transporter.sendMail(mailOptions);
      console.log(`[Email Sent] Newsletter subscription for ${email}`);
    } else {
      console.log(`[Email Logged (No active SMTP settings)] Newsletter email: ${email}`);
    }

    return res.status(200).json({ success: true, message: 'Bülten aboneliğiniz alındı.' });
  } catch (error) {
    console.error('[Email Error] Newsletter email error:', error);
    return res.status(500).json({ success: false, message: 'Abonelik kaydı sırasında bir hata oluştu.' });
  }
});

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Ignore favicon.ico requests
app.get('/favicon.ico', (req, res) => res.status(204).end());

// SPA Fallback: Route all unknown requests to index.html
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'), (err) => {
    if (err) {
      console.error("Error serving index.html:", err);
      res.status(500).send(`
        <h1>Internal Server Error</h1>
        <p>Could not find dist/index.html.</p>
        <pre>${err.message}</pre>
        <p>Current directory: ${__dirname}</p>
      `);
    }
  });
});

const PORT = Number(process.env.PORT) || 3000;

const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server listening on port ${PORT}`);
});

server.on('error', (error) => {
  console.error(`Failed to listen on port ${PORT}:`, error);
  process.exitCode = 1;
});

function shutdown(signal) {
  console.log(`${signal} received. Shutting down gracefully.`);
  server.close(() => process.exit(0));
}

process.once('SIGTERM', () => shutdown('SIGTERM'));
process.once('SIGINT', () => shutdown('SIGINT'));
