import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Target,
  Eye,
  Shield,
  Zap,
  Users,
  TrendingUp,
} from "lucide-react";

export default function About() {
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
              About Us
            </span>
            <h1 className="font-heading font-black text-4xl lg:text-6xl text-white tracking-tighter leading-tight max-w-3xl">
              Building a Future-Ready Enterprise
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Founder Message */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="font-mono text-xs uppercase tracking-widest text-accent mb-4 block">
                Message From The Founder
              </span>
              <h2 className="font-heading font-black text-3xl lg:text-4xl text-foreground tracking-tighter leading-tight mb-6">
                A Clear Vision for Transformation
              </h2>
              <div className="space-y-4 font-body text-muted-foreground text-lg leading-relaxed">
                <p>
                  Urban-Tech Commercial Enterprise was founded with a clear
                  vision: to transform how businesses and institutions access
                  essential goods and services through efficiency, reliability,
                  and innovation.
                </p>
                <p>
                  As we look ahead, our focus is on building a future-ready
                  enterprise that anticipates market needs and delivers smarter,
                  faster, and more cost-effective solutions. With the growing
                  demand for bundled and flexible service offerings, we are
                  investing in the right talent, technology, and systems to
                  scale our operations and enhance service delivery.
                </p>
                <p>
                  Our goal is to become the preferred independent supplier
                  across multiple sectors — recognized for quality, integrity,
                  and consistent performance. We are committed to continuous
                  improvement, strategic growth, and creating long-term value
                  for our clients and partners.
                </p>
                <p>
                  The future of Urban-Tech Commercial Enterprise is defined by
                  innovation, expansion, and purposeful growth. We look forward
                  to building lasting partnerships and delivering solutions that
                  drive success.
                </p>
              </div>
              <div className="mt-8 border-l-2 border-accent pl-4">
                <span className="font-heading font-bold text-foreground block">
                  Koketso Manthata
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  {"Founder & Director"}
                </span>
              </div>
            </motion.div>

            {/* Executive summary */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="font-mono text-xs uppercase tracking-widest text-accent mb-4 block">
                Executive Summary
              </span>
              <h2 className="font-heading font-black text-3xl lg:text-4xl text-foreground tracking-tighter leading-tight mb-6">
                {"Dynamic & Forward-Thinking"}
              </h2>
              <div className="space-y-4 font-body text-muted-foreground text-lg leading-relaxed">
                <p>
                  Urban-tech Commercial Enterprise is a dynamic and
                  forward-thinking privately owned company officially registered
                  in 2023. Founded by Koketso Manthata, the company operates as
                  a private limited-liability enterprise committed to delivering
                  innovative, cost-effective, and reliable goods and services
                  across multiple industries.
                </p>
                <p>
                  We specialize in the supply of goods and professional services
                  across diverse industries. With extensive experience in
                  delivering customized solutions within demanding timelines,
                  the company has positioned itself as a trusted supplier
                  capable of meeting evolving market demands.
                </p>
                <p>
                  What distinguishes Urban-tech Commercial Enterprise is our
                  unwavering commitment to ethics, integrity, and long-term
                  client relationships. We believe sustainable business success
                  is built on transparency, accountability, and mutually
                  beneficial partnerships.
                </p>
                <p>
                  Our rigorous supplier screening processes and professional
                  standards provide clients with confidence that all services
                  and products are delivered legally, ethically, and
                  efficiently.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-accent mb-4 block">
              Our Mission
            </span>
            <h2 className="font-heading font-black text-3xl lg:text-5xl text-foreground tracking-tighter leading-tight max-w-3xl mx-auto mb-6">
              Top-Quality, Single-Source Solutions
            </h2>
            <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Our mission is to provide top-quality, single-source solutions for
              essential products and services across multiple sectors —
              delivering faster, more affordable, and more efficient procurement
              solutions than traditional local agents or direct purchasing
              channels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: "Efficiency",
                desc: "Faster and more cost-effective procurement solutions",
              },
              {
                icon: Shield,
                title: "Integrity",
                desc: "Unwavering commitment to ethics and transparency",
              },
              {
                icon: Zap,
                title: "Innovation",
                desc: "Anticipating market needs with smarter solutions",
              },
              {
                icon: Users,
                title: "Client Focus",
                desc: "Tailored solutions for every operational requirement",
              },
              {
                icon: Eye,
                title: "Quality",
                desc: "Rigorous supplier screening and professional standards",
              },
              {
                icon: TrendingUp,
                title: "Growth",
                desc: "Strategic expansion and continuous improvement",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-background border border-border rounded-lg p-6 hover:border-accent/30 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center mb-4">
                  <item.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-heading font-black text-3xl lg:text-4xl text-primary-foreground tracking-tighter mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="font-body text-primary-foreground/70 text-lg mb-8">
            We are dedicated to providing individuals, institutions, businesses,
            and communities with unique product solutions tailored to their
            operational requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-heading font-semibold text-sm rounded-md hover:brightness-110 transition-all group"
          >
            Contact Us Today
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
