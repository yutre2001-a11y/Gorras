import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Select } from './ui/Select';
import { Slider } from './ui/Slider';
import { Button } from './ui/Button';
import { inventory, vehicleTypes, vehicleMakes, maxPrice } from '../data/inventory';
import type { Vehicle } from '../types';

export function Inventory() {
  const [filters, setFilters] = useState({
    type: 'All',
    make: 'All',
    maxPrice: maxPrice,
  });

  const filtered = useMemo(() => {
    return inventory.filter((v) => {
      const typeMatch = filters.type === 'All' || v.type === filters.type;
      const makeMatch = filters.make === 'All' || v.make === filters.make;
      const priceMatch = v.price <= filters.maxPrice;
      return typeMatch && makeMatch && priceMatch;
    });
  }, [filters]);

  const handleFilterChange = (key: keyof typeof filters, value: string | number) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <section id="inventory" className="bg-[#12141a] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.18em] text-[#0a90ff] font-semibold mb-3">
            IN STOCK NOW
          </p>
          <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tight">
            Browse Inventory
          </h2>
        </motion.div>

        <motion.div
          className="sticky top-[76px] z-30 border-y border-[#252a34] bg-[#12141a]/95 backdrop-blur py-4 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-wrap items-center gap-4">
            <Select
              options={vehicleTypes.map((t) => ({ value: t, label: t }))}
              value={filters.type}
              onValueChange={(v) => handleFilterChange('type', v)}
              placeholder="Type"
              className="min-w-[120px]"
            />
            <Select
              options={vehicleMakes.map((m) => ({ value: m, label: m }))}
              value={filters.make}
              onValueChange={(v) => handleFilterChange('make', v)}
              placeholder="Make"
              className="min-w-[120px]"
            />
            <div className="flex-1 min-w-[200px]">
              <Slider
                value={[filters.maxPrice]}
                onValueChange={(v) => handleFilterChange('maxPrice', v[0])}
                min={0}
                max={maxPrice}
                step={1000}
                label="Max Price"
                unit="$"
              />
            </div>
            <span className="ml-auto text-sm text-[#8b98a5]">
              {filtered.length} vehicles
            </span>
          </div>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((vehicle, index) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button variant="secondary" size="lg">Load more</Button>
          <p className="mt-4 text-sm text-[#8b98a5]">
            <a href="#" className="text-[#0a90ff] hover:underline">
              View all 340 vehicles →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function VehicleCard({ vehicle, index }: { vehicle: Vehicle; index: number }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.32, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5 }}
      className="group overflow-hidden rounded-xl border border-[#252a34] bg-[#1a1d26] transition-colors hover:border-[#0a90ff]/30"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={vehicle.image}
          alt={`${vehicle.name} exterior`}
          className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
        {vehicle.inStock && (
          <span
            className="absolute left-3 top-3 rounded-full px-3 py-1 text-[11px] font-semibold"
            style={{ background: '#2bb673', color: '#04180f' }}
          >
            In stock
          </span>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-display text-xl font-semibold">{vehicle.name}</h3>
        <div className="mt-1 text-sm text-[#8b98a5]">
          {vehicle.mileage.toLocaleString()} mi · {vehicle.drivetrain} · {vehicle.condition}
        </div>
        <div className="mt-4 flex items-end justify-between">
          <span className="font-display text-2xl font-bold tabular-nums">
            ${vehicle.price.toLocaleString()}
          </span>
          <span className="text-sm text-[#0a90ff]">or ${vehicle.monthlyPayment}/mo</span>
        </div>
      </div>
    </motion.article>
  );
}
