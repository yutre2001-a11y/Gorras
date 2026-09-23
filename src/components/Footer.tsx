import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f1115] text-[#8b98a5]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display font-bold text-2xl text-[#eff1f4] mb-4">
              APEX MOTORS
            </h3>
            <p className="text-sm mb-4">
              New & certified pre-owned &middot; Miami, Florida
            </p>
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                8800 Biscayne Boulevard, Miami, FL 33138
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-semibold text-[#eff1f4] mb-4">Inventory</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#0a90ff] transition-colors">New Vehicles</a></li>
              <li><a href="#" className="hover:text-[#0a90ff] transition-colors">Certified Pre-Owned</a></li>
              <li><a href="#" className="hover:text-[#0a90ff] transition-colors">All Vehicles</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-semibold text-[#eff1f4] mb-4">Financing</h4>
            <ul className="space-y-2 text-sm mb-6">
              <li><a href="#" className="hover:text-[#0a90ff] transition-colors">Payment Calculator</a></li>
              <li><a href="#" className="hover:text-[#0a90ff] transition-colors">Pre-Qualification</a></li>
            </ul>
            <h4 className="font-semibold text-[#eff1f4] mb-4">Trade-In</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#0a90ff] transition-colors">Get an Offer</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-semibold text-[#eff1f4] mb-4">Service</h4>
            <ul className="space-y-2 text-sm mb-6">
              <li><a href="#" className="hover:text-[#0a90ff] transition-colors">Schedule Service</a></li>
              <li><a href="#" className="hover:text-[#0a90ff] transition-colors">Maintenance</a></li>
            </ul>
            <h4 className="font-semibold text-[#eff1f4] mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+13055550190" className="hover:text-[#0a90ff] transition-colors">
                  (305) 555-0190
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@apexmotors.com" className="hover:text-[#0a90ff] transition-colors">
                  info@apexmotors.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-[#252a34] pt-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h4 className="font-semibold text-[#eff1f4] mb-4">Hours</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h5 className="font-medium text-[#eff1f4] mb-1">Sales</h5>
              <p>Mon&ndash;Sat 9am&ndash;8pm</p>
              <p>Sun 11am&ndash;6pm</p>
            </div>
            <div>
              <h5 className="font-medium text-[#eff1f4] mb-1">Service</h5>
              <p>Mon&ndash;Fri 7am&ndash;6pm</p>
              <p>Sat 8am&ndash;4pm</p>
              <p>Sun closed</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a href="#" className="text-[#8b98a5] hover:text-[#0a90ff] transition-colors">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="#" className="text-[#8b98a5] hover:text-[#0a90ff] transition-colors">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="#" className="text-[#8b98a5] hover:text-[#0a90ff] transition-colors">
            <Instagram className="w-6 h-6" />
          </a>
        </motion.div>
      </div>

      <motion.div
        className="border-t border-[#252a34]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-wrap justify-between items-center gap-4 text-xs">
            <p>&copy; {currentYear} Apex Motors LLC. All rights reserved.</p>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="hover:text-[#0a90ff] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#0a90ff] transition-colors">Accessibility</a>
              <span>Dealer License #DL-0448210</span>
            </div>
          </div>
          <p className="text-xs text-[#8b98a5] mt-4">
            Advertised payments are estimates and exclude tax, title, and dealer fees. Subject to credit approval.
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
