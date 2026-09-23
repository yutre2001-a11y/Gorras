import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { TrustStrip } from './TrustStrip';
import { Inventory } from './Inventory';
import { PaymentCalculator } from './PaymentCalculator';
import { TradeIn } from './TradeIn';
import { HowBuyingWorks } from './HowBuyingWorks';
import { ServiceDepartment } from './ServiceDepartment';
import { Reviews } from './Reviews';
import { FinalCTA } from './FinalCTA';
import { Footer } from './Footer';

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
