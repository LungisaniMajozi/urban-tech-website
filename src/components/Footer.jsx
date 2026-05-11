import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img src="/logo.png" alt="Urban Tech Logo" className="h-16 w-auto" />
            </div>
            <p className="text-white/60 font-body text-sm leading-relaxed mt-4">
              Transforming how businesses access essential goods and services
              through efficiency, reliability, and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-accent mb-6">
              Navigation
            </h4>
            <div className="space-y-3">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-white/60 hover:text-white text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-accent mb-6">
              Services
            </h4>
            <div className="space-y-3">
              {[
                "Cleaning Products & Services",
                "Educational Supplies",
                "Office Equipment",
                "PPE Supply",
                "Industry Solutions",
              ].map((s) => (
                <Link
                  key={s}
                  to="/services"
                  className="block text-white/60 hover:text-white text-sm transition-colors"
                >
                  {s}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-accent mb-6">
              Contact
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-accent mt-0.5 shrink-0" />
                <a 
                  href="https://maps.google.com/?q=Summit+Road,+Blue+Hills,+Midrand,+1685" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white/60 hover:text-white text-sm transition-colors block"
                >
                  Summit Road, Blue Hills
                  <br />
                  Midrand, 1685
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-accent shrink-0" />
                <a
                  href="tel:+27812445390"
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  +27 81 244 5390
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-accent shrink-0" />
                <a
                  href="mailto:koketsomanthata@gmail.com"
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  koketsomanthata@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Globe size={16} className="text-accent shrink-0" />
                <a 
                  href="https://www.urbanenterprise.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  www.urbanenterprise.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 font-mono text-xs">
            © 2026 Urban-Tech Commercial Enterprise. All rights reserved.
          </p>
          <p className="text-white/40 font-mono text-xs">
            EST. 2023 · MIDRAND, SOUTH AFRICA
          </p>
        </div>
      </div>
    </footer>
  );
}
