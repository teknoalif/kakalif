'use client';

export default function Products() {
  const products = [
    {
      type: "Program UTBK 2027",
      title: "Rumatun",
      desc: "Program lengkap persiapan UTBK 2027 selama 1 tahun penuh. Berisi video course interaktif dan 4 set latihan soal lengkap dengan pembahasan.",
      badge: "Video Course + 4 Set Soal",
      image: "/logorumatun1.jpg",
      originalPrice: "Rp 800.000",
      discountPrice: "Rp 400.000",
      period: "/1 tahun",
      discountTag: "Diskon 50%",
      bonus: "Akses Penuh Video & 4 Set Latihan Soal UTBK 2027",
      cta: "Beli / Daftar via WA",
      link: "https://wa.me/6285256162879?text=Halo%20Kak%20Alif,%20saya%20tertarik%20dengan%20Program%20Rumatun%20UTBK%202027",
      visitLink: "https://rumatun.jamia.id",
      color: "border-emerald-500/30 bg-emerald-500/5 hover:border-emerald-500/50"
    },
    {
      type: "Buku Edukasi",
      title: "Matematika itu Asyik",
      desc: "Buku panduan revolusioner yang dirancang khusus untuk mematahkan mitos bahwa matematika itu menakutkan. Penuh ilustrasi menarik & penyampaian santai.",
      badge: "Cetak & Digital",
      image: "/hargamia-2.png",
      originalPrice: "Rp 175.000",
      discountPrice: "Rp 165.025",
      period: "",
      discountTag: "Diskon 5.7%",
      bonus: "Gratis Rumatun Premium 1 Bulan Pertama (Senilai Rp 60.000)",
      cta: "Beli Buku Sekarang",
      link: "https://wa.me/6285256162879?text=Halo%20Kak%20Alif,%20saya%20ingin%20membeli%20Buku%20Matematika%20itu%20Asyik",
      color: "border-indigo-500/30 bg-indigo-500/5 hover:border-indigo-500/50"
    },
    {
      type: "Buku & Praktik Coding",
      title: "Belajar Python dari Nol Bareng Kak Alif",
      desc: "Panduan komprehensif menguasai pemrograman Python dari tingkat dasar. Cocok untuk pemula yang ingin membangun fondasi logika koding kuat.",
      badge: "Buku + Bonus Video",
      image: "/hargapython.png", // Disesuaikan ekstensinya jadi .png
      originalPrice: "Rp 275.000",
      discountPrice: "Rp 190.000",
      period: "",
      discountTag: "Diskon 34%",
      bonus: "Bonus Video Course Bedah Buku & Proyek Membuat Aplikasi CBT pakai Python",
      cta: "Beli Buku & Course",
      link: "https://wa.me/6285256162879?text=Halo%20Kak%20Alif,%20saya%20ingin%20membeli%20Buku%20Belajar%20Python%20dari%20Nol",
      color: "border-sky-500/30 bg-sky-500/5 hover:border-sky-500/50"
    }
  ];

  return (
    <section id="produk" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Program &amp; Buku Unggulan</h2>
          <p className="mt-4 text-lg text-slate-600">Pilih media belajar terbaik untuk menguasai matematika dan pemrograman secara terstruktur.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {products.map((p, idx) => (
            <div key={idx} className={`flex flex-col justify-between rounded-3xl border p-8 transition-all duration-300 shadow-sm hover:shadow-md ${p.color}`}>
              <div>
                {/* Image Banner / Cover dengan Rasio Tegak Sesuai Dimensi Asli */}
                <div className="mb-6 overflow-hidden rounded-2xl bg-slate-100 border border-slate-200/60 aspect-[1/1.41] flex items-center justify-center">
                  <img 
                    src={p.image} 
                    alt={p.title} 
                    className="h-full w-full object-contain hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.style.display = 'none';
                    }}
                  />
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block rounded-full bg-slate-200/70 px-3 py-1 text-xs font-bold text-slate-700">{p.badge}</span>
                  <span className="inline-block rounded-full bg-red-100 text-red-700 px-2.5 py-0.5 text-xs font-bold">{p.discountTag}</span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900">{p.title}</h3>
                <p className="mt-3 text-slate-600 leading-relaxed text-sm">{p.desc}</p>
                
                {/* Blok Harga */}
                <div className="mt-6 pt-6 border-t border-slate-200/60">
                  <span className="text-xs text-slate-400 line-through font-medium block">{p.originalPrice}</span>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="text-2xl font-black text-slate-900">{p.discountPrice}</span>
                    {p.period && <span className="text-xs text-slate-500 font-semibold">{p.period}</span>}
                  </div>
                </div>

                {/* Information Bonus */}
                <div className="mt-4 rounded-xl bg-slate-900/5 border border-slate-900/10 p-3">
                  <p className="text-xs font-bold text-slate-800 flex items-start gap-1.5">
                    <span>🎁</span>
                    <span><strong className="text-slate-900">Bonus:</strong> {p.bonus}</span>
                  </p>
                </div>
              </div>

              {/* Tombol Aksi */}
              <div className="mt-8 space-y-2">
                {p.visitLink && (
                  <a 
                    href={p.visitLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block w-full text-center rounded-xl border-2 border-slate-900 bg-white px-4 py-2.5 font-bold text-slate-900 hover:bg-slate-100 transition-colors duration-200 shadow-sm text-sm"
                  >
                    🌐 Kunjungi rumatun.jamia.id
                  </a>
                )}

                <a 
                  href={p.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block w-full text-center rounded-xl bg-slate-900 px-4 py-3 font-semibold text-white hover:bg-slate-800 transition-colors duration-200 shadow-md text-sm"
                >
                  {p.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
