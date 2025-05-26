import { connectToDatabase } from "@/db/connection";
import Message from "@/models/Message";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const { message, history, instructions, userId, conversationId, userData } =
      await req.json();

    if (!message) {
      return NextResponse.json("Invalid messages format", { status: 400 });
    }

    if (!instructions || !Array.isArray(instructions)) {
      return NextResponse.json("Invalid instructions format", { status: 400 });
    }
    if (!userId) {
      return NextResponse.json("Invalid userId", { status: 400 });
    }

    const BASE_URL =
      process.env.BASE_URL || "https://ai-insurace-partner.vercel.app";

    console.log("BASE_URL ::", BASE_URL);
    if (!BASE_URL) {
      return NextResponse.json(
        "BASE_URL is not defined. Please set the BASE_URL environment variable.",
        { status: 500 }
      );
    }

    await connectToDatabase();

    await Message.create({
      conversationId,
      userId,
      sender: "user",
      message,
    });

    const response = await fetch(`${BASE_URL}/api/ai/text-to-text`, {
      body: JSON.stringify({
        instructions: [...instructions, ...userData],
        chat: [...history, { role: "user", content: message }],
      }),
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Error from AI service:", errorText);
      return NextResponse.json(errorText, { status: response.status });
    }

    const responseBody = await response.json();

    // return NextResponse.json({ responseBody });

    console.log("AI service response body:", responseBody);

    await Message.create({
      sender: "assistant",
      message: responseBody.content,
      conversationId,
      userId: null,
    });

    console.log("AI service response:", responseBody);

    return NextResponse.json(responseBody, {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.log("Error processing request:", error);
    return NextResponse.json("Internal Server Error", { status: 500 });
  }
};
