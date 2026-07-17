'use client';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

export default function DetailArtikelMatematikaAsyik() {
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
            <span className="text-[10px] uppercase font-black px-2 py-0.5 rounded tracking-wider bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              Matematika
            </span>
            <span className="text-xs text-zinc-500">17 Juli 2026</span>
            <span className="text-xs text-zinc-500">&bull; 4 mnt baca</span>
          </div>
          <h1 className="text-2xl font-black text-white sm:text-4xl tracking-tight leading-tight">
            Dibalik Layar Buku "Matematika itu Asyik": Mendobrak Stigma Kaku Angka
          </h1>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
            Mengapa matematika kerap dianggap sebagai momok yang menakutkan? Catatan reflektif mengenai alasan penulisan buku ini serta bagaimana melihat matematika secara lebih manusiawi dan penuh makna.
          </p>
        </div>

        {/* Konten Utama Artikel */}
        <div className="prose prose-invert max-w-none text-zinc-300 text-sm md:text-base leading-relaxed space-y-6 font-medium">
          
          <p>
            Hampir di setiap jenjang sekolah, matematika kerap kali menduduki peringkat atas sebagai mata pelajaran yang paling dihindari. Rumus yang berderet, angka-angka abstrak, hingga metode hafalan prosedural yang kaku sering kali membuat jarak antara ilmu ini dengan realitas para pelajar.
          </p>

          <p>
            Melalui buku <strong>"Matematika itu Asyik"</strong> yang saya susun, visi utamanya adalah mendobrak stigma menakutkan tersebut secara total. Saya ingin mengajak pembaca melihat matematika bukan sebagai sekadar kumpulan alat hitung mati, melainkan sebuah instrumen hidup yang mengintegrasikan logika berpikir, konsep-konsep dasar yang kokoh, bahkan nilai-nilai spiritual yang mendalam.
          </p>

          <hr className="border-zinc-850" />

          <h2 className="text-xl font-black text-white tracking-tight pt-2">Pendekatan Gaya Bahasa yang Berbeda</h2>
          <p>
            Jika buku teks matematika pada umumnya langsung menyuguhkan definisi formal yang padat, buku ini mengambil rute sebaliknya. Narasi di dalamnya dibangun dengan <strong>gaya bahasa yang santai, mengalir, dan dialogis</strong>—layaknya sebuah novel ringan atau komik manga. 
          </p>
          <p>
            Tujuannya sederhana: agar konsep-konsep esensial aljabar, geometri, maupun penalaran matematika dapat terserap ke dalam cara berpikir pembaca tanpa kesan mendikte atau kaku. Ketika pembatas ketakutan itu runtuh, di situlah keindahan logika matematika yang sebenarnya mulai bekerja.
          </p>

          <h2 className="text-xl font-black text-white tracking-tight pt-2">Lebih dari Sekadar Alat Hitung</h2>
          <p>
            Buku ini pada akhirnya berfungsi ganda. Di satu sisi, ia menjadi panduan belajar mandiri yang ramah bagi siswa. Di sisi lain, ia bertindak sebagai cermin interaktif untuk membenahi dan menstrukturkan kembali cara kita mengambil keputusan dan menghadapi persoalan hidup sehari-hari menggunakan fondasi logika ilmiah yang jernih.
          </p>
          
          <blockquote>
            <p className="text-xs text-cyan-400 bg-zinc-900 border-l-2 border-cyan-500 p-3 rounded-r-xl font-mono">
              "Matematika bukan tentang seberapa cepat kamu menghafal rumus prosedural, melainkan tentang seberapa jernih logikamu melihat alur dan struktur masalah di dunia ini."
            </p>
          </blockquote>

          <p>
            Terima kasih yang sebesar-besarnya kepada seluruh komunitas pembaca, rekan guru, serta para siswa yang terus memberikan ruang bagi buku ini sebagai sarana edukasi yang religius, inspiratif, dan bermakna. Mari kita teruskan perjalanan menikmati keindahan ilmu ini!
          </p>
        </div>

        {/* Footer Artikel */}
        <div className="border-t border-zinc-850 pt-6 mt-8 flex justify-between items-center text-xs text-zinc-500">
          <span>Kategori: Matematika, Edukasi</span>
          <span>Sumber Arsip: kakalif.jamia.id/buku</span>
        </div>
      </div>

      <Footer />
    </div>
  );
}
