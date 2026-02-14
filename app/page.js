'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function LandingPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [daysToRamadan, setDaysToRamadan] = useState(7);

  useEffect(() => {
    const now = new Date();
    const ramadanStart = new Date(2026, 1, 18);
    const diff = Math.max(0, Math.ceil((ramadanStart - now) / (1000 * 60 * 60 * 24)));
    setDaysToRamadan(diff);
  }, []);

  const handleSubmit = () => {
    if (!email.trim() || !email.includes('@')) return;
    setSubmitted(true);
    // TODO: Connect to Mailchimp/ConvertKit
    console.log('Waitlist signup:', email);
  };

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Nav */}
      <nav style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '16px 24px', maxWidth: 1100, margin: '0 auto',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 28 }}>💧</span>
          <span style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 22, color: '#1B5E20', fontWeight: 700 }}>
            DeenDropz.AI
          </span>
        </div>
        <Link href="/chat" style={{
          fontFamily: "'Fredoka', sans-serif", fontSize: 15, padding: '10px 24px',
          borderRadius: 50, background: '#1B5E20', color: '#fff', border: 'none',
          textDecoration: 'none', fontWeight: 600,
        }}>
          Try AskDeen Free ✨
        </Link>
      </nav>

      {/* Hero */}
      <section style={{
        maxWidth: 1100, margin: '0 auto', padding: '40px 24px 60px',
        display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 40,
      }}>
        <div style={{ flex: '1 1 400px', minWidth: 300 }}>
          {/* Ramadan Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 16px',
            borderRadius: 50, background: 'linear-gradient(135deg, #F3E5F5, #FFF8E1)',
            marginBottom: 20, border: '1px solid #E1BEE7',
          }}>
            <span style={{ fontSize: 18 }}>🌙</span>
            <span style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 14, color: '#7B1FA2', fontWeight: 600 }}>
              {daysToRamadan > 0 ? `Ramadan starts in ${daysToRamadan} days!` : 'Ramadan Mubarak! 🎉'}
            </span>
          </div>

          <h1 style={{
            fontFamily: "'Fredoka', sans-serif", fontSize: 'clamp(32px, 5vw, 48px)',
            color: '#1B5E20', lineHeight: 1.2, margin: '0 0 16px', letterSpacing: -0.5,
          }}>
            Islam, one drop<br />at a time 💧
          </h1>
          <p style={{ fontSize: 18, color: '#6B7B6E', lineHeight: 1.6, maxWidth: 480, margin: '0 0 28px' }}>
            The AI-powered Islamic learning companion for kids aged 8–16.
            Ask any question about Islam and get scholar-sourced answers instantly.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 32 }}>
            <Link href="/chat" style={{
              fontFamily: "'Fredoka', sans-serif", fontSize: 17, padding: '14px 32px',
              borderRadius: 50, background: '#1B5E20', color: '#fff', border: 'none',
              textDecoration: 'none', fontWeight: 600, boxShadow: '0 4px 20px rgba(27,94,32,0.3)',
            }}>
              💬 Chat with AskDeen
            </Link>
            <button onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })} style={{
              fontFamily: "'Fredoka', sans-serif", fontSize: 17, padding: '14px 32px',
              borderRadius: 50, background: 'transparent', color: '#1B5E20',
              border: '2px solid #1B5E20', fontWeight: 600,
            }}>
              Join Waitlist
            </button>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ display: 'flex' }}>
              {['🧕', '👨', '👩', '🧑'].map((e, i) => (
                <div key={i} style={{
                  width: 32, height: 32, borderRadius: '50%', background: '#E8F5E9',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 16, marginLeft: i > 0 ? -8 : 0, border: '2px solid #fff',
                }}>{e}</div>
              ))}
            </div>
            <span style={{ fontSize: 13, color: '#6B7B6E' }}>
              Trusted by Muslim families across North America
            </span>
          </div>
        </div>

        {/* Phone Preview */}
        <div style={{
          flex: '1 1 320px', maxWidth: 360, margin: '0 auto',
          background: '#000', borderRadius: 36, padding: 7,
          boxShadow: '0 25px 60px rgba(0,0,0,0.2)',
        }}>
          <div style={{
            borderRadius: 30, overflow: 'hidden', background: '#FAFDF6',
            height: 520, display: 'flex', flexDirection: 'column',
          }}>
            <div style={{ padding: '32px 16px 10px', background: '#1B5E20', flexShrink: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 22 }}>🕌</span>
                <div>
                  <div style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 16, color: '#fff', fontWeight: 600 }}>AskDeen</div>
                  <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.6)' }}>AI Islamic Companion</div>
                </div>
              </div>
            </div>
            <div style={{ flex: 1, padding: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{
                padding: '10px 14px', borderRadius: '16px 16px 16px 4px', background: '#fff',
                fontSize: 13, lineHeight: 1.5, boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
              }}>
                Assalamu Alaikum! 👋 I'm AskDeen! Ask me anything about Islam.
              </div>
              <div style={{
                padding: '10px 14px', borderRadius: '16px 16px 4px 16px', background: '#1B5E20',
                fontSize: 13, color: '#fff', alignSelf: 'flex-end',
              }}>
                Why do we fast in Ramadan?
              </div>
              <div style={{
                padding: '10px 14px', borderRadius: '16px 16px 16px 4px', background: '#fff',
                fontSize: 12, lineHeight: 1.5, boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
              }}>
                Great question! 🌙 Muslims fast because Allah commanded it in the Quran:
                <br /><br />
                📖 <em>Surah Al-Baqarah (2:183)</em>
                <br /><br />
                Fasting helps us develop taqwa and empathy for those less fortunate.
                <br /><br />
                🤔 How do you think fasting changes your day?
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '40px 24px 60px' }}>
        <h2 style={{
          fontFamily: "'Fredoka', sans-serif", fontSize: 28, color: '#1B5E20',
          textAlign: 'center', margin: '0 0 8px',
        }}>
          How DeenDropz Works
        </h2>
        <p style={{ textAlign: 'center', color: '#6B7B6E', fontSize: 16, margin: '0 0 36px' }}>
          15 minutes a day to grow your Deen
        </p>
        <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', justifyContent: 'center' }}>
          {[
            { emoji: '💬', title: 'Ask AskDeen', desc: 'Got a question about Islam? Ask AskDeen anytime and get age-appropriate, Quran & Hadith-sourced answers.' },
            { emoji: '📖', title: 'Daily Lessons', desc: 'Bite-sized lessons on Surahs, Hadith, Duas, and Islamic history — designed for kids 8–16.' },
            { emoji: '🔥', title: 'Build Streaks', desc: '15 minutes a day builds a habit. Track your streak, earn Hasanat Points, and level up.' },
            { emoji: '🌙', title: 'Ramadan Ready', desc: 'Special Ramadan content, daily challenges, and a 30-day learning journey this Ramadan.' },
            { emoji: '🛡️', title: 'Safe for Kids', desc: 'AI guardrails, scholar-reviewed content, parental controls, and COPPA-compliant privacy.' },
            { emoji: '👨‍👩‍👧', title: 'Parent Dashboard', desc: 'Monitor progress, review AI chat history, and set time limits from your own account.' },
          ].map((f, i) => (
            <div key={i} style={{
              flex: '1 1 300px', maxWidth: 340, padding: 24, borderRadius: 20,
              background: '#fff', border: '1px solid #E0E8E1',
            }}>
              <div style={{ fontSize: 36, marginBottom: 12 }}>{f.emoji}</div>
              <h3 style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 18, color: '#1B5E20', margin: '0 0 8px' }}>
                {f.title}
              </h3>
              <p style={{ fontSize: 14, color: '#6B7B6E', lineHeight: 1.5, margin: 0 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" style={{ maxWidth: 600, margin: '0 auto', padding: '40px 24px 80px', textAlign: 'center' }}>
        <div style={{
          background: 'linear-gradient(135deg, #E8F5E9, #FFF8E1)', borderRadius: 24,
          padding: '40px 32px', border: '1px solid #E0E8E1',
        }}>
          <span style={{ fontSize: 40 }}>🚀</span>
          <h2 style={{
            fontFamily: "'Fredoka', sans-serif", fontSize: 26, color: '#1B5E20', margin: '12px 0 8px',
          }}>
            Get Early Access
          </h2>
          <p style={{ fontSize: 15, color: '#6B7B6E', margin: '0 0 24px', lineHeight: 1.5 }}>
            Be the first to get the full DeenDropz.AI mobile app.
            Early members get <strong>3 months of Premium free</strong>.
          </p>

          {submitted ? (
            <div style={{
              padding: '16px 24px', borderRadius: 14, background: '#E8F5E9',
              fontFamily: "'Fredoka', sans-serif", fontSize: 16, color: '#1B5E20',
            }}>
              ✅ Jazakallah Khair! You&apos;re on the list. We&apos;ll be in touch soon!
            </div>
          ) : (
            <div style={{ display: 'flex', gap: 10, maxWidth: 440, margin: '0 auto', flexWrap: 'wrap', justifyContent: 'center' }}>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSubmit()}
                placeholder="Enter your email"
                style={{
                  flex: '1 1 240px', padding: '14px 18px', borderRadius: 14,
                  border: '1px solid #E0E8E1', fontSize: 15,
                  fontFamily: "'Nunito', sans-serif", background: '#fff',
                }}
              />
              <button onClick={handleSubmit} style={{
                fontFamily: "'Fredoka', sans-serif", fontSize: 15, padding: '14px 28px',
                borderRadius: 14, background: '#1B5E20', color: '#fff',
                border: 'none', fontWeight: 600, whiteSpace: 'nowrap',
              }}>
                Join Waitlist
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '20px 24px 32px', borderTop: '1px solid #E0E8E1' }}>
        <p style={{ fontSize: 13, color: '#6B7B6E' }}>💧 DeenDropz.AI — Learn Islam, one drop at a time</p>
        <p style={{ fontSize: 11, color: '#aaa', marginTop: 4 }}>
          Scholar-reviewed content • COPPA compliant • Built with love for the Ummah
        </p>
      </footer>
    </div>
  );
}
