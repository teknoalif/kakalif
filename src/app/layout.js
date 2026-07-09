import './globals.css';

export const metadata = {
  title: 'Kak Alif Rezky, M.Pd. | Media Pembelajaran & Kursus Matematika',
  description: 'Tempat belajar matematika interaktif bersama Alif Rezky, M.Pd. Temukan Video Course Rumatun, Buku Matematika itu Asyik, dan Alalify Academy.',
  metadataBase: new URL('https://kakalif.my.id'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="bg-slate-50 text-slate-800 antialiased selection:bg-indigo-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
