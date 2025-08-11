import React from 'react';
import { Card } from './ui/card';
import { Shield, Users, Leaf, Award } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Full licensing and comprehensive insurance for your peace of mind"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Certified landscaping professionals with decades of combined experience"
    },
    {
      icon: Leaf,
      title: "Sustainable Practices",
      description: "Eco-friendly methods that protect the environment and your investment"
    },
    {
      icon: Award,
      title: "Quality Guarantee", 
      description: "100% satisfaction guarantee on all our landscaping services"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <div>
            <h3 className="text-4xl md:text-5xl font-bold font-['Montserrat'] text-gray-800 mb-6">
              About <span className="text-[#2E86AB]">Blue Horizon</span>
            </h3>
            <div className="w-24 h-1 bg-[#27AE60] mb-8 rounded-full"></div>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Blue Horizon Landscaping is a family-owned business that has been transforming outdoor spaces 
              across Suffolk County for over 15 years. We pride ourselves on exceptional craftsmanship, 
              sustainable practices, and building lasting relationships with our clients.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our passion for landscaping goes beyond just making things look beautiful – we create outdoor 
              environments that enhance your lifestyle, increase your property value, and connect you with nature.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-4 bg-[#F4F6F7] rounded-lg">
                <div className="text-3xl font-bold font-['Montserrat'] text-[#2E86AB] mb-2">500+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-[#F4F6F7] rounded-lg">
                <div className="text-3xl font-bold font-['Montserrat'] text-[#27AE60] mb-2">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
          
          {/* Image and features */}
          <div>
            <div className="relative mb-8">
              <img 
                src="https://images.unsplash.com/photo-1597201278257-3687be27d954?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHw0fHxsYW5kc2NhcGluZ3xlbnwwfHx8fDE3NTQ5MjM0Nzd8MA&ixlib=rb-4.1.0&q=85"
                alt="Beautiful landscaped garden"
                className="rounded-2xl shadow-2xl w-full h-80 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#27AE60] text-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold font-['Montserrat']">Suffolk County's</div>
                <div className="text-lg">Trusted Landscapers</div>
              </div>
            </div>
            
            {/* Features grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Card key={index} className="p-4 bg-white shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-[#2E86AB]">
                    <div className="flex items-start space-x-3">
                      <div className="bg-[#2E86AB]/10 p-2 rounded-lg flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-[#2E86AB]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">{feature.title}</h4>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;