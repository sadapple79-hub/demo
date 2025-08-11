import React from 'react';
import { Button } from './ui/button';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#2E86AB] text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
              <div className="w-8 h-1 bg-[#2E86AB] rounded-full relative">
                <div className="absolute -bottom-2 left-0 w-8 h-3 bg-[#27AE60] rounded-full"></div>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold font-['Montserrat']">Blue Horizon Landscaping</h1>
              <p className="text-sm text-blue-200">Turning Your Yard into a Work of Art</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#services" 
              className="hover:text-blue-200 transition-colors duration-300 font-medium"
            >
              Services
            </a>
            <a 
              href="#about" 
              className="hover:text-blue-200 transition-colors duration-300 font-medium"
            >
              About
            </a>
            <a 
              href="#contact" 
              className="hover:text-blue-200 transition-colors duration-300 font-medium"
            >
              Contact
            </a>
            <Button 
              className="bg-[#27AE60] hover:bg-[#219A52] text-white px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Free Quote
            </Button>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-white hover:text-blue-200 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;