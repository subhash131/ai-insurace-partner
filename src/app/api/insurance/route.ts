import { connectToDatabase } from "@/db/connection";
import Insurance from "@/models/Insurance";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  return NextResponse.json({ received: body });
}

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");
  if (!id) {
    return NextResponse.json(
      { error: "ID parameter is required" },
      { status: 400 }
    );
  }
  await connectToDatabase();
  const res = await Insurance.findById(id);
  if (!res) {
    return NextResponse.json({ error: "Insurance not found" }, { status: 404 });
  }
  return NextResponse.json(res);
}
