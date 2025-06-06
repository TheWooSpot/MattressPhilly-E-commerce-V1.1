import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend } from 'react-icons/fi';
import Button from '../components/ui/Button';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  }>({
    submitted: false,
    success: false,
    message: '',
  });
  
  useEffect(() => {
    document.title = 'Contact Us | Mattress Philly';
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you for your message! Our team will get back to you shortly.',
    });
    
    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
    
    // In a real application, you would submit the form data to your backend
  };
  
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-neutral-100 py-12">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">Contact Us</h1>
          <p className="text-neutral-600 max-w-3xl">
            Have questions about our products or services? Our team is here to help. Reach out to us using the form below or contact us directly.
          </p>
        </div>
      </section>
      
      {/* Contact Information and Form */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div>
              <div className="bg-white rounded-lg shadow-soft p-6 mb-8">
                <h2 className="text-xl font-semibold mb-6">Get in Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="text-primary-600 mt-1 mr-4">
                      <FiMapPin size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Our Main Location</h3>
                      <p className="text-neutral-600">
                        1234 Market Street<br />
                        Philadelphia, PA 19107
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-primary-600 mt-1 mr-4">
                      <FiPhone size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Phone</h3>
                      <p className="text-neutral-600">
                        <a href="tel:+12155551234" className="hover:text-primary-600 transition-colors">
                          (215) 555-1234
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-primary-600 mt-1 mr-4">
                      <FiMail size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <p className="text-neutral-600">
                        <a href="mailto:info@mattressphilly.com" className="hover:text-primary-600 transition-colors">
                          info@mattressphilly.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-primary-600 mt-1 mr-4">
                      <FiClock size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Store Hours</h3>
                      <p className="text-neutral-600">
                        Monday - Saturday: 10am - 8pm<br />
                        Sunday: 11am - 6pm
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-soft p-6">
                <h2 className="text-xl font-semibold mb-6">Connect With Us</h2>
                <div className="flex space-x-4">
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-neutral-100 hover:bg-primary-100 text-neutral-700 hover:text-primary-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                    aria-label="Facebook"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-neutral-100 hover:bg-primary-100 text-neutral-700 hover:text-primary-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                    aria-label="Instagram"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-neutral-100 hover:bg-primary-100 text-neutral-700 hover:text-primary-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                    aria-label="Twitter"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </a>
                  <a 
                    href="https://youtube.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-neutral-100 hover:bg-primary-100 text-neutral-700 hover:text-primary-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                    aria-label="YouTube"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-soft p-6">
                <h2 className="text-xl font-semibold mb-6">Send Us a Message</h2>
                
                {formStatus.submitted ? (
                  <motion.div 
                    className={`p-4 rounded-md mb-6 ${
                      formStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {formStatus.message}
                  </motion.div>
                ) : null}
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="Product Inquiry">Product Inquiry</option>
                        <option value="Order Status">Order Status</option>
                        <option value="Delivery Question">Delivery Question</option>
                        <option value="Return/Exchange">Return or Exchange</option>
                        <option value="Warranty Claim">Warranty Claim</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    ></textarea>
                  </div>
                  
                  <Button 
                    type="submit"
                    variant="primary"
                    className="flex items-center"
                  >
                    <FiSend className="mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-12 bg-neutral-50">
        <div className="container-custom">
          <h2 className="text-2xl font-serif font-bold mb-8 text-center">Visit Our Showrooms</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                location: "Center City",
                address: "1234 Market Street, Philadelphia, PA 19107",
                phone: "(215) 555-1234",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.5123830668197!2d-75.16447492412567!3d39.95240828386351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c62f47e8c4c7%3A0x1d8cf7c54b8e0284!2sMarket%20St%2C%20Philadelphia%2C%20PA!5e0!3m2!1sen!2sus!4v1699887741018!5m2!1sen!2sus"
              },
              {
                location: "King of Prussia",
                address: "160 N Gulph Rd, King of Prussia, PA 19406",
                phone: "(610) 555-5678",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3053.7457637218997!2d-75.39242492411933!3d40.08879177940603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6946e7c5d2d8d%3A0x1d06f1a2f02f4e9!2s160%20N%20Gulph%20Rd%2C%20King%20of%20Prussia%2C%20PA%2019406!5e0!3m2!1sen!2sus!4v1699887798440!5m2!1sen!2sus"
              },
              {
                location: "Cherry Hill",
                address: "2000 Route 38, Cherry Hill, NJ 08002",
                phone: "(856) 555-9012",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3064.9991709932!2d-75.0257249241339!3d39.9340082839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6ca4a0e9c9bbb%3A0x7e2f7e86a0b0cfc7!2s2000%20NJ-38%2C%20Cherry%20Hill%2C%20NJ%2008002!5e0!3m2!1sen!2sus!4v1699887845440!5m2!1sen!2sus"
              }
            ].map((location, index) => (
              <div key={index} className="bg-white rounded-lg shadow-soft overflow-hidden">
                <div className="h-64">
                  <iframe 
                    src={location.mapUrl} 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map of ${location.location}`}
                  ></iframe>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{location.location}</h3>
                  <p className="text-neutral-600 mb-2">{location.address}</p>
                  <p className="text-neutral-600 mb-4">{location.phone}</p>
                  <Button 
                    href={`https://maps.google.com/?q=${encodeURIComponent(location.address)}`}
                    variant="outline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Directions
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ CTA */}
      <section className="py-16">
        <div className="container-custom">
          <div className="bg-primary-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-serif font-bold mb-4">Have More Questions?</h2>
            <p className="text-neutral-700 mb-6 max-w-2xl mx-auto">
              Check out our frequently asked questions for quick answers to common inquiries about our products, delivery, returns, and more.
            </p>
            <Button href="/faq" variant="primary">
              View FAQs
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
