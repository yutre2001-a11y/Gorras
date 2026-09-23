import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { Inventory } from './components/Inventory';
import { PaymentCalculator } from './components/PaymentCalculator';
import { TradeIn } from './components/TradeIn';
import { HowBuyingWorks } from './components/HowBuyingWorks';
import { ServiceDepartment } from './components/ServiceDepartment';
import { Reviews } from './components/Reviews';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#12141a]">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Inventory />
        <PaymentCalculator />
        <TradeIn />
        <HowBuyingWorks />
        <ServiceDepartment />
        <Reviews />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
