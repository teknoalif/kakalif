'use client';
import { useState, useEffect } from 'react';

export default function Testimonials() {
  const [data, setData] = useState({ testimonials: [], stats: { total_students: '1000+', total_books: '300+' } });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/sheets')
      .then((res) => res.json())
      .then((resData) => {
        if (!resData.error) setData(resData);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Konten Counter Statistik Dinamis */}
        <div className="grid grid-cols-2 gap-8 max-w-2xl mx-auto text-center border-b border-slate-100 pb-16 mb-16">
          <div>
            <div className="text-4xl font-extrabold text-indigo-600 md:text-5xl">{loading ? "..." : data.stats.total_students}+</div>
            <p className="mt-2 text-sm font-medium text-slate-500 uppercase tracking-wider">Murid Terdaftar</p>
          </div>
          <div>
            <div className="text-4xl font-extrabold text-indigo-600 md:text-5xl">{loading ? "..." : data.stats.total_books}+</div>
            <p className="mt-2 text-sm font-medium text-slate-500 uppercase tracking-wider">Buku Tersebar</p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Apa Kata Mereka?</h2>
        </div>

        {loading ? (
          <div className="text-center text-slate-400">Memuat ulasan...</div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {data.testimonials.map((t, idx) => (
              <div key={idx} className="rounded-2xl bg-slate-50 p-6 border border-slate-100 shadow-sm flex flex-col justify-between">
                <p className="text-slate-600 italic text-sm leading-relaxed">"{t.content}"</p>
                <div className="mt-6">
                  <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
                  <p className="text-xs text-slate-400">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
