import sgMail from '@sendgrid/mail';
import { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(req: NextRequest, res: NextResponse) {

  
    const { name, email, number, message} = await req.json();

        const msg = {
            to: process.env.MAIL_TO!,
            from: process.env.MAIL_FROM!,
            subject: 'CSI - Contact Us Form Submission',
            text: `
            Name: ${name}
            Email: ${email}
            Phone Number: ${number}
            Message: ${message}
`
        };

        try {
            await sgMail.send(msg);
            return NextResponse.json({ message: 'Email sent successfully' });
        } catch (error) {
            console.error('Error sending email:', error);
            return NextResponse.json({ message: 'Failed to send email' });
        }


}