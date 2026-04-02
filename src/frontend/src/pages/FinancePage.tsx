import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Building2,
  CheckCircle,
  Clock,
  Lock,
  Phone,
  Shield,
  TrendingUp,
  Wallet,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useMemo, useState } from "react";
import { SiWhatsapp } from "react-icons/si";

const services = [
  {
    icon: Wallet,
    title: "Personal Loans",
    description:
      "Flexible personal financing for your immediate needs, with competitive rates and quick disbursement.",
  },
  {
    icon: Building2,
    title: "Business Loans",
    description:
      "Empower your business growth with structured funding solutions tailored to your enterprise.",
  },
  {
    icon: Zap,
    title: "Emergency Loans",
    description:
      "Access emergency funds within 24 hours — when time matters most.",
  },
  {
    icon: Clock,
    title: "Short-Term Funding",
    description:
      "Bridge financing and short-term capital solutions for real estate and business transactions.",
  },
];

const trustPoints = [
  { icon: Shield, label: "Licensed Financial Service Provider" },
  { icon: Zap, label: "Fast Approval Process" },
  { icon: CheckCircle, label: "Transparent Terms" },
  { icon: Lock, label: "Secure & Confidential Process" },
  { icon: TrendingUp, label: "Competitive Interest Rates" },
];

function formatINR(value: number): string {
  return new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(
    value,
  );
}

export default function FinancePage() {
  const [loanAmount, setLoanAmount] = useState("500000");
  const [interestRate, setInterestRate] = useState("1.5");
  const [duration, setDuration] = useState("24");

  const results = useMemo(() => {
    const P = Number.parseFloat(loanAmount) || 0;
    const r = (Number.parseFloat(interestRate) || 0) / 100;
    const n = Number.parseInt(duration) || 0;

    if (P <= 0 || r <= 0 || n <= 0) return null;

    const emi = (P * r * (1 + r) ** n) / ((1 + r) ** n - 1);
    const totalPayable = emi * n;
    const totalInterest = totalPayable - P;

    return {
      emi: Math.round(emi),
      totalInterest: Math.round(totalInterest),
      totalPayable: Math.round(totalPayable),
    };
  }, [loanAmount, interestRate, duration]);

  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20"
        style={{
          background:
            "linear-gradient(135deg, oklch(0 0 0) 0%, oklch(0.05 0.005 60) 40%, oklch(0.08 0.01 55) 70%, oklch(0.04 0 0) 100%)",
        }}
      >
        {/* Gold decorative lines */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, oklch(0.82 0.12 75 / 0.4), transparent)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, oklch(0.82 0.12 75 / 0.3), transparent)",
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-xs uppercase tracking-[0.35em] text-gold/70 mb-4 font-medium">
              Crownstone Realty Finance Limited
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-white mb-6 leading-tight">
              Finance <span className="text-gold">Solutions</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
              Fast and secure funding services by Crownstone Realty Finance
              Limited
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+918799082034"
                data-ocid="finance.hero.primary_button"
              >
                <Button className="bg-gold hover:bg-gold/90 text-background font-semibold px-8 py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <Phone size={16} className="mr-2" />
                  Call Now
                </Button>
              </a>
              <a
                href="#finance-calculator"
                data-ocid="finance.hero.secondary_button"
              >
                <Button
                  variant="outline"
                  className="border-gold/40 text-gold hover:bg-gold/10 hover:border-gold px-8 py-3 transition-all duration-300"
                >
                  Try Loan Calculator
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28" data-ocid="finance.services.section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-gold/70 mb-3">
              What We Offer
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-white">
              Our Loan Services
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  data-ocid={`finance.services.item.${i + 1}`}
                  className="group relative p-6 rounded-xl border border-border hover:border-gold/50 bg-card transition-all duration-300 hover:luxury-shadow-sm cursor-default"
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-5 transition-colors duration-300"
                    style={{ background: "oklch(0.14 0.02 60)" }}
                  >
                    <Icon size={22} className="text-gold" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  {/* Gold bottom line on hover */}
                  <div className="absolute bottom-0 left-6 right-6 h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* EMI Calculator */}
      <section
        id="finance-calculator"
        className="py-20 lg:py-28"
        style={{ background: "oklch(0.05 0.003 60)" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-gold/70 mb-3">
              Plan Ahead
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-white">
              Loan Calculator
            </h2>
            <p className="text-muted-foreground mt-3 text-sm">
              Estimate your monthly EMI instantly
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Inputs */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6 p-8 rounded-2xl border border-border bg-card"
              >
                <div className="space-y-2">
                  <Label
                    htmlFor="loan-amount"
                    className="text-sm text-muted-foreground uppercase tracking-wider"
                  >
                    Loan Amount (₹)
                  </Label>
                  <Input
                    id="loan-amount"
                    type="number"
                    min="0"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                    placeholder="e.g. 500000"
                    data-ocid="finance.calculator.input"
                    className="bg-background border-border focus:border-gold focus:ring-gold/20 text-white text-base h-11"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="interest-rate"
                    className="text-sm text-muted-foreground uppercase tracking-wider"
                  >
                    Interest Rate (% per month)
                  </Label>
                  <Input
                    id="interest-rate"
                    type="number"
                    min="0"
                    step="0.01"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                    placeholder="e.g. 1.5"
                    data-ocid="finance.calculator.input"
                    className="bg-background border-border focus:border-gold focus:ring-gold/20 text-white text-base h-11"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="duration"
                    className="text-sm text-muted-foreground uppercase tracking-wider"
                  >
                    Duration (months)
                  </Label>
                  <Input
                    id="duration"
                    type="number"
                    min="1"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    placeholder="e.g. 24"
                    data-ocid="finance.calculator.input"
                    className="bg-background border-border focus:border-gold focus:ring-gold/20 text-white text-base h-11"
                  />
                </div>
              </motion.div>

              {/* Results */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-4"
                data-ocid="finance.calculator.panel"
              >
                {results ? (
                  <>
                    <div className="p-6 rounded-xl border border-gold/40 bg-card relative overflow-hidden">
                      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gold" />
                      <p className="text-xs uppercase tracking-widest text-gold/70 mb-1">
                        Monthly EMI
                      </p>
                      <p className="text-4xl font-serif font-semibold text-gold">
                        ₹{formatINR(results.emi)}
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-5 rounded-xl border border-border bg-card">
                        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                          Total Interest
                        </p>
                        <p className="text-xl font-semibold text-white">
                          ₹{formatINR(results.totalInterest)}
                        </p>
                      </div>
                      <div className="p-5 rounded-xl border border-border bg-card">
                        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                          Total Payable
                        </p>
                        <p className="text-xl font-semibold text-white">
                          ₹{formatINR(results.totalPayable)}
                        </p>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground/60 italic pl-1">
                      * Indicative figures only. Actual rates may vary.
                    </p>
                  </>
                ) : (
                  <div
                    className="h-full min-h-[200px] flex items-center justify-center rounded-xl border border-dashed border-border"
                    data-ocid="finance.calculator.empty_state"
                  >
                    <p className="text-muted-foreground text-sm">
                      Enter valid values to see your EMI
                    </p>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 lg:gap-10">
            {trustPoints.map((point, i) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={point.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-center gap-3 text-sm"
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ background: "oklch(0.14 0.02 60)" }}
                  >
                    <Icon size={14} className="text-gold" />
                  </div>
                  <span className="text-muted-foreground">{point.label}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 lg:py-28 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.06 0.015 60) 0%, oklch(0.03 0 0) 100%)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, oklch(0.82 0.12 75 / 0.35), transparent)",
            }}
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-white mb-4">
              Get Funds Within <span className="text-gold">24 Hours</span>
            </h2>
            <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
              Quick approvals. Transparent process. Trusted by clients across
              Gujarat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+918799082034"
                data-ocid="finance.cta.primary_button"
              >
                <Button className="bg-gold hover:bg-gold/90 text-background font-semibold px-10 py-3 transition-all duration-300 hover:scale-105 text-base">
                  <Phone size={18} className="mr-2" />
                  Call Now
                </Button>
              </a>
              <a
                href="https://wa.me/918799082034"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="finance.cta.secondary_button"
              >
                <Button
                  variant="outline"
                  className="border-gold/40 text-gold hover:bg-gold/10 hover:border-gold px-10 py-3 transition-all duration-300 text-base"
                >
                  <SiWhatsapp size={18} className="mr-2" />
                  WhatsApp
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs text-muted-foreground/50 leading-relaxed max-w-2xl mx-auto">
            Finance services are subject to verification and applicable terms.
            This service is separate from real estate operations. Crownstone
            Realty Finance Limited is a separate entity operating under
            applicable financial regulations.
          </p>
        </div>
      </section>

      {/* Floating Call Button */}
      <a
        href="tel:+918799082034"
        data-ocid="finance.floating.button"
        aria-label="Call Now"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-sm text-background shadow-xl transition-all duration-300 hover:scale-105"
        style={{
          background: "oklch(0.82 0.12 75)",
          boxShadow: "0 8px 30px oklch(0.82 0.12 75 / 0.4)",
        }}
      >
        <Phone size={16} />
        Call Now
      </a>
    </div>
  );
}
