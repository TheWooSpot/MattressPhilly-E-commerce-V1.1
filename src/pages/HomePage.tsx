import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiAward, FiTruck, FiCreditCard, FiRefreshCw } from 'react-icons/fi';
import HeroSlider from '../components/ui/HeroSlider';
import ProductCard from '../components/ui/ProductCard';
import CategoryCard from '../components/ui/CategoryCard';
import TestimonialCard from '../components/ui/TestimonialCard';
import FaqAccordion from '../components/ui/FaqAccordion';
import Button from '../components/ui/Button';
import { banners } from '../data/banners';
import { categories } from '../data/categories';
import { getFeaturedProducts, getNewArrivals, getBestSellers } from '../data/products';
import { testimonials } from '../data/testimonials';
import { faqs } from '../data/faqs';

const HomePage = () => {
  const featuredProducts = getFeaturedProducts(3);
  const newArrivals = getNewArrivals(4);
  const bestSellers = getBestSellers(4);
  
  const [featuredRef, featuredInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [categoriesRef, categoriesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [benefitsRef, benefitsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [testimonialsRef, testimonialsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  useEffect(() => {
    document.title = 'Mattress Philly | Sleep Better Tonight';
  }, []);
  
  return (
    <div>
      {/* Hero Slider */}
      <section className="pt-16">
        <HeroSlider banners={banners} />
      </section>
      
      {/* Featured Categories */}
      <section className="section-padding" ref={categoriesRef}>
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Find Your Perfect Mattress</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Explore our collection of premium mattresses designed for every sleep style, body type, and budget.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoriesInView && categories.slice(0, 6).map((category, index) => (
              <CategoryCard key={category.id} category={category} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="section-padding bg-neutral-50" ref={featuredRef}>
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Featured Mattresses</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Our most popular mattresses, loved by thousands of satisfied customers for their exceptional comfort and value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredInView && featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button href="/products" variant="primary">
              View All Mattresses
            </Button>
          </div>
        </div>
      </section>
      
      {/* Benefits */}
      <section className="section-padding bg-comfort-pattern bg-cover bg-fixed" ref={benefitsRef}>
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Why Choose Mattress Philly?</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              We're committed to providing the best sleep experience with premium products and exceptional service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefitsInView && [
              {
                icon: <FiAward size={40} className="text-primary-600" />,
                title: "Premium Quality",
                description: "All our mattresses are crafted with the highest quality materials for durability and comfort."
              },
              {
                icon: <FiTruck size={40} className="text-primary-600" />,
                title: "Free Delivery",
                description: "Enjoy free white-glove delivery and setup with all mattress purchases."
              },
              {
                icon: <FiRefreshCw size={40} className="text-primary-600" />,
                title: "100-Night Trial",
                description: "Sleep on it for up to 100 nights. If you're not satisfied, we'll make it right."
              },
              {
                icon: <FiCreditCard size={40} className="text-primary-600" />,
                title: "Easy Financing",
                description: "0% APR financing available to make your perfect mattress affordable."
              }
            ].map((benefit, index) => (
              <motion.div 
                key={index}
                className="bg-white/90 rounded-lg p-6 text-center shadow-soft"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-neutral-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* New Arrivals */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">New Arrivals</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Discover our latest mattress innovations, designed with cutting-edge sleep technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Sleep Quiz CTA */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Not Sure Which Mattress Is Right For You?</h2>
            <p className="text-xl mb-8 text-primary-100">
              Take our sleep quiz to find your perfect match based on your sleep style, preferences, and needs.
            </p>
            <Button 
              href="/sleep-quiz"
              variant="secondary"
              size="lg"
              className="bg-white text-primary-900 hover:bg-primary-50"
            >
              Take the Sleep Quiz
            </Button>
          </div>
        </div>
      </section>
      
      {/* Best Sellers */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Best Sellers</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Our most popular mattresses, loved by thousands of satisfied customers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button href="/products" variant="primary">
              View All Mattresses
            </Button>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="section-padding" ref={testimonialsRef}>
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">What Our Customers Say</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Don't just take our word for it. Hear from our satisfied customers who are enjoying better sleep.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonialsInView && testimonials.slice(0, 3).map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button href="/reviews" variant="outline">
              Read More Reviews
            </Button>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Find answers to common questions about our mattresses, delivery, and policies.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <FaqAccordion faqs={faqs.slice(0, 4)} />
            
            <div className="text-center mt-12">
              <Button href="/faq" variant="outline">
                View All FAQs
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Get Sleep Tips & Exclusive Offers</h2>
            <p className="text-xl mb-8 text-primary-100">
              Subscribe to our newsletter for the latest sleep research, mattress care tips, and exclusive discounts.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-2 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-neutral-800"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-primary-900 hover:bg-primary-50 font-medium rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
            
            <p className="text-sm mt-4 text-primary-200">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
