import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 lg:py-32 bg-primary relative overflow-hidden">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="font-mono text-xs uppercase tracking-widest text-accent mb-6 block">
            Let's Work Together
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-6xl text-primary-foreground tracking-tighter leading-tight mb-6 max-w-3xl mx-auto">
            Ready to Transform Your Procurement?
          </h2>
          <p className="font-body text-primary-foreground/70 text-lg max-w-xl mx-auto mb-10">
            Get in touch with us today for competitive pricing, quality
            assurance, and efficient delivery timelines.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-heading font-semibold text-sm rounded-md hover:brightness-110 transition-all group"
            >
              Request a Quote
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <a
              href="tel:+27812445390"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-primary-foreground/20 text-primary-foreground font-heading font-semibold text-sm rounded-md hover:bg-white/10 transition-all"
            >
              <Phone size={16} />
              +27 81 244 5390
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-primary-foreground/50">
            <Mail size={14} />
            <a
              href="mailto:koketsomanthata@gmail.com"
              className="font-mono text-xs hover:text-primary-foreground transition-colors"
            >
              koketsomanthata@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
