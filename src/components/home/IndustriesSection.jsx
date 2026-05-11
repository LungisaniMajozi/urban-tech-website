import { motion } from "framer-motion";
import {
  Building2,
  Landmark,
  Hotel,
  Heart,
  HardHat,
  Factory,
} from "lucide-react";

const INDUSTRIES = [
  { icon: Building2, label: "Corporate Offices" },
  { icon: Landmark, label: "Government Institutions" },
  { icon: Hotel, label: "Hotels & Guesthouses" },
  { icon: Heart, label: "Clinics & Hospitals" },
  { icon: HardHat, label: "Construction Companies" },
  { icon: Factory, label: "Manufacturing Facilities" },
];

export default function IndustriesSection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-accent mb-4 block">
            Industry Solutions
          </span>
          <h2 className="font-heading font-black text-3xl lg:text-5xl text-foreground tracking-tighter leading-tight mb-4">
            Tailored For Your Sector
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            We provide tailored services and supplies across diverse industries,
            delivering customized solutions within demanding timelines.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {INDUSTRIES.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group bg-card border border-border rounded-lg p-6 text-center hover:border-accent/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/5 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/10 transition-colors">
                <item.icon
                  size={24}
                  className="text-primary group-hover:text-accent transition-colors"
                />
              </div>
              <span className="font-heading font-semibold text-sm text-foreground">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
