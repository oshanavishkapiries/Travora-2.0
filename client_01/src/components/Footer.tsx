import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "Home", href: "#" },
    { label: "Attractions", href: "#attractions" },
    { label: "Tour Plans", href: "#tours" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact Us", href: "#contact" },
  ];

  const companyLinks = [
    { label: "About Us", href: "#" },
    { label: "Customers", href: "#" },
    { label: "Contact Us", href: "#contact" },
  ];

  const legalLinks = [
    { label: "Terms & Conditions", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, href: "#", label: "Facebook" },
    { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
    { icon: <Youtube size={20} />, href: "#", label: "YouTube" },
  ];

  return (
    <>
      {/* Floating CTA */}
      {/* <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40">
        <Button variant="call-now" size="lg" className="shadow-2xl">
          <Phone size={20} className="mr-2" />
          Call Us Now
        </Button>
      </div> */}

      <footer className="bg-[#1b1b19] text-background">
        <div className="container mx-auto max-w-7xl px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Info */}
            <div className="lg:col-span-2">
              <div className="text-2xl font-bold tracking-wider mb-4 font-serif">
                TRAVORA
              </div>
              <p className="text-background/80 mb-6 leading-relaxed">
                Your journey starts here – Explore. Discover. Experience.
              </p>

              <div className="space-y-3 text-sm">
                <div className="flex items-center">
                  <Phone size={16} className="mr-3 text-background/60" />
                  <span>+94 11 234 5678</span>
                </div>
                <div className="flex items-center">
                  <Mail size={16} className="mr-3 text-background/60" />
                  <span>info@travora.com</span>
                </div>
                <div className="flex items-start">
                  <MapPin
                    size={16}
                    className="mr-3 mt-0.5 text-background/60 flex-shrink-0"
                  />
                  <span>123 Paradise Lane, Colombo 07, Sri Lanka</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-background/80 hover:text-background transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-background/80 hover:text-background transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social & Legal */}
            <div>
              <h3 className="font-semibold text-white mb-4">Follow Us</h3>
              <div className="flex space-x-3 mb-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-8 h-8 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center transition-colors"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              <div className="space-y-2">
                {legalLinks.map((link, index) => (
                  <div key={index}>
                    <a
                      href={link.href}
                      className="text-background/60 hover:text-background/80 transition-colors text-xs"
                    >
                      {link.label}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-background/20 mt-8 pt-6 text-center">
            <p className="text-background/60 text-sm">
              © 2025 Travora. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
