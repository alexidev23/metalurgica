import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    // Obtener los datos del formulario
    const formData = await req.formData();
    const name = formData.get('name') as string;
    const subject = formData.get('subject') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;
    const file = formData.get('file') as File | null;

    // Manejo de archivo adjunto
    const attachments = file
      ? [
          {
            filename: file.name,
            content: Buffer.from(await file.arrayBuffer()),
            contentType: file.type,
          },
        ]
      : [];

    // Configuración de Nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: false, // si es true, usarás el puerto 465
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Enviar el correo
    await transporter.sendMail({
      from: `"Formulario Web" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO, // Correo del taller
      subject: `Nuevo mensaje: ${subject}`,
      html: `
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Asunto:</strong> ${subject}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Mensaje:</strong><br/>${message}</p>
      `,
      attachments,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error al enviar correo:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
