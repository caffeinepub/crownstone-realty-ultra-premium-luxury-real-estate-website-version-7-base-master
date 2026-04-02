import { useEffect } from 'react';
import { Award, Shield, TrendingUp, Users, Building2, Globe } from 'lucide-react';

export default function AboutPage() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.fade-in-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
            About Crownstone Realty
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up animate-delay-100">
            Where luxury meets legacy. We are dedicated to providing exceptional real estate
            experiences that transcend expectations and create lasting value.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-20 fade-in-on-scroll">
          <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden luxury-shadow">
            <img
              src="/assets/generated/penthouse-interior.dim_800x600.jpg"
              alt="Luxury Property"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </div>
        </div>

        {/* Our Values */}
        <section className="mb-20">
          <div className="text-center mb-12 fade-in-on-scroll">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every interaction and transaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: 'Trust',
                description:
                  'We build lasting relationships founded on integrity, transparency, and unwavering commitment to our clients.',
                delay: '100',
              },
              {
                icon: Users,
                title: 'Discretion',
                description:
                  'Your privacy is paramount. We handle every transaction with the utmost confidentiality and professionalism.',
                delay: '200',
              },
              {
                icon: TrendingUp,
                title: 'Legacy',
                description:
                  'With decades of expertise, we create enduring value and help build generational wealth through real estate.',
                delay: '300',
              },
              {
                icon: Award,
                title: 'Luxury',
                description:
                  'We curate only the finest properties, ensuring exceptional quality and unparalleled attention to detail.',
                delay: '400',
              },
            ].map((value, index) => (
              <div
                key={index}
                className={`fade-in-on-scroll animate-delay-${value.delay} opacity-0`}
              >
                <div className="glass-effect p-8 rounded-lg h-full hover:luxury-shadow transition-all duration-300 hover:scale-105">
                  <div className="w-14 h-14 bg-gold/10 rounded-lg flex items-center justify-center mb-6">
                    <value.icon className="text-gold" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Our Story */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-on-scroll opacity-0">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded with a vision to redefine luxury real estate, Crownstone Realty has
                  become synonymous with excellence, trust, and discretion in the high-end property
                  market.
                </p>
                <p>
                  Our journey began with a simple belief: that every client deserves not just a
                  property, but a legacy. We've built our reputation on understanding the unique
                  needs of discerning clients and delivering exceptional results that exceed
                  expectations.
                </p>
                <p>
                  Today, we stand as a trusted partner for those seeking the finest properties in
                  the world's most prestigious locations. Our commitment to excellence, combined
                  with our deep market knowledge and extensive network, ensures that we deliver
                  unparalleled value to every client we serve.
                </p>
                <p className="text-sm italic text-muted-foreground/80 pt-4 border-t border-border mt-6">
                  Co-Founder & CEO — Pruthvi Chaudhary
                </p>
              </div>
            </div>
            <div className="fade-in-on-scroll opacity-0">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden luxury-shadow">
                <img
                  src="/assets/generated/luxury-kitchen.dim_800x600.jpg"
                  alt="Luxury Interior"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="fade-in-on-scroll opacity-0">
          <div className="glass-effect rounded-2xl p-12 lg:p-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {[
                { icon: Building2, value: '500+', label: 'Luxury Properties' },
                { icon: Users, value: '1,000+', label: 'Satisfied Clients' },
                { icon: Globe, value: '25+', label: 'Global Markets' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gold/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="text-gold" size={32} />
                  </div>
                  <div className="text-4xl lg:text-5xl font-bold text-gold mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

