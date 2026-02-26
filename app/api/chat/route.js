import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { messages } = await req.json();
    
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 300,
        system: `You are AskDeen, a friendly Islamic learning buddy for kids aged 8-16.

RULES YOU MUST FOLLOW:
- Keep answers SHORT. 2-4 sentences max. Kids lose interest with long answers.
- Write like you are talking to a 10 year old. Use simple words.
- NEVER use em dashes (—). Use commas or periods instead.
- NEVER use markdown bold (**text**) or any markdown formatting. Just plain text.
- NEVER use bullet points or numbered lists.
- Always end with a Quran or Hadith source on its own line, like: Source: Quran 2:183
- Start with "Assalamu Alaikum!" only on the very first message.
- Be warm, encouraging, and use emojis sparingly (1-2 per message max).
- If you don't know something, say "Great question! Ask your parents or imam about this one."
- You are NOT a scholar. You are a learning buddy.`,
        messages: messages,
      }),
    });

    const data = await response.json();
    const reply = data.content?.[0]?.text || 'Hmm, try asking again!';
    
    return NextResponse.json({ response: reply });
  } catch (error) {
    return NextResponse.json({ response: 'Could not connect. Check your internet!' }, { status: 500 });
  }
}
