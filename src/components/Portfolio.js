'use client';
import { useState } from 'react';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('pengalaman');

  const tabs = [
    { id: 'pengalaman', label: 'Pengalaman & Pendidikan' },
    { id: 'keahlian', label: 'Keahlian & Karya' },
    { id: 'proyek', label: 'Aplikasi & Website' }
  ];

  return (
    <section id="portofolio" className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
            Tentang Saya
          </span>
          <h2 className="text-3xl font-bold text-slate-900 mt-3 sm:text-4xl">Portofolio Profesional</h2>
          <p className="text-slate-600 mt-2">Jejak akademik, karya tulis ilmiah, dan rekam jejak digital Alif Rezky, M.Pd.</p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 border-b border-slate-200 pb-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/10'
                  : 'text-slate-600 hover:bg-slate-200/60'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Konten */}
        <div className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm min-h-[350px]">
          
          {/* Tab 1: Pengalaman & Pendidikan */}
          {activeTab === 'pengalaman' && (
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                
                {/* Kolom Kiri: Pengalaman Mengajar */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 border-b pb-2 mb-4">Riwayat Mengajar & Akademik</h3>
                  <div className="relative border-l border-slate-200 pl-5 ml-2 space-y-5">
                    <div className="relative">
                      <div className="absolute -left-[25px] mt-1.5 h-3 w-3 rounded-full bg-indigo-600 border-4 border-white"></div>
                      <span className="text-xs font-semibold text-indigo-600">Maret 2026 -- Sekarang</span>
                      <h4 className="font-bold text-slate-900 text-sm">Tutor Matematika</h4>
                      <p className="text-slate-500 text-xs">Algonova Dubai, Uni Emirat Arab (UEA)</p>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-[25px] mt-1.5 h-3 w-3 rounded-full bg-slate-400 border-4 border-white"></div>
                      <span className="text-xs font-semibold text-slate-500">Sept 2022 -- Juni 2026</span>
                      <h4 className="font-bold text-slate-900 text-sm">Guru Matematika</h4>
                      <p className="text-slate-500 text-xs">SMA Islam Terpadu Al Binaa</p>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-[25px] mt-1.5 h-3 w-3 rounded-full bg-slate-400 border-4 border-white"></div>
                      <span className="text-xs font-semibold text-slate-500">Oktober -- Desember 2023</span>
                      <h4 className="font-bold text-slate-900 text-sm">Master Teacher Matematika & Fisika</h4>
                      <p className="text-slate-500 text-xs">Brain Academy by Ruangguru</p>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-[25px] mt-1.5 h-3 w-3 rounded-full bg-slate-400 border-4 border-white"></div>
                      <span className="text-xs font-semibold text-slate-500">2018 -- 2024</span>
                      <h4 className="font-bold text-slate-900 text-sm">Asisten Dosen Prof. Dr. Hamzah Upu, M.Ed</h4>
                      <p className="text-slate-500 text-xs">Universitas Negeri Makassar</p>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-[25px] mt-1.5 h-3 w-3 rounded-full bg-slate-400 border-4 border-white"></div>
                      <span className="text-xs font-semibold text-slate-500">Januari 2021 -- Juli 2022</span>
                      <h4 className="font-bold text-slate-900 text-sm">Guru Matematika</h4>
                      <p className="text-slate-500 text-xs">SMA Negeri 2 Makassar</p>
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-400 italic pt-3">*Pernah mengajar di SMA Islam Athirah Bukit Baruga & Kuliah Tamu di STKIP YPUP.</p>
                </div>

                {/* Kolom Kanan: Riwayat Pendidikan */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 border-b pb-2 mb-4">Riwayat Pendidikan</h3>
                  <div className="relative border-l border-indigo-100 pl-5 ml-2 space-y-5">
                    <div className="relative">
                      <div className="absolute -left-[25px] mt-1.5 h-3 w-3 rounded-full bg-indigo-500 border-4 border-white"></div>
                      <span className="text-xs font-semibold text-indigo-500">Agustus 2020 -- Februari 2022</span>
                      <h4 className="font-bold text-slate-900 text-sm">S2 Pendidikan Matematika</h4>
                      <p className="text-slate-500 text-xs">Pascasarjana (PPs) Universitas Negeri Makassar</p>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-[25px] mt-1.5 h-3 w-3 rounded-full bg-indigo-500 border-4 border-white"></div>
                      <span className="text-xs font-semibold text-indigo-500">Agustus 2015 -- Desember 2019</span>
                      <h4 className="font-bold text-slate-900 text-sm">S1 Pendidikan Matematika</h4>
                      <p className="text-slate-500 text-xs">FMIPA Universitas Negeri Makassar</p>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-[25px] mt-1.5 h-3 w-3 rounded-full bg-slate-400 border-4 border-white"></div>
                      <span className="text-xs font-semibold text-slate-500">2012 -- 2015</span>
                      <h4 className="font-bold text-slate-900 text-sm">SMA Negeri 2 Makassar</h4>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-[25px] mt-1.5 h-3 w-3 rounded-full bg-slate-400 border-4 border-white"></div>
                      <span className="text-xs font-semibold text-slate-500">2009 -- 2012</span>
                      <h4 className="font-bold text-slate-900 text-sm">SMP Negeri 1 Makassar</h4>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-[25px] mt-1.5 h-3 w-3 rounded-full bg-slate-400 border-4 border-white"></div>
                      <span className="text-xs font-semibold text-slate-500">2003 -- 2009</span>
                      <h4 className="font-bold text-slate-900 text-sm">SD Negeri Parangtambung I</h4>
                    </div>
                  </div>
                </div>

              </div>

              <div className="mt-4 pt-4 border-t">
                <h4 className="font-bold text-slate-900 text-sm mb-2">Kepanitiaan Internasional</h4>
                <p className="text-sm text-slate-600">
                  Bertindak sebagai <span className="font-semibold text-indigo-600">Secretariat</span> pada ICOESM UNM selama tiga periode berturut-turut (2021, 2022, dan 2023). 
                  <a href="https://icoesm.unm.ac.id/committees/" target="_blank" rel="noopener noreferrer" className="text-indigo-500 underline ml-1 hover:text-indigo-600">Lihat Komite &rarr;</a>
                </p>
              </div>
            </div>
          )}

          {/* Tab 2: Keahlian & Karya */}
          {activeTab === 'keahlian' && (
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Bahasa Pemrograman</h3>
                  <div className="flex flex-wrap gap-2">
                    {['JavaScript', 'Python', 'PHP', 'ActionScript 2.0', 'C', 'GNU R', 'MATLAB', 'BASIC'].map((tech) => (
                      <span key={tech} className="bg-slate-100 text-slate-800 text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-200/50">{tech}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Software & Alat Kerja</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Kubuntu Linux', 'Macromedia Flash', 'Wick Editor', 'Inkscape', 'GIMP', 'Olive Video Editor', 'JASP', 'PSPP', 'GNU Octave', 'LibreOffice'].map((soft) => (
                      <span key={soft} className="bg-indigo-50/60 text-indigo-950 text-xs font-semibold px-3 py-1.5 rounded-lg border border-indigo-100">{soft}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t">
                <h3 className="text-base font-bold text-slate-900 mb-3">Publikasi Karya & Buku</h3>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-500">✔</span>
                    <div>
                      <span className="font-semibold text-slate-900">Jurnal Internasional Masa Matriks (2019)</span> — Diterbitkan di Atlantis Press. 
                      <a href="https://www.atlantis-press.com/article/125965679.pdf" target="_blank" rel="noopener noreferrer" className="text-indigo-500 underline ml-1 font-medium">Buka PDF &rarr;</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-500">✔</span>
                    <div>
                      <span className="font-semibold text-slate-900">Aplikasi & Jurnal TULIMATIKA (2022)</span> — Media inklusi matematika untuk siswa Tuli. 
                      <a href="https://ojs.unm.ac.id/icsat/article/view/39700/18784" target="_blank" rel="noopener noreferrer" className="text-indigo-500 underline ml-1 font-medium">Lihat Jurnal &rarr;</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-500">✔</span>
                    <div><span className="font-semibold text-slate-900">Buku TULIMATIKA (2022)</span> — Terdaftar resmi dengan nomor <span className="font-mono bg-slate-100 px-1 rounded text-xs">ISBN: 9786236339329</span>.</div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-500">✔</span>
                    <div><span className="font-semibold text-slate-900">Buku "Matematika Itu Asyik" (2026)</span> — Dirilis dengan lisensi terbuka (Copyleft) untuk kemajuan pendidikan.</div>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* Tab 3: Proyek Aplikasi */}
          {activeTab === 'proyek' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-3">1. Aplikasi Interaktif (Macromedia Flash & Desktop)</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="border border-slate-100 bg-slate-50/50 p-4 rounded-2xl">
                    <h4 className="font-bold text-slate-800 text-sm">TULIMATIKA & Masa Matriks</h4>
                    <p className="text-xs text-slate-500 mt-1">Aplikasi riset tesis S1 & S2 untuk visualisasi pembelajaran matematika inklusif.</p>
                  </div>
                  <div className="border border-slate-100 bg-slate-50/50 p-4 rounded-2xl">
                    <h4 className="font-bold text-slate-800 text-sm">PIJAR (Pintar Belajar Rasio)</h4>
                    <p className="text-xs text-slate-500 mt-1">Dikembangkan bersama Ayu Rahmah tahun 2025 untuk kemudahan belajar rasio.</p>
                    <a href="http://ojs.globalrci.or.id/jpptk/article/download/86/70" target="_blank" rel="noopener noreferrer" className="text-xs text-indigo-500 underline mt-1 inline-block">Download Jurnal Dokumen &rarr;</a>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t">
                <h3 className="text-base font-bold text-slate-900 mb-3">2. Pengembangan Website Ekosistem Modern</h3>
                <div className="grid sm:grid-cols-3 gap-4 text-center">
                  <div className="bg-slate-900 text-white p-3 rounded-xl font-mono text-xs">kakalif.my.id</div>
                  <div className="bg-slate-900 text-white p-3 rounded-xl font-mono text-xs">lacrosta.id</div>
                  <div className="bg-slate-900 text-white p-3 rounded-xl font-mono text-xs">jamia.id</div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
