import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    // Transporter config
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Gmail account
        pass: process.env.EMAIL_PASS, // App Password
      },
    });

    // 📨 HTML email template
    const htmlTemplate = `
      <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
        <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          <div style="background-color: #0d9488; padding: 15px; text-align: center; color: #ffffff;">
            <h2 style="margin: 0;">📩 New Message from WATT Contact Form</h2>
          </div>
          <div style="padding: 20px;">
            <p style="font-size: 16px; color: #333;"><strong>Name:</strong> ${name}</p>
            <p style="font-size: 16px; color: #333;"><strong>Email:</strong> ${email}</p>
            <p style="font-size: 16px; color: #333;"><strong>Subject:</strong> ${subject}</p>
            <div style="margin-top: 20px;">
              <p style="font-size: 16px; color: #333; margin-bottom: 10px;"><strong>Message:</strong></p>
              <p style="font-size: 15px; color: #555; background: #f9fafb; padding: 15px; border-left: 4px solid #0d9488; border-radius: 4px;">
                ${message.replace(/\n/g, "<br/>")}
              </p>
            </div>
          </div>
          <div style="background-color: #f3f4f6; text-align: center; padding: 10px; font-size: 12px; color: #6b7280;">
            © ${new Date().getFullYear()} WATT Inc. All rights reserved.
          </div>
        </div>
      </div>
    `;

    // ✅ Fixed sendMail config
    await transporter.sendMail({
      from: `"${name}" <${email}>`, // Proper template string
      to: process.env.EMAIL_USER,
      subject: `New Message: ${subject}`, // Proper backticks
      html: htmlTemplate,
    });

    return NextResponse.json({ success: true, message: "Mail sent successfully!" });
  } catch (error) {
    console.error("Error sending mail:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send mail" },
      { status: 500 }
    );
  }
}
