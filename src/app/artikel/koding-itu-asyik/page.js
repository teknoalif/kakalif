'use client';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

export default function DetailArtikelKodingAsyik() {
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
            <span className="text-xs text-zinc-500">&bull; 5 mnt baca</span>
          </div>
          <h1 className="text-2xl font-black text-white sm:text-4xl tracking-tight leading-tight">
            Koding itu Asyik: Menjelajahi JavaScript dan Arsitektur Next.js
          </h1>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
            Menulis baris kode bukan sekadar tentang memberikan instruksi ke komputer, melainkan seni menyusun logika. Mari kita bedah bagaimana ekosistem kakalif.my.id dibangun menggunakan Next.js.
          </p>
        </div>

        {/* Konten Utama Artikel */}
        <div className="prose prose-invert max-w-none text-zinc-300 text-sm md:text-base leading-relaxed space-y-6 font-medium">
          
          <p>
            Sama seperti halnya matematika, dunia pemrograman sering kali dianggap rumit karena dipenuhi oleh baris-baris teks sintaks yang asing. Namun, ketika kita mulai memahami polanya, menulis kode atau <strong>koding</strong> sebenarnya adalah aktivitas yang sangat mengasyikkan. Ini adalah ruang di mana logika murni bertemu dengan kreativitas tanpa batas.
          </p>

          <p>
            Di era web modern saat ini, <strong>JavaScript</strong> telah berevolusi menjadi salah satu bahasa pemrograman paling perkasa di dunia. Ia tidak lagi hanya bertugas membuat tombol di browser bisa diklik, melainkan mampu menggerakkan seluruh ekosistem aplikasi web dari ujung depan (frontend) hingga ujung belakang (backend).
          </p>

          <hr className="border-zinc-850" />

          {/* Bagian 1 */}
          <h2 className="text-xl font-black text-white tracking-tight pt-2">Studi Kasus: Arsitektur kakalif.my.id</h2>
          <p>
            Sebagai contoh nyata, mari kita bedah dapur pacu dari website portal edukasi ini sendiri, yaitu <code>kakalif.my.id</code>. Platform ini dirancang menggunakan <strong>Next.js</strong>, sebuah framework React modern berbasis JavaScript yang sangat populer di kalangan developer profesional.
          </p>
          <p>
            Ada beberapa alasan utama mengapa arsitektur Next.js dipilih untuk membangun ekosistem digital ini:
          </p>
          
          <ul className="list-disc pl-6 space-y-2 text-zinc-300">
            <li>
              <strong>App Router &amp; Static Routing:</strong> Next.js memungkinkan pembuatan halaman secara modular dan terstruktur dengan rapi hanya melalui manajemen folder, seperti halaman artikel yang sedang Anda baca ini.
            </li>
            <li>
              <strong>Kecepatan Performa Tinggi:</strong> Dengan adanya fitur optimasi otomatis, aset gambar dan kode JavaScript dikompresi sedemikian rupa sehingga waktu muat (*loading*) halaman menjadi instan dan responsif.
            </li>
            <li>
              <strong>Desain Modern Kontemporer:</strong> Dikombinasikan dengan utilitas Tailwind CSS, antarmuka bertema gelap (*dark mode*) dapat diimplementasikan dengan kode styling yang sangat efisien dan ramah di mata.
            </li>
          </ul>

          {/* Bagian 2 */}
          <h2 className="text-xl font-black text-white tracking-tight pt-2">Fleksibilitas React Hooks</h2>
          <p>
            Keseruan koding dengan JavaScript di dalam Next.js sangat terasa ketika kita memanipulasi data secara langsung di browser pengguna menggunakan fitur React Hooks, seperti <code>useState</code>. 
          </p>
          <p>
            Fitur state ini digunakan secara intensif di website ini, mulai dari mengelola sistem buka-tutup menu navigasi responsif pada perangkat seluler, menyaring rumpun tulisan berdasarkan kategori secara instan, hingga mengendalikan logika form kuis interaktif yang ketat.
          </p>

          <blockquote>
            <p className="text-xs text-cyan-400 bg-zinc-900 border-l-2 border-cyan-500 p-3 rounded-r-xl font-mono">
              {"// Contoh reaktivitas JavaScript sederhana di Next.js\nconst [terbuka, setTerbuka] = useState(false);"}
            </p>
          </blockquote>

          {/* Bagian 3 */}
          <h2 className="text-xl font-black text-white tracking-tight pt-2">Kesimpulan</h2>
          <p>
            Membangun sistem pembelajaran mandiri yang inklusif menuntut alat perkakas teknologi yang solid. Melalui kombinasi logika berpikir yang terstruktur dan fleksibilitas ekosistem JavaScript, koding berubah dari pekerjaan teknis yang menjemukan menjadi sebuah petualangan kreasi yang seru. Selamat mengeksplorasi baris kode Anda!
          </p>
        </div>

        {/* Footer Artikel */}
        <div className="border-t border-zinc-850 pt-6 mt-8 flex justify-between items-center text-xs text-zinc-500">
          <span>Kategori: Free Software, Koding</span>
          <span>Studi Kasus: kakalif.my.id Ecosystem</span>
        </div>
      </div>

      <Footer />
    </div>
  );
}
