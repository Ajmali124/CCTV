import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#00E5FF] selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Portfolio />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
