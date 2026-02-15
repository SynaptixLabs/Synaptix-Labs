import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { rateLimit } from "@/lib/rateLimit";

const limiter = rateLimit({ interval: 15 * 60 * 1000, maxRequests: 20 });

const SYSTEM_PROMPT = `You are the SynaptixLabs AI assistant on the company website. Be helpful, concise, and professional. Keep answers under 150 words unless the user asks for detail.

About SynaptixLabs:
- AI-native products and transformation advisory company, founded in 2025 by Avidor Rabinovich
- We create products that think & evolve — intelligence that lives, learns, and creates
- Website: synaptixlabs.ai

Our Product — Papyrus:
- Agentic AI content platform at papyrus.synaptixlabs.ai
- Researches, writes, and refines content autonomously
- Features: autonomous research agents, multi-source synthesis, AI-powered editing, dynamic article generation
- Currently live and available to use

Advisory Services:
1. AI Readiness Assessment — evaluate your org's AI maturity and roadmap
2. Architecture & Strategy — design agentic AI systems and integration plans
3. Hands-on Workshops — upskill your team on building with AI
4. Fractional AI Leadership — embedded AI expertise for your team

Our Philosophy:
- We Build: creating AI-native products from the ground up
- We Advise: helping organizations integrate intelligence into their core
- We Open Source: sharing research and tools with the community

Contact:
- Email: hello@synaptixlabs.ai
- Use the "Get in Touch" form on the website
- Book a call through our booking page

If someone asks about pricing, tell them to get in touch for a custom conversation.
If someone asks about topics unrelated to SynaptixLabs, politely redirect them to our services and products.`;

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export async function POST(request: NextRequest) {
  try {
    // Rate limit
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";
    const { success } = limiter.check(ip);
    if (!success) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const apiKey = process.env.GOOGLE_GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "AI service not configured." },
        { status: 500 }
      );
    }

    const { messages }: { messages: ChatMessage[] } = await request.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Messages are required." },
        { status: 400 }
      );
    }

    // Limit conversation length
    if (messages.length > 20) {
      return NextResponse.json(
        { error: "Conversation too long." },
        { status: 400 }
      );
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
      systemInstruction: SYSTEM_PROMPT,
    });

    // Build chat history (all messages except the last one, which is the new user message)
    const history = messages.slice(0, -1).map((m) => ({
      role: m.role === "assistant" ? ("model" as const) : ("user" as const),
      parts: [{ text: m.content }],
    }));

    const chat = model.startChat({
      history,
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 500,
      },
    });

    const lastMessage = messages[messages.length - 1];
    const result = await chat.sendMessage(lastMessage.content);
    const text = result.response.text();

    return NextResponse.json({ message: text });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Failed to generate response." },
      { status: 500 }
    );
  }
}
