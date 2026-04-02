import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";
import { ArrowRight, Award, Shield, TrendingUp, Users } from "lucide-react";
import { useEffect, useRef } from "react";

export default function HomePage() {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up");
        }
      }
    }, observerOptions);

    const elements = document.querySelectorAll(".fade-in-on-scroll");
    for (const el of elements) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 md:pt-24"
      >
        {/* Background Image with Dark Gradient Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(/assets/generated/hero-villa.dim_1920x1080.jpg)",
            transform: "scale(1.1)",
          }}
        >
          <div className="absolute inset-0 hero-gradient" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center -mt-12 sm:-mt-16 md:-mt-20 lg:-mt-24">
          <div className="max-w-5xl mx-auto space-y-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight animate-fade-in-up">
              <span className="text-white">Luxury Real Estate That</span>
              <br />
              <span className="text-gold">Commands Trust</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200">
              Exceptional properties delivered with discretion, integrity, and
              long-term value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animate-delay-300">
              <Button
                size="lg"
                onClick={() => navigate({ to: "/contact" })}
                className="bg-gold hover:bg-gold/90 text-background font-semibold px-10 py-7 text-lg group transition-all duration-300 hover:scale-105 hover:shadow-luxury"
              >
                Book Consultation
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate({ to: "/properties" })}
                className="border-2 border-white/30 hover:bg-white/10 text-white font-semibold px-10 py-7 text-lg backdrop-blur-sm transition-all duration-300 hover:scale-105"
              >
                Explore Properties
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-gold rounded-full" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 lg:py-32 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-on-scroll">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Why Choose Crownstone
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the pinnacle of luxury real estate with our commitment
              to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Trust",
                description:
                  "Built on integrity and transparency, ensuring your confidence in every transaction.",
                delay: "100",
              },
              {
                icon: Award,
                title: "Excellence",
                description:
                  "Curated portfolio of the finest properties with meticulous attention to detail.",
                delay: "200",
              },
              {
                icon: Users,
                title: "Discretion",
                description:
                  "Personalized service with the utmost privacy and confidentiality for our clients.",
                delay: "300",
              },
              {
                icon: TrendingUp,
                title: "Legacy",
                description:
                  "Decades of expertise in luxury real estate, creating lasting value and relationships.",
                delay: "400",
              },
            ].map((feature) => (
              <div
                key={feature.delay}
                className={`fade-in-on-scroll animate-delay-${feature.delay} group`}
              >
                <div className="glass-effect p-8 rounded-lg hover:luxury-shadow transition-all duration-300 h-full hover:scale-105">
                  <div className="w-14 h-14 bg-gold/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                    <feature.icon className="text-gold" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-effect luxury-shadow rounded-2xl p-12 lg:p-16 text-center fade-in-on-scroll">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Ready to Find Your Dream Property?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let our expert team guide you through an exclusive selection of
              luxury properties tailored to your vision.
            </p>
            <Button
              size="lg"
              onClick={() => navigate({ to: "/contact" })}
              className="bg-gold hover:bg-gold/90 text-background font-semibold px-10 py-7 text-lg group transition-all duration-300 hover:scale-105 hover:shadow-luxury"
            >
              Get Started Today
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
