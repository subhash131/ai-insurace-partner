// app/api/hello/route.ts
import { NextResponse } from "next/server";
import { user } from "../constants/queries";

export async function GET() {
  return NextResponse.json(user);
}

export async function POST(req: Request) {
  const body = await req.json();
  return NextResponse.json({ received: body });
}
