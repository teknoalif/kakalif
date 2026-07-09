export default function Products() {
  const products = [
    {
      type: "Video Course",
      title: "Rumatun",
      desc: "Ekosistem belajar online berbasis video interaktif. Kupas tuntas materi matematika dan coding dari dasar secara visual dan fleksibel.",
      badge: "Video Course",
      cta: "Mulai Belajar Sekarang",
      link: "https://wa.me/6285256162879?text=Halo%20Kak%20Alif,%20saya%20tertarik%20dengan%20Video%20Course%20Rumatun",
      color: "border-emerald-500/20 bg-emerald-500/5 hover:border-emerald-500/40"
    },
    {
      type: "Buku Edukasi",
      title: "Matematika itu Asyik",
      desc: "Buku panduan revolusioner yang dirancang khusus untuk mematahkan mitos bahwa matematika itu menakutkan. Penuh ilustrasi menarik.",
      badge: "Cetak & Digital",
      cta: "Beli Buku Sekarang",
      link: "https://wa.me/6285256162879?text=Halo%20Kak%20Alif,%20saya%20ingin%20membeli%20Buku%20Matematika%20itu%20Asyik",
      color: "border-indigo-500/20 bg-indigo-500/5 hover:border-indigo-500/40"
    },
    {
      type: "Kursus Online Intensif",
      title: "Alalify Academy",
      desc: "Kelas bimbingan belajar interaktif live interaktif. Fokus pada persiapan TKA, UTBK, Ujian Mandiri, olimpiade (OSN), dan sukses tembus UTBK PTN.",
      badge: "Live Mentoring",
      cta: "Daftar Kelas Online",
      link: "https://wa.me/6285256162879?text=Halo%20Kak%20Alif,%20saya%20mau%20daftar%20di%20Alalify%20Academy",
      color: "border-blue-500/20 bg-blue-500/5 hover:border-blue-500/40"
    }
  ];

  return (
    <section id="produk" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Program Unggulan Kami</h2>
          <p className="mt-4 text-lg text-slate-600">Pilih metode belajar terbaik yang paling sesuai dengan kebutuhan akademis Anda.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((p, idx) => (
            <div key={idx} className={`flex flex-col justify-between rounded-3xl border p-8 transition-all duration-300 ${p.color}`}>
              <div>
                <span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 mb-4">{p.badge}</span>
                <h3 className="text-2xl font-bold text-slate-900">{p.title}</h3>
                <p className="mt-4 text-slate-600 leading-relaxed text-sm md:text-base">{p.desc}</p>
              </div>
              <div className="mt-8">
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="block w-full text-center rounded-xl bg-slate-900 px-4 py-3 font-semibold text-white hover:bg-slate-800 transition-colors duration-200">
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
