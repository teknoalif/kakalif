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
            Misalkan kita memiliki bentuk umum persamaan kuadrat berderajat dua dengan syarat nilai koefisien {"$a \\neq 0$"}:
          </p>
          <div className="bg-zinc-900/50 border border-zinc-850 p-4 rounded-xl text-center font-mono my-4 text-zinc-100">
            {"$$ax^2 + bx + c = 0$$"}
          </div>
          
          <p>
            Langkatan pertama yang perlu dilakukan adalah mengisolasi variabel dengan membagi kedua ruas dengan koefisien a agar variabel kuadrat utama menjadi tunggal:
          </p>
          <div className="bg-zinc-900/50 border border-zinc-850 p-4 rounded-xl text-center font-mono my-4 text-zinc-100">
            {"$$x^2 + \\frac{b}{a}x + \\frac{c}{a} = 0$$"}
          </div>

          <p>
            Selanjutnya, pindahkan konstanta {"$\\frac{c}{a}$"} ke ruas sebelah kanan dengan cara mengurangkan kedua ruas:
          </p>
          <div className="bg-zinc-900/50 border border-zinc-850 p-4 rounded-xl text-center font-mono my-4 text-zinc-100">
            {"$$x^2 + \\frac{b}{a}x = -\\frac{c}{a}$$"}
          </div>

          {/* Bagian 2 */}
          <h2 className="text-xl font-black text-white tracking-tight pt-2">2. Inti Manipulasi: Melengkapkan Kuadrat Sempurna</h2>
          <p>
            Agar ruas kiri dapat difaktorkan menjadi bentuk kuadrat sempurna {"$(x + k)^2$"}, kita perlu memanipulasi aljabar dengan menambahkan nilai kuadrat dari <strong>setengah kali koefisien x</strong> pada kedua ruas. 
          </p>
          <p>
            Koefisien x kita adalah {"$\\frac{b}{a}$"}, maka setengah nilainya adalah {"$\\frac{b}{2a}$"}. Kuadrat dari nilai tersebut adalah {"$\\left(\\frac{b}{2a}\\right)^2$"}. Mari tambahkan nilai ini ke ruas kiri dan kanan:
          </p>
          <div className="bg-zinc-900/50 border border-zinc-850 p-4 rounded-xl text-center font-mono my-4 text-zinc-100">
            {"$$x^2 + \\frac{b}{a}x + \\left(\\frac{b}{2a}\\right)^2 = -\\frac{c}{a} + \\left(\\frac{b}{2a}\\right)^2$$"}
          </div>

          <p>
            Sekarang, ubah bentuk ruas kiri menjadi kuadrat sempurna, dan jabarkan nilai eksponen di ruas kanan:
          </p>
          <div className="bg-zinc-900/50 border border-zinc-850 p-4 rounded-xl text-center font-mono my-4 text-zinc-100">
            {"$$\\left(x + \\frac{b}{2a}\\right)^2 = -\\frac{c}{a} + \\frac{b^2}{4a^2}$$"}
          </div>

          <p>
            Untuk menyederhanakan pecahan di ruas kanan, samakan penyebutnya menjadi {"$4a^2$"} dengan mengalikan pembilang dan penyebut suku {"$-\\frac{c}{a}$"} dengan 4a:
          </p>
          <div className="bg-zinc-900/50 border border-zinc-850 p-4 rounded-xl text-center font-mono my-4 text-zinc-100">
            {"$$\\left(x + \\frac{b}{2a}\\right)^2 = \\frac{b^2 - 4ac}{4a^2}$$"}
          </div>

          {/* Bagian 3 */}
          <h2 className="text-xl font-black text-white tracking-tight pt-2">3. Penarikan Akar &amp; Hasil Akhir</h2>
          <p>
            Hilangkan pangkat dua pada ruas kiri dengan melakukan penarikan akar kuadrat di kedua sisi persamaan. Jangan lupa menyertakan simbol plus-minus ke dalam rumus karena operasi kuadrat memiliki dua kemungkinan akar:
          </p>
          <div className="bg-zinc-900/50 border border-zinc-850 p-4 rounded-xl text-center font-mono my-4 text-zinc-100">
            {"$$x + \\frac{b}{2a} = \\pm \\sqrt{\\frac{b^2 - 4ac}{4a^2}}$$"}
          </div>

          <p>
            Karena penyebut di dalam akar {"($4a^2$)"} merupakan bilangan kuadrat sempurna, kita dapat mengeluarkan nilainya dari tanda akar menjadi 2a:
          </p>
          <div className="bg-zinc-900/50 border border-zinc-850 p-4 rounded-xl text-center font-mono my-4 text-zinc-100">
            {"$$x + \\frac{b}{2a} = \\pm \\frac{\\sqrt{b^2 - 4ac}}{2a}$$"}
          </div>

          <p>
            Langkah penutup, pindahkan suku {"$\\frac{b}{2a}$"} ke ruas kanan dengan mengurangkan kedua ruas. Karena kedua suku di ruas kanan memiliki penyebut yang sama yaitu 2a, kita bisa menyatukannya menjadi formula tunggal:
          </p>
          
          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl text-center font-mono my-6 text-cyan-400 font-bold text-lg md:text-xl shadow-inner">
            {"$$x_{1,2} = \\frac{-b \\pm \sqrt{b^2 - 4ac}}{2a}$$"}
          </div>

          <p>
            <strong>Q.E.D. (Quod Erat Demonstrandum)</strong>, Rumus ABC telah terbukti secara sah! Melalui pembuktian ini, siswa tidak hanya menghafal huruf-huruf rumus kecap secara buta, melainkan memahami korelasi geometri manipulasi kuadrat sempurna yang melatarbelakanginya.
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
