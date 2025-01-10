import sgMail from "@sendgrid/mail";
import { NextRequest, NextResponse } from "next/server";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const requestData = await req.json();

    console.log("requestData====", requestData);

    const {
      child_name,
      class_admission,
      date_of_birth,
      gender,
      age,
      father_name,
      father_contact,
      father_email,
      mother_name,
      mother_contact,
      mother_email,
      previous_school,
      sibling,
      know_about,
    } = requestData;

    const msg = {
      to: process.env.MAIL_TO!,
      from: process.env.MAIL_FROM!,
      subject: "New Admission Form Submission",
      html: `
        <p><strong>Child's Name:</strong> ${child_name}</p>
        <p><strong>Class for Admission:</strong> ${class_admission}</p>
        <p><strong>Date of Birth:</strong> ${date_of_birth}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Father's Name:</strong> ${father_name}</p>
        <p><strong>Father's Contact:</strong> ${father_contact}</p>
        <p><strong>Father's Email:</strong> ${father_email}</p>
        <p><strong>Mother's Name:</strong> ${mother_name}</p>
        <p><strong>Mother's Contact:</strong> ${mother_contact}</p>
        <p><strong>Mother's Email:</strong> ${mother_email}</p>
        <p><strong>Previous School:</strong> ${previous_school}</p>
        <p><strong>How did you know about us:</strong> ${know_about}</p>
        <p><strong>Sibling Details:</strong></p>
        <ul>
          ${sibling.map((sib: any) => `
            <li>
              <strong>Name:</strong> ${sib.name}<br/>
              <strong>Age:</strong> ${sib.age}<br/>
              <strong>Date of Birth:</strong> ${sib.date_of_birth}
            </li>`).join("")}
        </ul>
      `
    };

    await sgMail.send(msg);

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error: any) {
    console.error("Error sending email:", error.response.body);
    return NextResponse.json({ message: "Failed to send email" });
  }
}
