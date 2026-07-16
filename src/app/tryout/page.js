'use client';
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function TryOutPage() {
  // DATA SOAL DENGAN PEMBAHASAN TEKS BERSIH (TANPA DOLAR)
  const daftarSoal = [
    {
      id: 1,
      kategori: "Persamaan Lingkaran",
      tanya: "Persamaan lingkaran yang berpusat di P(-1, 1) dan menyinggung garis 3x - 4y + 12 = 0 adalah...",
      opsi: [
        "A. x² + y² + 2x - 2y + 1 = 0",
        "B. x² + y² - 2x + 2y + 1 = 0",
        "C. x² + y² + 2x - 2y - 1 = 0",
        "D. x² + y² + 2x + 2y + 1 = 0",
        "E. x² + y² - 2x - 2y + 1 = 0"
      ],
      kunci: 0,
      rekomendasiVideo: "https://youtu.be/-NABrFzoP2w",
      pembahasan: "Langkah 1: Cari jari-jari (r) menggunakan rumus jarak titik pusat P(x1, y1) ke garis ax + by + c = 0.\nr = | (a.x1 + b.y1 + c) / √(a² + b²) |\nr = | (3(-1) + (-4)(1) + 12) / √(3² + (-4)²) |\nr = | (-3 - 4 + 12) / √25 | = | 5 / 5 | = 1\n\nLangkah 2: Masukkan ke rumus standar persamaan lingkaran (x - h)² + (y - k)² = r² dengan pusat (-1, 1):\n==> (x - (-1))² + (y - 1)² = 1²\n==> (x + 1)² + (y - 1)² = 1\n==> x² + 2x + 1 + y² - 2y + 1 = 1\n==> x² + y² + 2x - 2y + 1 = 0 (Pilihan A)."
    },
    {
      id: 2,
      kategori: "Trigonometri",
      tanya: "Nilai dari hasil operasi perkalian trigonometri dasar: cot(105°) × tan(15°) adalah...",
      opsi: [
        "A. 4√3 - 7",
        "B. 7 - 4√3",
        "C. -7 - 4√3",
        "D. 4√3 + 7",
        "E. 1"
      ],
      kunci: 0,
      rekomendasiVideo: "https://www.youtube.com/watch?v=-9JjnKEXp2Q",
      pembahasan: "Langkah 1: Menggunakan sifat relasi kuadran vertikal, nilai cot(105°) setara dengan -tan(15°).\nLangkah 2: Operasi perkalian pada soal berubah menjadi: -tan²(15°).\nLangkah 3: Menggunakan rumus selisih dua sudut tan(45° - 30°), didapatkan nilai tan(15°) = 2 - √3.\nLangkah 4: Kuadratkan nilai tersebut lalu kalikan dengan minus:\n==> -(2 - √3)²\n==> -(4 - 4√3 + 3)\n==> -(7 - 4√3)\n==> 4√3 - 7 (Pilihan A)."
    },
    {
      id: 3,
      kategori: "Peluang Permutasi",
      tanya: "Enam anak yang terdiri atas 3 laki-laki dan 3 perempuan duduk berjajar. Peluang ketiga anak perempuan duduk selalu berdampingan adalah...",
      opsi: ["A. 1/5", "B. 2/5", "C. 3/5", "D. 1/2", "E. 1/6"],
      kunci: 0,
      rekomendasiVideo: "https://www.youtube.com/watch?v=y7RxTdiJ7Kg",
      pembahasan: "Langkah 1: Cari ruang sampel total n(S) posisi duduk 6 anak: 6! = 6 × 5 × 4 × 3 × 2 × 1 = 720 cara.\nLangkah 2: Ikat 3 anak perempuan menjadi '1 grup objek tetap'. Sekarang total objek yang disusun menjadi 3 laki-laki + 1 grup = 4 objek. Banyak caranya adalah 4! = 24 cara.\nLangkah 3: Di dalam grup perempuan sendiri, mereka bisa saling bertukar posisi duduk sebanyak 3! = 6 cara.\nLangkah 4: Hitung total kejadian n(A) = 24 × 6 = 144 cara.\nLangkah 5: Peluang P(A) = n(A) / n(S) = 144 / 720 = 1/5 atau jika didesimalkan bernilai 0,2 (Pilihan A)."
    }
  ];

  const [jawabanUser, setJawabanUser] = useState({});
  const [sudahSubmit, setSudahSubmit] = useState(false);
  const [skor, setSkor] = useState(0);
  const [kategoriSalah, setKategoriSalah] = useState([]);

  const handlePilihJawaban = (soalId, opsiIdx) => {
    if (sudahSubmit) return;
    setJawabanUser({ ...jawabanUser, [soalId]: opsiIdx });
  };

  const hitungHasilTryOut = () => {
    let nilaiBenar = 0;
    let salahKategori = [];

    daftarSoal.forEach((soal) => {
      if (jawabanUser[soal.id] === soal.kunci) {
        nilaiBenar += 1;
      } else {
        const itemKategori = { nama: soal.kategori, link: soal.rekomendasiVideo };
        if (!salahKategori.some(e => e.nama === soal.kategori)) {
          salahKategori.push(itemKategori);
        }
      }
    });

    setSkor(Math.round((nilaiBenar / daftarSoal.length) * 100));
    setKategoriSalah(salahKategori);
    setSudahSubmit(true);
  };

  const downloadJadwalBerkah = () => {
    const isiTeks = `=====================================================\nTEMPLAT RENCANA BELAJAR BERKAH (RUMATUN & KAK ALIF)\n=====================================================\n\nJADWAL HARIAN ADAPTIF:\n-----------------------------------------------------\n04.30 - 05.30 | Shalat Subuh & Dzikir Pagi\n05.30 - 07.00 | Misi Mandiri 1: Pemahaman Konsep Matematika\n07.00 - 08.00 | Istirahat & Keluarga\n08.00 - 11.30 | Misi Mandiri 2: Implementasi Coding & Latihan\n11.30 - 13.00 | Shalat Dzuhur, Makan & Qailulah (Tidur Siang)\n13.00 - 15.00 | Misi Mandiri 3: Review Portofolio / Menulis\n15.00 - 16.00 | Jeda Shalat Ashar & Sore\n16.00 - 17.30 | Evaluasi Soal & Nonton Rekomendasi Video\n17.30 - 19.30 | Maghrib & Isya\n19.30 - 21.00 | Membaca Buku "Matematika Itu Asyik"\n21.00 - Rehat  | Istirahat Total`;
    const blob = new Blob([isiTeks], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Rencana_Belajar_Berkah_Rumatun.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  const [progresMisi, setProgresMisi] = useState(33);
  const [misiSelesai, setMisiSelesai] = useState({ bab1: true, bab2: false, bab3: false });

  const handleToggleMisi = (babKey, nilaiBeban) => {
    const statusBaru = !misiSelesai[babKey];
    setMisiSelesai({ ...misiSelesai, [babKey]: statusBaru });
    if (statusBaru) {
      setProgresMisi((prev) => Math.min(prev + nilaiBeban, 100));
    } else {
      setProgresMisi((prev) => Math.max(prev - nilaiBeban, 0));
    }
  };

  return (
    <div className="bg-zinc-950 text-white min-h-screen font-sans">
      <Navbar />

      <div className="container mx-auto px-6 max-w-5xl pt-28 pb-16 space-y-12">
        
        <div className="border-b border-zinc-850 pb-6">
          <h1 className="text-3xl font-black text-white sm:text-4xl tracking-tight">Pusat Misi Mandiri TKA &amp; Rumatun Ecosystem</h1>
          <p className="text-sm text-zinc-400 mt-2">Persiapan Akselerasi Menuju Ujian Akademik Oktober 2026.</p>
        </div>

        {/* JALUR MISI BELAJAR */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div>
              <span className="text-[10px] uppercase font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">Supabase Sync</span>
              <h3 className="text-lg font-bold text-white mt-1">🚀 Jalur Misi Belajar Anda (Learning Journey)</h3>
            </div>
            <span className="text-xl font-black text-cyan-400">{progresMisi}% Selesai</span>
          </div>

          <div className="w-full bg-zinc-800 h-3 rounded-full overflow-hidden mb-6">
            <div className="bg-gradient-to-r from-cyan-500 to-[#5246ff] h-full transition-all duration-500 ease-out" style={{ width: `${progresMisi}%` }}></div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-950/60 border border-zinc-800">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" checked={misiSelesai.bab1} onChange={() => handleToggleMisi('bab1', 33)} className="accent-cyan-500 h-4 w-4 rounded" />
                <span className="text-xs sm:text-sm font-medium">Episode 01: Fondasi Titik Pusat &amp; Jarak Garis Singgung Lingkaran</span>
              </label>
              <a href="https://youtu.be/-NABrFzoP2w" target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-400 hover:underline">📺 Tonton Video</a>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-950/60 border border-zinc-800">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" checked={misiSelesai.bab2} onChange={() => handleToggleMisi('bab2', 33)} className="accent-cyan-500 h-4 w-4 rounded" />
                <span className="text-xs sm:text-sm font-medium">Episode 02: Kupas Tuntas Kuadran &amp; Identitas Selisih Trigonometri</span>
              </label>
              <a href="https://www.youtube.com/watch?v=-9JjnKEXp2Q" target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-400 hover:underline">📺 Tonton Video</a>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-950/60 border border-zinc-800">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" checked={misiSelesai.bab3} onChange={() => handleToggleMisi('bab3', 34)} className="accent-cyan-500 h-4 w-4 rounded" />
                <span className="text-xs sm:text-sm font-medium">Episode 03: Logika Formulasi Aturan Permutasi &amp; Peluang Kejadian</span>
              </label>
              <a href="https://www.youtube.com/watch?v=y7RxTdiJ7Kg" target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-400 hover:underline">📺 Tonton Video</a>
            </div>
          </div>
        </div>

        {/* TEMPLAT JADWAL BERKAH */}
        <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-amber-400 flex items-center gap-2">📅 Templat Rencana Belajar Berkah harian</h3>
            <p className="text-xs sm:text-sm text-zinc-300 max-w-2xl">Jadwal harian penyeimbang belajar intensif dengan waktu emas ruhani bersama keluarga.</p>
          </div>
          <button onClick={downloadJadwalBerkah} className="rounded-xl bg-amber-400 hover:bg-amber-300 px-5 py-3 text-xs sm:text-sm font-black text-slate-950 shadow-md">
            📥 Unduh Jadwal Gratis (.txt)
          </button>
        </div>

        {/* KUIS BOX */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-10 shadow-xl space-y-8">
          <div>
            <span className="text-[10px] font-bold tracking-widest text-white/50 bg-white/5 border border-white/10 px-2.5 py-1 rounded">SIMULASI TKA MANDIRI</span>
            <h2 className="text-xl md:text-2xl font-black text-white mt-3">Kuis Mini Terarah: Menguji Logika Fondasi UTBK SNBT 2027</h2>
          </div>

          {sudahSubmit && (
            <div className="bg-zinc-950/80 border border-zinc-800 rounded-2xl p-6 grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-4 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-zinc-800 pb-4 md:pb-0">
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Hasil Skor Anda</span>
                <div className="relative flex items-end justify-center h-28 w-16 bg-zinc-900 rounded-xl mt-4 border border-zinc-800 overflow-hidden">
                  <div className={`w-full bg-gradient-to-t ${skor >= 60 ? 'from-emerald-600 to-emerald-400' : 'from-red-600 to-red-400'}`} style={{ height: `${skor}%` }}></div>
                  <span className="absolute inset-0 flex items-center justify-center font-black text-lg text-white">{skor}</span>
                </div>
              </div>

              <div className="md:col-span-8 space-y-3">
                <h4 className="text-sm font-bold text-zinc-200">🤖 Analisis Review Adaptif Terminator:</h4>
                {kategoriSalah.length > 0 ? (
                  <div className="space-y-2">
                    <p className="text-xs text-zinc-400">Anda disarankan mengulas kembali materi video Kak Alif pada kategori:</p>
                    <div className="flex flex-col gap-2">
                      {kategoriSalah.map((kat, idx) => (
                        <a key={idx} href={kat.link} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-cyan-400 hover:underline flex items-center gap-1.5">
                          📺 Tonton Evaluasi Topik: {kat.nama} &rarr;
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <p className="text-xs text-emerald-400 font-semibold">Luar biasa! Semua jawaban Anda benar sempurna.</p>
                )}
              </div>
            </div>
          )}

          {/* LIST SOAL */}
          <div className="space-y-8 border-t border-zinc-800/60 pt-6">
            {daftarSoal.map((soal, sIdx) => (
              <div key={soal.id} className="space-y-4 border-b border-zinc-800/40 pb-6 last:border-0">
                <h3 className="text-sm md:text-base font-bold text-zinc-100 flex gap-2 items-start">
                  <span>{sIdx + 1}.</span>
                  <span>{soal.tanya}</span>
                </h3>

                <div className="grid gap-2 pl-5">
                  {soal.opsi.map((opsi, oIdx) => {
                    const terpiih = jawabanUser[soal.id] === oIdx;
                    const adalahKunci = soal.kunci === oIdx;
                    
                    let kelasWarna = "bg-zinc-950/40 border-zinc-800 text-zinc-300 hover:bg-zinc-900 hover:border-zinc-700";
                    if (terpiih && !sudahSubmit) {
                      kelasWarna = "bg-[#5246ff] border-[#5246ff] text-white shadow-md";
                    } else if (sudahSubmit) {
                      if (adalahKunci) {
                        kelasWarna = "bg-emerald-600/20 border-emerald-500 text-emerald-300 font-bold";
                      } else if (terpiih && !adalahKunci) {
                        kelasWarna = "bg-red-600/20 border-red-500 text-red-300 line-through";
                      } else {
                        kelasWarna = "bg-zinc-950/20 border-zinc-900 text-zinc-500 cursor-not-allowed";
                      }
                    }

                    return (
                      <button
                        key={oIdx}
                        onClick={() => handlePilihJawaban(soal.id, oIdx)}
                        disabled={sudahSubmit}
                        className={`text-left p-3 rounded-xl border text-xs md:text-sm font-medium transition-all flex justify-between items-center ${kelasWarna}`}
                      >
                        <span>{opsi}</span>
                        {sudahSubmit && adalahKunci && <span className="text-emerald-400 font-black text-xs">✓ Kunci</span>}
                        {sudahSubmit && terpiih && !adalahKunci && <span className="text-red-400 font-black text-xs">✕ Salah</span>}
                      </button>
                    );
                  })}
                </div>

                {/* PEMBAHASAN DENGAN TAMPILAN TEXT BERSIH */}
                {sudahSubmit && (
                  <div className="mt-4 p-4 rounded-xl bg-zinc-950 border border-zinc-850 space-y-2 text-xs md:text-sm">
                    <h4 className="font-extrabold text-amber-400 flex items-center gap-1.5">💡 Solusi Penjabaran Rumus:</h4>
                    <p className="whitespace-pre-line text-zinc-300 leading-relaxed bg-zinc-900/30 p-4 rounded-xl border border-zinc-800/60 font-medium">
                      {soal.pembahasan}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="border-t border-zinc-800/60 pt-6 flex justify-end">
            <button
              onClick={hitungHasilTryOut}
              disabled={sudahSubmit || Object.keys(jawabanUser).length < daftarSoal.length}
              className={`rounded-2xl px-6 py-4 text-xs sm:text-sm font-black transition-all shadow-md ${
                sudahSubmit || Object.keys(jawabanUser).length < daftarSoal.length
                  ? 'bg-zinc-800 border border-zinc-700 text-zinc-500 cursor-not-allowed'
                  : 'bg-white hover:bg-slate-50 text-slate-950 active:scale-95'
              }`}
            >
              {sudahSubmit ? '✓ Hasil Jawaban Berhasil Dievaluasi' : '🚀 Selesai & Hitung Skor Hasil'}
            </button>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
}
