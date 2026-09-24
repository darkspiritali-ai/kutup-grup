import express from 'express';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import nodemailer from 'nodemailer';
import 'dotenv/config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.disable('x-powered-by');

// Keep the public host canonical. This only works when the www hostname is
// routed to this application by DNS/hosting; provider-level routing still
// needs to be verified separately after deployment.
app.use((req, res, next) => {
  const host = (req.get('host') || '').split(':')[0].toLowerCase();
  if (host === 'www.kutupgrup.com') {
    return res.redirect(308, `https://kutupgrup.com${req.originalUrl}`);
  }
  next();
});

// Middleware
app.use(express.json());

const escapeHtml = (value = '') => String(value)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#39;');

const safeSubjectPart = (value = '') => String(value).replace(/[\r\n]+/g, ' ').trim().slice(0, 160);

const escapeRegExp = (value = '') => String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const sensitiveProbePatterns = [
  /(^|\/)\.(?:env|git(?:-credentials)?|aws|kube|docker|netrc|npmrc|pypirc)(?:[./~]|$)/i,
  /(^|\/)(?:wp-admin|wp-login\.php|wp-content|wp-includes|phpmyadmin|cgi-bin|actuator|debug|server-status|administrator|admin\/controller)(?:\/|$)/i,
  /\.(?:php\d*|phtml|phar|jsp|jspx|asp|aspx)$/i,
];

const getDecodedPath = (requestPath) => {
  try {
    return decodeURIComponent(requestPath);
  } catch {
    return requestPath;
  }
};

const isSensitiveProbe = (requestPath) => {
  const decodedPath = getDecodedPath(requestPath);
  return sensitiveProbePatterns.some((pattern) => pattern.test(decodedPath));
};

const hasMalformedEncoding = (requestUrl) => {
  try {
    decodeURIComponent(requestUrl);
    return false;
  } catch {
    return true;
  }
};

// Reject common secret-file and platform probes before canonical redirects or
// static-file handling. Keep this separate from /.well-known/ so legitimate
// ACME/security metadata can still be served if added later.
app.use((req, res, next) => {
  if (isSensitiveProbe(req.path)) {
    return res.status(404)
      .set('Cache-Control', 'no-store')
      .end();
  }
  next();
});

const logLevel = String(process.env.LOG_LEVEL || '').toLowerCase();
const logAllRequests = logLevel === 'debug' || logLevel === 'info' || process.env.DIAGNOSTIC_LOGS === 'true';
const logNotFoundResponses = process.env.LOG_404S === 'true';

// Request logging is intentionally quiet in production. Internet scanners
// generate a large amount of known 404 traffic; logging those requests adds
// noise without improving observability. 401/403/429 client errors and all
// server errors remain visible; 404s can be enabled with LOG_404S=true.
app.use((req, res, next) => {
  const startedAt = Date.now();
  res.on('finish', () => {
    const durationMs = Date.now() - startedAt;
    const statusCode = res.statusCode;
    const shouldLog = logAllRequests
      || statusCode >= 500
      || (statusCode >= 400 && statusCode !== 404 && !isSensitiveProbe(req.path) && !hasMalformedEncoding(req.originalUrl))
      || (statusCode === 404 && logNotFoundResponses && !isSensitiveProbe(req.path));

    if (!shouldLog) {
      return;
    }

    const message = `[HTTP] ${req.method} ${req.originalUrl} ${statusCode} ${durationMs}ms`;
    if (statusCode >= 500) {
      console.error(message);
    } else if (statusCode >= 400) {
      console.warn(message);
    } else {
      console.log(message);
    }
  });
  next();
});

// Nodemailer Transporter Configuration
const createTransporter = () => {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT) || 465;
  const secure = process.env.SMTP_SECURE === 'true' || port === 465;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!nodemailer || !host || !user || !pass || pass === 'BurayaSmtpSifreniziYazin') {
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
    const { ad_soyad, email, telefon, konu, hizmet_slug, mesaj } = req.body;

    if (!ad_soyad || !email || !telefon || !mesaj) {
      return res.status(400).json({ success: false, message: 'Lütfen tüm zorunlu alanları doldurun.' });
    }

    const transporter = createTransporter();
    const recipient = process.env.NOTIFICATION_EMAIL || 'info@kutupgrup.com';

    const safeName = escapeHtml(ad_soyad);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(telefon);
    const safeTopic = escapeHtml(konu || 'Yeni İletişim Mesajı');
    const safeService = escapeHtml(hizmet_slug || 'Belirtilmedi');
    const safeMessage = escapeHtml(mesaj);

    const mailOptions = {
      from: `"Kutup Grup Web Sitesi" <${process.env.SMTP_USER || 'info@kutupgrup.com'}>`,
      to: recipient,
      replyTo: email,
      subject: `[Web İletişim Formu] ${safeSubjectPart(konu || 'Yeni İletişim Mesajı')} - ${safeSubjectPart(ad_soyad)}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #eee; border-radius: 8px;">
          <h2 style="color: #0284c7; border-bottom: 2px solid #0284c7; padding-bottom: 8px;">Yeni İletişim Formu Mesajı</h2>
          <p>Web sitenizdeki iletişim formundan yeni bir mesaj gönderildi:</p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 8px; font-weight: bold; width: 120px; border-bottom: 1px solid #eee;">Ad Soyad:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${safeName}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">E-Posta:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="mailto:${safeEmail}">${safeEmail}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Telefon:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="tel:${safePhone}">${safePhone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Konu:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${safeTopic}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">Hizmet:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${safeService}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee; vertical-align: top;">Mesaj:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee; white-space: pre-wrap;">${safeMessage}</td>
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
      console.warn('[Email Delivery Skipped] Contact form received but SMTP is not configured.');
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
      console.warn('[Email Delivery Skipped] Newsletter subscription received but SMTP is not configured.');
    }

    return res.status(200).json({ success: true, message: 'Bülten aboneliğiniz alındı.' });
  } catch (error) {
    console.error('[Email Error] Newsletter email error:', error);
    return res.status(500).json({ success: false, message: 'Abonelik kaydı sırasında bir hata oluştu.' });
  }
});

// Force trailing slash redirect to non-trailing slash canonicals and old slug redirect
app.use((req, res, next) => {
  // Ignore API requests and static assets
  if (req.path.startsWith('/api/') || req.path.includes('.')) {
    return next();
  }

  const reqPath = req.path;
  const decodedPath = getDecodedPath(reqPath);

  // 301 Redirect for the old Turkish-character slug
  if (decodedPath === '/hizmetler/deflektör-tip-ortuleme' || reqPath === '/hizmetler/deflekt%C3%B6r-tip-ortuleme') {
    res.header('Cache-Control', 'public, max-age=31536000');
    return res.redirect(301, '/hizmetler/deflektor-tip-ortuleme');
  }

  // If path ends with slash and is not root, redirect 301 to non-slash canonical URL path
  if (reqPath.substr(-1) === '/' && reqPath.length > 1) {
    const query = req.url.slice(reqPath.length);
    res.header('Cache-Control', 'public, max-age=31536000');
    return res.redirect(301, reqPath.slice(0, -1) + query);
  }
  next();
});

// Serve sitemap.xml with correct content-type and cache control
app.get('/sitemap.xml', (req, res) => {
  res.header('Content-Type', 'application/xml');
  res.header('Cache-Control', 'public, max-age=0, s-maxage=3600, must-revalidate');
  res.sendFile(path.join(__dirname, 'dist', 'sitemap.xml'));
});

// Serve robots.txt with correct content-type and cache control
app.get('/robots.txt', (req, res) => {
  res.header('Content-Type', 'text/plain');
  res.header('Cache-Control', 'public, max-age=0, s-maxage=3600, must-revalidate');
  res.sendFile(path.join(__dirname, 'dist', 'robots.txt'));
});

// Serve llms.txt with correct content-type, encoding and cache control
app.get('/llms.txt', (req, res) => {
  res.header('Content-Type', 'text/plain; charset=utf-8');
  res.header('Cache-Control', 'public, max-age=0, s-maxage=3600, must-revalidate');
  res.sendFile(path.join(__dirname, 'dist', 'llms.txt'));
});

// Serve llms-full.txt with correct content-type, encoding and cache control
app.get('/llms-full.txt', (req, res) => {
  res.header('Content-Type', 'text/plain; charset=utf-8');
  res.header('Cache-Control', 'public, max-age=0, s-maxage=3600, must-revalidate');
  res.sendFile(path.join(__dirname, 'dist', 'llms-full.txt'));
});

// Serve static HTML pre-rendered files directly to prevent SPA 301 folder redirects
app.get('/:page', (req, res, next) => {
  const pagePath = path.join(__dirname, 'dist', req.params.page, 'index.html');
  if (fs.existsSync(pagePath)) {
    return res.sendFile(pagePath);
  }
  next();
});

// Serve static services pre-rendered pages directly
app.get('/hizmetler/:service', (req, res, next) => {
  const servicePath = path.join(__dirname, 'dist', 'hizmetler', req.params.service, 'index.html');
  if (fs.existsSync(servicePath)) {
    return res.sendFile(servicePath);
  }
  next();
});

// Serve static blog articles generated during the prerender step.
app.get('/blog/:slug', (req, res, next) => {
  const blogPath = path.join(__dirname, 'dist', 'blog', req.params.slug, 'index.html');
  if (fs.existsSync(blogPath)) {
    return res.sendFile(blogPath);
  }
  next();
});

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Ignore favicon.ico requests
app.get('/favicon.ico', (req, res) => res.status(204).end());

// SPA Fallback: Route all unknown requests to index.html OR return a real HTTP 404 if it's a completely invalid route
app.use((req, res) => {
  // Array of valid frontend routes that should render index.html
  const validRoutes = [
    '/',
    '/hakkimizda',
    '/hizmetler',
    '/iletisim',
    '/sss',
    '/blog',
    '/referanslar',
    '/gizlilik-politikasi',
    '/cerez-politikasi'
  ];

  const reqPath = req.path;

  // Dynamic validation for services slugs to avoid soft-404 on invalid dynamic paths
  let isValidService = false;
  if (reqPath.startsWith('/hizmetler/')) {
    const slug = reqPath.replace('/hizmetler/', '');
    // Avoid loading TypeScript source from the production server just to
    // validate an invalid route. Parsing the route keys also keeps Node's
    // runtime free of MODULE_TYPELESS_PACKAGE_JSON warnings.
    const content = fs.readFileSync(path.join(__dirname, 'src/lib/services-data.ts'), 'utf-8');
    const serviceKeyPattern = new RegExp(`['"]${escapeRegExp(slug)}['"]\\s*:`);
    isValidService = serviceKeyPattern.test(content);
  }

  let isValidBlog = false;
  if (reqPath.startsWith('/blog/')) {
    const slug = reqPath.replace('/blog/', '');
    try {
      const content = fs.readFileSync(path.join(__dirname, 'src/lib/blog-data.ts'), 'utf-8');
      isValidBlog = content.includes(`slug: '${slug}'`) || content.includes(`slug: "${slug}"`);
    } catch (e) {
      isValidBlog = false;
    }
  }

  const isValidStatic = validRoutes.includes(reqPath);

  if (isValidStatic || isValidService || isValidBlog) {
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
  } else {
    // Completely invalid route: return real HTTP 404 status code
    res.status(404).sendFile(path.join(__dirname, 'dist', '404.html'), (err) => {
      if (err) {
        // Fallback if 404.html pre-render isn't found
        res.status(404).send(`
          <!DOCTYPE html>
          <html lang="tr">
          <head>
            <meta charset="UTF-8">
            <title>Sayfa Bulunamadı - Kutup Grup</title>
            <style>
              body { background: #030712; color: #fff; font-family: sans-serif; text-align: center; padding: 50px; }
              h1 { color: #ef4444; }
              a { color: #3e92cc; text-decoration: none; }
            </style>
          </head>
          <body>
            <h1>404 - Sayfa Bulunamadı</h1>
            <p>Aradığınız sayfa mevcut değil veya taşınmış olabilir.</p>
            <p><a href="/">Anasayfa'ya Dön</a></p>
          </body>
          </html>
        `);
      }
    });
  }
});

// Malformed percent-encoded URLs are common scanner traffic. Convert the
// router's URIError into a small 400 response instead of exposing a stack
// trace in the application log or response body.
app.use((error, req, res, next) => {
  if (error instanceof URIError) {
    return res.status(400)
      .set('Cache-Control', 'no-store')
      .end();
  }
  next(error);
});

const PORT = Number(process.env.PORT) || 3000;

const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server listening on port ${PORT}`);
});

server.on('error', (error) => {
  console.error(`Failed to listen on port ${PORT}:`, error);
  process.exitCode = 1;
});

process.on('uncaughtException', (err) => {
  console.error('[Uncaught Exception]:', err);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('[Unhandled Rejection]:', reason);
});

function shutdown(signal) {
  console.log(`${signal} received. Shutting down gracefully.`);
  server.close(() => process.exit(0));
}

process.once('SIGTERM', () => shutdown('SIGTERM'));
process.once('SIGINT', () => shutdown('SIGINT'));
