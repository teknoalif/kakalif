import Hero from '../components/Hero';
import Products from '../components/Products';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Products />
      <Features />
      <Testimonials />
      <Footer />
    </main>
  );
}
