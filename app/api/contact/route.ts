import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

// const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 587,
//   secure: false,
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASSWORD,
//   },
// });
const transporter = nodemailer.createTransport({
  service: "gmail", // Simplified configuration
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
  secure: true, // Force TLS
  tls: {
    // Required for Vercel's network
    rejectUnauthorized: false,
    minVersion: "TLSv1.2",
  },
  connectionTimeout: 10000, // 10s timeout
});
export async function POST(req: Request) {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      subject,
      department,
      reason,
      message,

      preferredContact,
      isEmergency,
    } = await req.json();

    // Validate essential fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Combine name
    const fullName = `${firstName} ${lastName}`;

    // Admin Email Content
    const adminHtmlContent = `
      <div style="font-family: Arial, sans-serif; padding: 20px;">
        <h2 style="background:#2563eb; color:white; padding:10px; border-radius:6px;">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Preferred Contact:</strong> ${preferredContact}</p>
        <p><strong>Department:</strong> ${department || "General"}</p>
        <p><strong>Reason:</strong> ${reason}</p>
      
        <p><strong>Emergency:</strong> ${isEmergency ? "Yes" : "No"}</p>
        <div style="margin-top:20px;">
          <strong>Message:</strong><br>
          <div style="background:#f8fafc; padding:15px; border-radius:6px; border:1px solid #ddd;">
            ${message.replace(/\n/g, "<br>")}
          </div>
        </div>
      </div>
    `;

    // User Confirmation Email
    const userConfirmationHtml = `
      <div style="font-family: Arial, sans-serif; padding: 20px;">
        <h2 style="background:#2563eb; color:white; padding:10px; border-radius:6px;">Appointment Request Received</h2>
        <p>Dear ${fullName},</p>
        <p>Thank you for contacting us. We have received your message and will respond as soon as possible.</p>
        <p><strong>Subject:</strong> ${
          subject || reason || "General Inquiry"
        }</p>
        <p><strong>Sent:</strong> ${new Date().toLocaleString()}</p>
        <hr>
        <p>If this is an emergency, please call us directly at <strong>+91 7554261002 </strong>.</p>
        <p>📧 infoatroshanhospital@gmail.com</p>
        <p style="margin-top:20px;">Best regards,<br>The Support Team</p>
      </div>
    `;

    // Send admin email
    const adminInfo = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER || "infoatroshanhospital@gmail.com",
      subject: `New Contact: ${subject || reason || "Contact Form"}`,
      html: adminHtmlContent,
      replyTo: email,
    });

    // Send user confirmation
    const userInfo = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "We've received your message",
      html: userConfirmationHtml,
    });

    return NextResponse.json(
      {
        message: "Message sent successfully",
        adminMessageId: adminInfo.messageId,
        userMessageId: userInfo.messageId,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Vercel Email Error:", {
      error: error instanceof Error ? error.message : error,
      env: {
        user: !!process.env.EMAIL_USER,
        pass: !!process.env.EMAIL_PASSWORD,
        receiver: !!process.env.EMAIL_RECEIVER,
      },
    });

    return NextResponse.json(
      { message: "Failed to send message" },
      { status: 500 }
    );
  }
}
