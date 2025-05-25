import { connectToDatabase } from "@/db/connection";
import Message from "@/models/Message";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params;

  await connectToDatabase();

  const res = await Message.find({ conversationId: id });

  return NextResponse.json({
    res,
  });
};
