'use client';
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function TryOutPage() {
  // Data Soal Lengkap dengan Pembahasan Detil
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
      kunci: 0, // A
      rekomendasiVideo: "https://youtu.be/-NABrFzoP2w",
      pembahasan: "Langkah 1: Cari jari-jari (r) menggunakan rumus jarak titik pusat P(x₁, y₁) ke garis ax + by + c = 0.\n$r = \\left| \\frac{a x_1 + b y_1 + c}{\\sqrt{a^2 + b^2}} \\right|$\n$r = \\left| \\frac{3(-1) + (-4)(1) + 12}{\\sqrt{3^2 + (-4)^2}} \\right| = \\left| \\frac{-3 - 4 + 12}{\\sqrt{25}} \\right| = \\left| \\frac{5}{5} \\right| = 1$\n\nLangkah 2: Masukkan ke rumus standar persamaan lingkaran $(x - h)^2 + (y - k)^2 = r^2$ dengan pusat (-1, 1):\n$(x - (-1))^2 + (y - 1)^2 = 1^2$\n$(x + 1)^2 + (y - 1)^2 = 1$\n$x^2 + 2x + 1 + y^2 - 2y + 1 = 1$\n$x^2 + y^2 + 2x - 2y + 1 = 0$ (Pilihan A)."
    },
    {
      id: 2,
      kategori: "Logika Dasar",
      tanya: "Perhatikan pernyataan: 'Jika Kak Alif mengajar matematika, maka Uwais senang belajar coding.' Pernyataan yang setara (ekuivalen) dengan implikasi tersebut adalah...",
      opsi: [
        "A. Kak Alif tidak mengajar matematika atau Uwais senang belajar coding.",
        "B. Jika Uwais tidak senang belajar coding, maka Kak Alif tidak mengajar matematika.",
        "C. Kak Alif mengajar matematika dan Uwais tidak senang belajar coding.",
        "D. Pilihan A dan B benar.",
        "E. Pilihan A dan C benar."
      ],
      kunci: 3, // D
      rekomendasiVideo: "https://youtu.be/-NABrFzoP2w",
      pembahasan: "Dalam logika matematika, sebuah implikasi $p \\implies q$ secara standar ekuivalen (setara) dengan dua bentuk utama:\n1. Bentuk Disjungsi: $\\sim p \\lor q$ (Kak Alif tidak mengajar matematika atau Uwais senang belajar coding) -> Sesuai Pilihan A.\n2. Bentuk Kontraposisi: $\\sim q \\implies \\sim p$ (Jika Uwais tidak senang belajar coding, maka Kak Alif tidak mengajar matematika) -> Sesuai Pilihan B.\n\nKarena pilihan A dan B keduanya benar secara hukum logika, maka opsi yang paling tepat dan menyeluruh adalah Pilihan D."
    },
    {
      id: 3,
      kategori: "Persamaan Lingkaran",
      tanya: "Jari-jari lingkaran x² + y² - 4x + 6y - 12 = 0 adalah...",
      opsi: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"],
      kunci: 2, // C
      rekomendasiVideo: "https://youtu.be/-NABrFzoP2w",
      pembahasan: "Persamaan umum lingkaran: $x^2 + y^2 + Ax + By + C = 0$.\nDari soal didapatkan nilai koefisien: A = -4, B = 6, dan C = -12.\n\nRumus mencari jari-jari (r):\n$r = \\sqrt{\\left(\\frac{A}{-2}\\right)^2 + \\left(\\frac{B}{-2}\\right)^2 - C}$\n$r = \\sqrt{\\left(\\frac{-4}{-2}\\right)^2 + \\left(\\frac{6}{-2}\\right)^2 - (-12)}$\n$r = \\sqrt{(2)^2 + (-3)^2 + 12}$\n$r = \\sqrt{4 + 9 + 12} = \\sqrt{25} = 5$ (Pilihan C)."
    },
    {
      id: 4,
      kategori: "Logika Dasar",
      tanya: "Ingkaran (negasi) dari pernyataan 'Semua siswa kelas inklusi menyukai metode visual atau Bisindo' adalah...",
      opsi: [
        "A. Semua siswa kelas inklusi tidak menyukai metode visual dan Bisindo.",
        "B. Beberapa siswa kelas inklusi menyukai metode visual dan tidak menyukai Bisindo.",
        "C. Ada siswa kelas inklusi yang tidak menyukai metode visual dan tidak menyukai Bisindo.",
        "D. Tidak ada siswa kelas inklusi yang menyukai metode visual maupun Bisindo.",
        "E. Beberapa siswa kelas inklusi tidak menyukai metode visual atau tidak menyukai Bisindo."
      ],
      kunci: 2, // C
      rekomendasiVideo: "https://youtu.be/-NABrFzoP2w",
      pembahasan: "Pernyataan berkuantor universal bernilai: $\\forall x (P(x) \\lor Q(x))$.\nIngkaran dari kuantor 'Semua' ($\\forall$) adalah 'Ada / Beberapa / Terdapat' ($\\exists$).\nSesuai Hukum De Morgan, ingkaran dari operasi disjungsi $(P \\lor Q)$ berubah menjadi konjungsi $(\\sim P \\land \\sim Q)$.\n\nSehingga ingkarannya berbunyi: 'Ada siswa kelas inklusi yang tidak menyukai metode visual DAN tidak menyukai Bisindo' (Pilihan C)."
    },
    {
      id: 5,
      kategori: "Persamaan Lingkaran",
      tanya: "Lingkaran x² + y² = r² akan memotong garis y = x + 4 di dua titik yang berbeda jika...",
      opsi: ["A. r > 2", "B. r > 2√2", "C. r < 2√2", "D. r > 4", "E. r < 4"],
      kunci: 1, // B
      rekomendasiVideo: "https://youtu.be/-NABrFzoP2w",
      pembahasan: "Substitusikan persamaan garis $y = x + 4$ ke dalam persamaan lingkaran $x^2 + y^2 = r^2$:\n$x^2 + (x + 4)^2 = r^2$\n$x^2 + x^2 + 8x + 16 - r^2 = 0$\n$2x^2 + 8x + (16 - r^2) = 0$\n\nSyarat memotong di dua titik berbeda adalah nilai Diskriminan harus lebih besar dari nol ($D > 0$):\n$b^2 - 4ac > 0$\n$8^2 - 4(2)(16 - r^2) > 0$\n$64 - 8(16 - r^2) > 0$\n$64 - 128 + 8r^2 > 0$\n$-64 + 8r^2 > 0 \\implies 8r^2 > 64 \\implies r^2 > 8$\n$r > \\sqrt{8} \\implies r > 2\\sqrt{2}$ (Pilihan B)."
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
        if (!salahKategori.includes(soal.kategori)) {
          salahKategori.push(soal.kategori);
        }
      }
    });

    setSkor((nilaiBenar / daftarSoal.length) * 100);
    setKategoriSalah(salahKategori);
    setSudahSubmit(true);
  };

  const downloadJadwalBerkah = () => {
    const isiTeks = `=====================================================\nTEMPLAT RENCANA BELAJAR BERKAH (RUMAATUN & KAK ALIF)\n=====================================================\n\nJADWAL HARIAN ADAPTIF:\n-----------------------------------------------------\n04.30 - 05.30 | Shalat Subuh & Dzikir Pagi\n05.30 - 07.00 | Misi Mandiri 1: Pemahaman Konsep Matematika\n07.00 - 08.00 | Istirahat, Sarapan & Quality Time Keluarga\n08.00 - 11.30 | Misi Mandiri 2: Implementasi Coding & Latihan Soal\n11.30 - 13.00 | Jeda Shalat Dzuhur, Makan Siang & Qailulah\n13.00 - 15.00 | Misi Mandiri 3: Review Portofolio\n15.00 - 16.00 | Jeda Shalat Ashar & Refreshing Sore Ringan\n16.00 - 17.30 | Evaluasi Soal Salah & Menonton Video\n17.30 - 19.30 | Jeda Shalat Maghrib & Isya\n19.30 - 21.00 | Sesi Santai / Membaca Buku\n21.00 - Rehat  | Istirahat Total\n\n[ ] Shalat 5 Waktu Tepat Waktu?\n[ ] Apakah Ada Konsep Matematika yang Masih 'Monster'?`;
    const blob = new Blob([isiTeks], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Rencana_Belajar_Berkah_Rumaatun.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  const [progresMisi, setProgresMisi] = useState(25);
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
        
        {/* HEADER */}
        <div className="border-b border-zinc-850 pb-6">
          <h1 className="text-3xl font-black text-white sm:text-4xl tracking-tight">
            Pusat Misi Mandiri TKA &amp; Rumaatun Ecosystem
          </h1>
          <p className="text-sm text-zinc-400 mt-2">
            Persiapan Akselerasi Menuju Ujian Akademik Oktober 2026.
          </p>
        </div>

        {/* JALUR MISI BELAJAR */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div>
              <span className="text-[10px] uppercase font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                Supabase Sync Connected
              </span>
              <h3 className="text-lg font-bold text-white mt-1">🚀 Jalur Misi Belajar Anda (Learning Journey)</h3>
            </div>
            <span className="text-xl font-black text-cyan-400">{progresMisi}% Selesai</span>
          </div>

          <div className="w-full bg-zinc-800 h-3 rounded-full overflow-hidden shadow-inner mb-6">
            <div className="bg-gradient-to-r from-cyan-500 to-[#5246ff] h-full transition-all duration-500 ease-out" style={{ width: `${progresMisi}%` }}></div>
          </div>

          <div className="space-y-3">
            <label className="flex items-center justify-between p-3 rounded-xl bg-zinc-950/60 border border-zinc-800 cursor-pointer hover:bg-zinc-900 transition-colors">
              <div className="flex items-center gap-3">
                <input type="checkbox" checked={misiSelesai.bab1} onChange={() => handleToggleMisi('bab1', 25)} className="accent-cyan-500 h-4 w-4 rounded" />
                <span className="text-xs sm:text-sm font-medium">Episode 01: Fondasi Titik Pusat &amp; Jarak Garis Singgung Lingkaran</span>
              </div>
              <span className="text-[10px] font-bold text-zinc-500">Misi 1 (25%)</span>
            </label>
            <label className="flex items-center justify-between p-3 rounded-xl bg-zinc-950/60 border border-zinc-800 cursor-pointer hover:bg-zinc-900 transition-colors">
              <div className="flex items-center gap-3">
                <input type="checkbox" checked={misiSelesai.bab2} onChange={() => handleToggleMisi('bab2', 35)} className="accent-cyan-500 h-4 w-4 rounded" />
                <span className="text-xs sm:text-sm font-medium">Episode 02: Membedakan Negasi Konjungsi vs Disjungsi dengan Diagram Visual</span>
              </div>
              <span className="text-[10px] font-bold text-zinc-500">Misi 2 (35%)</span>
            </label>
          </div>
        </div>

        {/* JADWAL BERKAH */}
        <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-amber-400 flex items-center gap-2">📅 Templat Rencana Belajar Berkah harian</h3>
            <p className="text-xs sm:text-sm text-zinc-300 max-w-2xl">Seimbangkan belajar intensif dengan waktu emas ruhani bersama keluarga.</p>
          </div>
          <button onClick={downloadJadwalBerkah} className="rounded-xl bg-amber-400 hover:bg-amber-300 px-5 py-3 text-xs sm:text-sm font-black text-slate-950 shadow-md">
            📥 Unduh Jadwal Gratis (.txt)
          </button>
        </div>

        {/* AREA TRY-OUT */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-10 shadow-xl space-y-8">
          <div>
            <span className="text-[10px] font-bold tracking-widest text-white/50 bg-white/5 border border-white/10 px-2.5 py-1 rounded">SIMULASI TKA MANDIRI</span>
            <h2 className="text-xl md:text-2xl font-black text-white mt-3">Kuis Mini Terarah: Persamaan Lingkaran &amp; Logika Dasar</h2>
          </div>

          {sudahSubmit && (
            <div className="bg-zinc-950/80 border border-zinc-800 rounded-2xl p-6 grid md:grid-cols-12 gap-6 items-center animate-fadeIn">
              <div className="md:col-span-4 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-zinc-800 pb-4 md:pb-0">
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Hasil Skor Anda</span>
                <div className="relative flex items-end justify-center h-28 w-16 bg-zinc-900 rounded-xl mt-4 border border-zinc-800 overflow-hidden">
                  <div className={`w-full bg-gradient-to-t ${skor >= 60 ? 'from-emerald-600 to-emerald-400' : 'from-red-600 to-red-400'}`} style={{ height: `${skor}%` }}></div>
                  <span className="absolute inset-0 flex items-center justify-center font-black text-lg text-white">{skor}</span>
                </div>
              </div>

              <div className="md:col-span-8 space-y-3">
                <h4 className="text-sm font-bold text-zinc-200">🤖 Rekomendasi Review Khusen Terminator:</h4>
                {kategoriSalah.length > 0 ? (
                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-2">
                      {kategoriSalah.map((kat, idx) => (
                        <span key={idx} className="text-[11px] font-bold bg-red-500/10 border border-red-500/20 text-red-400 px-2.5 py-1 rounded-md">⚠️ {kat}</span>
                      ))}
                    </div>
                    <a href="https://youtu.be/-NABrFzoP2w" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 hover:underline pt-2">
                      📺 Buka Video Pembahasan Persamaan Lingkaran &amp; UTBK SNBT &rarr;
                    </a>
                  </div>
                ) : (
                  <p className="text-xs text-emerald-400 font-semibold">Luar biasa sempurna! Semua jawaban Anda benar.</p>
                )}
              </div>
            </div>
          )}

          {/* DAFTAR SOAL & LOGIKA EVALUASI WARNA */}
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
                    
                    // Logika Styling Dinamis Pasca Submit
                    let kelasWarna = "bg-zinc-950/40 border-zinc-800 text-zinc-300 hover:bg-zinc-900 hover:border-zinc-700";
                    if (terpiih && !sudahSubmit) {
                      kelasWarna = "bg-[#5246ff] border-[#5246ff] text-white shadow-md";
                    } else if (sudahSubmit) {
                      if (adalahKunci) {
                        // Kunci jawaban asli selalu hijau terang
                        kelasWarna = "bg-emerald-600/20 border-emerald-500 text-emerald-300 font-bold shadow-md shadow-emerald-900/10";
                      } else if (terpiih && !adalahKunci) {
                        // Jika pilihan user salah, warnai merah
                        kelasWarna = "bg-red-600/20 border-red-500 text-red-300 line-through shadow-md shadow-red-900/10";
                      } else {
                        // Pilihan lain yang tidak dipilih dinonaktifkan transparan
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

                {/* BLOK PEMBAHASAN DETIL */}
                {sudahSubmit && (
                  <div className="mt-4 p-4 rounded-xl bg-zinc-950 border border-zinc-850 space-y-2 text-xs md:text-sm animate-fadeIn">
                    <h4 className="font-extrabold text-amber-400 flex items-center gap-1.5">
                      💡 Pembahasan Nilai Matematika:
                    </h4>
                    <p className="whitespace-pre-line text-zinc-300 leading-relaxed font-mono bg-zinc-900/50 p-3 rounded-lg border border-zinc-800/40">
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
