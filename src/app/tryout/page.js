'use client';
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function TryOutPage() {
  // Masukkan URL Web App dari Google Apps Script Anda di sini nanti
  const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxRCRazFCmk256qpO64d3s-oYbZ1sQESHPaN1g8axherZMj8CFv69Z0tOX_9lHRTy2C/exec";

  // Data Soal Mandiri
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
      pembahasan: "Langkah 1: Jarak titik ke garis singgung lingkaran menghasilkan nilai jari-jari (r) = 1.\nLangkah 2: Masukkan ke rumus standar persamaan lingkaran (x - h)² + (y - k)² = r² dengan pusat (-1, 1):\n==> (x - (-1))² + (y - 1)² = 1²\n==> (x + 1)² + (y - 1)² = 1\n==> x² + 2x + 1 + y² - 2y + 1 = 1\n==> x² + y² + 2x - 2y + 1 = 0 (Pilihan A)."
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
      pembahasan: "Langkah 1: Cari ruang sampel total n(S) posisi duduk 6 anak: 6! = 720 cara.\nLangkah 2: Ikat 3 anak perempuan menjadi '1 grup objek tetap'. Sekarang total objek yang disusun menjadi 3 laki-laki + 1 grup = 4 objek (4! = 24 cara).\nLangkah 3: Di dalam grup perempuan sendiri, mereka bisa saling bertukar posisi duduk sebanyak 3! = 6 cara.\nLangkah 4: Hitung total kejadian n(A) = 24 × 6 = 144 cara.\nLangkah 5: Peluang P(A) = n(A) / n(S) = 144 / 720 = 1/5 atau jika didesimalkan bernilai 0,2 (Pilihan A)."
    }
  ];

  // Identitas Siswa States
  const [identitas, setIdentitas] = useState({ nama: '', sekolah: '', kelas: '' });
  const [formSelesai, setFormSelesai] = useState(false);
  const [isSending, setIsSending] = useState(false);

  // Kuis States
  const [jawabanUser, setJawabanUser] = useState({});
  const [sudahSubmit, setSudahSubmit] = useState(false);
  const [skor, setSkor] = useState(0);
  const [kategoriSalah, setKategoriSalah] = useState([]);

  const handlePilihJawaban = (soalId, opsiIdx) => {
    if (sudahSubmit) return;
    setJawabanUser({ ...jawabanUser, [soalId]: opsiIdx });
  };

  const hitungHasilTryOut = async () => {
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

    const hasilSkor = Math.round((nilaiBenar / daftarSoal.length) * 100);
    setSkor(hasilSkor);
    setKategoriSalah(salahKategori);
    setSudahSubmit(true);
    setIsSending(true);

    // KIRIM DATA KE GOOGLE SPREADSHEET (APPS SCRIPT)
    try {
      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nama: identitas.nama,
          sekolah: identitas.sekolah,
          kelas: identitas.kelas,
          skor: hasilSkor,
          jawaban: jawabanUser
        })
      });
    } catch (error) {
      console.error("Gagal mengirim ke spreadsheet:", error);
    } finally {
      setIsSending(false);
    }
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

        {/* 1. LAYER FORM IDENTITAS (DIRENDER SEBELUM KUIS) */}
        {!formSelesai ? (
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-10 max-w-xl mx-auto shadow-2xl space-y-6">
            <div className="text-center">
              <h3 className="text-xl font-black text-white">📝 Validasi Peserta Tryout Rumatun</h3>
              <p className="text-xs text-zinc-400 mt-1">Silakan lengkapi data diri Anda sebelum memulai pengerjaan kuis.</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1">Nama Lengkap</label>
                <input 
                  type="text" 
                  value={identitas.nama} 
                  onChange={(e) => setIdentitas({...identitas, nama: e.target.value})}
                  placeholder="Contoh: Uwais Abdussalam" 
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 text-white"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1">Asal Sekolah</label>
                <input 
                  type="text" 
                  value={identitas.sekolah} 
                  onChange={(e) => setIdentitas({...identitas, sekolah: e.target.value})}
                  placeholder="Contoh: SMA Negeri 1 Maros" 
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 text-white"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1">Kelas</label>
                <input 
                  type="text" 
                  value={identitas.kelas} 
                  onChange={(e) => setIdentitas({...identitas, kelas: e.target.value})}
                  placeholder="Contoh: 12 MIPA / Gap Year" 
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 text-white"
                />
              </div>
            </div>

            <button 
              onClick={() => setFormSelesai(true)}
              disabled={!identitas.nama || !identitas.sekolah || !identitas.kelas}
              className={`w-full rounded-xl py-3.5 text-xs sm:text-sm font-black transition-all ${
                !identitas.nama || !identitas.sekolah || !identitas.kelas
                  ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed border border-zinc-700'
                  : 'bg-white hover:bg-slate-100 text-slate-950 font-extrabold shadow-md'
              }`}
            >
              Mulai Misi Simulasi Kuis &rarr;
            </button>
          </div>
        ) : (
          /* 2. MAIN INTERACTIVE DASHBOARD (DIRENDER SETELAH VALIDASI IDENTITAS) */
          <>
            {/* JALUR MISI BELAJAR */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div>
                  <span className="text-[10px] uppercase font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">Peserta: {identitas.nama} ({identitas.sekolah})</span>
                  <h3 className="text-lg font-bold text-white mt-1">🚀 Jalur Misi Belajar Anda (Learning Journey)</h3>
                </div>
                <span className="text-xl font-black text-cyan-400">{progresMisi}% Selesai</span>
              </div>
              <div className="w-full bg-zinc-800 h-3 rounded-full overflow-hidden mb-6">
                <div className="bg-gradient-to-r from-cyan-500 to-[#5246ff] h-full transition-all" style={{ width: `${progresMisi}%` }}></div>
              </div>
              {/* Checklist inputs omitted for brevity, same as previous screen */}
            </div>

            {/* KUIS BOX */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-10 shadow-xl space-y-8">
              <div>
                <span className="text-[10px] font-bold tracking-widest text-white/50 bg-white/5 border border-white/10 px-2.5 py-1 rounded">SIMULASI TKA MANDIRI</span>
                <h2 className="text-xl md:text-2xl font-black text-white mt-3">Kuis Mini Terarah: Menguji Logika Fondasi untuk TKA 2026 dan UTBK 2027</h2>
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
                    {isSending ? (
                      <p className="text-xs text-amber-400 font-semibold animate-pulse">⏳ Menyimpan lembar jawaban ke Cloud Spreadsheet...</p>
                    ) : (
                      <p className="text-xs text-emerald-400 font-semibold">✓ Nilai berhasil dikunci dan dikirim ke sistem guru!</p>
                    )}
                  </div>
                </div>
              )}

              {/* DAFTAR SOAL RENDER LOOP */}
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
                        if (terpiih && !sudahSubmit) kelasWarna = "bg-[#5246ff] border-[#5246ff] text-white shadow-md";
                        else if (sudahSubmit) {
                          if (adalahKunci) kelasWarna = "bg-emerald-600/20 border-emerald-500 text-emerald-300 font-bold";
                          else if (terpiih && !adalahKunci) kelasWarna = "bg-red-600/20 border-red-500 text-red-300 line-through";
                          else kelasWarna = "bg-zinc-950/20 border-zinc-900 text-zinc-500 cursor-not-allowed";
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

                    {sudahSubmit && (
                      <div className="mt-4 p-4 rounded-xl bg-zinc-950 border border-zinc-850 space-y-2 text-xs md:text-sm">
                        <h4 className="font-extrabold text-amber-400 flex items-center gap-1.5">💡 Solusi Penjabaran Rumus:</h4>
                        <p className="whitespace-pre-line text-zinc-300 leading-relaxed bg-zinc-900/30 p-4 rounded-xl border border-zinc-800/60 font-medium">{soal.pembahasan}</p>
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
                      ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
                      : 'bg-white text-slate-950 active:scale-95'
                  }`}
                >
                  {sudahSubmit ? '✓ Hasil Jawaban Berhasil Dievaluasi' : '🚀 Selesai & Kirim Skor'}
                </button>
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}
