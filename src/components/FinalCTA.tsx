import { motion } from 'framer-motion';
import { Button } from './ui/Button';

export function FinalCTA() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(120deg, #0a90ff, #0b5ed7)',
          backgroundSize: '200% 200%',
        }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tight text-white mb-6">
            340 vehicles. One afternoon.
          </h2>
          <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto">
            Open seven days. Pre-qualify online, test drive today, and drive home in the same visit if the numbers work.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="primary" size="lg" className="bg-white text-[#0a90ff] hover:bg-opacity-90">
              Browse Inventory
            </Button>
            <Button variant="ghost" size="lg" className="text-white border-white/30 hover:bg-white/10">
              Get Pre-Qualified
            </Button>
          </div>
          <p className="mt-8 text-2xl md:text-3xl font-bold text-white">
            (305) 555-0190
          </p>
        </motion.div>
      </div>
    </section>
  );
}
