import sgMail from "@sendgrid/mail";
import { NextRequest, NextResponse } from "next/server";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const formData = await req.formData();

    // Extract fields from formData
    const teacher_first_name = formData.get("teacher_first_name")?.toString() || "";
    const teacher_last_name = formData.get("teacher_last_name")?.toString() || "";
    const father_first_name = formData.get("father_first_name")?.toString() || "";
    const father_last_name = formData.get("father_last_name")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const date_of_birth = formData.get("date_of_birth")?.toString() || "";
    const languages_known = formData.get("languages_known")?.toString() || "";
    const first_language = formData.get("first_language")?.toString() || "";
    const reading_proficiency = formData.get("reading_proficiency")?.toString() || "";
    const writing_proficiency = formData.get("writing_proficiency")?.toString() || "";
    const speaking_proficiency = formData.get("speaking_proficiency")?.toString() || "";
    const listening_proficiency = formData.get("listening_proficiency")?.toString() || "";
    const interests = formData.get("interests")?.toString() || "";

    // Extract education and experience as JSON strings
    let education: any[] = [];
    if (formData.has("education")) {
      const educationJson = formData.get("education")?.toString() || "[]";
      education = JSON.parse(educationJson);
    }

    let experience: any[] = [];
    if (formData.has("experience")) {
      const experienceJson = formData.get("experience")?.toString() || "[]";
      experience = JSON.parse(experienceJson);
    }

    // Extract resume file object
    const resumeFile: any = formData.get("resume");

    if (!resumeFile) {
      throw new Error("Resume file is required");
    }

    const resumeData = await resumeFile.arrayBuffer();
    const resumeBase64 = Buffer.from(resumeData).toString('base64');
    const resumeFileName = resumeFile.name;

    // Construct email message
    const msg = {
      to: process.env.MAIL_TO!,
      from: process.env.MAIL_FROM!,
      subject: "New Teacher Registration Form Submission",
      html: `
        <p><strong>Teacher's Name:</strong> ${teacher_first_name} ${teacher_last_name}</p>
        <p><strong>Father's Name:</strong> ${father_first_name} ${father_last_name}</p>
        <p><strong>Teacher's Email:</strong> ${email}</p>
        <p><strong>Date of Birth:</strong> ${date_of_birth}</p>
        <p><strong>Languages Known:</strong> ${languages_known}</p>
        <p><strong>First Language:</strong> ${first_language}</p>
        <p><strong>English Proficiency:</strong></p>
        <ul>
          <li>Reading: ${reading_proficiency}</li>
          <li>Writing: ${writing_proficiency}</li>
          <li>Speaking: ${speaking_proficiency}</li>
          <li>Listening: ${listening_proficiency}</li>
        </ul>
        <p><strong>Interests/Talents:</strong> ${interests}</p>
        <p><strong>Education Details:</strong></p>
        <ul>
          ${education.map((edu) => `
            <li>
              <strong>Qualification:</strong> ${edu.qualification}<br/>
              <strong>Institute:</strong> ${edu.institute}<br/>
              <strong>Board:</strong> ${edu.board}<br/>
              <strong>Marks:</strong> ${edu.marks}
            </li>`).join("")}
        </ul>
        <p><strong>Experience Details:</strong></p>
        <ul>
          ${experience.map((exp) => `
            <li>
              <strong>Organization:</strong> ${exp.organization}<br/>
              <strong>Position:</strong> ${exp.position}<br/>
              <strong>Tenure:</strong> ${exp.tenure}
            </li>`).join("")}
        </ul>
      `,
      attachments: [
        {
          content: resumeBase64,
          filename: resumeFileName,
          type: "application/pdf",
          disposition: "attachment"
        }
      ]
    };

    // Send email using SendGrid
    await sgMail.send(msg);

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: "Failed to send email" });
  }
}
