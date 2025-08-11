import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Star, Award, Users } from 'lucide-react';

const Hero = () => {
  const scrollToQuote = () => {
    document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(46, 134, 171, 0.7), rgba(46, 134, 171, 0.8)), url('https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#27AE60]/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Trust indicators */}
        <div className="flex items-center justify-center space-x-6 mb-8 text-sm">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span>4.9/5 Rating</span>
          </div>
          <div className="flex items-center space-x-1">
            <Award className="w-4 h-4 text-yellow-400" />
            <span>15+ Years</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="w-4 h-4 text-blue-200" />
            <span>500+ Happy Clients</span>
          </div>
        </div>

        <h2 className="text-5xl md:text-6xl font-bold font-['Montserrat'] mb-6 leading-tight">
          Turning Your Yard into a{' '}
          <span className="text-[#27AE60] drop-shadow-lg">Work of Art</span>
        </h2>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-50 leading-relaxed">
          Serving Suffolk County for over 15 years, we design and maintain stunning outdoor spaces 
          that increase your property value and bring your vision to life.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
          <Button 
            onClick={scrollToQuote}
            className="bg-[#27AE60] hover:bg-[#219A52] text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-[0_20px_40px_rgba(39,174,96,0.4)]"
          >
            Get Your Free Quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          
          <Button 
            variant="outline"
            className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
          >
            View Our Work
          </Button>
        </div>
        
        {/* Quick stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold font-['Montserrat']">500+</div>
            <div className="text-sm text-blue-200">Projects Completed</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold font-['Montserrat']">15</div>
            <div className="text-sm text-blue-200">Years Experience</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold font-['Montserrat']">100%</div>
            <div className="text-sm text-blue-200">Satisfaction Rate</div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;