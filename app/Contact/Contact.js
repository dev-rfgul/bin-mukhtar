"use client";
import { useState } from 'react';
import { Sparkles, Send, Mail, Phone, User, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    number: '',
    message: '',
    service: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hoveredField, setHoveredField] = useState(null);

  const services = [
    'Individual NTN Registration',
    'Business NTN Registration', 
    'Tax Filing',
    'Sales Tax Registration',
    'Business Tax Filing',
    'Financial Advisory',
    'Audit & Assurance',
    'Business Registration & Setup',
    'Other',
  ];

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Format message for WhatsApp
    const whatsappMessage = `*New Contact Form Submission*%0A%0A` +
      `*Name:* ${formData.firstName} ${formData.lastName}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Phone:* ${formData.number}%0A` +
      `*Service Needed:* ${formData.service}%0A%0A` +
      `*Message:*%0A${formData.message}`;
    
    // WhatsApp number (without + sign)
    const whatsappNumber = '923180481998';
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
    
    // Reset form after a short delay
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        number: '',
        message: '',
        service: '',
      });
    }, 1000);
  };

  return (
    <div className="relative pt-24 md:pt-28 lg:pt-32 pb-12 px-4">
      {/* Background Pattern - Similar to Testimonials */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px),
                          radial-gradient(circle at 75% 75%, #8b5cf6 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section - Similar to Testimonials */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-400 to-indigo-500 text-black px-6 py-3 rounded-full text-sm font-semibold mb-4 shadow-lg">
            <Sparkles className="w-4 h-4" />
            Get In Touch
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Ready to streamline your business operations? Let's discuss your needs and find the perfect solution.
          </p>
        </div>

        {/* Contact Form Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="bg-white/6 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/10 text-white">
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-6 pointer-events-none">
                <div className="text-8xl">📧</div>
              </div>

              <div className="relative z-10">
                {/* Form Header */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-emerald-400 to-indigo-500 rounded-2xl text-white text-3xl mb-6 shadow-lg">
                    <Mail className="w-10 h-10" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    Let's Start Your Journey
                  </h2>
                  <p className="text-base text-gray-300 mb-6">
                    Fill out the form below and we'll get back to you within 24 hours
                  </p>
                </div>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label className="block text-sm font-semibold text-gray-200 mb-2">
                      First Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        name="firstName"
                        placeholder="Enter your first name"
                        className="w-full text-black pl-12 pr-4 py-4 border border-white/10 rounded-xl focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300 transition-all duration-300 bg-white/4  placeholder:text-gray-500"
                        value={formData.firstName}
                        onChange={handleChange}
                        onFocus={() => setHoveredField('firstName')}
                        onBlur={() => setHoveredField(null)}
                        required
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-semibold text-gray-200 mb-2">
                      Last Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Enter your last name"
                        className="w-full pl-12 pr-4 py-4 border border-white/10 rounded-xl focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300 transition-all duration-300 bg-white/4 text-black placeholder:text-gray-500"
                        value={formData.lastName}
                        onChange={handleChange}
                        onFocus={() => setHoveredField('lastName')}
                        onBlur={() => setHoveredField(null)}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Email Field */}
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-200 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email address"
                      className="w-full pl-12 pr-4 py-4 border border-white/10 rounded-xl focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300 transition-all duration-300 bg-white/4 text-black placeholder:text-gray-500"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setHoveredField('email')}
                      onBlur={() => setHoveredField(null)}
                      required
                    />
                  </div>
                </div>

                {/* Phone Field */}
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-200 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="tel"
                      name="number"
                      placeholder="Enter your phone number"
                      className="w-full pl-12 pr-4 py-4 border border-white/10 rounded-xl focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300 transition-all duration-300 bg-white/4 text-black placeholder:text-gray-500"
                      value={formData.number}
                      onChange={handleChange}
                      onFocus={() => setHoveredField('number')}
                      onBlur={() => setHoveredField(null)}
                      required
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-200 mb-2">
                    Service Needed *
                  </label>
                  <select
                    name="service"
                    className="w-full px-4 py-4 border border-white/10 rounded-xl focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300 transition-all duration-300 bg-white/4 text-black appearance-none cursor-pointer"
                    value={formData.service}
                    onChange={handleChange}
                    onFocus={() => setHoveredField('service')}
                    onBlur={() => setHoveredField(null)}
                    required
                  >
                    <option value="" disabled>Select a service</option>
                    {services.map((service, idx) => (
                      <option key={idx} value={service} className="py-2">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message Field */}
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-200 mb-2">
                    Message *
                  </label>
                  <div className="relative">
                    <MessageCircle className="absolute left-3 top-4 text-gray-400 w-5 h-5" />
                    <textarea
                      name="message"
                      rows="5"
                      placeholder="Tell us about your project or requirements..."
                      className="w-full pl-12 pr-4 py-4 border border-white/10 rounded-xl focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300 transition-all duration-300 bg-white/4 text-black placeholder:text-gray-500 resize-vertical"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setHoveredField('message')}
                      onBlur={() => setHoveredField(null)}
                      required
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                  <div className="text-center pt-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative overflow-hidden bg-gradient-to-r from-emerald-400 to-indigo-500 hover:from-emerald-500 hover:to-indigo-600 text-black font-bold py-4 px-12 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl inline-flex items-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      <span className="relative z-10">
                        {isSubmitting ? 'Opening WhatsApp...' : 'Send via WhatsApp'}
                      </span>
                      <Send className={`w-5 h-5 transition-transform duration-300 ${isSubmitting ? 'animate-pulse' : 'group-hover:translate-x-1'}`} />
                      <div className="absolute inset-0 bg-white/6 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    </button>
                  </div>

                {/* Alternative Contact Methods - Commented for future implementation */}
                {/* <div className="border-t border-gray-200 pt-8 mt-8">
                  <p className="text-center text-gray-600 mb-6">
                    Or contact us directly:
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                      href="https://wa.me/923180481998?text=Hello, I'd like to discuss your services"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 text-black font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3 shadow-lg"
                    >
                      <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                      <span>WhatsApp Us</span>
                    </a>
                    <a
                      href="mailto:binmukhtar@gmail.com"
                      className="group bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3 shadow-lg"
                    >
                      <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                      <span>Email Us</span>
                    </a>
                  </div>
                </div> */}
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
          <div className="text-center p-6 bg-white/6 backdrop-blur-sm rounded-2xl border border-white/10">
            <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Quick Response</h3>
            <p className="text-gray-300">We respond to all inquiries within 24 hours</p>
          </div>
          <div className="text-center p-6 bg-white/6 backdrop-blur-sm rounded-2xl border border-white/10">
            <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Free Consultation</h3>
            <p className="text-gray-300">Initial consultation is completely free</p>
          </div>
          <div className="text-center p-6 bg-white/6 backdrop-blur-sm rounded-2xl border border-white/10">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Expert Guidance</h3>
            <p className="text-gray-300">Professional advice from certified experts</p>
          </div>
        </div>
      </div>
    </div>
  );
}
