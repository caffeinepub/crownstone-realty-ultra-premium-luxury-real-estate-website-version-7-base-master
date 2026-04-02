import { useState, useEffect } from 'react';
import { Link, useNavigate } from '@tanstack/react-router';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './ui/button';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Properties', path: '/properties' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect luxury-shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo with Brand Text */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/assets/file_00000000108461fb8d86d411372cfcb2(1).png"
              alt="Crownstone Realty"
              className="w-auto h-[46px] lg:h-[56px] transition-transform duration-300 group-hover:scale-110"
            />
            <div className="flex flex-col justify-center">
              <span className="font-serif text-xl lg:text-2xl font-semibold text-white leading-tight">
                Crownstone
              </span>
              <span className="text-[10px] lg:text-xs font-sans font-medium text-gold tracking-[0.2em] uppercase leading-tight">
                REALTY
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm font-medium text-foreground/80 hover:text-gold transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Phone & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <a
              href="tel:+918799082034"
              className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-gold transition-colors duration-200"
            >
              <Phone size={16} />
              <span>+91 87990 82034</span>
            </a>
            <Button
              onClick={() => navigate({ to: '/contact' })}
              className="bg-gold hover:bg-gold/90 text-background font-medium px-6 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Book Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-foreground p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden glass-effect border-t border-border">
          <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-medium text-foreground/80 hover:text-gold transition-colors duration-200 py-2"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:+918799082034"
              className="flex items-center space-x-2 text-base text-muted-foreground hover:text-gold transition-colors duration-200 py-2"
            >
              <Phone size={18} />
              <span>+91 87990 82034</span>
            </a>
            <Button
              onClick={() => {
                setIsMobileMenuOpen(false);
                navigate({ to: '/contact' });
              }}
              className="bg-gold hover:bg-gold/90 text-background font-medium w-full"
            >
              Book Consultation
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
