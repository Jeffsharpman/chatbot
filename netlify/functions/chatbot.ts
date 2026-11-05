import type { Config, Context } from "@netlify/functions";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI();

export default async (req: Request, context: Context) => {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method Not Allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const body = await req.json();
    const prompt = body?.prompt;

    if (!prompt) {
      return new Response(
        JSON.stringify({ error: "Missing prompt in request body" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    // Using gemini-3.5-flash-lite for stable, low-latency chatbot performance
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash-lite",
      contents: prompt,
    });

    return new Response(JSON.stringify({ text: response.text }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error("Function execution error:", error);

    // Provide a clean, human-readable error message string
    const isBusy = error?.status === 503 || error?.message?.includes("503");
    const errorMessage = isBusy
      ? "The AI model is temporarily busy. Please try again in a moment."
      : "Sorry, something went wrong on the server.";

    return new Response(JSON.stringify({ error: errorMessage }), {
      status: isBusy ? 503 : 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};

export const config: Config = {
  path: "/api/chatbot",
};
