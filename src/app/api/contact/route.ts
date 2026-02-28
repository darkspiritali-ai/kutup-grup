import { NextRequest, NextResponse } from 'next/server';

// Rate limiting: basit bir in-memory store
const requestCounts = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMIT = 5; // 5 request per hour
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds

function checkRateLimit(ip: string): boolean {
    const now = Date.now();
    const record = requestCounts.get(ip);

    if (!record || now > record.resetTime) {
        requestCounts.set(ip, {
            count: 1,
            resetTime: now + RATE_LIMIT_WINDOW,
        });
        return true;
    }

    if (record.count >= RATE_LIMIT) {
        return false;
    }

    record.count++;
    return true;
}

interface ContactFormData {
    ad_soyad: string;
    email: string;
    telefon: string;
    konu: string;
    mesaj: string;
    kvkk_onay: boolean;
}

export async function POST(request: NextRequest) {
    try {
        // Get client IP for rate limiting
        const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';

        // Check rate limit
        if (!checkRateLimit(ip)) {
            return NextResponse.json(
                { error: 'Çok fazla istek gönderdiniz. Lütfen daha sonra tekrar deneyin.' },
                { status: 429 }
            );
        }

        const body: ContactFormData = await request.json();

        // Server-side validation
        const { ad_soyad, email, telefon, mesaj, kvkk_onay } = body;

        if (!ad_soyad || !email || !mesaj || !kvkk_onay) {
            return NextResponse.json(
                { error: 'Tüm  gerekli alanları doldurun' },
                { status: 400 }
            );
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Geçerli bir e-posta adresi girin' },
                { status: 400 }
            );
        }

        // TODO: Send email using Resend or SendGrid
        // For now, just log the data
        console.log('Contact form submission:', {
            ad_soyad,
            email,
            telefon,
            konu: body.konu,
            mesaj,
            timestamp: new Date().toISOString(),
        });

        // Simulate email sending
        // In production, replace this with actual email service:
        /*
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
            from: 'website@kutupgrup.com',
            to: 'info@kutupgrup.com',
            subject: `Yeni İletişim Formu: ${ad_soyad}`,
            html: `
                <h2>Yeni İletişim Formu Mesajı</h2>
                <p><strong>Ad Soyad:</strong> ${ad_soyad}</p>
                <p><strong>E-posta:</strong> ${email}</p>
                <p><strong>Telefon:</strong> ${telefon}</p>
                <p><strong>Konu:</strong> ${body.konu || 'Belirtilmemiş'}</p>
                <p><strong>Mesaj:</strong></p>
                <p>${mesaj}</p>
            `,
        });
        */

        return NextResponse.json(
            { success: true, message: 'Mesajınız başarıyla gönderildi' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { error: 'Bir hata oluştu. Lütfen daha sonra tekrar deneyin.' },
            { status: 500 }
        );
    }
}
