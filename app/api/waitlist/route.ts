import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, company } = await req.json();

  const url = process.env.APPS_SCRIPT_URL;
  if (!url) return NextResponse.json({ error: "URL tanımlı değil" }, { status: 500 });

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, company }),
  });

  if (!res.ok) return NextResponse.json({ error: "Sheets'e yazılamadı" }, { status: 502 });

  return NextResponse.json({ success: true });
}
