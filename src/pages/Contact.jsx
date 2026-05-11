import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Globe, Send, CheckCircle } from "lucide-react";


export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
              Contact Us
            </span>
            <h1 className="font-heading font-black text-4xl lg:text-6xl text-white tracking-tighter leading-tight max-w-3xl">
              {"Let's Build Something Together"}
            </h1>
            <p className="font-body text-white/60 text-lg mt-4 max-w-xl">
              Reach out for quotes, tenders, or general enquiries. We respond
              within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="bg-card border border-border rounded-lg p-6 lg:p-10"
              >
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={32} className="text-green-600" />
                    </div>
                    <h3 className="font-heading font-bold text-2xl text-foreground mb-2">
                      Message Sent!
                    </h3>
                    <p className="font-body text-muted-foreground">
                      {
                        "Thank you for reaching out. We'll get back to you within 24 hours."
                      }
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          service: "",
                          message: "",
                        });
                      }}
                      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 mt-6 bg-accent text-accent-foreground hover:brightness-110"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="font-heading font-bold text-2xl text-foreground mb-1">
                      What Are We Building?
                    </h3>
                    <p className="font-body text-muted-foreground text-sm mb-8">
                      {
                        "Tell us what you need and we'll get back to you with a solution."
                      }
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
                            Full Name
                          </label>
                          <input
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            required
                            placeholder="Your name"
                            className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-body"
                          />
                        </div>
                        <div>
                          <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
                            Email
                          </label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                email: e.target.value,
                              })
                            }
                            required
                            placeholder="your@email.com"
                            className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-body"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
                            Phone
                          </label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                phone: e.target.value,
                              })
                            }
                            placeholder="+27..."
                            className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-body"
                          />
                        </div>
                        <div>
                          <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
                            Service Needed
                          </label>
                          <select
                            onChange={(e) =>
                              setFormData({ ...formData, service: e.target.value })
                            }
                            className="flex h-12 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-body"
                          >
                            <option value="" disabled selected hidden>Select a service</option>
                            <option value="cleaning">Cleaning Products & Services</option>
                            <option value="education">Educational Supplies</option>
                            <option value="office">Office Equipment & Stationery</option>
                            <option value="ppe">PPE Supply</option>
                            <option value="other">Other / General Enquiry</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
                          Message
                        </label>
                        <textarea
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              message: e.target.value,
                            })
                          }
                          required
                          placeholder="Tell us about your needs..."
                          rows={5}
                          className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-body"
                        />
                      </div>
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 w-full h-12 bg-accent text-accent-foreground font-heading font-semibold hover:brightness-110"
                      >
                        <Send size={16} className="mr-2" />
                        Send Message
                      </button>
                    </form>
                  </>
                )}
              </motion.div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="space-y-8 lg:sticky lg:top-28"
              >
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-accent mb-6 block">
                    Contact Details
                  </span>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center shrink-0">
                        <MapPin size={20} className="text-primary" />
                      </div>
                      <div>
                        <span className="font-heading font-semibold text-foreground block">
                          Office Address
                        </span>
                        <a 
                          href="https://maps.google.com/?q=Summit+Road,+Blue+Hills,+Midrand,+1685" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="font-body text-muted-foreground text-sm hover:text-accent transition-colors block"
                        >
                          {"Summit Road, Blue Hills"}
                          <br />
                          {"Midrand, 1685"}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center shrink-0">
                        <Phone size={20} className="text-primary" />
                      </div>
                      <div>
                        <span className="font-heading font-semibold text-foreground block">
                          Phone
                        </span>
                        <a
                          href="tel:+27812445390"
                          className="font-body text-muted-foreground text-sm hover:text-accent transition-colors"
                        >
                          +27 81 244 5390
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center shrink-0">
                        <Mail size={20} className="text-primary" />
                      </div>
                      <div>
                        <span className="font-heading font-semibold text-foreground block">
                          Email
                        </span>
                        <a
                          href="mailto:koketsomanthata@gmail.com"
                          className="font-body text-muted-foreground text-sm hover:text-accent transition-colors"
                        >
                          koketsomanthata@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center shrink-0">
                        <Globe size={20} className="text-primary" />
                      </div>
                      <div>
                        <span className="font-heading font-semibold text-foreground block">
                          Website
                        </span>
                        <a 
                          href="https://www.urbanenterprise.com" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="font-body text-muted-foreground text-sm hover:text-accent transition-colors block"
                        >
                          www.urbanenterprise.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Business hours */}
                <div className="bg-card border border-border rounded-lg p-6">
                  <span className="font-mono text-xs uppercase tracking-widest text-accent mb-4 block">
                    Business Hours
                  </span>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-body text-muted-foreground text-sm">
                        {"Monday — Friday"}
                      </span>
                      <span className="font-mono text-sm text-foreground">
                        {"08:00 — 17:00"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-body text-muted-foreground text-sm">
                        Saturday
                      </span>
                      <span className="font-mono text-sm text-foreground">
                        {"09:00 — 13:00"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-body text-muted-foreground text-sm">
                        Sunday
                      </span>
                      <span className="font-mono text-sm text-muted-foreground">
                        Closed
                      </span>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="bg-card border border-border rounded-lg overflow-hidden h-64 relative">
                  <iframe 
                    title="Office Location Map"
                    src="https://maps.google.com/maps?q=Summit%20Road,%20Blue%20Hills,%20Midrand,%201685&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    className="absolute inset-0 w-full h-full border-0"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
