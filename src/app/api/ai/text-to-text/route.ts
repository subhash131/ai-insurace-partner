import { NextRequest, NextResponse } from "next/server";

type AiMessage = {
  role: string;
  message: string;
};

export async function POST(request: NextRequest) {
  const body = await request.json();
  console.log("Received body:", body);
  const { instructions, chat } = body;
  console.log("Received instructions:", instructions);
  console.log("Received chat:", chat);

  return NextResponse.json(await fetchGroqResponse({ instructions, chat }));
  // return NextResponse.json({ instructions, chat });
}

async function fetchGroqResponse({
  instructions,
  chat,
}: {
  instructions: AiMessage[];
  chat: AiMessage[];
}) {
  const apiKey = process.env.GROQ_API_KEY;
  const endpoint = process.env.GROQ_API_URL;

  if (!apiKey || !endpoint) {
    return { message: "API key or endpoint is not defined" };
  }

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${apiKey}`,
  };

  const body = {
    model: "llama-3.3-70b-versatile",
    messages: [
      {
        role: "system",
        content:
          "Your name is Ayushi and you are a health insurance expert. You help users with their queries in a friendly, humorous, and empathetic way. You are highly knowledgeable and explain complex topics simply. You always give clear, concise, and to-the-point answers. You use examples when helpful, avoid rambling, and focus on delivering practical advice, recommendations, or tips quickly and effectively. Always keep your answers short and respectful, people usually do not have time to read long paragraphs.",
      },
      ...instructions,
      ...chat,
    ],
  };

  try {
    // return body;
    const response = await fetch(endpoint, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      return {
        status: response.status,
        message: response.statusText,
        body: await response.text(),
        inputBody: body,
      };
    }
    const data = await response.json();
    console.log("Groq API response:", data.choices[0].message);
    return data.choices[0].message;
  } catch (error) {
    console.error("Failed to fetch from Groq API:", error);
    return error;
  }
}
