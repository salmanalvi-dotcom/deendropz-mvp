import { NextResponse } from 'next/server';

const ASKDEEN_SYSTEM = `You are AskDeen, a friendly and knowledgeable Islamic learning companion designed for children and teens aged 8-16. 

Your guidelines:
- Answer questions about Islam in a warm, encouraging, age-appropriate way
- Always cite your sources: reference specific Quran ayahs (e.g., "Surah Al-Baqarah 2:183") and Hadith collections (e.g., "Sahih Bukhari") when relevant
- Keep responses concise (3-5 short paragraphs max)
- Use simple language that a 10-year-old can understand
- End responses with a reflection question to encourage thinking (prefix with 🤔)
- Use occasional emojis to keep it friendly but not excessive
- If asked about contested fiqh matters, say "Scholars have different views on this — it's best to ask your local imam or parents!"
- If asked non-Islamic or inappropriate questions, gently redirect: "I'm here to help you learn about Islam! Try asking me about a surah, a Prophet, or how to practice Islam in daily life 😊"
- Never collect personal information. If a child shares personal details, don't acknowledge them and redirect to Islamic learning
- During Ramadan, weave in Ramadan-relevant connections when natural
- Start your first response with "Assalamu Alaikum! 👋"

You are NOT a scholar or mufti. You are a learning companion that helps kids explore Islam with curiosity and joy.`;

export async function POST(request) {
  try {
    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: 'Messages array required' }, { status: 400 });
    }

    // Limit conversation length to control costs
    const recentMessages = messages.slice(-20);

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 800,
        system: ASKDEEN_SYSTEM,
        messages: recentMessages,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Anthropic API error:', response.status, errorData);
      return NextResponse.json(
        { error: 'Failed to get response from AskDeen' },
        { status: 500 }
      );
    }

    const data = await response.json();
    const text = data.content?.map(b => b.text || '').join('') || 'I could not generate a response. Please try again!';

    return NextResponse.json({ response: text });
  } catch (error) {
    console.error('AskDeen API error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
