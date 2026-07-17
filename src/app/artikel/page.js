'use client';
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function ArtikelPage() {
  // 1. STATE UNTUK FILTER KATEGORI
  const [kategoriTerpilih, setKategoriTerpilih] = useState('Semua');

  const daftarKategori = ['Semua', 'Lari', 'Matematika', 'Free Software', 'Mata Kuliah'];

  // 2. DATA DUMMY ARTIKEL (Bisa Anda ganti dengan tulisan asli Anda nanti)
  const dataArtikel = [
    {
      id: 1,
      judul: "Panduan Menginstal JASP untuk GNU/Linux, Windows, dan MacOS",
      ringkasan: "JASP merupakan software alternatif SPSS yang free. Ayo simak cara mudah memasangnya di Laptop kalian masing-masing.",
      kategori: "Free Software",
      tanggal: "17 Juli 2026",
      baca: "4 mnt baca",
      slug: "install-jasp"
    },
    {
      id: 2,
      judul: "Konsistensi Jarak Jauh: Membangun Ketahanan Fisik Bagi Pelari Pemula",
      ringkasan: "Berbagi tips manajemen waktu dan teknik pernapasan untuk mempertahankan rutinitas lari mingguan di tengah padatnya jadwal kerja.",
      kategori: "Lari",
      tanggal: "17 Juli 2026",
      baca: "5 mnt baca",
      slug: "tips-lari-konsisten-pemula"
    },
    {
      id: 3,
      judul: "Memahami Keindahan Rumus Vieta pada Persamaan Kuadrat",
      ringkasan: "Menggali lebih dalam bagaimana hubungan akar-akar persamaan kuadrat dapat mempermudah penyelesaian soal-soal Matematika.",
      kategori: "Matematika",
      tanggal: "17 Juli 2026",
      baca: "6 mnt baca",
      slug: "rumus-vieta-matematika"
    },
    {
      id: 4,
      judul: "Analisis Riil: Pembuktian Sifat Archimedes pada Sistem Bilangan Real",
      ringkasan: "Catatan kuliah dan penjabaran terstruktur mengenai konsep dasar aksioma kelengkapan dan implikasinya pada analisis matematika.",
      kategori: "Mata Kuliah",
      tanggal: "17 Juli 2026",
      baca: "8 mnt baca",
      slug: "analisis-riil-sifat-archimedes"
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
