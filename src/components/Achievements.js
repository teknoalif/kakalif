'use client';

export default function Achievements() {
  return (
    <section id="prestasi" className="py-24 bg-slate-950 text-white border-t border-slate-900 relative overflow-hidden">
      {/* Dekorasi Cahaya Latar */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        {/* Header Seksi */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400 bg-indigo-950/60 border border-indigo-900 px-3 py-1 rounded-full">
            Hall of Fame -- Angkatan 2026
          </span>
          <h2 className="text-3xl font-bold mt-4 sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
            Luaran Pendampingan Belajar
          </h2>
          <p className="text-slate-400 mt-3 text-sm md:text-base">
            Bukti nyata komitmen bimbingan intensif Kak Alif dalam mengantarkan putra-putri terbaik menembus Kampus Impian Nasional & Kelas Internasional Dunia.
          </p>
        </div>

        {/* Grid Jalur Kelulusan */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: Talent Scouting & KKI */}
          <div className="rounded-3xl bg-slate-900/40 border border-slate-800/80 p-6 backdrop-blur-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">⭐</span>
                <h3 className="font-bold text-indigo-400 text-sm uppercase tracking-wider">Talent Scouting / KKI</h3>
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-white text-base">Abdurrochmaan Isma'iil Maajid Pohan</h4>
                <p className="text-slate-400 text-xs font-medium">📍 Universitas Indonesia (UI)</p>
                <p className="text-indigo-300 text-xs italic font-semibold">Kedokteran Kelas Internasional (KKI)</p>
              </div>
            </div>
          </div>

          {/* Card 2: SNBT 2026 */}
          <div className="rounded-3xl bg-slate-900/40 border border-slate-800/80 p-6 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">✨</span>
              <h3 className="font-bold text-indigo-400 text-sm uppercase tracking-wider">Jalur SNBT 2026</h3>
            </div>
            <ul className="space-y-4">
              <li className="border-l-2 border-slate-700 pl-3">
                <h4 className="font-bold text-sm text-slate-100">Muhammad Altamis Jibran</h4>
                <p className="text-slate-400 text-xs">📍 UI – Ilmu Komputer</p>
              </li>
              <li className="border-l-2 border-slate-700 pl-3">
                <h4 className="font-bold text-sm text-slate-100">Fakhri Ahmad Raditya</h4>
                <p className="text-slate-400 text-xs">📍 UPN \"Veteran\" Yogyakarta – Teknik Metalurgi</p>
              </li>
              <li className="border-l-2 border-slate-700 pl-3">
                <h4 className="font-bold text-sm text-slate-100">Alsa Al Rafii Putera Yunus</h4>
                <p className="text-slate-400 text-xs">📍 PPNS – Teknik Keselamatan & Kesehatan Kerja (K3)</p>
              </li>
            </ul>
          </div>

          {/* Card 3: Mandiri 2026 */}
          <div className="rounded-3xl bg-slate-900/40 border border-slate-800/80 p-6 backdrop-blur-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">💎</span>
                <h3 className="font-bold text-indigo-400 text-sm uppercase tracking-wider">Jalur Mandiri 2026</h3>
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-white text-base">Muhammad Aqiel Wiramulya Paliwangi</h4>
                <p className="text-slate-400 text-xs">📍 Institut Teknologi Bandung (ITB)</p>
                <p className="text-indigo-300 text-xs font-medium">SITH - Program Rekayasa (SITH-R)</p>
              </div>
            </div>
          </div>

        </div>

        {/* Sorotan Khusus: Beasiswa & Tes Internasional (Bento Box Besar) */}
        <div className="rounded-3xl bg-gradient-to-br from-indigo-950/40 via-slate-900/60 to-slate-900/40 border border-indigo-500/20 p-8 backdrop-blur-sm mb-16">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="text-xl">🌍</span>
              <h3 className="font-bold text-indigo-400 text-sm uppercase tracking-wider">Jalur Beasiswa / Tes Internasional</h3>
            </div>
            <span className="text-xs bg-indigo-500/10 text-indigo-300 px-3 py-1 rounded-full font-semibold border border-indigo-500/20">
              Diterima di 6 Kampus Top Dunia Sekaligus!
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-1 flex flex-col justify-center">
              <h4 className="text-lg font-extrabold text-white">Abdurrochmaan Isma'iil Maajid Pohan</h4>
              <p className="text-slate-400 text-xs mt-1 leading-relaxed">Representasi keberhasilan pendampingan kurikulum internasional yang presisi.</p>
            </div>
            <div className="md:col-span-2 grid sm:grid-cols-2 gap-4">
              <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800/60">
                <p className="font-bold text-xs text-indigo-400">🇦🇺 Monash University (Australia)</p>
                <p className="text-slate-300 text-xs mt-0.5 font-medium">Double Degree: Bachelor of Commerce & PPE</p>
              </div>
              <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800/60">
                <p className="font-bold text-xs text-indigo-400">🇨🇦 University of Toronto (Kanada)</p>
                <p className="text-slate-300 text-xs mt-0.5 font-medium">Mathematical & Physical Sciences & Civil Engineering</p>
              </div>
              <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800/60">
                <p className="font-bold text-xs text-indigo-400">🇨🇦 University of British Columbia (Kanada)</p>
                <p className="text-slate-300 text-xs mt-0.5 font-medium">International Economics</p>
              </div>
              <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800/60">
                <p className="font-bold text-xs text-indigo-400">🇦🇺 University of Melbourne (Australia)</p>
                <p className="text-slate-300 text-xs mt-0.5 font-medium">Bachelor of Commerce</p>
              </div>
              <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800/60">
                <p className="font-bold text-xs text-indigo-400">🇸🇬 National University of Singapore (NUS)</p>
                <p className="text-slate-300 text-xs mt-0.5 font-medium">Computer Engineering (Advanced Electronics Spec.)</p>
              </div>
              <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800/60">
                <p className="font-bold text-xs text-indigo-400">🇸🇦 King Fahd University (Arab Saudi)</p>
                <p className="text-slate-300 text-xs mt-0.5 font-medium">Semiconductor Design and Engineering</p>
              </div>
            </div>
          </div>
        </div>

        {/* Kotak Ajakan Bertindak / CTA Section */}
        <div className="rounded-3xl bg-indigo-600 p-8 md:p-12 text-center relative overflow-hidden shadow-xl shadow-indigo-600/10">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="text-2xl">🚀</span>
            <h3 className="text-xl font-bold md:text-2xl text-white">
              Mau persiapkan putra-putri Anda sukses menembus Kampus Impian & Kelas Internasional berikutnya?
            </h3>
            <p className="text-indigo-100 text-xs md:text-sm leading-relaxed">
              Mulai langkah suksesnya dari sekarang bersama bimbingan intensif Kak Alif Matematika (Fundamental Math, UTBK/SNBT, KKI, &amp; Olimpiade). Slot pendampingan sangat terbatas!
            </p>
            <div className="pt-4">
              <a 
                href="https://wa.me/6285256162879" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-sm font-extrabold text-indigo-600 shadow-md hover:bg-slate-50 transition-all duration-200"
              >
                Amankan Kuota Belajar &amp; Konsultasi Gratis &rarr;
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
