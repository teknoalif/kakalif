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
            Banyak siswa menghafal rumus kuadratik tanpa tahu dari mana asalnya. Terinspirasi dari metode cerdik sahabat saya Agung Izzul Haq, mari kita buktikan secara elegan tanpa ribet dengan pecahan.
          </p>
        </div>

        {/* Konten Utama Artikel */}
        <div className="prose prose-invert max-w-none text-zinc-300 text-sm md:text-base leading-relaxed space-y-6 font-medium">
          
          <p>
            Dalam dunia aljabar dasar, rumus kuadratik atau yang lebih akrab di telinga pelajar Indonesia sebagai <strong>Rumus ABC</strong> merupakan senjata pamungkas untuk mencari akar-akar dari persamaan kuadrat. Rumus ini berlaku universal untuk semua nilai koefisien real selama komponen kuadratnya valid.
          </p>

          <p>
            Namun, sekadar menghafal formula akhir tentu kurang menantang bagi penikmat matematika. Kali ini, mengikuti alur penalaran taktis dari tulisan sahabat saya <strong>Agung Izzul Haq</strong> di platform <em>kimiamath.com</em>, kita akan melihat bagaimana rumus ini diturunkan lewat manipulasi aljabar yang sangat bersih tanpa terganggu oleh bentuk pecahan di awal langkah.
          </p>

          <hr className="border-zinc-850" />

          {/* Bagian 1 */}
          <h2 className="text-xl font-black text-white tracking-tight pt-2">1. Bentuk Umum &amp; Manipulasi Awal</h2>
          <p>
            Misalkan kita memiliki bentuk umum persamaan kuadrat berderajat dua dengan syarat nilai koefisien <em>a</em> &ne; 0:
          </p>
          
          {/* Rumus 1 */}
          <div className="bg-zinc-900/40 border border-zinc-900 p-5 rounded-2xl flex justify-center items-center my-4 text-zinc-100 text-lg md:text-xl font-bold font-mono tracking-wide">
            ax² + bx + c = 0
          </div>
          
          <p>
            Trik cerdasnya dimulai di sini. Kalikan kedua ruas persamaan dengan <strong>4a</strong>, sehingga diperoleh bentuk perkalian berikut:
          </p>
          
          {/* Rumus 2 */}
          <div className="bg-zinc-900/40 border border-zinc-900 p-5 rounded-2xl flex justify-center items-center my-4 text-zinc-100 text-lg md:text-xl font-bold font-mono tracking-wide">
            4a²x² + 4abx + 4ac = 0
          </div>

          <p>
            Kurangi kedua ruas dengan konstanta <strong>4ac</strong> (atau pindahkan suku 4ac ke ruas sebelah kanan):
          </p>
          
          {/* Rumus 3 */}
          <div className="bg-zinc-900/40 border border-zinc-900 p-5 rounded-2xl flex justify-center items-center my-4 text-zinc-100 text-lg md:text-xl font-bold font-mono tracking-wide">
            4a²x² + 4abx = -4ac
          </div>

          {/* Bagian 2 */}
          <h2 className="text-xl font-black text-white tracking-tight pt-2">2. Melengkapkan Kuadrat Sempurna</h2>
          <p>
            Langkah krusial berikutnya adalah menambahkan suku <strong>b²</strong> pada kedua ruas persamaan agar ruas kiri dapat dimanipulasi menjadi struktur kuadrat sempurna yang bulat:
          </p>
          
          {/* Rumus 4 */}
          <div className="bg-zinc-900/40 border border-zinc-900 p-5 rounded-2xl flex justify-center items-center my-4 text-zinc-100 text-lg md:text-xl font-bold font-mono tracking-wide">
            4a²x² + 4abx + b² = b² - 4ac
          </div>

          <p>
            Perhatikan pola pada ruas kiri. Suku (4a²x² + 4abx + b²) secara presisi dapat kita ubah dan faktorkan ke dalam bentuk kuadrat sempurna:
          </p>
          
          {/* Rumus 5 */}
          <div className="bg-zinc-900/40 border border-zinc-900 p-5 rounded-2xl flex justify-center items-center my-4 text-zinc-100 text-lg md:text-xl font-bold font-mono tracking-wide">
            (2ax + b)² = b² - 4ac
          </div>

          {/* Bagian 3 */}
          <h2 className="text-xl font-black text-white tracking-tight pt-2">3. Penarikan Akar &amp; Hasil Akhir</h2>
          <p>
            Hilangkan pangkat dua di ruas kiri dengan melakukan penarikan akar kuadrat pada kedua ruas. Jangan lupa sertakan simbol plus-minus (&plusmn;):
          </p>
          
          {/* Rumus 6 */}
          <div className="bg-zinc-900/40 border border-zinc-900 p-5 rounded-2xl flex justify-center items-center my-4 text-zinc-100 text-lg md:text-xl font-bold font-mono tracking-wide">
            2ax + b = &plusmn; &radic;<span className="border-t border-white px-1">b² - 4ac</span>
          </div>

          <p>
            Kurangi kedua ruas dengan <strong>b</strong> untuk mengisolasi variabel x di ruas kiri:
          </p>
          
          {/* Rumus 7 */}
          <div className="bg-zinc-900/40 border border-zinc-900 p-5 rounded-2xl flex justify-center items-center my-4 text-zinc-100 text-lg md:text-xl font-bold font-mono tracking-wide">
            2ax = -b &plusmn; &radic;<span className="border-t border-white px-1">b² - 4ac</span>
          </div>

          <p>
            Langkah terakhir, bagi kedua ruas dengan nilai <strong>2a</strong> untuk mendapatkan formula final pencarian akar bertingkat yang rapi:
          </p>
          
          {/* RUMUS FINAL BERBENTUK PECAHAN BERTINGKAT */}
          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl flex justify-center items-center my-6 text-cyan-400 font-bold font-mono text-xl md:text-2xl shadow-inner select-none">
            <span className="mr-3">x₁,₂ =</span>
            <div className="flex flex-col items-center">
              <span className="pb-1 text-center">-b &plusmn; &radic;<span className="border-t border-cyan-400 px-1">b² - 4ac</span></span>
              <span className="w-full h-[2px] bg-cyan-400"></span>
              <span className="pt-1 text-center text-zinc-200">2a</span>
            </div>
          </div>

          <p>
            <strong>Q.E.D. (Quod Erat Demonstrandum)</strong>, Rumus ABC telah terbukti secara sah! Melalui metode dari Mas Agung ini, penurunan rumus terasa jauh lebih bersih, mengalir, dan sangat mudah diajarkan kepada siswa karena tidak melibatkan operasi pecahan yang rumit di tengah jalan.
          </p>
        </div>

        {/* Footer Artikel */}
        <div className="border-t border-zinc-850 pt-6 mt-8 flex justify-between items-center text-xs text-zinc-500">
          <span>Kategori: Matematika, Aljabar</span>
          <span>Referensi metode: Agung Izzul Haq (kimiamath.com)</span>
        </div>
      </div>

      <Footer/>
    </div>
  );
}
