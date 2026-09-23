import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';

export function TradeIn() {
  const tradeInImage = 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80';
  const [year, setYear] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [mileage, setMileage] = useState('');
  const [condition, setCondition] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="trade-in" className="bg-[#12141a] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative aspect-[4/3] lg:aspect-auto lg:h-[500px] overflow-hidden rounded-2xl"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={tradeInImage}
              alt="Car keys being handed across a counter"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#12141a]/80 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-xs uppercase tracking-[0.18em] text-[#0a90ff] font-semibold mb-3">
              TRADE-IN
            </p>
            <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight mb-6">
              Your Car Is Worth More Than You Think
            </h2>
            <p className="text-lg text-[#8b98a5] mb-8">
              Get a real offer backed by current market data. No games, no lowballing.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#0a90ff]/10 rounded-full flex items-center justify-center text-sm font-bold text-[#0a90ff]">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-[#eff1f4]">Tell us about it</h3>
                  <p className="text-sm text-[#8b98a5]">Year, make, model, mileage, and honest condition. Two minutes.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#0a90ff]/10 rounded-full flex items-center justify-center text-sm font-bold text-[#0a90ff]">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-[#eff1f4]">Get a real number</h3>
                  <p className="text-sm text-[#8b98a5]">Not a range. An actual offer, backed by our current auction and retail data.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#0a90ff]/10 rounded-full flex items-center justify-center text-sm font-bold text-[#0a90ff]">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-[#eff1f4]">Bring it in</h3>
                  <p className="text-sm text-[#8b98a5]">We verify the condition, and if it matches, the offer stands.</p>
                </div>
              </div>
            </div>

            <p className="text-sm text-[#8b98a5] mb-6">
              Offers are good for 7 days and 500 miles, whether or not you buy from us.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                <select
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className="bg-[#1a1d26] border border-[#252a34] rounded-full px-4 py-3 text-sm focus:outline-none focus:border-[#0a90ff]"
                >
                  <option value="">Year</option>
                  {Array.from({ length: 20 }, (_, i) => 2025 - i).map((y) => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
                <select
                  value={make}
                  onChange={(e) => setMake(e.target.value)}
                  className="bg-[#1a1d26] border border-[#252a34] rounded-full px-4 py-3 text-sm focus:outline-none focus:border-[#0a90ff]"
                >
                  <option value="">Make</option>
                  <option>Aurora</option>
                  <option>Vantage</option>
                </select>
                <select
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  className="bg-[#1a1d26] border border-[#252a34] rounded-full px-4 py-3 text-sm focus:outline-none focus:border-[#0a90ff]"
                >
                  <option value="">Model</option>
                </select>
                <input
                  type="number"
                  value={mileage}
                  onChange={(e) => setMileage(e.target.value)}
                  placeholder="Mileage"
                  className="bg-[#1a1d26] border border-[#252a34] rounded-full px-4 py-3 text-sm focus:outline-none focus:border-[#0a90ff]"
                />
                <select
                  value={condition}
                  onChange={(e) => setCondition(e.target.value)}
                  className="bg-[#1a1d26] border border-[#252a34] rounded-full px-4 py-3 text-sm focus:outline-none focus:border-[#0a90ff]"
                >
                  <option value="">Condition</option>
                  <option>Excellent</option>
                  <option>Good</option>
                  <option>Fair</option>
                </select>
              </div>
              <Button type="submit" variant="primary" size="lg" className="w-full md:w-auto">
                Get My Offer
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
