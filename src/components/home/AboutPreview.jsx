import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function AboutPreview() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src="https://media.base44.com/images/public/6a01b23beb74826eb127fc1d/6c32a49a5_generated_7d3293c8.png"
                alt="South African urban skyline at golden hour"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-card border border-border rounded-lg p-5 shadow-xl">
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block">
                Registered
              </span>
              <span className="font-heading font-black text-3xl text-primary tracking-tighter">
                2023
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-accent block mt-1">
                Midrand, SA
              </span>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="font-mono text-xs uppercase tracking-widest text-accent mb-4 block">
              About Us
            </span>
            <h2 className="font-heading font-black text-3xl lg:text-5xl text-foreground tracking-tighter leading-tight mb-6">
              {"Dynamic & Forward-Thinking Enterprise"}
            </h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-4">
              Urban-Tech Commercial Enterprise is a dynamic and forward-thinking
              privately owned company officially registered in 2023. Founded by
              Koketso Manthata, the company operates as a private
              limited-liability enterprise committed to delivering innovative,
              cost-effective, and reliable goods and services across multiple
              industries.
            </p>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-8">
              What distinguishes us is our unwavering commitment to ethics,
              integrity, and long-term client relationships.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 font-heading font-semibold text-sm text-primary hover:text-accent transition-colors group"
            >
              Read Our Full Story
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
