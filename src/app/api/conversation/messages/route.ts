import { connectToDatabase } from "@/db/connection";
import Message from "@/models/Message";
import { NextRequest, NextResponse } from "next/server";

// Define the shape of the params for the dynamic route
interface Params {
  id: string;
}

export async function GET(req: NextRequest): Promise<NextResponse> {
  try {
    const id = req.nextUrl.searchParams.get("id");
    await connectToDatabase();
    const messages = await Message.find({ conversationId: id });

    return NextResponse.json({ messages });
  } catch (error) {
    console.error("Error fetching messages:", error);
    return NextResponse.json(
      { error: "Failed to fetch messages" },
      { status: 500 }
    );
  }
}
