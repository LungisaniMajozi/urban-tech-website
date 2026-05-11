import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  SprayCan,
  BookOpen,
  Monitor,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import ServiceDetailCard from "../components/services/ServiceDetailCard";

const SERVICES = [
  {
    icon: SprayCan,
    tag: "Service 01",
    title: "Cleaning Products & Services",
    items: [
      "General cleaning services",
      "Cleaning supplies and equipment",
      "Pre-emptive surface disinfection",
      "Post-contamination infection control",
      "PPE supply",
    ],
    image:
      "https://media.base44.com/images/public/6a01b23beb74826eb127fc1d/0a08e19a5_generated_2c86647c.png",
  },
  {
    icon: BookOpen,
    tag: "Service 02",
    title: "Educational Supplies & Resources",
    items: [
      "Learner and teacher materials",
      "Electronic interactive resources",
      "Textbooks, study guides, kits, and manuals",
      "Educational DVDs and videos",
      "Visual aids including charts, posters, and photographs",
      "Whiteboards and projectors",
      "Mathematical instruments and scientific equipment",
    ],
    image:
      "https://media.base44.com/images/public/6a01b23beb74826eb127fc1d/be964c8fc_generated_89b29d4d.png",
  },
  {
    icon: Monitor,
    tag: "Service 03",
    title: "Office Equipment & Stationery",
    items: [
      "General stationery",
      "Office furniture and filing cabinets",
      "Computers, laptops, and tablets",
      "Printers, cartridges, and toners",
      "Scanners, photocopiers, fax machines, and shredders",
      "Telephones and office communication systems",
    ],
    image:
      "https://media.base44.com/images/public/6a01b23beb74826eb127fc1d/de31f38fa_generated_e07606f3.png",
  },
  {
    icon: ShieldCheck,
    tag: "Service 04",
    title: "PPE Supply",
    items: [
      "Corporate offices and government institutions",
      "Cleaning campaigns",
      "Hotels and guesthouses",
      "Clinics and hospitals",
      "Construction and manufacturing",
    ],
    image:
      "https://media.base44.com/images/public/6a01b23beb74826eb127fc1d/fa0ab9303_generated_0f367023.png",
  },
];

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-secondary relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-xs uppercase tracking-widest text-accent mb-4 block">
              Our Services
            </span>
            <h1 className="font-heading font-black text-4xl lg:text-6xl text-white tracking-tighter leading-tight max-w-3xl">
              {"Products & Services"}
            </h1>
            <p className="font-body text-white/60 text-lg mt-4 max-w-xl">
              Comprehensive procurement solutions tailored to your industry,
              delivering quality goods and professional services across diverse
              sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {SERVICES.map((service, index) => (
              <ServiceDetailCard key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-accent mb-4 block">
              Industry-Specific Solutions
            </span>
            <h2 className="font-heading font-black text-3xl lg:text-5xl text-foreground tracking-tighter leading-tight mb-4">
              We Serve Multiple Sectors
            </h2>
            <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
              We provide tailored services and supplies to meet the unique
              demands of each industry.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Corporate Offices",
              "Government Institutions",
              "Hotels & Guesthouses",
              "Clinics & Hospitals",
              "Construction Companies",
              "Manufacturing Facilities",
            ].map((sector, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-background border border-border rounded-lg p-6 flex items-center gap-4 hover:border-accent/30 transition-all"
              >
                <div className="w-3 h-3 rounded-full bg-accent shrink-0" />
                <span className="font-heading font-semibold text-foreground">
                  {sector}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-heading font-black text-3xl lg:text-4xl text-primary-foreground tracking-tighter mb-6">
            Need a Custom Solution?
          </h2>
          <p className="font-body text-primary-foreground/70 text-lg mb-8">
            {
              "Tell us what your business needs and we'll deliver a tailored procurement solution — faster and more efficiently."
            }
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-heading font-semibold text-sm rounded-md hover:brightness-110 transition-all group"
          >
            Get a Quote
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </section>
    </>
  );
}
