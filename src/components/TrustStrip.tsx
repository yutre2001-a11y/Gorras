import { motion } from 'framer-motion';
import { ShieldCheck, RefreshCw, CheckCircle, Star } from 'lucide-react';

export function TrustStrip() {
  const trustItems = [
    { icon: ShieldCheck, label: 'No-haggle pricing' },
    { icon: RefreshCw, label: '7-day return policy' },
    { icon: CheckCircle, label: '172-point inspection' },
    { icon: Star, label: '4.8★ from 2,100+ reviews' },
  ];

  return (
    <section className="bg-[#1a1d26] border-y border-[#252a34]">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.label}
              className="flex items-center gap-3 text-sm text-[#8b98a5]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ x: 5 }}
            >
              <item.icon className="w-5 h-5 text-[#0a90ff] flex-shrink-0" />
              <span>{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
