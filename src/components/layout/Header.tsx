import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiShoppingCart, FiSearch, FiUser } from 'react-icons/fi';
import { useCartStore } from '../../store/cartStore';
import { categories } from '../../data/categories';
import Logo from '../ui/Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  const cartItemCount = useCartStore(state => state.getTotalItems());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isSearchOpen) setIsSearchOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isMenuOpen) setIsMenuOpen(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Searching for:', searchQuery);
    setIsSearchOpen(false);
    setSearchQuery('');
    // Navigate to search results page
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 py-4'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="relative z-10">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-neutral-800 hover:text-primary-600 font-medium transition-colors">
              Home
            </Link>
            <div className="relative group">
              <button className="text-neutral-800 hover:text-primary-600 font-medium transition-colors flex items-center">
                Shop
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white shadow-lg rounded-md overflow-hidden z-50">
                <div className="py-2">
                  <Link to="/products" className="block px-4 py-2 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-600">
                    All Mattresses
                  </Link>
                  {categories.map((category) => (
                    <Link 
                      key={category.id}
                      to={`/products/${category.slug}`} 
                      className="block px-4 py-2 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-600"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link to="/about" className="text-neutral-800 hover:text-primary-600 font-medium transition-colors">
              About Us
            </Link>
            <Link to="/contact" className="text-neutral-800 hover:text-primary-600 font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={toggleSearch}
              className="p-2 text-neutral-600 hover:text-primary-600 transition-colors"
              aria-label="Search"
            >
              <FiSearch size={20} />
            </button>
            <Link 
              to="/cart" 
              className="p-2 text-neutral-600 hover:text-primary-600 transition-colors relative"
              aria-label="Shopping cart"
            >
              <FiShoppingCart size={20} />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
            <Link 
              to="/account" 
              className="p-2 text-neutral-600 hover:text-primary-600 transition-colors"
              aria-label="Account"
            >
              <FiUser size={20} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-3 md:hidden">
            <Link 
              to="/cart" 
              className="p-2 text-neutral-600 hover:text-primary-600 transition-colors relative"
              aria-label="Shopping cart"
            >
              <FiShoppingCart size={20} />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
            <button 
              onClick={toggleMenu}
              className="p-2 text-neutral-600 hover:text-primary-600 transition-colors"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Search Overlay */}
        <div className={`absolute top-full left-0 w-full bg-white shadow-md transition-all duration-300 ${isSearchOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <div className="container-custom py-4">
            <form onSubmit={handleSearch} className="flex items-center">
              <input
                type="text"
                placeholder="Search for mattresses, brands, etc..."
                className="flex-grow p-2 border-b-2 border-neutral-300 focus:border-primary-600 outline-none bg-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button 
                type="submit"
                className="ml-2 p-2 text-primary-600 hover:text-primary-700"
                aria-label="Submit search"
              >
                <FiSearch size={20} />
              </button>
            </form>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
          <div className="flex flex-col h-full pt-20 px-6 pb-6 overflow-y-auto">
            <nav className="flex-grow">
              <ul className="space-y-6">
                <li>
                  <Link to="/" className="text-xl font-medium text-neutral-800 hover:text-primary-600 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <div className="mb-4">
                    <h3 className="text-xl font-medium text-neutral-800 mb-3">Shop</h3>
                    <ul className="space-y-3 pl-4">
                      <li>
                        <Link to="/products" className="text-neutral-600 hover:text-primary-600 transition-colors">
                          All Mattresses
                        </Link>
                      </li>
                      {categories.map((category) => (
                        <li key={category.id}>
                          <Link 
                            to={`/products/${category.slug}`} 
                            className="text-neutral-600 hover:text-primary-600 transition-colors"
                          >
                            {category.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
                <li>
                  <Link to="/about" className="text-xl font-medium text-neutral-800 hover:text-primary-600 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-xl font-medium text-neutral-800 hover:text-primary-600 transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/account" className="text-xl font-medium text-neutral-800 hover:text-primary-600 transition-colors">
                    My Account
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="mt-auto pt-6 border-t border-neutral-200">
              <div className="flex items-center justify-between">
                <button 
                  onClick={toggleSearch}
                  className="flex items-center text-neutral-600 hover:text-primary-600 transition-colors"
                >
                  <FiSearch size={20} className="mr-2" />
                  <span>Search</span>
                </button>
                <Link to="/cart" className="flex items-center text-neutral-600 hover:text-primary-600 transition-colors">
                  <FiShoppingCart size={20} className="mr-2" />
                  <span>Cart ({cartItemCount})</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
