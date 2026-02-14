import './globals.css';

export const metadata = {
  title: 'DeenDropz.AI — Islamic Learning for Kids',
  description: 'AI-powered Islamic learning companion for kids aged 8-16. Ask questions about Islam and get Quran & Hadith-sourced answers.',
  openGraph: {
    title: 'DeenDropz.AI — Islamic Learning for Kids',
    description: 'AI-powered Islamic learning companion for kids aged 8-16.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito:wght@400;600;700;800&family=Amiri&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
