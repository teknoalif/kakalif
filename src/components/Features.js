export default function Features() {
  const points = [
    { title: "Pendekatan Visual", text: "Konsep abstrak matematika divisualisasikan dengan diagram konkret yang mudah dicerna otak." },
    { title: "Materi Inklusif", text: "Ramah bagi semua kalangan, termasuk pengembangan kurikulum adaptif yang ramah Bahasa Isyarat Indonesia (Bisindo)." },
    { title: "Kurikulum Terstruktur", text: "Disusun berjenjang dari nol (fundamental) hingga penyelesaian soal tingkat tinggi (HOTS)." }
  ];

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-100">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {points.map((pt, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-white font-bold text-lg">
                {i + 1}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{pt.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{pt.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
