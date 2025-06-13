import { createClient } from '@supabase/supabase-js'
import { Resend } from "resend"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("Received body:", body);

    const {
      name,
      email,
      phone,
      address,
      preferred_date,
      preferred_time,
      message,
    } = body;

    const { error } = await supabase.from("estimate_requests").insert([
      {
        name,
        email,
        phone,
        address,
        preferred_date,
        preferred_time,
        message,
      },
    ]);
    

    if (error) {
      console.error("Supabase error:", error.message);
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }

    const emailRes = await resend.emails.send({
      from:"onboarding@resend.dev",
      to: process.env.EMAIL_TO!,
      subject: "New Estimate Request",
     html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
        <h2 style="color: #0a66c2;">New Estimate Request</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
          <tr>
            <td style="padding: 8px; font-weight: bold; width: 150px;">Name:</td>
            <td style="padding: 8px;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold;">Email:</td>
            <td style="padding: 8px;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold;">Phone:</td>
            <td style="padding: 8px;">${phone || "Not provided"}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold;">Address:</td>
            <td style="padding: 8px;">${address}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold;">Preferred Date:</td>
            <td style="padding: 8px;">${preferred_date}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold;">Preferred Time:</td>
            <td style="padding: 8px;">${preferred_time}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold;">Message:</td>
            <td style="padding: 8px;">${message || "No message provided."}</td>
          </tr>
        </table>
      </div>
`,

    });

    console.log("Email sent:", emailRes);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("Unhandled server error:", err);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
}
