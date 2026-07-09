export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-slate-900 to-blue-900 py-24 text-white md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.15),transparent_45%)]"></div>
      <div className="container mx-auto px-6 text-center relative z-10 max-w-4xl">
        <span className="inline-block rounded-full bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-300 backdrop-blur-sm border border-indigo-500/20 mb-6">
          Selamat Datang di Dunia Matematika Bermakna
        </span>
        <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-indigo-200">
          Belajar Matematika Jadi Lebih Asyik, Terstruktur & Inklusif
        </h1>
        <p className="mt-6 text-lg text-slate-300 md:text-xl max-w-2xl mx-auto leading-relaxed">
          Bersama <span className="text-white font-semibold">Alif Rezky, M.Pd.</span>, temukan cara baru menguasai konsep matematika dasar, persiapan olimpiade, hingga UTBK tanpa pusing.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a href="#produk" className="rounded-xl bg-indigo-600 px-8 py-4 font-semibold text-white shadow-lg shadow-indigo-600/30 hover:bg-indigo-500 transition-all duration-200 text-center">
            Lihat Program & Produk
          </a>
          <a href="https://wa.me/6285256162879" target="_blank" rel="noopener noreferrer" className="rounded-xl bg-slate-800 border border-slate-700 px-8 py-4 font-semibold text-slate-200 hover:bg-slate-700 transition-all duration-200 text-center">
            Konsultasi Paket (WA)
          </a>
        </div>
      </div>
    </section>
  );
}
