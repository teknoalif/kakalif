'use client';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

export default function DetailArtikelSemJasp() {
  return (
    <div className="bg-zinc-950 text-white min-h-screen font-sans">
      <Navbar />

      <div className="container mx-auto px-6 max-w-4xl pt-28 pb-16 space-y-8">
        {/* Navigasi Kembali */}
        <div>
          <a href="/artikel" className="text-xs font-bold text-cyan-400 hover:underline flex items-center gap-1">
            &larr; Kembali ke Daftar Artikel
          </a>
        </div>

        {/* Header Artikel */}
        <div className="space-y-4 border-b border-zinc-850 pb-6">
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase font-black px-2 py-0.5 rounded tracking-wider bg-purple-500/10 border border-purple-500/30 text-purple-400">
              Free Software
            </span>
            <span className="text-xs text-zinc-500">17 Juli 2026</span>
            <span className="text-xs text-zinc-500">&bull; 6 mnt baca</span>
          </div>
          <h1 className="text-2xl font-black text-white sm:text-4xl tracking-tight leading-tight">
            Panduan Praktis Analisis Data SEM Menggunakan JASP: Alternatif Bebas &amp; Terbuka
          </h1>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
            Panduan lengkap memahami struktur data Laten-Manifest, menulis sintaks lavaan, hingga membaca output fit model menggunakan software JASP di Linux.
          </p>
        </div>

        {/* Konten Utama Artikel */}
        <div className="prose prose-invert max-w-none text-zinc-300 text-sm md:text-base leading-relaxed space-y-6 font-medium">
          
          <p>
            Berdasarkan model struktural yang sering kita temui di penelitian akademik, analisis yang ingin dilakukan adalah <strong>Structural Equation Modeling (SEM)</strong> atau Pemodelan Persamaan Struktural. Untuk analisis jenis ini, saya sangat menyarankan menggunakan <strong>JASP</strong> dibandingkan PSPP. 
          </p>

          <p>
            PSPP memang merupakan alternatif <em>free software</em> yang sangat bagus untuk menggantikan SPSS, namun ia berfokus pada statistik dasar seperti uji-t, ANOVA, dan regresi linear. PSPP tidak memiliki fitur bawaan untuk analisis SEM. Sebaliknya, JASP memiliki modul SEM terintegrasi yang sangat kuat karena berbasis *library* <code>lavaan</code> dari bahasa pemrograman R, namun dikemas dengan antarmuka grafis yang sangat intuitif.
          </p>

          <hr className="border-zinc-850" />

          {/* Bagian 1 */}
          <h2 className="text-xl font-black text-white tracking-tight pt-2">1. Memahami Struktur Data Model</h2>
          <p>
            Sebelum masuk aPlikasi JASP, kita perlu memetakan variabel teoritis ke dalam struktur data riil. Model ini umumnya terdiri dari <strong>3 Variabel Laten</strong> (Variabel bentukan) dan <strong>10 Indikator</strong> (Variabel manifest/terukur):
          </p>
          <ul className="list-disc pl-6 space-y-1 text-zinc-300">
            <li><strong>Trust (Kepercayaan):</strong> Diukur oleh indikator <em>citra, care,</em> dan <em>jujur</em>.</li>
            <li><strong>Satisfaction (Kepuasan):</strong> Diukur oleh indikator <em>layanan, harga, lengkap,</em> dan <em>letak</em>.</li>
            <li><strong>Loyalty (Loyalitas):</strong> Diukur oleh indikator <em>brand, word,</em> dan <em>beli</em>.</li>
          </ul>
          <p>
            Hubungan struktural antar-variabel didefinisikan dengan aturan bahwa <code>trust</code> dan <code>satisfaction</code> sama-sama berpengaruh terhadap <code>loyalty</code>, di mana kedua variabel independen tersebut memiliki hubungan korelasi/kovarians (panah bolak-balik). 
          </p>
          <blockquote>
            <p className="text-xs text-amber-400 bg-zinc-900 border-l-2 border-amber-500 p-3 rounded-r-xl font-mono">
              Catatan khusus model: Terdapat efek Cross-loading (LC) dari trust langsung menuju indikator layanan, serta hubungan korelasi antar-error residual antara e1 (citra) dan e4 (layanan) dengan label cove2e4.
            </p>
          </blockquote>

          {/* Bagian 2 */}
          <h2 className="text-xl font-black text-white tracking-tight pt-2">2. Langkah-Langkah Analisis Menggunakan JASP</h2>
          
          <h3 className="text-base font-bold text-zinc-200">Langkah A: Menyiapkan Data Mentah</h3>
          <p>
            Bersihkan data mentah dari berkas PDF atau instrumen kuesioner Anda, lalu pindahkan ke spreadsheet menggunakan <strong>LibreOffice Calc</strong>. Buatlah 10 kolom dengan nama variabel yang persis sama seperti nama indikator di atas. Simpan berkas tersebut dalam format <code>.csv</code> atau langsung format Excel biasa (<code>.xlsx</code>), karena versi JASP terbaru sudah dapat membaca berkas Excel secara langsung.
          </p>

          <h3 className="text-base font-bold text-zinc-200">Langkah B: Membuka Berkas di JASP</h3>
          <p>
            Jalankan JASP di sistem operasi Linux Anda (bisa dipasang via Flatpak dari Flathub). Klik tombol menu di pojok kiri atas &rarr; <strong>Open</strong> &rarr; <strong>Computer</strong> &rarr; Pilih berkas data Anda. Jika modul SEM belum muncul pada bar menu atas, klik tanda <strong>+</strong> di pojok kanan atas, lalu centang pilihan <strong>Structural Equation Modeling</strong>.
          </p>

          <h3 className="text-base font-bold text-zinc-200">Langkah C: Menulis Sintaks Model (lavaan syntax)</h3>
          <p>
            Klik menu SEM pada bar atas, lalu pilih <em>Structural Equation Modeling</em>. Di panel sebelah kiri, Anda akan melihat kolom teks besar berjudul <strong>Model</strong>. Salin dan sesuaikan sintaks *plaintext* di bawah ini ke dalam kotak tersebut:
          </p>

          <pre className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl font-mono text-xs text-emerald-400 overflow-x-auto leading-relaxed">
{`# 1. Pengukuran Variabel Laten (Measurement Model)
trust =~ citra + care + jujur
satisfaction =~ layanan + harga + lengkap + letak
loyalty =~ brand + word + beli

# 2. Hubungan Struktural (Regresi)
loyalty ~ trust + satisfaction

# 3. Cross Loading Tambahan (Sesuai efek LC)
layanan ~ trust

# 4. Korelasi Error Residual (Sesuai efek kovarians)
citra ~~ layanan`}
          </pre>

          <h3 className="text-base font-bold text-zinc-200">Langkah D: Mengatur Opsi Output</h3>
          <p>
            Di panel bawah kotak sintaks JASP, lakukan konfigurasi centang berikut untuk melengkapi visualisasi data:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Pada bagian <strong>Options</strong>: Centang <em>Standardized estimates</em> untuk memunculkan nilai koefisien jalur ($Beta$) yang terstandardisasi.</li>
            <li>Pada bagian <strong>Additional Output</strong>: Centang <em>Path diagram</em> untuk menampilkan diagram jalur hasil estimasi secara visual.</li>
          </ul>

          {/* Bagian 3 */}
          <h2 className="text-xl font-black text-white tracking-tight pt-2">3. Cara Membaca Output Analisis</h2>
          <p>
            Setelah mesin kalkulasi JASP selesai memproses data, perhatikan tiga poin konfirmasi validitas utama pada papan hasil sebelah kanan:
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              <strong>Fit Indicators (Uji Keselarasan Model):</strong> Periksa nilai <em>Comparative Fit Index</em> (CFI) dan <em>Tucker-Lewis Index</em> (TLI) yang diharapkan berada di atas $0.90$. Serta nilai <em>Root Mean Square Error of Approximation</em> (RMSEA) yang diharapkan berada di bawah $0.08$. Jika terpenuhi, model teoritis Anda dinyatakan fit dengan data riil lapangan.
            </li>
            <li>
              <strong>Parameter Estimates (Factor Loadings):</strong> Pastikan nilai muatan faktor dari setiap indikator menuju variabel latennya memiliki nilai signifikansi $p &lt; 0.05$.
            </li>
            <li>
              <strong>Regression Coefficients (Uji Hipotesis Jalur):</strong> Ini merupakan inti pengujian hipotesis Anda. Evaluasi baris <code>loyalty ~ trust</code> dan <code>loyalty ~ satisfaction</code>. Jika nilai probabilitas ($p$) berada di bawah alpha $0.05$, maka hipotesis pengaruh positif signifikan dinyatakan diterima.
            </li>
          </ol>
        </div>

        {/* Footer Artikel */}
        <div className="border-t border-zinc-850 pt-6 mt-8 flex justify-between items-center text-xs text-zinc-500">
          <span>Kategori: Free Software, Statistika</span>
          <span>Penulis: Kak Alif</span>
        </div>
      </div>

      <Footer />
    </div>
  );
}
