'use client';

export default function BookPromo() {
  const detailBuku = {
    judul: "Matematika Itu Asyik",
    hargaAsli: "Rp175.000",
    hargaDiskon: "Rp165.000",
    spesifikasi: [
      { nama: "Penulis", nilai: "Alif Rezky, M.Pd." },
      { nama: "Bahasa", nilai: "Indonesia" },
      { nama: "Gaya Bahasa", nilai: "Santai, Humor Cerdas, Sentuhan Islami" },
      { nama: "Konten Fokus", nilai: "Logika Dasar & Konsep Fondasi Matematika" },
      { nama: "Bonus Eksklusif", nilai: "Akses Video Pembahasan Matematika Dasar (SD-UTBK)" }
    ]
  };

  return (
    <section id="produk" className="bg-gradient-to-b from-slate-900 to-[#5246ff] text-white pt-24 pb-12 border-b border-white/10 relative overflow-hidden">
      {/* Banner Diskon Atas ala WPU Course Promo */}
      <div className="absolute top-16 inset-x-0 bg-amber-400 text-slate-950 text-center py-2 px-4 text-xs md:text-sm font-bold tracking-wide z-20 shadow-sm animate-pulse">
        ⚡ PROMO DISKON TERBATAS: Dapatkan Buku "{detailBuku.judul}" hanya <span className="underline">{detailBuku.hargaDiskon}</span> + Bonus Eksklusif Video Pembahasan!
      </div>

      <div className="container mx-auto px-6 max-w-5xl mt-8 relative z-10">
        <div className="grid md:grid-cols-12 gap-8 items-center bg-white/5 backdrop-blur-md rounded-3xl p-6 md:p-10 border border-white/10 shadow-xl">
          
          {/* Kolom Kiri: Visual Buku ala E-commerce */}
          <div className="md:col-span-5 flex flex-col items-center space-y-4">
            <div className="relative group bg-white/10 p-4 rounded-2xl border border-white/10 shadow-inner">
              <img 
                src="/buku-0.png" 
                alt="Fisik Buku Matematika Itu Asyik" 
                className="w-56 md:w-64 h-auto object-contain rounded-xl drop-shadow-[0_15px_15px_rgba(0,0,0,0.4)] transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <span className="absolute top-6 left-6 bg-red-500 text-white text-[10px] font-black uppercase px-2 py-1 rounded-md tracking-wider shadow-md">
                Diskon
              </span>
            </div>
            <p className="text-[11px] text-sky-200/70 italic text-center">
              *Foto fisik buku asli cetakan Batch 1 &amp; 2
            </p>
          </div>

          {/* Kolom Kanan: Detail & Keresahan Buku ala Gramedia/Yrama Widya */}
          <div className="md:col-span-7 space-y-6">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2.5 py-1 rounded-md">
                BEST SELLER SIDE HUSTLE
              </span>
              <h2 className="text-3xl font-black mt-3 text-white tracking-tight sm:text-4xl">
                {detailBuku.judul}
              </h2>
              
              {/* Blok Harga */}
              <div className="flex items-center gap-3 mt-3">
                <span className="text-sm line-through text-white/40 font-medium">{detailBuku.hargaAsli}</span>
                <span className="text-2xl font-black text-amber-400">{detailBuku.hargaDiskon}</span>
                <span className="text-[10px] bg-red-500/20 text-red-300 border border-red-500/30 font-bold px-2 py-0.5 rounded">
                  Hemat Rp10.000
                </span>
              </div>
            </div>

            {/* Narasi Cerita dari Instagram */}
            <div className="space-y-3 text-xs md:text-sm text-slate-200 leading-relaxed border-t border-white/10 pt-4">
              <p>
                Buku ini lahir langsung dari draf panjang, keresahan, serta pemandangan <strong>&quot;patah hati&quot;</strong> yang sering saya dapati di ruang kelas sejak awal saya jadi guru matematika tahun 2021. Hati saya tersentuh setiap kali mendengar siswa menyerah karena menganggap matematika sebagai &quot;monster&quot; menakutkan.
              </p>
              <p>
                Lewat buku ini, saya menghadirkan sebuah &quot;cermin&quot; untuk membuktikan bahwa matematika bukan momok kaku, melainkan petualangan logika dasar yang sangat membumi dan asyik!
              </p>
            </div>

            {/* Tabel Spesifikasi Teknis Cetak */}
            <div className="bg-slate-950/40 border border-white/5 rounded-2xl p-4 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-sky-300 border-b border-white/5 pb-1.5 mb-2">
                Spesifikasi &amp; Detail Buku
              </h4>
              <div className="grid grid-cols-1 gap-2 text-xs">
                {detailBuku.spesifikasi.map((item, idx) => (
                  <div key={idx} className="flex justify-between border-b border-white/5 pb-1 last:border-0 last:pb-0">
                    <span className="text-white/50">{item.nama}</span>
                    <span className="font-semibold text-white text-right">{item.nilai}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tombol Aksi Pembelian Beli Sekarang */}
            <div className="pt-2">
              <a 
                href="https://wa.me/6285256162879?text=Assalamualaikum%20Kak%20Alif,%20saya%20tertarik%20membeli%20Buku%20Matematika%20Itu%20Asyik%20dengan%20harga%20promo%20Rp165.000." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-amber-400 px-6 py-4 text-sm font-black text-slate-950 shadow-lg shadow-amber-400/20 hover:bg-amber-300 hover:scale-[1.01] transition-all duration-200"
              >
                🛒 Beli Buku Sekarang (Via WhatsApp) &rarr;
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
