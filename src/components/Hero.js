'use client';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-b from-sky-500 via-blue-600 to-slate-950 text-white pt-20 overflow-hidden">
      {/* Efek Cahaya Latar */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.3),transparent_45%)]"></div>
      
      <div className="container mx-auto px-6 max-w-5xl relative z-10 grid md:grid-cols-12 gap-8 py-12">
        <div className="md:col-span-8 flex flex-col justify-center space-y-6">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-200 bg-sky-950/50 border border-sky-800 px-3 py-1.5 rounded-full w-fit backdrop-blur-sm">
            🌐 Professional Remote Educator & Web Dev
          </span>
          
          <h1 className="text-4xl font-extrabold sm:text-5xl leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-sky-100 to-blue-200">
            Alif Rezky, M.Pd.
          </h1>
          
          <p className="text-base text-sky-100/90 leading-relaxed max-w-2xl">
            Saya adalah seorang <strong>guru matematika yang suka ngoding dan menulis</strong>. Saat ini, saya memfokuskan dedikasi penuh waktu saya secara remote sebagai <strong>Tutor Matematika di Algonova Dubai (UEA) dan waktu pagi hingga siang waktu saya penuh untuk keluarga di rumah</strong>. 
          </p>

          <p className="text-sm text-sky-200/80 bg-blue-950/40 border border-blue-800/60 p-4 rounded-2xl backdrop-blur-sm">
            🏠 <strong>Komitmen Kerja:</strong> Saya sepenuhnya memilih untuk bekerja secara independen dari rumah (Full WFH) dan tidak lagi terikat secara offline di kantor atau lembaga konvensional lainnya. Website ini hadir sebagai ruang digital mandiri dan <em>side hustle</em> profesional saya.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-2">
            <a href="#produk" className="rounded-2xl bg-white px-6 py-3.5 text-sm font-extrabold text-blue-700 shadow-lg shadow-blue-500/10 hover:bg-sky-50 transition-all duration-200">
              Lihat Buku &amp; Produk &rarr;
            </a>
            <a href="https://wa.me/6285256162879" target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-blue-700/60 border border-blue-500/40 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm hover:bg-blue-600/70 transition-all duration-200">
              Hubungi via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
