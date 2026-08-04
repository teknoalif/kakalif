import Navbar from '../components/Navbar';
import BookPromo from '../components/BookPromo';
import RumaatunPromo from '../components/RumaatunPromo'; 
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
      <BookPromo />
      <Products />
      <Portfolio />
      <Achievements />
      <Testimonials />
      <Footer />
    </main>
  );
}
