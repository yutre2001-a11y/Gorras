import { motion } from 'framer-motion';
import { reviews } from '../data/reviews';
import { Star } from 'lucide-react';

export function Reviews() {
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
            CUSTOMER REVIEWS
          </p>
          <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tight">
            What Our Customers Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              className="bg-[#1a1d26] border border-[#252a34] rounded-2xl p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < review.rating ? 'text-[#0a90ff] fill-[#0a90ff]' : 'text-[#8b98a5]'}`}
                  />
                ))}
              </div>
              <blockquote className="text-lg font-medium mb-6">
                "{review.quote}"
              </blockquote>
              <div>
                <p className="font-semibold text-[#eff1f4]">{review.name}</p>
                <p className="text-sm text-[#8b98a5]">Purchased {review.vehiclePurchased}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
