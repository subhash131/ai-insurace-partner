import { connectToDatabase } from "@/db/connection";
import Conversation from "@/models/Conversation";
import { NextRequest, NextResponse } from "next/server";



export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const { userId, title } = body;
  if (!userId || !title) {
    return NextResponse.json(
      {
        message: "User ID and title are required.",
      },
      { status: 400 }
    );
  }
  await connectToDatabase();
  try {
    const conversation = await Conversation.create({
      title,
      userId,
    });
    return NextResponse.json(conversation);
  } catch (error) {
    return NextResponse.json({
      message: "An error occurred while processing your request.",
      error,
    });
  }
};
