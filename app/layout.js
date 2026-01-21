import './globals.css';

export const metadata = {
  title: 'MODSCOM BOT',
  description: 'Created by MODSCOM'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="p-5 bg-gray-800 shadow-xl flex justify-between">
          <h1 className="text-2xl font-bold text-blue-400">MODSCOM BOT</h1>
          <div className="flex gap-6">
            <a href="/">Home</a>
            <a href="/chat">Chat</a>
            <a href="/image-ai">Image AI</a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}