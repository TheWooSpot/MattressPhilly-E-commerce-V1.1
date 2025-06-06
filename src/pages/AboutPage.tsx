import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiUsers, FiAward, FiThumbsUp, FiHeart } from 'react-icons/fi';
import Button from '../components/ui/Button';

const AboutPage = () => {
  useEffect(() => {
    document.title = 'About Us | Mattress Philly';
  }, []);
  
  const [missionRef, missionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [valuesRef, valuesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [teamRef, teamInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/6782567/pexels-photo-6782567.jpeg')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="container-custom">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Our Story</h1>
              <p className="text-xl text-white/90 mb-6">
                Family-owned and operated since 1985, Mattress Philly has been helping Philadelphia sleep better for over 35 years.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6">From a Small Shop to Philadelphia's Premier Mattress Destination</h2>
              <p className="text-neutral-700 mb-4">
                Mattress Philly began as a small family shop in 1985 when Michael and Sarah Thompson noticed a gap in the market for quality, affordable mattresses in Philadelphia. Starting with just a 500-square-foot showroom and a handful of mattress options, they built their business on a simple principle: help customers find the perfect mattress for their needs without the high markups common in the industry.
              </p>
              <p className="text-neutral-700 mb-4">
                Over the decades, we've grown to multiple locations throughout the Philadelphia area, but we've never lost sight of our founding values. Now in its second generation of family ownership, Mattress Philly continues to prioritize customer education, quality products, and exceptional service over high-pressure sales tactics.
              </p>
              <p className="text-neutral-700">
                Today, we offer a curated selection of the finest mattresses from leading manufacturers alongside our exclusive house brands, all backed by our industry-leading sleep trial and warranty programs. Our sleep specialists undergo extensive training to help match you with the perfect mattress for your sleep style, preferences, and budget.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.pexels.com/photos/6782567/pexels-photo-6782567.jpeg" 
                alt="Mattress Philly store" 
                className="rounded-lg shadow-md w-full h-64 object-cover object-center"
              />
              <img 
                src="https://images.pexels.com/photos/6782447/pexels-photo-6782447.jpeg" 
                alt="Mattress display" 
                className="rounded-lg shadow-md w-full h-64 object-cover object-center"
              />
              <img 
                src="https://images.pexels.com/photos/6782453/pexels-photo-6782453.jpeg" 
                alt="Customer consultation" 
                className="rounded-lg shadow-md w-full h-64 object-cover object-center"
              />
              <img 
                src="https://images.pexels.com/photos/6782571/pexels-photo-6782571.jpeg" 
                alt="Mattress delivery" 
                className="rounded-lg shadow-md w-full h-64 object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Mission */}
      <section className="py-16 md:py-24 bg-neutral-50" ref={missionRef}>
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-serif font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-neutral-700">
              To improve the quality of life for our customers by providing exceptional sleep solutions through education, personalized service, and premium products at fair prices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {missionInView && [
              {
                icon: <FiUsers size={40} className="text-primary-600" />,
                title: "Customer First",
                description: "We prioritize your needs and sleep health above all else, ensuring you find the perfect mattress for your unique requirements."
              },
              {
                icon: <FiAward size={40} className="text-primary-600" />,
                title: "Quality Products",
                description: "We carefully select and test every mattress we sell to ensure it meets our high standards for comfort, support, and durability."
              },
              {
                icon: <FiThumbsUp size={40} className="text-primary-600" />,
                title: "Expert Guidance",
                description: "Our sleep specialists receive extensive training to help match you with the ideal mattress for your sleep style and preferences."
              },
              {
                icon: <FiHeart size={40} className="text-primary-600" />,
                title: "Community Impact",
                description: "We're committed to giving back to the Philadelphia community through mattress donations and support for local shelters."
              }
            ].map((value, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg p-6 text-center shadow-soft"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-neutral-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 md:py-24" ref={valuesRef}>
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold mb-6">Our Core Values</h2>
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
              These principles guide everything we do, from product selection to customer service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valuesInView && [
              {
                title: "Honesty & Transparency",
                description: "We believe in straightforward pricing and honest product information. Our sleep specialists will never pressure you into a purchase that's not right for you."
              },
              {
                title: "Education Over Sales",
                description: "We focus on helping you understand the factors that contribute to a good night's sleep, empowering you to make the best decision for your needs."
              },
              {
                title: "Quality & Value",
                description: "We carefully select products that offer the best balance of quality and value, ensuring you get the most for your investment."
              },
              {
                title: "Exceptional Service",
                description: "From your first showroom visit through delivery and beyond, we're committed to providing a seamless, stress-free experience."
              },
              {
                title: "Environmental Responsibility",
                description: "We partner with manufacturers who prioritize sustainable materials and production methods, and we responsibly recycle old mattresses."
              },
              {
                title: "Community Engagement",
                description: "We're proud to be part of the Philadelphia community and actively support local initiatives and charitable organizations."
              }
            ].map((value, index) => (
              <motion.div 
                key={index}
                className="bg-neutral-50 rounded-lg p-6 shadow-soft h-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-neutral-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-16 md:py-24 bg-neutral-50" ref={teamRef}>
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold mb-6">Meet Our Team</h2>
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
              Our dedicated team of sleep specialists is committed to helping you find your perfect mattress.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamInView && [
              {
                name: "Jennifer Thompson",
                title: "CEO & Owner",
                image: "https://images.pexels.com/photos/5615665/pexels-photo-5615665.jpeg",
                bio: "Daughter of founders Michael and Sarah, Jennifer has led Mattress Philly since 2010, expanding our reach while maintaining our family-business values."
              },
              {
                name: "David Rodriguez",
                title: "Sleep Specialist Manager",
                image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
                bio: "With 15 years in the mattress industry, David leads our team of sleep specialists and ensures every customer receives expert guidance."
              },
              {
                name: "Michelle Chen",
                title: "Customer Experience Director",
                image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
                bio: "Michelle oversees our customer service team and delivery operations, ensuring a seamless experience from purchase to setup."
              },
              {
                name: "James Wilson",
                title: "Product Specialist",
                image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
                bio: "James works directly with manufacturers to select and test new products, ensuring every mattress we sell meets our high standards."
              }
            ].map((member, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-soft"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-3">{member.title}</p>
                  <p className="text-neutral-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Locations */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold mb-6">Visit Our Showrooms</h2>
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
              Experience our mattresses in person at one of our convenient Philadelphia area locations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                location: "Center City",
                address: "1234 Market Street, Philadelphia, PA 19107",
                phone: "(215) 555-1234",
                hours: "Mon-Sat: 10am-8pm, Sun: 11am-6pm"
              },
              {
                location: "King of Prussia",
                address: "160 N Gulph Rd, King of Prussia, PA 19406",
                phone: "(610) 555-5678",
                hours: "Mon-Sat: 10am-9pm, Sun: 11am-6pm"
              },
              {
                location: "Cherry Hill",
                address: "2000 Route 38, Cherry Hill, NJ 08002",
                phone: "(856) 555-9012",
                hours: "Mon-Sat: 10am-8pm, Sun: 11am-6pm"
              }
            ].map((location, index) => (
              <div 
                key={index}
                className="bg-neutral-50 rounded-lg p-6 shadow-soft"
              >
                <h3 className="text-xl font-semibold mb-3">{location.location}</h3>
                <p className="text-neutral-600 mb-2">{location.address}</p>
                <p className="text-neutral-600 mb-2">{location.phone}</p>
                <p className="text-neutral-600 mb-4">{location.hours}</p>
                <Button 
                  href={`https://maps.google.com/?q=${encodeURIComponent(location.address)}`}
                  variant="outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Directions
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Experience the Mattress Philly Difference</h2>
            <p className="text-xl mb-8 text-primary-100">
              Visit one of our showrooms today and let our sleep specialists help you find your perfect mattress.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                href="/products"
                variant="secondary"
                size="lg"
                className="bg-white text-primary-900 hover:bg-primary-50"
              >
                Shop Our Mattresses
              </Button>
              <Button 
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
