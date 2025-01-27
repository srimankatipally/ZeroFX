import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Calculator from '../components/Calculator';
import Benefits from '../components/Benefits';
import HowItWorks from '../components/HowItWorks';
import Security from '../components/Security';
import FAQ from '../components/FAQ';
import Waitlist from '../components/Waitlist';
import Footer from '../components/Footer';
import WaitlistPopup from '@/components/WaitlistPopup';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
{/*       <WaitlistPopup /> */}
      <Navbar />
      <Hero />
      <Calculator />
      <Benefits />
      <HowItWorks />
      <Waitlist />
      <Security />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
