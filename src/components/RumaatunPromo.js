'use client';
import { useState } from 'react';

export default function RumaatunPromo() {
  const [showVideo, setShowVideo] = useState(false);

  // Data Course ala Netflix Metadata
  const courseDetail = {
    platform: "RUMAATUN",
    judul: "Mastering UTBK SNBT & Logika Matematika dari Nol",
    tahun: "2026",
    jumlahVideo: "42 Episode",
    resolusi: "Full HD",
    kategori: "Semua Umur",
    deskripsi: "Sebuah ekosistem belajar interaktif yang dirancang khusus untuk mendobrak batasan belajar matematika dan pemrograman. Melalui pendekatan visual yang ramah otak, Anda akan diajak memahami logika dasar matematika secara intuitif, lalu menerapkannya langsung ke dalam baris kode nyata tanpa rasa takut.",
    tutor: "Alif Rezky, M.Pd. (Kak Alif)",
    topik: "Materi Persiapan UTBK SNBT 2027, Persamaan Lingkaran, Logika Matematika",
    karakteristik: "Sistematis, Interaktif, Ramah Pemula"
  };

  return (
    <section className="bg-zinc-950 text-white py-16 px-4 flex justify-center items-center min-h-screen">
      {/* Container Utama Modal ala Netflix Preview */}
      <div className="w-full max-w-4xl bg-[#181818] rounded-2xl overflow-hidden shadow-2xl border border-zinc-800/80">
        
        {/* 1. Header Area: Sampul Logo / Video Embed Player */}
        <div className="relative h-[250px] sm:h-[380px] md:h-[480px] w-full bg-black">
          
          {showVideo ? (
            /* Embed YouTube Player Interaktif */
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/-NABrFzoP2w?autoplay=1&rel=0"
              title="Pembahasan Soal SNBT"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          ) : (
            /* Sampul Menggunakan logo-snbt.png dengan Flexbox Center Layout */
            <div className="absolute inset-0 bg-[#141414] flex flex-col items-center justify-center p-6 text-center">
              {/* Efek Gradasi Latar Belakang ala Netflix */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-black/50 z-0"></div>
              
              {/* Logo SNBT Menengah Ke Atas */}
              <div className="relative z-10 w-36 sm:w-48 md:w-56 mb-6 drop-shadow-[0_10px_20px_rgba(0,163,163,0.3)] bg-white/5 p-4 rounded-3xl border border-white/10 backdrop-blur-sm">
                <img 
                  src="/logo-snbt.png" 
                  alt="Seleksi Nasional Berdasarkan Tes" 
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Konten Teks Promosi */}
              <div className="relative z-10 space-y-3 max-w-2xl">
                <span className="text-xs md:text-sm font-extrabold tracking-[0.2em] text-cyan-400 drop-shadow">
                  {courseDetail.platform} ORIGINAL
                </span>
                <h2 className="text-xl md:text-3xl font-black text-white tracking-tight drop-shadow-md">
                  {courseDetail.judul}
                </h2>

                {/* Tombol Action Utama */}
                <div className="flex items-center justify-center gap-3 pt-3">
                  <button 
                    onClick={() => setShowVideo(true)}
                    className="flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-xs sm:text-sm font-black text-black hover:bg-zinc-200 transition-all active:scale-95 shadow-lg"
                  >
                    <span>▶</span> Putar Contoh Video Course
                  </button>
                  
                  {/* Tombol Tambah ke Daftar Belajar (+) */}
                  <button className="h-10 w-10 rounded-full border-2 border-zinc-500/80 bg-zinc-900/60 flex items-center justify-center text-white hover:border-white hover:bg-zinc-800 transition-all">
                    <span className="text-xl leading-none">+</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Tombol Tutup Video di Pojok Kanan Atas */}
          {showVideo && (
            <button 
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 h-9 w-9 rounded-full bg-black/80 flex items-center justify-center border border-zinc-700 hover:bg-zinc-800 transition-colors z-20"
              title="Tutup Video"
            >
              <span className="text-white text-sm font-bold">✕</span>
            </button>
          )}
        </div>

        {/* 2. Detail & Metadata Area */}
        <div className="p-6 md:p-12 grid md:grid-cols-12 gap-8 text-zinc-300">
          
          {/* Kolom Kiri */}
          <div className="md:col-span-8 space-y-5">
            <div className="flex flex-wrap items-center gap-3 text-sm font-semibold">
              <span className="text-emerald-400 font-bold">98% Cocok</span>
              <span>{courseDetail.tahun}</span>
              <span className="border border-zinc-600 px-1.5 py-0.5 rounded text-[10px] tracking-wide text-zinc-400">
                {courseDetail.kategori}
              </span>
              <span>{courseDetail.jumlahVideo}</span>
              <span className="border border-zinc-600 px-1 rounded text-[9px] font-bold text-zinc-400">
                {courseDetail.resolusi}
              </span>
            </div>

            <p className="text-sm md:text-base leading-relaxed text-zinc-200">
              {courseDetail.deskripsi}
            </p>

            <div className="pt-4">
              <a 
                href="https://wa.me/6285256162879?text=Assalamualaikum%20Kak%20Alif,%20saya%20tertarik%20bergabung%20dengan%20Video%20Course%20Rumaatun." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 hover:bg-cyan-600 px-6 py-3.5 text-sm font-extrabold text-black transition-colors shadow-md"
              >
                📱 Daftar Kelas via WhatsApp (Konsultasi Langsung)
              </a>
            </div>
          </div>

          {/* Kolom Kanan */}
          <div className="md:col-span-4 space-y-4 text-xs md:text-sm border-t md:border-t-0 md:border-l border-zinc-800/80 pt-6 md:pt-0 md:pl-6">
            <div>
              <span className="text-zinc-500">Tutor:</span>{" "}
              <span className="text-zinc-200 hover:underline cursor-pointer font-medium">{courseDetail.tutor}</span>
            </div>
            <div>
              <span className="text-zinc-500">Topik Materi:</span>{" "}
              <span className="text-zinc-200 hover:underline cursor-pointer font-medium">{courseDetail.topik}</span>
            </div>
            <div>
              <span className="text-zinc-500">Karakteristik Course:</span>{" "}
              <span className="text-zinc-200 hover:underline cursor-pointer font-medium">{courseDetail.karakteristik}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}'use client';
import { useState } from 'react';

export default function RumaatunPromo() {
  const [showVideo, setShowVideo] = useState(false);

  // Data Course ala Netflix Metadata
  const courseDetail = {
    platform: "RUMAATUN",
    judul: "Mastering UTBK SNBT & Logika Matematika dari Nol",
    tahun: "2026",
    jumlahVideo: "42 Episode",
    resolusi: "Full HD",
    kategori: "Semua Umur",
    deskripsi: "Sebuah ekosistem belajar interaktif yang dirancang khusus untuk mendobrak batasan belajar matematika dan pemrograman. Melalui pendekatan visual yang ramah otak, Anda akan diajak memahami logika dasar matematika secara intuitif, lalu menerapkannya langsung ke dalam baris kode nyata tanpa rasa takut.",
    tutor: "Alif Rezky, M.Pd. (Kak Alif)",
    topik: "Materi Persiapan UTBK SNBT 2027, Persamaan Lingkaran, Logika Matematika",
    karakteristik: "Sistematis, Interaktif, Ramah Pemula"
  };

  return (
    <section className="bg-zinc-950 text-white py-16 px-4 flex justify-center items-center min-h-screen">
      {/* Container Utama Modal ala Netflix Preview */}
      <div className="w-full max-w-4xl bg-[#181818] rounded-2xl overflow-hidden shadow-2xl border border-zinc-800/80">
        
        {/* 1. Header Area: Gambar Banner / Video Embed Player */}
        <div className="relative h-[250px] sm:h-[380px] md:h-[480px] w-full bg-black">
          
          {showVideo ? (
            /* Embed YouTube Player Interaktif */
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/-NABrFzoP2w?autoplay=1&rel=0"
              title="Pembahasan Soal SNBT"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          ) : (
            /* Sampul Awal Sebelum Di-play */
            <div 
              className="absolute inset-0 bg-cover bg-center flex items-end"
              style={{ backgroundImage: "url('/buku-0.png')" }}
            >
              {/* Dark Overlay Gradasi ala Netflix */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-black/40 to-black/30"></div>

              {/* Konten Utama di Atas Sampul */}
              <div className="absolute bottom-6 left-6 md:left-12 right-6 space-y-4 z-10">
                <span className="text-xs md:text-sm font-extrabold tracking-[0.2em] text-cyan-400 drop-shadow">
                  {courseDetail.platform} ORIGINAL
                </span>
                <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight drop-shadow-md max-w-2xl">
                  {courseDetail.judul}
                </h2>

                {/* Tombol Action Utama */}
                <div className="flex items-center gap-3 pt-2">
                  <button 
                    onClick={() => setShowVideo(true)}
                    className="flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-black text-black hover:bg-zinc-200 transition-colors shadow-lg"
                  >
                    <span>▶</span> Putar Contoh Video Course
                  </button>
                  
                  {/* Tombol Tambah ke Daftar Belajar (+) */}
                  <button className="h-10 w-10 rounded-full border-2 border-zinc-400/80 bg-zinc-900/60 flex items-center justify-center text-white hover:border-white hover:bg-zinc-800 transition-all">
                    <span className="text-xl leading-none">+</span>
                  </button>

                  {/* Tombol Like (Jempol) */}
                  <button className="h-10 w-10 rounded-full border-2 border-zinc-400/80 bg-zinc-900/60 flex items-center justify-center text-white hover:border-white hover:bg-zinc-800 transition-all">
                    <span className="text-sm">👍</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Tombol Reset / Tutup Video di Pojok Kanan Atas jika Video sedang menyala */}
          {showVideo && (
            <button 
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 h-9 w-9 rounded-full bg-black/80 flex items-center justify-center border border-zinc-700 hover:bg-zinc-800 transition-colors z-20"
              title="Tutup Video"
            >
              <span className="text-white text-sm font-bold">✕</span>
            </button>
          )}
        </div>

        {/* 2. Detail & Metadata Area */}
        <div className="p-6 md:p-12 grid md:grid-cols-12 gap-8 text-zinc-300">
          
          {/* Kolom Kiri (Deskripsi & Metadata) */}
          <div className="md:col-span-8 space-y-5">
            {/* Metadata Bar */}
            <div className="flex flex-wrap items-center gap-3 text-sm font-semibold">
              <span className="text-emerald-400 font-bold">98% Cocok</span>
              <span>{courseDetail.tahun}</span>
              <span className="border border-zinc-600 px-1.5 py-0.5 rounded text-[10px] tracking-wide text-zinc-400">
                {courseDetail.kategori}
              </span>
              <span>{courseDetail.jumlahVideo}</span>
              <span className="border border-zinc-600 px-1 rounded text-[9px] font-bold text-zinc-400">
                {courseDetail.resolusi}
              </span>
            </div>

            {/* Deskripsi Narasi */}
            <p className="text-sm md:text-base leading-relaxed text-zinc-200">
              {courseDetail.deskripsi}
            </p>

            <div className="pt-4">
              <a 
                href="https://wa.me/6285256162879?text=Assalamualaikum%20Kak%20Alif,%20saya%20tertarik%20bergabung%20dengan%20Video%20Course%20Rumaatun." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 hover:bg-cyan-600 px-6 py-3.5 text-sm font-extrabold text-black transition-colors"
              >
                📱 Daftar Kelas via WhatsApp (Konsultasi Langsung)
              </a>
            </div>
          </div>

          {/* Kolom Kanan (Informasi Pengajar & Topik) */}
          <div className="md:col-span-4 space-y-4 text-xs md:text-sm border-t md:border-t-0 md:border-l border-zinc-800/80 pt-6 md:pt-0 md:pl-6">
            <div>
              <span className="text-zinc-500">Tutor:</span>{" "}
              <span className="text-zinc-200 hover:underline cursor-pointer font-medium">{courseDetail.tutor}</span>
            </div>
            <div>
              <span className="text-zinc-500">Topik Materi:</span>{" "}
              <span className="text-zinc-200 hover:underline cursor-pointer font-medium">{courseDetail.topik}</span>
            </div>
            <div>
              <span className="text-zinc-500">Karakteristik Course:</span>{" "}
              <span className="text-zinc-200 hover:underline cursor-pointer font-medium">{courseDetail.karakteristik}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
