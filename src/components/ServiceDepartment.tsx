import { motion } from 'framer-motion';
import { serviceCards } from '../data/services';
import { Wrench, Gauge, Package } from 'lucide-react';
import { Button } from './ui/Button';

const icons = {
  Wrench,
  Gauge,
  Package,
};

export function ServiceDepartment() {
  return (
    <section id="service" className="bg-[#12141a] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.18em] text-[#0a90ff] font-semibold mb-3">
            SERVICE DEPARTMENT
          </p>
          <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tight">
            We Keep It Running
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {serviceCards.map((card, index) => {
            const Icon = icons[card.icon as keyof typeof icons];
            return (
              <motion.div
                key={card.id}
                className="bg-[#1a1d26] border border-[#252a34] rounded-2xl p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-[#0a90ff]/10 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-[#0a90ff]" />
                </div>
                <h3 className="font-display font-bold text-2xl mb-4">{card.title}</h3>
                <p className="text-[#8b98a5] mb-6">{card.description}</p>
                <Button variant="ghost" size="md" className="w-full">
                  Schedule Service →
                </Button>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="text-center border-t border-[#252a34] pt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="font-semibold text-lg mb-2">Service Hours</h3>
          <p className="text-[#8b98a5]">Mon–Fri 7am–6pm · Sat 8am–4pm · Sun closed</p>
        </motion.div>
      </div>
    </section>
  );
}
