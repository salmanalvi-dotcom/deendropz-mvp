'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export default function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const suggestions = [
    'Why do we fast in Ramadan?',
    'How do I make wudu?',
    'Who was Prophet Yusuf?',
    'What are the Five Pillars?',
    'What duas should I say before eating?',
    'Why is Laylatul Qadr special?',
  ];

  const sendMessage = async (text) => {
    const userMsg = text || input.trim();
    if (!userMsg || isTyping) return;
    setInput('');

    const newMessages = [...messages, { role: 'user', content: userMsg }];
    setMessages(newMessages);
    setIsTyping(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      });

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      setMessages(prev => [...prev, { role: 'assistant', content: data.response }]);
    } catch (err) {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "I'm having a little trouble right now. Please try asking again in a moment! 🤲",
      }]);
    }
    setIsTyping(false);
    inputRef.current?.focus();
  };

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FAFDF6',
    }}>
      {/* Header */}
      <div style={{
        padding: '14px 20px', background: '#1B5E20',
        display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0,
      }}>
        <Link href="/" style={{
          background: 'rgba(255,255,255,0.15)', border: 'none', borderRadius: 10,
          padding: '6px 10px', color: '#fff', fontSize: 16, textDecoration: 'none',
        }}>
          ←
        </Link>
        <span style={{ fontSize: 24 }}>🕌</span>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 18, color: '#fff', fontWeight: 600 }}>
            AskDeen
          </div>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)' }}>
            AI Islamic Learning Companion
          </div>
        </div>
        <div style={{
          background: 'rgba(255,255,255,0.15)', borderRadius: 12,
          padding: '5px 12px', fontSize: 11, color: '#FFD54F',
          fontFamily: "'Fredoka', sans-serif",
        }}>
          🌙 Ramadan Edition
        </div>
      </div>

      {/* Suggestions */}
      {messages.length === 0 && (
        <div style={{ padding: '20px 16px 0' }}>
          <div style={{ textAlign: 'center', padding: '20px 16px 24px' }}>
            <span style={{ fontSize: 48 }}>💧</span>
            <h2 style={{
              fontFamily: "'Fredoka', sans-serif", fontSize: 22, color: '#1B5E20', margin: '8px 0 4px',
            }}>
              Assalamu Alaikum!
            </h2>
            <p style={{ fontSize: 14, color: '#6B7B6E', maxWidth: 320, margin: '0 auto' }}>
              I&apos;m AskDeen — ask me anything about Islam and I&apos;ll share what I know with Quran and Hadith sources!
            </p>
          </div>
          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center',
            maxWidth: 500, margin: '0 auto',
          }}>
            {suggestions.map((q, i) => (
              <button key={i} onClick={() => sendMessage(q)} style={{
                padding: '10px 16px', borderRadius: 20, border: '1px solid #E0E8E1',
                background: '#fff', fontSize: 13, color: '#1B5E20',
                fontFamily: "'Nunito', sans-serif", fontWeight: 600,
                boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
              }}>
                {q}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Messages */}
      <div style={{
        flex: 1, overflow: 'auto', padding: 16, display: 'flex',
        flexDirection: 'column', gap: 12, maxWidth: 700, width: '100%', margin: '0 auto',
      }}>
        {messages.map((msg, i) => (
          <div key={i} style={{
            display: 'flex', justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
            animation: 'fadeIn 0.3s ease',
          }}>
            {msg.role === 'assistant' && (
              <div style={{
                width: 32, height: 32, borderRadius: 10, background: '#1B5E20',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 16, marginRight: 8, flexShrink: 0, marginTop: 4,
              }}>🕌</div>
            )}
            <div style={{
              maxWidth: '80%', padding: '14px 18px', borderRadius: 20,
              background: msg.role === 'user' ? '#1B5E20' : '#fff',
              color: msg.role === 'user' ? '#fff' : '#1A1A1A',
              fontSize: 15, lineHeight: 1.6, whiteSpace: 'pre-line',
              borderBottomRightRadius: msg.role === 'user' ? 4 : 20,
              borderBottomLeftRadius: msg.role === 'user' ? 20 : 4,
              boxShadow: msg.role === 'assistant' ? '0 1px 4px rgba(0,0,0,0.06)' : 'none',
            }}>
              {msg.content}
            </div>
          </div>
        ))}

        {isTyping && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{
              width: 32, height: 32, borderRadius: 10, background: '#1B5E20',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16,
            }}>🕌</div>
            <div style={{
              display: 'flex', gap: 6, padding: '14px 18px', background: '#fff',
              borderRadius: 20, borderBottomLeftRadius: 4, boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
            }}>
              {[0, 1, 2].map(i => (
                <div key={i} style={{
                  width: 8, height: 8, borderRadius: '50%', background: '#4CAF50',
                  animation: `pulse 1.4s ease-in-out ${i * 0.2}s infinite`,
                }} />
              ))}
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div style={{
        padding: '12px 16px 20px', borderTop: '1px solid #E0E8E1',
        background: '#fff', flexShrink: 0,
      }}>
        <div style={{
          display: 'flex', gap: 10, maxWidth: 700, margin: '0 auto', alignItems: 'center',
        }}>
          <div style={{
            flex: 1, display: 'flex', alignItems: 'center', background: '#FAFDF6',
            borderRadius: 24, padding: '12px 16px', border: '1px solid #E0E8E1',
          }}>
            <input
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && sendMessage()}
              placeholder="Ask me about Islam..."
              style={{
                flex: 1, border: 'none', background: 'none', outline: 'none',
                fontFamily: "'Nunito', sans-serif", fontSize: 15, color: '#1A1A1A',
              }}
            />
          </div>
          <button onClick={() => sendMessage()} disabled={!input.trim() || isTyping} style={{
            width: 48, height: 48, borderRadius: '50%', border: 'none',
            background: input.trim() && !isTyping ? '#1B5E20' : '#E0E8E1',
            color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 20, flexShrink: 0,
          }}>
            ➤
          </button>
        </div>
        <p style={{ textAlign: 'center', fontSize: 11, color: '#bbb', marginTop: 8 }}>
          AskDeen provides educational content reviewed by Islamic scholars. Always verify with your local imam.
        </p>
      </div>
    </div>
  );
}
