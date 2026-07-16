'use client';
import { useState } from 'react';

export default function RumaatunPromo() {
  const [activeVideoId, setActiveVideoId] = useState(null);

  // DATA COURSE YANG SUDAH DISESUAIKAN
  const courseDetail = {
    platform: "RUMATUN",
    judul: "Mastering TKA 2026 & UTBK 2027",
    tahun: "2026",
    jumlahVideo: "100+ Episode",
    resolusi: "Full HD",
    kategori: "Untuk anak usia 7 sampai 17 tahun",
    deskripsi: "Sebuah ekosistem belajar interaktif yang dirancang khusus untuk mendobrak batasan belajar matematika dan pemrograman. Melalui pendekatan visual yang ramah otak, Anda akan diajak memahami logika dasar matematika secara intuitif, lalu menerapkannya langsung ke dalam baris kode nyata tanpa rasa takut.",
    tutor: "Alif Rezky, M.Pd. (Kak Alif)",
    topik: "Materi Persiapan UTBK 2027, TKA 2026, Matematika Dasar",
    karakteristik: "Sistematis, Interaktif, Ramah Pemula"
  };

  const daftarEpisode = [
    { id: "-NABrFzoP2w", nomor: "01", judul: "Persiapan UTBK 2027: Fondasi Persamaan Lingkaran", durasi: "4 Menit" },
    { id: "-9JjnKEXp2Q", nomor: "02", judul: "Persiapan UTBK 2027: Kupas Tuntas Kuadran Trigonometri", durasi: "7 Menit" },
    { id: "y7RxTdiJ7Kg", nomor: "03", judul: "Persiapan UTBK 2027: Aturan Permutasi & Peluang Kejadian", durasi: "5 Menit" }
  ];

  return (
    <section className="bg-zinc-950 text-white py-16 px-4 flex justify-center items-center min-h-screen">
      <div className="w-full max-w-4xl bg-[#181818] rounded-2xl overflow-hidden shadow-2xl border border-zinc-800/80">
        
        <div className="relative h-[250px] sm:h-[380px] md:h-[480px] w-full bg-black">
          {activeVideoId ? (
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1&rel=0`}
              title="Rumatun Course Player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          ) : (
            <div className="absolute inset-0 bg-[#141414] flex flex-col items-center justify-center p-6 text-center">
              <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-black/50 z-0"></div>
              
              <div className="relative z-10 w-36 sm:w-48 md:w-56 mb-6 drop-shadow-[0_10px_20px_rgba(0,163,163,0.3)] bg-white/5 p-4 rounded-3xl border border-white/10 backdrop-blur-sm">
                <img src="/logo-snbt.png" alt="Logo SNBT" className="w-full h-auto object-contain" />
              </div>

              <div className="relative z-10 space-y-3 max-w-2xl">
                <span className="text-xs md:text-sm font-extrabold tracking-[0.2em] text-cyan-400">
                  {courseDetail.platform} ORIGINAL COURSE
                </span>
                <h2 className="text-xl md:text-3xl font-black text-white tracking-tight">
                  {courseDetail.judul}
                </h2>

                <div className="flex items-center justify-center gap-3 pt-3">
                  <button 
                    onClick={() => setActiveVideoId("-NABrFzoP2w")}
                    className="flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-xs sm:text-sm font-black text-black hover:bg-zinc-200 transition-all active:scale-95"
                  >
                    <span>▶</span> Putar Materi Episode 1
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeVideoId && (
            <button 
              onClick={() => setActiveVideoId(null)}
              className="absolute top-4 right-4 h-9 w-9 rounded-full bg-black/80 flex items-center justify-center border border-zinc-700 hover:bg-zinc-800 transition-colors z-20"
            >
              <span className="text-white text-sm font-bold">✕</span>
            </button>
          )}
        </div>

        <div className="p-6 md:p-10 space-y-8">
          <div className="grid md:grid-cols-12 gap-6 text-zinc-300 border-b border-zinc-800 pb-6">
            <div className="md:col-span-8 space-y-3">
              <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-semibold text-zinc-400">
                <span className="text-emerald-400">98% Match</span>
                <span>{courseDetail.tahun}</span>
                <span className="border border-zinc-600 px-1.5 py-0.5 text-[10px] rounded bg-zinc-800 text-zinc-300">{courseDetail.kategori}</span>
                <span>{courseDetail.jumlahVideo}</span>
              </div>
              <p className="text-sm leading-relaxed text-zinc-200">{courseDetail.deskripsi}</p>
            </div>
            <div className="md:col-span-4 text-xs md:text-sm md:border-l border-zinc-800 md:pl-6 space-y-2">
              <div><span className="text-zinc-500">Tutor:</span> <span className="text-zinc-200 font-medium">{courseDetail.tutor}</span></div>
              <div><span className="text-zinc-500">Topik:</span> <span className="text-zinc-200 font-medium">{courseDetail.topik}</span></div>
              <div><span className="text-zinc-500">Metode:</span> <span className="text-zinc-200 font-medium">{courseDetail.karakteristik}</span></div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
              📺 Silabus Materi Utama <span className="text-xs text-cyan-400 font-mono">(Klik untuk Putar Video)</span>
            </h3>
            
            <div className="grid gap-3">
              {daftarEpisode.map((ep) => (
                <div 
                  key={ep.id}
                  onClick={() => {
                    setActiveVideoId(ep.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${
                    activeVideoId === ep.id 
                      ? 'bg-cyan-500/10 border-cyan-500/60 shadow-md' 
                      : 'bg-zinc-900/40 border-zinc-800/80 hover:bg-zinc-800/60 hover:border-zinc-700'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-lg font-black text-zinc-500">{ep.nomor}</span>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
                        {ep.judul}
                        {activeVideoId === ep.id && <span className="text-[10px] bg-cyan-500 text-black px-1.5 py-0.2 rounded font-black animate-pulse">PLAYING</span>}
                      </h4>
                      <p className="text-[11px] text-zinc-400 mt-0.5">Durasi Pembahasan: {ep.durasi}</p>
                    </div>
                  </div>
                  <span className="text-zinc-400 text-sm">▶</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
