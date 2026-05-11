import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://media.base44.com/images/public/6a01b23beb74826eb127fc1d/b9ff32ba5_generated_f03353fb.png"
          alt="Modern commercial building at golden hour"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32 w-full">
        <div className="max-w-3xl">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block font-mono text-xs uppercase tracking-widest text-accent border border-accent/30 px-4 py-1.5 rounded-full mb-8">
              Est. 2023 · Midrand, South Africa
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading font-black text-4xl sm:text-5xl lg:text-7xl text-white tracking-tighter leading-[0.95] mb-6"
          >
            WE SUPPLY
            <br />
            <span className="text-accent">THE CORE.</span>
            <br />
            WE DELIVER
            <br />
            <span className="text-white/60">THE FUTURE.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white/70 font-body text-lg lg:text-xl leading-relaxed max-w-xl mb-10"
          >
            Innovative, cost-effective, and reliable goods and services across
            multiple industries — delivered faster, smarter, and better.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-heading font-semibold text-sm rounded-md hover:brightness-110 transition-all group"
            >
              Explore Services
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-heading font-semibold text-sm rounded-md hover:bg-white/10 transition-all"
            >
              Get a Quote
            </Link>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-16 lg:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {[
            { value: "2023", label: "Founded" },
            { value: "6+", label: "Industries Served" },
            { value: "100%", label: "Client Focused" },
            { value: "B-BBEE", label: "Compliant" },
          ].map((stat, i) => (
            <div key={i} className="border-l-2 border-accent/40 pl-4">
              <span className="font-heading font-black text-2xl lg:text-3xl text-white tracking-tighter">
                {stat.value}
              </span>
              <span className="block font-mono text-[10px] uppercase tracking-widest text-white/50 mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
