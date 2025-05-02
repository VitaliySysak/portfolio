"use server";

import { Resend } from "resend";
import { TContactSchema } from "../components/shared/contact/schema";

const toEmail = process.env.EMAIL!;
const resend = new Resend(process.env.RESEND_API_KEY!);

export default async function sendEmail(data: TContactSchema) {
  const { fullName, email, message } = data;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: toEmail,
    subject: `Message from ${fullName}`,
    html: `<p>${email}<strong>${message}</strong>!</p>`,
  });
}
