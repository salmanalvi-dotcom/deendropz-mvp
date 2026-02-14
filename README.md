# 💧 DeenDropz.AI

**AI-powered Islamic learning companion for kids aged 8–16**

A gamified Islamic education app featuring AskDeen — an AI chat companion that answers children's questions about Islam with Quran and Hadith sources.

## 🌙 Ramadan MVP

This web app includes:
- **Landing page** with Ramadan branding and email waitlist
- **AskDeen AI Chat** powered by Anthropic's Claude API
- Scholar-sourced responses with Quran ayah and Hadith citations
- Age-appropriate content guardrails for child safety

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Set up environment variables
```bash
cp .env.example .env.local
```
Edit `.env.local` and add your Anthropic API key.

### 3. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 🔐 Environment Variables

| Variable | Description |
|----------|-------------|
| `ANTHROPIC_API_KEY` | Your Anthropic API key from console.anthropic.com |

## 📦 Deploy to Vercel

1. Push this repo to GitHub
2. Import it on [vercel.com](https://vercel.com)
3. Add `ANTHROPIC_API_KEY` as an environment variable
4. Deploy!

## Built with ❤️ for the Ummah
