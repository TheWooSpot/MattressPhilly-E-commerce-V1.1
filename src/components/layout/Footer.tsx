import { Link } from 'react-router-dom';
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import Logo from '../ui/Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <Logo variant="light" />
            </div>
            <p className="text-neutral-300 mb-6">
              Philadelphia's premier destination for quality mattresses at affordable prices. Family-owned and operated since 1985.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-white transition-colors" aria-label="Facebook">
                <FiFacebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-white transition-colors" aria-label="Instagram">
                <FiInstagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-white transition-colors" aria-label="Twitter">
                <FiTwitter size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-white transition-colors" aria-label="YouTube">
                <FiYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/products" className="text-neutral-300 hover:text-white transition-colors">
                  Shop All Mattresses
                </Link>
              </li>
              <li>
                <Link to="/products/memory-foam" className="text-neutral-300 hover:text-white transition-colors">
                  Memory Foam
                </Link>
              </li>
              <li>
                <Link to="/products/hybrid" className="text-neutral-300 hover:text-white transition-colors">
                  Hybrid Mattresses
                </Link>
              </li>
              <li>
                <Link to="/products/innerspring" className="text-neutral-300 hover:text-white transition-colors">
                  Innerspring
                </Link>
              </li>
              <li>
                <Link to="/products/latex" className="text-neutral-300 hover:text-white transition-colors">
                  Natural Latex
                </Link>
              </li>
              <li>
                <Link to="/products/accessories" className="text-neutral-300 hover:text-white transition-colors">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Customer Service</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/delivery" className="text-neutral-300 hover:text-white transition-colors">
                  Delivery Information
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-neutral-300 hover:text-white transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link to="/warranty" className="text-neutral-300 hover:text-white transition-colors">
                  Warranty Information
                </Link>
              </li>
              <li>
                <Link to="/financing" className="text-neutral-300 hover:text-white transition-colors">
                  Financing Options
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-neutral-300 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FiMapPin className="mt-1 mr-3 text-primary-400" />
                <span className="text-neutral-300">
                  1234 Market Street<br />
                  Philadelphia, PA 19107
                </span>
              </li>
              <li className="flex items-center">
                <FiPhone className="mr-3 text-primary-400" />
                <a href="tel:+12155551234" className="text-neutral-300 hover:text-white transition-colors">
                  (215) 555-1234
                </a>
              </li>
              <li className="flex items-center">
                <FiMail className="mr-3 text-primary-400" />
                <a href="mailto:info@mattressphilly.com" className="text-neutral-300 hover:text-white transition-colors">
                  info@mattressphilly.com
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="font-medium text-white mb-2">Store Hours</h4>
              <p className="text-neutral-300">
                Monday - Saturday: 10am - 8pm<br />
                Sunday: 11am - 6pm
              </p>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-neutral-800 pt-8 pb-8">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-lg font-semibold mb-3 text-white">Subscribe to Our Newsletter</h3>
            <p className="text-neutral-300 mb-4">
              Get the latest updates, sales, and sleep tips delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-white"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-neutral-800 pt-8 mt-8 text-neutral-400 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© {currentYear} Mattress Philly. All rights reserved.</p>
            <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/accessibility" className="hover:text-white transition-colors">
                Accessibility
              </Link>
              <Link to="/sitemap" className="hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
