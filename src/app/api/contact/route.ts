import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    
    const companyName = formData.get("companyName") as string;
    const companyNumber = formData.get("companyNumber") as string;
    const companyAddress = formData.get("companyAddress") as string;
    const personInCharge = formData.get("personInCharge") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const file = formData.get("file") as File;

    if (!companyName || !email || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Configure transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    let attachments = [];
    if (file) {
      const buffer = Buffer.from(await file.arrayBuffer());
      attachments.push({
        filename: file.name,
        content: buffer,
      });
    }

    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: "admin@monitormanage.com.my",
      subject: `New Demo Request from ${companyName}`,
      text: `
You have received a new demo request:

Company Name: ${companyName}
Company Registration Number: ${companyNumber}
Company Address: ${companyAddress}
Person In Charge: ${personInCharge}
Email Address: ${email}
Phone Number: ${phone}

The logo/profile file is attached to this email.
      `,
      html: `
<h3>New Demo Request</h3>
<p>You have received a new demo request:</p>
<ul>
  <li><strong>Company Name:</strong> ${companyName}</li>
  <li><strong>Company Registration Number:</strong> ${companyNumber}</li>
  <li><strong>Company Address:</strong> ${companyAddress}</li>
  <li><strong>Person In Charge:</strong> ${personInCharge}</li>
  <li><strong>Email Address:</strong> ${email}</li>
  <li><strong>Phone Number:</strong> ${phone}</li>
</ul>
<p>The logo/profile file is attached to this email.</p>
      `,
      attachments,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: error.message || "Failed to send email" }, { status: 500 });
  }
}
