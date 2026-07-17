'use client';
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function TryOutPage() {
  // URL Google Apps Script Anda yang sudah aktif
  const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxRCRazFCmk256qpO64d3s-oYbZ1sQESHPaN1g8axherZMj8CFv69Z0tOX_9lHRTy2C/exec";

  // DATA 8 SOAL: 3 SOAL UTBK + 5 SOAL BARU TKA
  const daftarSoal = [
    {
      id: 1,
      jenis: "UTBK",
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
      pembahasan: "Langkah 1: Cari jari-jari (r) menggunakan rumus jarak titik pusat P(x1, y1) ke garis ax + by + c = 0.\nr = | (a.x1 + b.y1 + c) / √(a² + b²) |\nr = | (3(-1) + (-4)(1) + 12) / √(3² + (-4)²) |\nr = | (-3 - 4 + 12) / √25 | = | 5 / 5 | = 1\n\nLangkah 2: Masukkan ke rumus standar (x - h)² + (y - k)² = r² dengan pusat (-1, 1):\n==> (x - (-1))² + (y - 1)² = 1²\n==> (x + 1)² + (y - 1)² = 1\n==> x² + 2x + 1 + y² - 2y + 1 = 1\n==> x² + y² + 2x - 2y + 1 = 0 (Pilihan A)."
    },
    {
      id: 2,
      jenis: "UTBK",
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
      jenis: "UTBK",
      kategori: "Peluang Permutasi",
      tanya: "Enam anak yang terdiri atas 3 laki-laki dan 3 perempuan duduk berjajar. Peluang ketiga anak perempuan duduk selalu berdampingan adalah...",
      opsi: ["A. 1/5", "B. 2/5", "C. 3/5", "D. 1/2", "E. 1/6"],
      kunci: 0,
      rekomendasiVideo: "https://www.youtube.com/watch?v=y7RxTdiJ7Kg",
      pembahasan: "Langkah 1: Cari ruang sampel total n(S) posisi duduk 6 anak: 6! = 720 cara.\nLangkah 2: Ikat 3 anak perempuan menjadi '1 grup objek tetap'. Sekarang total objek yang disusun menjadi 3 laki-laki + 1 grup = 4 objek. Banyak caranya adalah 4! = 24 cara.\nLangkah 3: Di dalam grup perempuan sendiri, mereka bisa saling bertukar posisi duduk sebanyak 3! = 6 cara.\nLangkah 4: Hitung total kejadian n(A) = 24 × 6 = 144 cara.\nLangkah 5: Peluang P(A) = n(A) / n(S) = 144 / 720 = 1/5 atau jika didesimalkan bernilai 0,2 (Pilihan A)."
    },
    {
      id: 4,
      jenis: "TKA",
      kategori: "Logaritma Lanjutan",
      tanya: "Jika ²log 3 = a dan ³log 5 = b, maka nilai dari ⁶log 15 adalah...",
      opsi: [
        "A. (a + b) / (1 + a)",
        "B. a(1 + b) / (1 + a)",
        "C. (1 + b) / (1 + a)",
        "D. a(1 + b) / a",
        "E. (1 + ab) / (1 + a)"
      ],
      kunci: 1,
      rekomendasiVideo: "https://youtu.be/-NABrFzoP2w",
      pembahasan: "Langkah 1: Gunakan sifat logaritma x_log y = ³log y / ³log x.\nLangkah 2: Ubah basis ⁶log 15 menggunakan basis 3 yang paling banyak muncul.\n==> ⁶log 15 = ³log 15 / ³log 6\n==> ³log (3 × 5) / ³log (2 × 3)\n==> (³log 3 + ³log 5) / (³log 2 + ³log 3)\nLangkah 3: Substitusikan nilai a dan b. Ingat ³log 2 = 1 / ²log 3 = 1/a.\n==> (1 + b) / (1/a + 1)\n==> (1 + b) / ((1 + a)/a)\n==> a(1 + b) / (1 + a) (Pilihan B)."
    },
    {
      id: 5,
      jenis: "TKA",
      kategori: "Turunan Fungsi Aljabar",
      tanya: "Turunan pertama dari fungsi f(x) = (2x² - 3)³ adalah f'(x) = ...",
      opsi: [
        "A. 3(2x² - 3)²",
        "B. 4x(2x² - 3)²",
        "C. 12x(2x² - 3)²",
        "D. 12x²(2x² - 3)²",
        "E. 6x(2x² - 3)²"
      ],
      kunci: 2,
      rekomendasiVideo: "https://youtu.be/-NABrFzoP2w",
      pembahasan: "Langkah 1: Gunakan aturan rantai turunan fungsi komposisi. Jika f(x) = [u(x)]^n, maka f'(x) = n · [u(x)]^(n-1) · u'(x).\nLangkah 2: Tentukan u(x) = 2x² - 3, sehingga u'(x) = 4x. Nilai pangkat n = 3.\nLangkah 3: Aplikasikan ke rumus:\n==> f'(x) = 3 · (2x² - 3)^(3-1) · (4x)\n==> f'(x) = 3 · (2x² - 3)² · 4x\n==> f'(x) = 12x(2x² - 3)² (Pilihan C)."
    },
    {
      id: 6,
      jenis: "TKA",
      kategori: "Integral Tentu",
      tanya: "Nilai dari ∫ (dari 0 sampai 2) (3x² - 2x + 1) dx adalah...",
      opsi: ["A. 4", "B. 5", "C. 6", "D. 7", "E. 8"],
      kunci: 2,
      rekomendasiVideo: "https://youtu.be/-NABrFzoP2w",
      pembahasan: "Langkah 1: Cari antiturunan (integral tak tentu) dari fungsi 3x² - 2x + 1.\n==> F(x) = (3/3)x³ - (2/2)x² + 1x = x³ - x² + x\nLangkah 2: Evaluasi nilai integral tentu menggunakan batas atas (2) dan batas bawah (0).\n==> F(2) = (2)³ - (2)² + 2 = 8 - 4 + 2 = 6\n==> F(0) = (0)³ - (0)² + 0 = 0\nLangkah 3: Hitung nilai akhirnya: F(2) - F(0) = 6 - 0 = 6 (Pilihan C)."
    },
    {
      id: 7,
      jenis: "TKA",
      kategori: "Vektor",
      tanya: "Diketahui vektor u = 2i + j - 2k dan v = i + 2j + 2k. Besar sudut yang dibentuk oleh kedua vektor tersebut adalah...",
      opsi: ["A. 0°", "B. 30°", "C. 45°", "D. 60°", "E. 90°"],
      kunci: 4,
      rekomendasiVideo: "https://youtu.be/-NABrFzoP2w",
      pembahasan: "Langkah 1: Gunakan rumus perkalian titik (dot product) untuk mencari nilai cosinus sudut (θ):\ncos θ = (u · v) / (|u| · |v|)\nLangkah 2: Hitung perkalian u · v = (2 × 1) + (1 × 2) + (-2 × 2) = 2 + 2 - 4 = 0.\nLangkah 3: Karena hasil perkalian titik pembilangnya bernilai 0, maka cos θ = 0 / (|u| · |v|) = 0.\nLangkah 4: Cari sudut yang nilai cosinusnya 0. Nilai θ = 90° (Kedua vektor saling tegak lurus / ortogonal) (Pilihan E)."
    },
    {
      id: 8,
      jenis: "TKA",
      kategori: "Matriks Lanjutan",
      tanya: "Jika matriks A = [[2, 1], [4, 3]], maka nilai dari determinan matriks invers A⁻¹ adalah...",
      opsi: ["A. 2", "B. 1/2", "C. 4", "D. 1/4", "E. -2"],
      kunci: 1,
      rekomendasiVideo: "https://youtu.be/-NABrFzoP2w",
      pembahasan: "Langkah 1: Cari nilai determinan matriks A terlebih dahulu.\ndet(A) = (ad - bc) = (2 × 3) - (1 × 4) = 6 - 4 = 2.\nLangkah 2: Gunakan sifat dasar determinan matriks invers, yaitu det(A⁻¹) = 1 / det(A).\nLangkah 3: Maka det(A⁻¹) = 1 / 2 (Pilihan B)."
    }
  ];

  // Identitas States & Error Messages
  const [identitas, setIdentitas] = useState({ nama: '', sekolah: '', kelas: '' });
  const [errorValidasi, setErrorValidasi] = useState({ nama: '', sekolah: '', kelas: '' });
  const [formSelesai, setFormSelesai] = useState(false);
  const [isSending, setIsSending] = useState(false);

  // Kuis States
  const [jawabanUser, setJawabanUser] = useState({});
  const [sudahSubmit, setSudahSubmit] = useState(false);
  const [skor, setSkor] = useState(0);
  const [kategoriSalah, setKategoriSalah] = useState([]);

  // LOGIKA VALIDASI INPUT REAL-TIME
  const handleInputIdentitas = (field, value) => {
    let errText = '';
    
    if (field === 'nama') {
      const regexHuruf = /^[a-zA-Z\s]*$/;
      if (!regexHuruf.test(value)) {
        errText = '⚠️ Nama wajib diisi menggunakan huruf saja!';
      }
    } else if (field === 'sekolah') {
      if (value.length > 0 && value.length < 5) {
        errText = '⚠️ Nama sekolah minimal diisi 5 karakter!';
      }
    } else if (field === 'kelas') {
      if (value.length > 10) {
        errText = '⚠️ Penulisan kelas maksimal 10 karakter!';
      }
    }

    setErrorValidasi(prev => ({ ...prev, [field]: errText }));
    setIdentitas(prev => ({ ...prev, [field]: value }));
  };

  const tobolStartDisabled = 
    !identitas.nama || !identitas.sekolah || !identitas.kelas ||
    errorValidasi.nama || errorValidasi.sekolah || errorValidasi.kelas;

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
        const itemKategori = { nama: `${soal.jenis} - ${soal.kategori}`, link: soal.rekomendasiVideo };
        if (!salahKategori.some(e => e.nama === itemKategori.nama)) {
          salahKategori.push(itemKategori);
        }
      }
    });

    const hasilSkor = Math.round((nilaiBenar / daftarSoal.length) * 100);
    setSkor(hasilSkor);
    setKategoriSalah(salahKategori);
    setSudahSubmit(true);
    setIsSending(true);

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

  return (
    <div className="bg-zinc-950 text-white min-h-screen font-sans">
      <Navbar />

      <div className="container mx-auto px-6 max-w-5xl pt-28 pb-16 space-y-12">
        <div className="border-b border-zinc-850 pb-6">
          <h1 className="text-3xl font-black text-white sm:text-4xl tracking-tight">Pusat Misi Mandiri TKA &amp; Rumatun Ecosystem</h1>
          <p className="text-sm text-zinc-400 mt-2">Persiapan Akselerasi Menuju Ujian Akademik Oktober 2026.</p>
        </div>

        {/* 1. LAYER COMPONENT: VALIDASI DENGAN ALUR LOGIKA KETAT */}
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
                  onChange={(e) => handleInputIdentitas('nama', e.target.value)}
                  placeholder="Contoh: Uwais Abdussalam" 
                  className={`w-full bg-zinc-950 border rounded-xl px-4 py-3 text-sm focus:outline-none text-white transition-colors ${errorValidasi.nama ? 'border-red-500' : 'border-zinc-800 focus:border-cyan-500'}`}
                />
                {errorValidasi.nama && <p className="text-xs text-red-400 mt-1 font-semibold">{errorValidasi.nama}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1">Asal Sekolah</label>
                <input 
                  type="text" 
                  value={identitas.sekolah} 
                  onChange={(e) => handleInputIdentitas('sekolah', e.target.value)}
                  placeholder="Contoh: SMA Negeri 1 Maros" 
                  className={`w-full bg-zinc-950 border rounded-xl px-4 py-3 text-sm focus:outline-none text-white transition-colors ${errorValidasi.sekolah ? 'border-red-500' : 'border-zinc-800 focus:border-cyan-500'}`}
                />
                {errorValidasi.sekolah && <p className="text-xs text-red-400 mt-1 font-semibold">{errorValidasi.sekolah}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1">Kelas</label>
                <input 
                  type="text" 
                  value={identitas.kelas} 
                  onChange={(e) => handleInputIdentitas('kelas', e.target.value)}
                  placeholder="Contoh: 12 MIPA / Gap Year" 
                  className={`w-full bg-zinc-950 border rounded-xl px-4 py-3 text-sm focus:outline-none text-white transition-colors ${errorValidasi.kelas ? 'border-red-500' : 'border-zinc-800 focus:border-cyan-500'}`}
                />
                {errorValidasi.kelas && <p className="text-xs text-red-400 mt-1 font-semibold">{errorValidasi.kelas}</p>}
              </div>
            </div>

            <button 
              onClick={() => setFormSelesai(true)}
              disabled={tobolStartDisabled}
              className={`w-full rounded-xl py-3.5 text-xs sm:text-sm font-black transition-all ${
                tobolStartDisabled
                  ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed border border-zinc-700'
                  : 'bg-white hover:bg-slate-100 text-slate-950 font-extrabold shadow-md active:scale-[0.99]'
              }`}
            >
              Mulai Misi Simulasi Kuis &rarr;
            </button>
          </div>
        ) : (
          /* 2. MAIN INTERACTIVE TRYOUT COMPONENT */
          <>
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] uppercase font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">Peserta: {identitas.nama} ({identitas.sekolah} - {identitas.kelas})</span>
                  <h3 className="text-lg font-bold text-white mt-1">🚀 Ujian Akselerasi Berjalan Mandiri</h3>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-10 shadow-xl space-y-8">
              <div className="flex justify-between items-center">
                <h2 className="text-xl md:text-2xl font-black text-white">8 Paket Soal Terpadu (3 UTBK + 5 TKA Matematika)</h2>
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
                      <p className="text-xs text-amber-400 font-semibold animate-pulse">⏳ Menyimpan data diri dan lembar jawaban ke Cloud Spreadsheet...</p>
                    ) : (
                      <div className="space-y-2">
                        <p className="text-xs text-emerald-400 font-semibold">✓ Lembar jawaban berhasil dikirim ke Spreadsheet Guru!</p>
                        {kategoriSalah.length > 0 && (
                          <div className="flex flex-col gap-1 pt-1">
                            <p className="text-[11px] text-zinc-400">Rekomendasi ulasan video salah:</p>
                            {kategoriSalah.map((kat, idx) => (
                              <a key={idx} href={kat.link} target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-400 font-bold hover:underline">
                                📺 {kat.nama} &rarr;
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* DAFTAR SOAL RENDER LOOP DENGAN BADGE JENIS */}
              <div className="space-y-8 border-t border-zinc-800/60 pt-6">
                {daftarSoal.map((soal, sIdx) => (
                  <div key={soal.id} className="space-y-4 border-b border-zinc-800/40 pb-6 last:border-0">
                    <div className="flex items-center gap-2">
                      <span className={`text-[9px] font-black px-2 py-0.5 rounded tracking-wider border ${
                        soal.jenis === 'TKA' 
                          ? 'bg-purple-500/10 border-purple-500/30 text-purple-400' 
                          : 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400'
                      }`}>
                        {soal.jenis} - {soal.kategori}
                      </span>
                    </div>

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

              {/* TOMBOL SUBMIT YANG SUDAH DILONGGARKAN */}
              <div className="border-t border-zinc-800/60 pt-6 flex justify-end">
                <button
                  onClick={hitungHasilTryOut}
                  disabled={sudahSubmit}
                  className={`rounded-2xl px-6 py-4 text-xs sm:text-sm font-black transition-all shadow-md ${
                    sudahSubmit
                      ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
                      : 'bg-white text-slate-950 active:scale-95 hover:bg-zinc-100'
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
