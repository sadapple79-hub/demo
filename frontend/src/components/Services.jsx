import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Flower, Scissors, Hammer, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Garden Design",
      description: "From concept to creation, we design gardens that flourish year-round with sustainable practices and stunning aesthetics.",
      image: "https://images.unsplash.com/photo-1679004793187-1df16af3aca5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxnYXJkZW4lMjBkZXNpZ258ZW58MHx8fHwxNzU0OTIzNDgzfDA&ixlib=rb-4.1.0&q=85",
      icon: Flower,
      features: ["Custom plant selection", "Seasonal planning", "Water-wise designs", "Hardscape integration"]
    },
    {
      id: 2,
      title: "Lawn Care", 
      description: "Weekly and seasonal maintenance for healthy, vibrant lawns that enhance your property's curb appeal.",
      image: "https://images.unsplash.com/photo-1605117882932-f9e32b03fea9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwyfHxsYW5kc2NhcGluZ3xlbnwwfHx8fDE3NTQ5MjM0Nzd8MA&ixlib=rb-4.1.0&q=85",
      icon: Scissors,
      features: ["Regular mowing", "Fertilization programs", "Weed control", "Seasonal cleanup"]
    },
    {
      id: 3,
      title: "Hardscaping",
      description: "Patios, walkways, and stone features that complement your landscape and create lasting outdoor living spaces.",
      image: "https://images.unsplash.com/photo-1681465766418-6474cfdcbb3c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwyfHxnYXJkZW4lMjBkZXNpZ258ZW58MHx8fHwxNzU0OTIzNDgzfDA&ixlib=rb-4.1.0&q=85",
      icon: Hammer,
      features: ["Custom stonework", "Patio installation", "Walkway design", "Retaining walls"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-[#F4F6F7]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold font-['Montserrat'] text-gray-800 mb-4">
            Our Services
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive landscaping services to transform your outdoor space into a beautiful, functional environment
          </p>
          <div className="w-24 h-1 bg-[#27AE60] mx-auto mt-6 rounded-full"></div>
        </div>
        
        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.id}
                className="group bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 overflow-hidden"
              >
                {/* Image container */}
                <div className="relative overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#2E86AB]/20 group-hover:bg-[#2E86AB]/40 transition-all duration-500"></div>
                  <div className="absolute top-4 left-4 bg-white p-3 rounded-full shadow-lg">
                    <IconComponent className="w-6 h-6 text-[#27AE60]" />
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-['Montserrat'] text-gray-800 group-hover:text-[#2E86AB] transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-[#27AE60] rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="w-full bg-[#2E86AB] hover:bg-[#246a8a] text-white py-3 rounded-lg transition-all duration-300 transform group-hover:bg-[#27AE60] group-hover:scale-105">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* CTA section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
            <h4 className="text-2xl font-bold font-['Montserrat'] text-gray-800 mb-4">
              Need a Custom Solution?
            </h4>
            <p className="text-gray-600 mb-6">
              Every property is unique. Let us create a personalized landscaping plan that fits your vision and budget.
            </p>
            <Button className="bg-[#27AE60] hover:bg-[#219A52] text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;