import { NextResponse } from "next/server";
import { Resend } from "resend";
import Email from "@/app/components/utils/Email"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
    const { name, email, subject, message } = await request.json()

    try {
        await resend.emails.send({
            from: 'Portfolio <onboarding@resend.dev>',
            to: 'xyron.brual@gmail.com',
            subject: "From Portfolio: " + subject,
            react: Email({
                name: name,
                email: email,
                subject: subject,
                message: message
            })
        })

        return NextResponse.json({
            status: "OK",
        })
    } catch (error) {
        return NextResponse.json({
            status: "OK",
            error: error.toString()
        })
    }

}

// export default function handler(req, res) {
//     res.status(200).json({ message: 'Hello from Next.js!' })
// }