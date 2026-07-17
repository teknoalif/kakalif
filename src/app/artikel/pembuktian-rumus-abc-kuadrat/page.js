'use client';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

export default function DetailArtikelRumusAbc() {
  return (
    <div className="bg-zinc-950 text-white min-h-screen font-sans">
      <Navbar/>

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
            <span className="text-[10px] uppercase font-black px-2 py-0.5 rounded tracking-wider bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              Matematika
            </span>
            <span className="text-xs text-zinc-500">17 Juli 2026</span>
            <span className="text-xs text-zinc-500">&bull; 5 mnt baca</span>
          </div>
          <h1 className="text-2xl font-black text-white sm:text-4xl tracking-tight leading-tight">
            Menelusuri Asal-usul Rumus ABC: Pembuktian Aljabar Persamaan Kuadrat
          </h1>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
            Banyak siswa menghafal rumus kuadratik tanpa tahu dari mana asalnya. Terinspirasi dari pembahasan sahabat saya Agung Izzul Haq, mari kita buktikan secara terstruktur menggunakan metode melengkapkan kuadrat sempurna.
          </p>
        </div>

        {/* Konten Utama Artikel */}
        <div className="prose prose-invert max-w-none text-zinc-300 text-sm md:text-base leading-relaxed space-y-6 font-medium">
          
          <p>
            Dalam dunia aljabar dasar, rumus kuadratik atau yang lebih akrab di telinga pelajar Indonesia sebagai <strong>Rumus ABC</strong> merupakan senjata pamungkas untuk mencari akar-akar dari persamaan kuadrat. Rumus ini berlaku universal untuk semua nilai koefisien real selama komponen kuadratnya valid.
          </p>

          <p>
            Namun, sekadar menghafal formula akhir tentu kurang menantang bagi penikmat matematika. Kali ini, terinspirasi dari tulisan sahabat saya <strong>Agung Izzul Haq</strong> di platform <em>kimiamath.com</em>, saya ingin mengajak rekan-rekan pengajar dan siswa sekalian untuk melihat bagaimana rumus legendaris ini diturunkan secara logis selangkah demi selangkah.
          </p>

          <hr className="border-zinc-850" />

          {/* Bagian 1 */}
          <h2 className="text-xl font-black text-white tracking-tight pt-2">1. Bentuk Umum &amp; Langkah Awal</h2>
          <p>
            Misalkan kita memiliki bentuk umum persamaan kuadrat berderajat dua dengan syarat nilai koefisien <em>a</em> &ne; 0:
          </p>
          <div className="bg-zinc-900/50 border border-zinc-850 p-5 rounded-xl text-center font-mono my-4 text-zinc-100 text-base md:text-lg font-bold tracking-wide">
            ax² + bx + c = 0
          </div>
          
          <p>
            Langkah pertama yang perlu dilakukan adalah mengisolasi variabel dengan membagi kedua ruas dengan koefisien <em>a</em> agar variabel kuadrat utama menjadi tunggal:
          </p>
          <div className="bg-zinc-900/50 border border-zinc-850 p-5 rounded-xl text-center font-mono my-4 text-zinc-100 text-base md:text-lg font-bold tracking-wide">
            x² + (b/a)x + c/a = 0
          </div>

          <p>
            Selanjutnya, pindahkan konstanta <sup>c</sup>&frasl;<sub>a</sub> ke ruas sebelah kanan dengan cara mengurangkan kedua ruas:
          </p>
          <div className="bg-zinc-900/50 border border-zinc-850 p-5 rounded-xl text-center font-mono my-4 text-zinc-100 text-base md:text-lg font-bold tracking-wide">
            x² + (b/a)x = -c/a
          </div>

          {/* Bagian 2 */}
          <h2 className="text-xl font-black text-white tracking-tight pt-2">2. Inti Manipulasi: Melengkapkan Kuadrat Sempurna</h2>
          <p>
            Agar ruas kiri dapat difaktorkan menjadi bentuk kuadrat sempurna (x + k)², kita perlu memanipulasi aljabar dengan menambahkan nilai kuadrat dari <strong>setengah kali koefisien x</strong> pada kedua ruas. 
          </p>
          <p>
            Koefisien x kita adalah (b/a), maka setengah nilainya adalah (b/2a). Kuadrat dari nilai tersebut adalah (b/2a)². Mari tambahkan nilai ini ke ruas kiri dan kanan:
          </p>
          <div className="bg-zinc-900/50 border border-zinc-850 p-5 rounded-xl text-center font-mono my-4 text-zinc-100 text-base md:text-lg font-bold tracking-wide">
            x² + (b/a)x + (b/2a)² = -c/a + (b/2a)²
          </div>

          <p>
            Sekarang, ubah bentuk ruas kiri menjadi kuadrat sempurna, dan jabarkan nilai eksponen di ruas kanan:
          </p>
          <div className="bg-zinc-900/50 border border-zinc-850 p-5 rounded-xl text-center font-mono my-4 text-zinc-100 text-base md:text-lg font-bold tracking-wide">
            (x + b/2a)² = -c/a + b² / 4a²
          </div>

          <p>
            Untuk menyederhanakan pecahan di ruas kanan, samakan penyebutnya menjadi 4a² dengan mengalikan pembilang dan penyebut suku -c/a dengan 4a:
          </p>
          <div className="bg-zinc-900/50 border border-zinc-850 p-5 rounded-xl text-center font-mono my-4 text-zinc-100 text-base md:text-lg font-bold tracking-wide">
            (x + b/2a)² = (b² - 4ac) / 4a²
          </div>

          {/* Bagian 3 */}
          <h2 className="text-xl font-black text-white tracking-tight pt-2">3. Penarikan Akar &amp; Hasil Akhir</h2>
          <p>
            Hilangkan pangkat dua pada ruas kiri dengan melakukan penarikan akar kuadrat di kedua sisi persamaan. Jangan lupa menyertakan simbol plus-minus (&plusmn;) karena operasi kuadrat memiliki dua kemungkinan akar:
          </p>
          <div className="bg-zinc-900/50 border border-zinc-850 p-5 rounded-xl text-center font-mono my-4 text-zinc-100 text-base md:text-lg font-bold tracking-wide">
            x + b/2a = &plusmn; &radic;((b² - 4ac) / 4a²)
          </div>

          <p>
            Karena penyebut di dalam akar (4a²) merupakan bilangan kuadrat sempurna, kita dapat mengeluarkan nilainya dari tanda akar menjadi 2a:
          </p>
          <div className="bg-zinc-900/50 border border-zinc-850 p-5 rounded-xl text-center font-mono my-4 text-zinc-100 text-base md:text-lg font-bold tracking-wide">
            x + b/2a = &plusmn; (&radic;(b² - 4ac)) / 2a
          </div>

          <p>
            Langkah penutup, pindahkan suku b/2a ke ruas kanan dengan mengurangkan kedua ruas. Karena kedua suku di ruas kanan memiliki penyebut yang sama yaitu 2a, kita bisa menyatukannya menjadi formula tunggal:
          </p>
          
          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl text-center font-mono my-6 text-cyan-400 font-black text-xl md:text-2xl shadow-inner tracking-wide">
            x₁,,₂ = (-b &plusmn; &radic;(b² - 4ac)) / 2a
          </div>

          <p>
            <strong>Q.E.D. (Quod Erat Demonstrandum)</strong>, Rumus ABC telah terbukti secara sah! Melalui pembuktian ini, siswa tidak hanya menghafal huruf-huruf rumus kuadratik secara buta, melainkan memahami korelasi aljabar kuadrat sempurna yang melatarbelakanginya.
          </p>
        </div>

        {/* Footer Artikel */}
        <div className="border-t border-zinc-850 pt-6 mt-8 flex justify-between items-center text-xs text-zinc-500">
          <span>Kategori: Matematika, Aljabar</span>
          <span>Referensi ide: Agung Izzul Haq (kimiamath.com)</span>
        </div>
      </div>

      <Footer/>
    </div>
  );
}
