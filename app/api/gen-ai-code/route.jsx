// app/api/gen-ai-code/route.jsx

import { GenAiCode } from "@/configs/AiModel";
import { NextResponse } from "next/server";

export const maxDuration = 60;  // Max duration within Vercel's limits

export async function POST(req) {
    const { prompt } = await req.json();
    try {
        const result = await GenAiCode.sendMessage(prompt);
        const resp = await result.response.text();
        return NextResponse.json(JSON.parse(resp));
    } catch (e) {
        return NextResponse.json({ error: e.message });
    }
}

