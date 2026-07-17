'use client';
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function ArtikelPage() {
  // 1. STATE UNTUK FILTER KATEGORI
  const [kategoriTerpilih, setKategoriTerpilih] = useState('Semua');

  const daftarKategori = ['Semua', 'Lari', 'Matematika', 'Free Software', 'Mata Kuliah'];

  // 2. DATA ARTIKEL YANG SUDAH DISESUAIKAN LINK-NYA
  const dataArtikel = [
    {
      id: 1,
      judul: "Panduan Praktis Analisis Data SEM Menggunakan JASP: Alternatif Bebas & Terbuka",
      ringkasan: "JASP merupakan software alternatif SPSS yang bebas dan kuat. Ayo simak cara memetakan model, menggunakan sintaks lavaan, dan membaca output fit model.",
      kategori: "Free Software",
      tanggal: "17 Juli 2026",
      baca: "6 mnt baca",
      slug: "analisis-data-sem-jasp" // Mengarah ke /artikel/analisis-data-sem-jasp
    },
    {
      id: 2,
      judul: "Menelusuri Asal-usul Rumus ABC: Pembuktian Aljabar Persamaan Kuadrat",
      ringkasan: "Banyak siswa menghafal rumus kuadratik tanpa tahu asalnya. Mari buktikan secara logis selangkah demi selangkah menggunakan metode melengkapkan kuadrat sempurna.",
      kategori: "Matematika",
      tanggal: "17 Juli 2026",
      baca: "5 mnt baca",
      slug: "pembuktian-rumus-abc-kuadrat" // Mengarah ke /artikel/pembuktian-rumus-abc-kuadrat
    },
    {
    id: 3,
    judul: "Dibalik Layar Buku \"Matematika itu Asyik\": Mendobrak Stigma Kaku Angka",
    ringkasan: "Catatan reflektif mengenai perancangan buku ini. Memadukan logika, konsep dasar, dan pendekatan dialogis santai untuk menyajikan matematika secara lebih manusiawi.",
    kategori: "Matematika",
    tanggal: "17 Juli 2026",
    baca: "4 mnt baca",
    slug: "matematika-itu-asyik" // Sesuai dengan nama rute folder baru
    },
    {
    id: 4,
    judul: "Koding itu Asyik: Menjelajahi JavaScript dan Arsitektur Next.js",
    ringkasan: "Menulis kode bukan sekadar memberikan instruksi ke komputer, melainkan seni menyusun logika. Mari bedah bagaimana ekosistem kakalif.my.id dibangun menggunakan Next.js.",
    kategori: "Free Software",
    tanggal: "17 Juli 2026",
    baca: "5 mnt baca",
    slug: "koding-itu-asyik" // Sesuai dengan nama rute folder baru
    }
  ];

  // 3. LOGIKA PENYARINGAN (FILTER)
  const artikelTersaring = kategoriTerpilih === 'Semua'
    ? dataArtikel
    : dataArtikel.filter(item => item.kategori === kategoriTerpilih);

  return (
    <div className="bg-zinc-950 text-white min-h-screen font-sans">
      <Navbar />

      <div className="container mx-auto px-6 max-w-5xl pt-28 pb-16 space-y-12">
        {/* HEADER */}
        <div className="border-b border-zinc-850 pb-6">
          <h1 className="text-3xl font-black text-white sm:text-4xl tracking-tight">Ruang Catatan &amp; Pemikiran</h1>
          <p className="text-sm text-zinc-400 mt-2">Kumpulan tulisan seputar matematika, edukasi inklusif, teknologi bebas, dan aktivitas harian.</p>
        </div>

        {/* TOMBOL FILTER KATEGORI */}
        <div className="flex flex-wrap gap-2 pb-2">
          {daftarKategori.map((kat) => (
            <button
              key={kat}
              onClick={() => setKategoriTerpilih(kat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all ${
                kategoriTerpilih === kat
                  ? 'bg-white text-zinc-950 border-white shadow-md scale-[1.02]'
                  : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-white'
              }`}
            >
              {kat}
            </button>
          ))}
        </div>

        {/* DAFTAR ARTIKEL GRID */}
        <div className="grid gap-6 md:grid-cols-2">
          {artikelTersaring.length > 0 ? (
            artikelTersaring.map((artikel) => (
              <div 
                key={artikel.id} 
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between shadow-xl hover:border-zinc-700 transition-all group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-black px-2 py-0.5 rounded tracking-wider bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                      {artikel.kategori}
                    </span>
                    <span className="text-[11px] text-zinc-500">{artikel.tanggal}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-zinc-100 group-hover:text-cyan-400 transition-colors leading-snug">
                    {artikel.judul}
                  </h3>
                  
                  <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3">
                    {artikel.ringkasan}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-zinc-850/60 mt-4">
                  <span className="text-[11px] text-zinc-500 font-medium">⏱️ {artikel.baca}</span>
                  <a 
                    href={`/artikel/${artikel.slug}`}
                    className="text-xs font-bold text-white group-hover:text-cyan-400 flex items-center gap-1 transition-colors"
                  >
                    Baca Selengkapnya &rarr;
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-2 text-center py-12 bg-zinc-900 rounded-2xl border border-zinc-800 text-zinc-500 text-sm">
              📭 Belum ada artikel di kategori ini.
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
