import { Link } from '@tanstack/react-router';
import { SiFacebook, SiInstagram, SiLinkedin, SiX } from 'react-icons/si';
import { Mail, Phone, MapPin, Heart } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img
                src="/assets/file_00000000108461fb8d86d411372cfcb2(1).png"
                alt="Crownstone Realty"
                className="h-20 w-auto"
              />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Luxury real estate that commands trust. Exceptional properties delivered with
              discretion, integrity, and long-term value.
            </p>
            <p className="text-xs text-muted-foreground/80 italic">
              Co-Founder & CEO — Pruthvi Chaudhary
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-sm text-muted-foreground hover:text-gold transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/properties"
                  className="text-sm text-muted-foreground hover:text-gold transition-colors duration-200"
                >
                  Properties
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm text-muted-foreground hover:text-gold transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-muted-foreground hover:text-gold transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone size={16} className="text-gold mt-0.5 shrink-0" />
                <a
                  href="tel:+918799082034"
                  className="text-sm text-muted-foreground hover:text-gold transition-colors duration-200"
                >
                  +91 87990 82034
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <SiWhatsapp size={16} className="text-gold mt-0.5 shrink-0" />
                <a
                  href="https://wa.me/918799082034"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-gold transition-colors duration-200"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={16} className="text-gold mt-0.5 shrink-0" />
                <a
                  href="mailto:crownstonerealty.1@gmail.com"
                  className="text-sm text-muted-foreground hover:text-gold transition-colors duration-200"
                >
                  crownstonerealty.1@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Gandhinagar, Gujarat
                </span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-gold transition-colors duration-200"
                aria-label="Facebook"
              >
                <SiFacebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/crownstone.realty.in?igsh=MTg3YnJxMHZ0bml5cw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-gold transition-colors duration-200"
                aria-label="Instagram"
              >
                <SiInstagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-gold transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <SiLinkedin size={20} />
              </a>
              <a
                href="https://x.com/CrownstoneX01"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-gold transition-colors duration-200"
                aria-label="X (Twitter)"
              >
                <SiX size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear}. Built with <Heart size={14} className="inline text-gold" /> using{' '}
              <a
                href="https://caffeine.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:underline"
              >
                caffeine.ai
              </a>
            </p>
            <p className="text-sm text-muted-foreground">
              All rights reserved. Crownstone Realty.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
