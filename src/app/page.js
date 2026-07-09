import Navbar from '../components/Navbar'; // <-- Tambahkan ini
import Hero from '../components/Hero';
import Products from '../components/Products';
import Features from '../components/Features';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen pt-16"> {/* Ditambahkan pt-16 agar konten Hero tidak tertutup Navbar */}
      <Navbar /> {/* Sekaligus ditaruh di sini */}
      <Hero />
      <Portfolio />
      <Products />
      <Features />
      <Testimonials />
      <Footer />
    </main>
  );
}
