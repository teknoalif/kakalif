export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h3 className="text-white font-bold text-lg">Alif Rezky, M.Pd.</h3>
          <p className="text-sm mt-1">Edukasi Matematika Berkualitas & Inovatif</p>
        </div>
        <div className="flex gap-6 text-sm">
          <a href="https://instagram.com/aalifrezky" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
          <a href="https://youtube.com/kakalifgurumatematika" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">YouTube</a>
          <a href="https://wa.me/6285256162879" className="hover:text-white transition-colors">Hubungi WA</a>
        </div>
        <div className="text-xs text-slate-500">
          &copy; {new Date().getFullYear()} kakalif.my.id. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
