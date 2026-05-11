import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  SprayCan,
  BookOpen,
  Monitor,
  ShieldCheck,
} from "lucide-react";

const SERVICES = [
  {
    icon: SprayCan,
    tag: "01",
    title: "Cleaning Products & Services",
    description:
      "General cleaning, supplies, PPE, pre-emptive surface disinfection, and post-contamination infection control.",
    image:
      "https://media.base44.com/images/public/6a01b23beb74826eb127fc1d/0a08e19a5_generated_2c86647c.png",
  },
  {
    icon: BookOpen,
    tag: "02",
    title: "Educational Supplies & Resources",
    description:
      "Learner materials, textbooks, whiteboards, projectors, mathematical instruments, and scientific equipment.",
    image:
      "https://media.base44.com/images/public/6a01b23beb74826eb127fc1d/be964c8fc_generated_89b29d4d.png",
  },
  {
    icon: Monitor,
    tag: "03",
    title: "Office Equipment & Stationery",
    description:
      "Computers, printers, office furniture, filing cabinets, scanners, photocopiers, and communication systems.",
    image:
      "https://media.base44.com/images/public/6a01b23beb74826eb127fc1d/de31f38fa_generated_e07606f3.png",
  },
  {
    icon: ShieldCheck,
    tag: "04",
    title: "PPE Supply",
    description:
      "Personal protective equipment for corporate offices, construction, manufacturing, clinics, and hotels.",
    image:
      "https://media.base44.com/images/public/6a01b23beb74826eb127fc1d/fa0ab9303_generated_0f367023.png",
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-accent mb-4 block">
              What We Do
            </span>
            <h2 className="font-heading font-black text-3xl lg:text-5xl text-white tracking-tighter leading-tight">
              {"Products & Services"}
            </h2>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 font-heading font-semibold text-sm text-accent hover:text-white transition-colors group"
          >
            View All Services
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-accent/30 transition-all duration-500"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon size={20} className="text-accent" />
                    <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                      {service.tag}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-xl lg:text-2xl text-white tracking-tighter mb-2">
                    {service.title}
                  </h3>
                  <p className="text-white/60 font-body text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
