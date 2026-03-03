import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import TrustBar from './components/TrustBar';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#00E5FF] selection:text-black">
      <Navbar />
      <main id="main-content">
        <Hero />
        <TrustBar />
        <Services />
        <Process />
        <Portfolio />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
