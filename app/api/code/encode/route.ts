import { NextResponse } from "next/server";
import zlib from "zlib";

export async function POST(request: Request) {
  try {
    const body = await request.json(); // This is now { code, language, theme, fileName }

    if (!body.code) {
      return NextResponse.json({ error: "No code provided" }, { status: 400 });
    }

    const jsonString = JSON.stringify(body);
    const buffer = zlib.deflateSync(jsonString);
    const hash = buffer.toString("base64url");

    return NextResponse.json({ hash });
  } catch (error) {
    return NextResponse.json({ error: "Failed to encode" }, { status: 500 });
  }
}
