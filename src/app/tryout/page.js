'use client';
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function TryOutPage() {
  // ==========================================
  // FITUR 1: DATA SOAL & LOGIKA MINI TRY-OUT
  // ==========================================
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
      rekomendasiVideo: "https://youtu.be/-NABrFzoP2w"
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
      kunci: 3, // D (p ekuivalen ~p v q dan ~q -> ~p)
      rekomendasiVideo: "https://youtu.be/-NABrFzoP2w"
    },
    {
      id: 3,
      kategori: "Persamaan Lingkaran",
      tanya: "Jari-jari lingkaran x² + y² - 4x + 6y - 12 = 0 adalah...",
      opsi: ["A. 3", "B. 4", "C. 5", "D. 6", "E. 7"],
      kunci: 2, // C (r = sqrt(4 + 9 - (-12)) = sqrt(25) = 5)
      rekomendasiVideo: "https://youtu.be/-NABrFzoP2w"
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
      rekomendasiVideo: "https://youtu.be/-NABrFzoP2w"
    },
    {
      id: 5,
      kategori: "Persamaan Lingkaran",
      tanya: "Lingkaran x² + y² = r² akan memotong garis y = x + 4 di dua titik yang berbeda jika...",
      opsi: ["A. r > 2", "B. r > 2√2", "C. r < 2√2", "D. r > 4", "E. r < 4"],
      kunci: 1, // B
      rekomendasiVideo: "https://youtu.be/-NABrFzoP2w"
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

  // ==========================================
  // FITUR 2: TEMPLAT RENCANA BELAJAR BERKAH
  // ==========================================
  const downloadJadwalBerkah = () => {
    const isiTeks = `=====================================================
TEMPLAT RENCANA BELAJAR BERKAH (RUMAATUN & KAK ALIF)
=====================================================

Target Utama: Istiqomah, Paham Fondasi, Kejar Keberkahan
Slogan: "Work for Hajj, Study for Ummah"

JADWAL HARIAN ADAPTIF:
-----------------------------------------------------
04.30 - 05.30 | Shalat Subuh & Dzikir Pagi (Fokus Ruhani)
05.30 - 07.00 | Misi Mandiri 1: Pemahaman Konsep Matematika
07.00 - 08.00 | Istirahat, Sarapan & Quality Time Keluarga
08.00 - 11.30 | Misi Mandiri 2: Implementasi Coding & Latihan Soal
11.30 - 13.00 | Jeda Shalat Dzuhur, Makan Siang & Qailulah (Tidur Siang)
13.00 - 15.00 | Misi Mandiri 3: Review Portofolio / Menulis Catatan
15.00 - 16.00 | Jeda Shalat Ashar & Refreshing Sore Ringan
16.00 - 17.30 | Evaluasi Soal Salah & Menonton Video Rekomendasi
17.30 - 19.30 | Jeda Shalat Maghrib, Makan Malam & Isya
19.30 - 21.00 | Sesi Santai / Membaca Buku "Matematika Itu Asyik"
21.00 - Kiamat | Istirahat Total (Evaluasi Diri)

Catatan Evaluasi Harian:
[ ] Shalat 5 Waktu Tepat Waktu?
[ ] Apakah Ada Konsep Matematika yang Masih 'Monster'?
[ ] Sudah Berbagi Kebaikan Hari Ini?`;

    const blob = new Blob([isiTeks], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Rencana_Belajar_Berkah_Rumaatun.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  // ==========================================
  // FITUR 3: SIMULASI JALUR MISI BELAJAR (SUPABASE)
  // ==========================================
  const [progresMisi, setProgresMisi] = useState(25); // Default awal 25%
  const [misiSelesai, setMisiSelesai] = useState({ bab1: true, bab2: false, bab3: false });

  const handleToggleMisi = async (babKey, nilaiBeban) => {
    const statusBaru = !misiSelesai[babKey];
    setMisiSelesai({ ...misiSelesai, [babKey]: statusBaru });
    
    // Perubahan Progres Interaktif
    if (statusBaru) {
      setProgresMisi((prev) => Math.min(prev + nilaiBeban, 100));
    } else {
      setProgresMisi((prev) => Math.max(prev - nilaiBeban, 0));
    }

    /* 
      Rencana Jembatan Supabase (Pak Alif Tinggal Aktifkan Jika Sudah Client Auth):
      const { data, error } = await supabase
        .from('learning_journey')
        .update({ status_complete: statusBaru })
        .eq('user_id', user.id)
        .eq('chapter_key', babKey);
    */
  };

  return (
    <div className="bg-zinc-950 text-white min-h-screen font-sans">
      <Navbar />

      <div className="container mx-auto px-6 max-w-5xl pt-28 pb-16 space-y-12">
        {/* HEADER UTAMA */}
        <div className="border-b border-zinc-850 pb-6">
          <h1 className="text-3xl font-black text-white sm:text-4xl tracking-tight">
            Pusat Misi Mandiri TKA &amp; Rumaatun Ecosystem
          </h1>
          <p className="text-sm text-zinc-400 mt-2">
            Persiapan Akselerasi Menuju Ujian Akademik Oktober 2026.
          </p>
        </div>

        {/* ==========================================
            RENDER FITUR 3: JALUR MISI BELAJAR (DASHBOARD ATAS)
            ========================================== */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div>
              <span className="text-[10px] uppercase font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                Supabase Sync Connected (Simulated)
              </span>
              <h3 className="text-lg font-bold text-white mt-1">🚀 Jalur Misi Belajar Anda (Learning Journey)</h3>
            </div>
            <span className="text-xl font-black text-cyan-400">{progresMisi}% Selesai</span>
          </div>

          {/* Progress Bar Visual Bawaan */}
          <div className="w-full bg-zinc-800 h-3 rounded-full overflow-hidden shadow-inner mb-6">
            <div 
              className="bg-gradient-to-r from-cyan-500 to-[#5246ff] h-full transition-all duration-500 ease-out"
              style={{ width: `${progresMisi}%` }}
            ></div>
          </div>

          {/* List Episode Checklist Box */}
          <div className="space-y-3">
            <label className="flex items-center justify-between p-3 rounded-xl bg-zinc-950/60 border border-zinc-800 cursor-pointer hover:bg-zinc-900 transition-colors">
              <div className="flex items-center gap-3">
                <input 
                  type="checkbox" 
                  checked={misiSelesai.bab1} 
                  onChange={() => handleToggleMisi('bab1', 25)}
                  className="accent-cyan-500 h-4 w-4 rounded"
                />
                <span className="text-xs sm:text-sm font-medium">Episode 01: Fondasi Titik Pusat &amp; Jarak Garis Singgung Lingkaran</span>
              </div>
              <span className="text-[10px] font-bold text-zinc-500">Misi 1 (25%)</span>
            </label>

            <label className="flex items-center justify-between p-3 rounded-xl bg-zinc-950/60 border border-zinc-800 cursor-pointer hover:bg-zinc-900 transition-colors">
              <div className="flex items-center gap-3">
                <input 
                  type="checkbox" 
                  checked={misiSelesai.bab2} 
                  onChange={() => handleToggleMisi('bab2', 35)}
                  className="accent-cyan-500 h-4 w-4 rounded"
                />
                <span className="text-xs sm:text-sm font-medium">Episode 02: Membedakan Negasi Konjungsi vs Disjungsi dengan Diagram Visual</span>
              </div>
              <span className="text-[10px] font-bold text-zinc-500">Misi 2 (35%)</span>
            </label>

            <label className="flex items-center justify-between p-3 rounded-xl bg-zinc-950/60 border border-zinc-800 cursor-pointer hover:bg-zinc-900 transition-colors">
              <div className="flex items-center gap-3">
                <input 
                  type="checkbox" 
                  checked={misiSelesai.bab3} 
                  onChange={() => handleToggleMisi('bab3', 40)}
                  className="accent-cyan-500 h-4 w-4 rounded"
                />
                <span className="text-xs sm:text-sm font-medium">Episode 03: Logika Ekuivalensi Implikasi &amp; Kontraposisi SNBT Soal</span>
              </div>
              <span className="text-[10px] font-bold text-zinc-500">Misi 3 (40%)</span>
            </label>
          </div>
        </div>

        {/* ==========================================
            RENDER FITUR 2: RENCANA BELAJAR BERKAH
            ========================================== */}
        <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-amber-400 flex items-center gap-2">
              📅 Templat Rencana Belajar Berkah harian
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 max-w-2xl">
              Atur waktu belajar matematika dan coding secara presisi, diseimbangkan dengan jeda waktu ibadah, dzikir harian, serta waktu emas bersama keluarga tercinta.
            </p>
          </div>
          <button 
            onClick={downloadJadwalBerkah}
            className="whitespace-nowrap rounded-xl bg-amber-400 hover:bg-amber-300 px-5 py-3 text-xs sm:text-sm font-black text-slate-950 shadow-md transition-transform active:scale-95"
          >
            📥 Unduh Jadwal Gratis (.txt)
          </button>
        </div>

        {/* ==========================================
            RENDER FITUR 1: AREA EXAM TRY-OUT MANDIRI
            ========================================== */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-10 shadow-xl space-y-8">
          <div>
            <span className="text-[10px] font-bold tracking-widest text-white/50 bg-white/5 border border-white/10 px-2.5 py-1 rounded">
              SIMULASI TKA MANDIRI
            </span>
            <h2 className="text-xl md:text-2xl font-black text-white mt-3">
              Kuis Mini Terarah: Persamaan Lingkaran &amp; Logika Dasar
            </h2>
          </div>

          {/* HASIL KUIS / SKOR & GRAFIK (DIRENDER BILA SUDAH SUBMIT) */}
          {sudahSubmit && (
            <div className="bg-zinc-950/80 border border-zinc-800 rounded-2xl p-6 grid md:grid-cols-12 gap-6 items-center animate-fadeIn">
              {/* Grafik Batang Skor Sederhana */}
              <div className="md:col-span-4 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-zinc-800 pb-4 md:pb-0">
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Hasil Skor Anda</span>
                <div className="relative flex items-end justify-center h-28 w-16 bg-zinc-900 rounded-xl mt-4 border border-zinc-800 overflow-hidden shadow-inner">
                  <div 
                    className={`w-full transition-all duration-1000 bg-gradient-to-t ${skor >= 60 ? 'from-emerald-600 to-emerald-400' : 'from-red-600 to-red-400'}`}
                    style={{ height: `${skor}%` }}
                  ></div>
                  <span className="absolute inset-0 flex items-center justify-center font-black text-lg text-white drop-shadow">
                    {skor}
                  </span>
                </div>
              </div>

              {/* Rekomendasi Video Berdasarkan Kesalahan */}
              <div className="md:col-span-8 space-y-3">
                <h4 className="text-sm font-bold text-zinc-200">🤖 Rekomendasi Review Khusus Terminator:</h4>
                {kategoriSalah.length > 0 ? (
                  <div className="space-y-2">
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Berdasarkan kesalahan jawaban, Anda disarankan untuk menonton ulang video penjelasan konsep dasar pada topik:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {kategoriSalah.map((kat, idx) => (
                        <span key={idx} className="text-[11px] font-bold bg-red-500/10 border border-red-500/20 text-red-400 px-2.5 py-1 rounded-md">
                          ⚠️ {kat}
                        </span>
                      ))}
                    </div>
                    <div className="pt-2">
                      <a 
                        href="https://youtu.be/-NABrFzoP2w" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 hover:underline"
                      >
                        📺 Buka Video Pembahasan Persamaan Lingkaran &amp; UTBK SNBT &rarr;
                      </a>
                    </div>
                  </div>
                ) : (
                  <p className="text-xs text-emerald-400 font-semibold">
                    Luar biasa sempurna! Semua jawaban Anda benar. Pertahankan fokus Anda hingga Ujian Akhir Oktober 2026!
                  </p>
                )}
              </div>
            </div>
          )}

          {/* DAFTAR SOAL RENDER */}
          <div className="space-y-8 border-t border-zinc-800/60 pt-6">
            {daftarSoal.map((soal, sIdx) => (
              <div key={soal.id} className="space-y-4">
                <h3 className="text-sm md:text-base font-bold text-zinc-100 flex gap-2 items-start">
                  <span>{sIdx + 1}.</span>
                  <span>{soal.tanya}</span>
                </h3>

                <div className="grid gap-2 pl-5">
                  {soal.opsi.map((opsi, oIdx) => {
                    const terpiih = jawabanUser[soal.id] === oIdx;
                    return (
                      <button
                        key={oIdx}
                        onClick={() => handlePilihJawaban(soal.id, oIdx)}
                        disabled={sudahSubmit}
                        className={`text-left p-3 rounded-xl border text-xs md:text-sm font-medium transition-all ${
                          terpiih 
                            ? 'bg-[#5246ff] border-[#5246ff] text-white shadow-md' 
                            : 'bg-zinc-950/40 border-zinc-800 text-zinc-300 hover:bg-zinc-900 hover:border-zinc-700'
                        }`}
                      >
                        {opsi}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* TOMBOL SUBMIT KUIS */}
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
              {sudahSubmit ? '✓ Jawaban Berhasil Dikunci' : '🚀 Selesai & Hitung Skor Hasil'}
            </button>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
}
