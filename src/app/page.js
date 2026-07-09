import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Products from '../components/Products';
import Features from '../components/Features';
import Portfolio from '../components/Portfolio';
import Achievements from '../components/Achievements';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen pt-16">
      <Navbar />
      <Hero />
      <Achievements />
      <Portfolio />
      <Products />
      <Features />
      <Testimonials />
      <Footer />
    </main>
  );
}
