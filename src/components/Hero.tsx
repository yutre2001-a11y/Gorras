import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { Button } from './ui/Button';

export function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center">
      <img
        src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1920&q=80"
        alt="Sleek modern car on a wet city street at night"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, rgba(18,20,26,0.95) 0%, rgba(18,20,26,0.6) 45%, rgba(18,20,26,0.25) 100%)',
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 w-full">
        <div className="max-w-2xl">
          <motion.div className="mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <p className="text-xs uppercase tracking-[0.18em] text-[#0a90ff] font-semibold">
              MIAMI, FL &middot; 340 VEHICLES IN STOCK &middot; OPEN 7 DAYS
            </p>
          </motion.div>
          <motion.h1
            className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.3 }}
          >
            Find it.<br />
            Finance it.<br />
            Drive it home<br />
            today.
          </motion.h1>
          <motion.p
            className="mt-8 text-lg md:text-xl text-[#8b98a5] max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            New and certified pre-owned across twelve makes, with transparent pricing and no four-hour finance office marathon.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Button variant="primary" size="lg">Browse Inventory</Button>
            <Button variant="ghost" size="lg" className="border border-[#252a34]">Value My Trade</Button>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="absolute bottom-20 left-1/2 -translate-x-1/2 w-full max-w-4xl px-6"
        initial={{ opacity: 0, y: 20, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
        style={{ boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3), 0 0 40px rgba(10, 144, 255, 0.1)' }}
      >
        <div className="bg-[#1a1d26]/90 backdrop-blur border border-[#252a34] rounded-2xl p-4">
          <div className="flex flex-wrap items-center gap-4">
            <select className="flex-1 min-w-[120px] bg-[#1a1d26] border border-[#252a34] rounded-full px-4 py-3 text-sm text-[#eff1f4] focus:outline-none focus:border-[#0a90ff]">
              <option>Make</option>
              <option>Aurora</option>
              <option>Vantage</option>
            </select>
            <select className="flex-1 min-w-[120px] bg-[#1a1d26] border border-[#252a34] rounded-full px-4 py-3 text-sm text-[#eff1f4] focus:outline-none focus:border-[#0a90ff]">
              <option>Model</option>
            </select>
            <select className="flex-1 min-w-[150px] bg-[#1a1d26] border border-[#252a34] rounded-full px-4 py-3 text-sm text-[#eff1f4] focus:outline-none focus:border-[#0a90ff]">
              <option>Max monthly payment</option>
            </select>
            <Button variant="primary" size="md">
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
