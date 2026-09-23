import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';
import { Button } from './ui/Button';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inventory', href: '#inventory' },
    { label: 'Financing', href: '#financing' },
    { label: 'Trade-In', href: '#trade-in' },
    { label: 'Service', href: '#service' },
    { label: 'About', href: '#about' },
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'bg-[#12141a]/95 backdrop-blur' : 'bg-[#12141a]/70'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="flex items-center gap-2 group">
              <span className="font-display font-bold text-2xl tracking-tight">APEX</span>
              <ChevronRight className="w-5 h-5 text-[#0a90ff] transform -rotate-90" />
              <span className="font-sans font-semibold text-sm tracking-widest text-[#eff1f4]">MOTORS</span>
            </a>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-[#8b98a5] hover:text-[#0a90ff] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+13055550190"
                className="flex items-center gap-2 text-sm font-medium text-[#eff1f4] hover:text-[#0a90ff] transition-colors"
              >
                <Phone className="w-4 h-4" />
                (305) 555-0190
              </a>
              <Button variant="primary" size="md">Browse Inventory</Button>
            </div>

            <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="w-6 h-6 text-[#eff1f4]" />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-[#12141a]/98 backdrop-blur lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex flex-col h-full p-6">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <span className="font-display font-bold text-xl">APEX</span>
                  <ChevronRight className="w-4 h-4 text-[#0a90ff] transform -rotate-90" />
                  <span className="font-sans font-semibold text-xs tracking-widest">MOTORS</span>
                </div>
                <button onClick={() => setIsMenuOpen(false)}>
                  <X className="w-6 h-6 text-[#eff1f4]" />
                </button>
              </div>
              <div className="flex flex-col gap-4 flex-1">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    className="text-lg font-medium text-[#eff1f4] py-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
              <div className="flex flex-col gap-4 py-6 border-t border-[#252a34]">
                <a href="tel:+13055550190" className="flex items-center gap-3 text-lg font-medium text-[#eff1f4]">
                  <Phone className="w-5 h-5" />
                  (305) 555-0190
                </a>
                <Button variant="primary" size="lg" onClick={() => setIsMenuOpen(false)}>
                  Browse Inventory
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
