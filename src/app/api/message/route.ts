import { connectToDatabase } from "@/db/connection";
import Message from "@/models/Message";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectToDatabase();

    const messages = await Message.find().sort({ timestamp: 1 });

    return NextResponse.json(messages, { status: 200 });
  } catch (error: any) {
    console.error("Error fetching messages:", error);

    return NextResponse.json(
      { error: "Internal Server Error", details: error.message || error },
      { status: 500 }
    );
  }
};
