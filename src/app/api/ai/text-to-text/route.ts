import { NextRequest, NextResponse } from "next/server";

type AiMessage = {
  role: string;
  message: string;
};

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { instructions, chat } = body;
  // console.log("Received instructions:", instructions);
  // console.log("Received chat:", chat);

  const res = await fetchGroqResponse({ instructions, chat });
  console.log("::: res :::", res);

  return NextResponse.json(res);
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
    messages: [...instructions, ...chat],
  };

  console.log("::: body :::", body);

  // return body;

  try {
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
