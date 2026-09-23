import { motion } from 'framer-motion';
import { processSteps } from '../data/process';

export function HowBuyingWorks() {
  return (
    <section className="bg-[#1a1d26] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.18em] text-[#0a90ff] font-semibold mb-3">
            THE PROCESS
          </p>
          <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tight">
            How Buying Works Here
          </h2>
        </motion.div>

        <div className="relative">
          <motion.div
            className="absolute top-8 left-0 right-0 h-0.5 bg-[#0a90ff]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                className="relative pt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
              >
                <motion.div
                  className="absolute top-0 left-0 w-16 h-16 bg-[#0a90ff] rounded-full flex items-center justify-center text-2xl font-bold text-white"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                >
                  {step.number}
                </motion.div>
                <div className="pl-20">
                  <h3 className="font-display font-bold text-xl mb-2">{step.title}</h3>
                  <p className="text-sm text-[#8b98a5] mb-2">{step.description}</p>
                  <p className="text-xs text-[#8b98a5]">{step.duration}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
