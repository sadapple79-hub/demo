import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { useToast } from '../hooks/use-toast';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Mock form submission - in real app this would send to backend
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Store in local storage for demo purposes
      const submissions = JSON.parse(localStorage.getItem('quoteSubmissions') || '[]');
      const newSubmission = {
        ...formData,
        id: Date.now(),
        timestamp: new Date().toISOString(),
        status: 'pending'
      };
      submissions.push(newSubmission);
      localStorage.setItem('quoteSubmissions', JSON.stringify(submissions));
      
      toast({
        title: "Quote Request Submitted!",
        description: "We'll contact you within 24 hours to discuss your project.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Phone, label: "Phone", value: "(631) 555-7890", href: "tel:6315557890" },
    { icon: Mail, label: "Email", value: "info@bluehorizonlandscaping.com", href: "mailto:info@bluehorizonlandscaping.com" },
    { icon: MapPin, label: "Service Area", value: "Suffolk County, NY", href: "#" },
    { icon: Clock, label: "Hours", value: "Mon-Fri: 7AM-6PM", href: "#" }
  ];

  return (
    <section id="quote" className="py-20 bg-[#F4F6F7]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold font-['Montserrat'] text-gray-800 mb-4">
            Get Your <span className="text-[#27AE60]">Free Quote</span>
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your outdoor space? Tell us about your project and we'll provide a detailed, no-obligation estimate.
          </p>
          <div className="w-24 h-1 bg-[#27AE60] mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact info */}
          <div className="lg:col-span-1">
            <Card className="bg-white shadow-xl border-0 h-fit">
              <CardHeader>
                <CardTitle className="font-['Montserrat'] text-2xl text-gray-800">Get in Touch</CardTitle>
                <CardDescription className="text-gray-600">
                  Reach out to us directly for immediate assistance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {contactInfo.map((contact, index) => {
                    const IconComponent = contact.icon;
                    return (
                      <div key={index} className="flex items-center space-x-4">
                        <div className="bg-[#2E86AB]/10 p-3 rounded-lg">
                          <IconComponent className="w-5 h-5 text-[#2E86AB]" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-800">{contact.label}</div>
                          <a 
                            href={contact.href}
                            className="text-gray-600 hover:text-[#2E86AB] transition-colors duration-300"
                          >
                            {contact.value}
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                <div className="mt-8 p-4 bg-[#27AE60]/10 rounded-lg border-l-4 border-[#27AE60]">
                  <h4 className="font-semibold text-gray-800 mb-2">Free Estimates</h4>
                  <p className="text-sm text-gray-600">
                    All quotes are completely free with no obligation. We'll visit your property to provide accurate pricing.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quote form */}
          <div className="lg:col-span-2">
            <Card className="bg-white shadow-xl border-0">
              <CardHeader>
                <CardTitle className="font-['Montserrat'] text-2xl text-gray-800">Request Your Quote</CardTitle>
                <CardDescription className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-gray-700 font-medium">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-1 border-gray-300 focus:border-[#2E86AB] focus:ring-[#2E86AB]"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-gray-700 font-medium">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-1 border-gray-300 focus:border-[#2E86AB] focus:ring-[#2E86AB]"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone" className="text-gray-700 font-medium">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-1 border-gray-300 focus:border-[#2E86AB] focus:ring-[#2E86AB]"
                        placeholder="(631) 555-0123"
                      />
                    </div>
                    <div>
                      <Label htmlFor="service" className="text-gray-700 font-medium">Service Interested In</Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E86AB] focus:border-[#2E86AB] bg-white"
                      >
                        <option value="">Select a service</option>
                        <option value="garden-design">Garden Design</option>
                        <option value="lawn-care">Lawn Care</option>
                        <option value="hardscaping">Hardscaping</option>
                        <option value="maintenance">Maintenance</option>
                        <option value="consultation">Consultation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-gray-700 font-medium">Project Description *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-1 border-gray-300 focus:border-[#2E86AB] focus:ring-[#2E86AB] resize-none"
                      placeholder="Tell us about your project... What's your vision? What challenges are you facing? What's your approximate budget?"
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#27AE60] hover:bg-[#219A52] text-white py-3 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Quote Request
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                  
                  <p className="text-sm text-gray-500 text-center">
                    By submitting this form, you agree to be contacted by Blue Horizon Landscaping regarding your project.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;