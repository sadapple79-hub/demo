import React from 'react';
import { Separator } from './ui/separator';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Garden Design",
    "Lawn Care", 
    "Hardscaping",
    "Landscape Maintenance",
    "Tree Services",
    "Irrigation Systems"
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
    { name: "Free Quote", href: "#quote" }
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" }
  ];

  return (
    <footer className="bg-[#2E86AB] text-white">
      {/* Main footer content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <div className="w-8 h-1 bg-[#2E86AB] rounded-full relative">
                  <div className="absolute -bottom-2 left-0 w-8 h-3 bg-[#27AE60] rounded-full"></div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold font-['Montserrat']">Blue Horizon Landscaping</h3>
                <p className="text-blue-200 text-sm">Turning Your Yard into a Work of Art</p>
              </div>
            </div>
            
            <p className="text-blue-100 mb-6 leading-relaxed">
              For over 15 years, Blue Horizon Landscaping has been Suffolk County's trusted partner 
              for creating beautiful, sustainable outdoor spaces that enhance property values and 
              quality of life.
            </p>
            
            {/* Contact info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#27AE60]" />
                <a href="tel:6315557890" className="text-blue-100 hover:text-white transition-colors">
                  (631) 555-7890
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#27AE60]" />
                <a href="mailto:info@bluehorizonlandscaping.com" className="text-blue-100 hover:text-white transition-colors">
                  info@bluehorizonlandscaping.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-[#27AE60]" />
                <span className="text-blue-100">Suffolk County, NY</span>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold font-['Montserrat'] mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services" 
                    className="text-blue-100 hover:text-[#27AE60] transition-colors duration-300 text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Quick links */}
          <div>
            <h4 className="text-lg font-semibold font-['Montserrat'] mb-4">Quick Links</h4>
            <ul className="space-y-2 mb-6">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-blue-100 hover:text-[#27AE60] transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Social links */}
            <div>
              <h5 className="font-semibold mb-3">Follow Us</h5>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="bg-white/10 hover:bg-[#27AE60] p-2 rounded-lg transition-colors duration-300"
                      aria-label={social.name}
                    >
                      <IconComponent className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Separator className="bg-white/20" />
      
      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-blue-100 text-sm">
            © {currentYear} Blue Horizon Landscaping. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-blue-100 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-blue-100 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-blue-100 hover:text-white transition-colors">
              Licensed & Insured
            </a>
          </div>
        </div>
        
        <div className="text-center mt-4 pt-4 border-t border-white/10">
          <p className="text-blue-200 text-xs">
            Serving Suffolk County, NY with professional landscaping services since 2010
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;