import { NextResponse } from "next/server";
import zlib from "zlib";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ hash: string }> },
) {
  try {
    const { hash } = await params;

    const buffer = Buffer.from(hash, "base64url");

    const decompressed = zlib.inflateSync(buffer).toString();
    const data = JSON.parse(decompressed);

    return NextResponse.json(data);
  } catch (error) {
    console.error("Decoding error:", error);
    return NextResponse.json(
      { error: "Invalid or corrupted link" },
      { status: 400 },
    );
  }
}
