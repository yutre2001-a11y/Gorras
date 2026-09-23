import { useState } from 'react';
import { motion } from 'framer-motion';
import { Slider } from './ui/Slider';
import { Button } from './ui/Button';

export function PaymentCalculator() {
  const [price, setPrice] = useState(42000);
  const [downPayment, setDownPayment] = useState(5000);
  const [term, setTerm] = useState(60);
  const apr = 0.069;

  const principal = Math.max(price - downPayment, 0);
  const r = apr / 12;
  const monthly = Math.round((principal * r) / (1 - Math.pow(1 + r, -term)));

  return (
    <section id="financing" className="bg-[#1a1d26] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-[0.18em] text-[#0a90ff] font-semibold mb-3">
              FINANCING
            </p>
            <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight mb-6">
              Know the Payment Before You Come In
            </h2>
            <p className="text-lg text-[#8b98a5] mb-8">
              Nobody enjoys discovering their real payment after three hours in a windowless office. Run the numbers here, get pre-qualified with a soft credit check, and arrive knowing exactly what you are signing.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#0a90ff] rounded-full mt-2 flex-shrink-0" />
                <p className="text-[#8b98a5]">
                  Soft credit check for pre-qualification &mdash; no impact on your score
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#0a90ff] rounded-full mt-2 flex-shrink-0" />
                <p className="text-[#8b98a5]">We work with 22 lenders, including credit unions</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#0a90ff] rounded-full mt-2 flex-shrink-0" />
                <p className="text-[#8b98a5]">Rates from 4.9% APR for qualified buyers</p>
              </div>
            </div>

            <Button variant="primary" size="lg">Get Pre-Qualified</Button>
            <p className="mt-4 text-sm text-[#8b98a5]">
              Soft credit check only &mdash; does not affect your score.
            </p>
          </motion.div>

          <motion.div
            className="rounded-2xl border border-[#252a34] bg-[#1a1d26] p-8"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6">
              <Slider
                value={[price]}
                onValueChange={(v) => setPrice(v[0])}
                min={10000}
                max={100000}
                step={1000}
                label="Vehicle Price"
                unit="$"
              />
              <Slider
                value={[downPayment]}
                onValueChange={(v) => setDownPayment(v[0])}
                min={0}
                max={price}
                step={500}
                label="Down Payment"
                unit="$"
              />
              <Slider
                value={[term]}
                onValueChange={(v) => setTerm(v[0])}
                min={36}
                max={72}
                step={12}
                label="Loan Term"
                unit=" months"
              />
            </div>

            <div className="mt-8 text-center">
              <span className="text-xs uppercase tracking-[0.18em] text-[#8b98a5]">
                Estimated monthly
              </span>
              <motion.div
                key={monthly}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="font-display text-5xl md:text-6xl tabular-nums text-[#0a90ff]"
              >
                ${monthly.toLocaleString()}
              </motion.div>
              <p className="mt-2 text-sm text-[#8b98a5]">
                {term} months at {(apr * 100).toFixed(1)}% APR &middot; Estimate only, subject to credit approval
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
