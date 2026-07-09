'use client';

export default function Testimonials() {
  const reviews = [
    {
      name: "Ustaz Suharyadi, M.Pd., Gr.",
      role: "Guru Kimia SMA IT Al Binaa",
      content: "Masya Allah, buku yang ditulis Ust Alif mudah dicerna tulisannya, bagus juga menambah wawasan karena diselingi dengan aspek religius atau keIslaman, sehingga diharapkan bisa juga menjadi tambahan motivasi berIslam yang lebih baik bagi pembacanya khususnya nanti para pelajar yang ikut membaca. Semoga bermanfaat karya bukunya bagi banyak orang."
    },
    {
      name: "Ustaz Deden Anugrah, M.Pfis.",
      role: "Guru Fisika SMA IT Al Binaa",
      content: "Buku \"Matematika Itu Asyik\" disajikan dengan bahasa yang sederhana dan santai sehingga mudah dipahami, dengan konten yang menekankan logika dasar dan konsep dasar sebagai fondasi sebelum memahami hal yang lebih rumit; buku ini juga menampilkan contoh nyata dari konsep matematika yang dipelajari."
    },
    {
      name: "Ustaz Radivan Tiravi, BA.",
      role: "Guru Nahwu dan Shorof SMA IT Al Binaa",
      content: "Buku Matematika Itu Asyik karya kak Alif ini berhasil membuktikan bahwa matematika bukan momok yang perlu ditakuti. Dengan gaya bahasa yang santai, humor yang cerdas, dan sentuhan nilai islami yang hangat, buku ini terasa seperti ngobrol dengan guru terbaik yang pernah kamu punya. ;)"
    }
  ];

  return (
    <section id="testimoni" className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* Konten Counter Statistik Riil */}
        <div className="grid grid-cols-2 gap-8 max-w-2xl mx-auto text-center border-b border-slate-100 pb-16 mb-16">
          <div>
            <div className="text-4xl font-extrabold text-indigo-600 md:text-5xl">500+</div>
            <p className="mt-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">Murid Online & Offline</p>
          </div>
          <div>
            <div className="text-4xl font-extrabold text-indigo-600 md:text-5xl">150+</div>
            <p className="mt-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">Buku Tersebar</p>
          </div>
        </div>

        {/* Header Ulasan */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
            Apresiasi & Rekomendasi
          </span>
          <h2 className="text-3xl font-bold text-slate-900 mt-3">Apa Kata Rekan Pendidik?</h2>
          <p className="text-slate-600 mt-2 text-sm">Ulasan objektif mengenai buku "Matematika Itu Asyik" dari para guru sains dan bahasa.</p>
        </div>

        {/* Grid Card Ulasan Modern */}
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, idx) => (
            <div key={idx} className="rounded-3xl bg-slate-50/60 p-6 border border-slate-100 shadow-sm flex flex-col justify-between hover:scale-[1.02] hover:bg-white hover:shadow-md transition-all duration-300">
              <div className="space-y-4">
                {/* Tanda Kutip Estetik */}
                <span className="text-4xl font-serif text-indigo-200 block h-4">“</span>
                <p className="text-slate-600 italic text-xs md:text-sm leading-relaxed">{r.content}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <h4 className="font-bold text-slate-900 text-sm">{r.name}</h4>
                <p className="text-xs text-indigo-600 font-medium mt-0.5">{r.role}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
