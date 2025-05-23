// app/api/hello/route.ts
import { NextResponse } from "next/server";
import { insurance } from "../constants/temp";

export async function GET() {
  return NextResponse.json(insurance);
}

export async function POST(req: Request) {
  const body = await req.json();
  return NextResponse.json({ received: body });
}
