'use client';

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center bg-[#5246ff] text-white pt-20 overflow-hidden">
      {/* Efek Cahaya Latar Halus agar Tetap Elegan */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_50%)]"></div>
      
      <div className="container mx-auto px-6 max-w-5xl relative z-10 grid md:grid-cols-12 gap-8 py-16">
        <div className="md:col-span-9 flex flex-col justify-center space-y-6">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white bg-white/10 border border-white/20 px-3 py-1.5 rounded-full w-fit backdrop-blur-sm shadow-sm">
            🌐 Professional Remote Educator &amp; Web Dev
          </span>
          
          {/* Baris Logo Gambar + Judul Nama */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <img 
              src="/favicon.png" 
              alt="Logo Kak Alif" 
              className="h-16 w-16 object-contain rounded-2xl bg-white/10 p-1.5 backdrop-blur-sm shadow-md"
            />
            <h1 className="text-4xl font-extrabold sm:text-5xl leading-tight text-white drop-shadow-md">
              Alif Rezky, M.Pd. Daeng Lewa
            </h1>
          </div>
          
          <p className="text-base text-white/95 leading-relaxed max-w-2xl drop-shadow-sm">
            Saya adalah seorang <strong>guru matematika yang suka ngoding dan menulis</strong>. Saat ini, waktu sore hingga malam hari saya secara remote sebagai <strong>Tutor Matematika di Algonova Dubai (UEA). Adapun waktu subuh hingga siang hari saya dedikasikan untuk keluarga di rumah</strong>. 
          </p>

          <p className="text-sm text-[#5246ff] bg-white p-5 rounded-2xl shadow-lg font-medium leading-relaxed">
            🏠 <strong>Komitmen Kerja:</strong> Saya sepenuhnya memilih untuk bekerja secara independen dari rumah (Full WFH) dan tidak lagi terikat secara offline di kantor atau lembaga konvensional lainnya. Jika bagi kebanyakan orang WFH adalah singkatan dari <em>Work from Home</em>, bagi saya pribadi WFH memiliki arti mendalam: <strong>Work for Hajj</strong>. Website ini hadir sebagai ruang digital mandiri dan <em>side hustle</em> profesional saya.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-2">
            <a href="#produk" className="rounded-2xl bg-white px-6 py-3.5 text-sm font-extrabold text-[#5246ff] shadow-md hover:bg-slate-50 hover:scale-[1.01] transition-all duration-200">
              Lihat Buku &amp; Produk &rarr;
            </a>
            <a href="https://wa.me/6285256162879" target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-white/15 border border-white/30 px-6 py-3.5 text-sm font-bold text-white shadow-sm hover:bg-white/20 transition-all duration-200">
              Hubungi via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
