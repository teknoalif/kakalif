'use client';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-900 text-white">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo Gambar + Nama */}
        <a href="/" className="flex items-center gap-3 font-bold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-200">
          <img 
            src="/favicon.png" 
            alt="Logo Alif Rezky" 
            className="h-8 w-8 object-contain rounded-lg bg-white/10 p-0.5"
          />
          <span>Alif Rezky, M.Pd.</span>
        </a>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <a href="/" className="hover:text-white transition-colors">Beranda</a>
          <a href="/#produk" className="hover:text-white transition-colors">Produk</a>
          <a href="/tryout" className="text-amber-400 font-bold hover:text-amber-300 transition-colors animate-pulse">📝 TryOut TKA</a>
          <a href="/#portofolio" className="hover:text-white transition-colors">Portofolio</a>
          <a href="/#prestasi" className="hover:text-white transition-colors">Prestasi</a>
          <a href="https://wa.me/6285256162879" target="_blank" rel="noopener noreferrer" className="rounded-xl bg-sky-600 px-4 py-2 font-semibold text-white shadow-md shadow-sky-600/20 hover:bg-sky-500 transition-all duration-200">
            Konsultasi (WA)
          </a>
        </div>

        {/* Tombol Mobile Hamburger */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-slate-300 hover:text-white focus:outline-none"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-slate-950 border-b border-slate-900 px-6 py-4 space-y-3 text-sm font-medium text-slate-300">
          <a href="/" onClick={() => setIsOpen(false)} className="block hover:text-white transition-colors">Beranda</a>
          <a href="/#produk" onClick={() => setIsOpen(false)} className="block hover:text-white transition-colors">Produk</a>
          <a href="/tryout" onClick={() => setIsOpen(false)} className="block text-amber-400 font-bold hover:text-amber-300 transition-colors">📝 TryOut TKA</a>
          <a href="/#portofolio" onClick={() => setIsOpen(false)} className="block hover:text-white transition-colors">Portofolio</a>
          <a href="/#prestasi" onClick={() => setIsOpen(false)} className="block hover:text-white transition-colors">Prestasi</a>
          <a href="https://wa.me/6285256162879" target="_blank" rel="noopener noreferrer" className="block w-full text-center rounded-xl bg-sky-600 py-2.5 font-semibold text-white hover:bg-sky-500 transition-colors">
            Konsultasi (WA)
          </a>
        </div>
      )}
    </nav>
  );
}'use client';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-900 text-white">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo Gambar + Nama */}
        <a href="#" className="flex items-center gap-3 font-bold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-200">
          <img 
            src="/favicon.png" 
            alt="Logo Alif Rezky" 
            className="h-8 w-8 object-contain rounded-lg bg-white/10 p-0.5"
          />
          <span>Alif Rezky, M.Pd.</span>
        </a>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <a href="#" className="hover:text-white transition-colors">Beranda</a>
          <a href="#produk" className="hover:text-white transition-colors">Produk</a>
          <a href="#portofolio" className="hover:text-white transition-colors">Portofolio</a>
          <a href="#prestasi" className="hover:text-white transition-colors">Prestasi</a>
          <a href="#testimoni" className="hover:text-white transition-colors">Testimoni</a>
          <a href="https://wa.me/6285256162879" target="_blank" rel="noopener noreferrer" className="rounded-xl bg-sky-600 px-4 py-2 font-semibold text-white shadow-md shadow-sky-600/20 hover:bg-sky-500 transition-all duration-200">
            Konsultasi (WA)
          </a>
        </div>

        {/* Tombol Mobile Hamburger */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-slate-300 hover:text-white focus:outline-none"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-slate-950 border-b border-slate-900 px-6 py-4 space-y-3 text-sm font-medium text-slate-300">
          <a href="#" onClick={() => setIsOpen(false)} className="block hover:text-white transition-colors">Beranda</a>
          <a href="#produk" onClick={() => setIsOpen(false)} className="block hover:text-white transition-colors">Produk</a>
          <a href="#portofolio" onClick={() => setIsOpen(false)} className="block hover:text-white transition-colors">Portofolio</a>
          <a href="#prestasi" onClick={() => setIsOpen(false)} className="block hover:text-white transition-colors">Prestasi</a>
          <a href="#testimoni" onClick={() => setIsOpen(false)} className="block hover:text-white transition-colors">Testimoni</a>
          <a href="https://wa.me/6285256162879" target="_blank" rel="noopener noreferrer" className="block w-full text-center rounded-xl bg-sky-600 py-2.5 font-semibold text-white hover:bg-sky-500 transition-colors">
            Konsultasi (WA)
          </a>
        </div>
      )}
    </nav>
  );
}
