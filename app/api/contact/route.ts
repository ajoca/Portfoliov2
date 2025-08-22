
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: Request) {
  const body = await req.json().catch(() => null) as { name?: string, email?: string, message?: string }
  if (!body || !body.name || !body.email || !body.message) {
    return NextResponse.json({ ok:false, error:'Datos incompletos' }, { status: 400 })
  }
  const RESEND_API_KEY = process.env.RESEND_API_KEY
  const TO = process.env.CONTACT_TO_EMAIL || process.env.TO_EMAIL
  const FROM = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev'
  if (!RESEND_API_KEY || !TO) {
    return NextResponse.json({ ok:false, error:'Resend no configurado. Configurá RESEND_API_KEY y CONTACT_TO_EMAIL o usa Formspree.' }, { status: 500 })
  }
  try {
    const resend = new Resend(RESEND_API_KEY)
    await resend.emails.send({ from: FROM, to: TO, subject: `Nuevo mensaje de ${body.name}`, reply_to: body.email, text: body.message })
    return NextResponse.json({ ok: true })
  } catch (e:any) {
    return NextResponse.json({ ok:false, error: e?.message || 'Error enviando' }, { status: 500 })
  }
}
