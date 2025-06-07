import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiFilter, FiX, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import Button from '../components/ui/Button';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  salePrice?: number;
  images: string[];
  category: string;
  firmness: string;
  tags: string[];
  rating: number;
  reviewCount: number;
}

interface FilterState {
  categories: string[];
  firmness: string[];
  priceRange: [number, number];
  sortBy: string;
}

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    firmness: [],
    priceRange: [0, 2000],
    sortBy: 'featured'
  });
  
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    firmness: true,
    priceRange: true
  });
  
  useEffect(() => {
    document.title = 'Shop Mattresses | Mattress Philly';
    
    // In a real app, fetch products from an API
    // For now, we'll simulate a product fetch
    const fetchProducts = async () => {
      setLoading(true);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Mock product data
      const mockProducts: Product[] = [
        {
          id: '1',
          name: 'Dreamcloud Luxury Hybrid Mattress',
          description: 'Experience the perfect balance of comfort and support with our premium hybrid mattress.',
          price: 1299,
          salePrice: 899,
          images: ['https://images.pexels.com/photos/6782567/pexels-photo-6782567.jpeg'],
          category: 'Hybrid',
          firmness: 'Medium-Firm',
          tags: ['Hybrid', 'Luxury', 'Medium-Firm', 'Cooling'],
          rating: 4.9,
          reviewCount: 128
        },
        {
          id: '2',
          name: 'Serenity Memory Foam Mattress',
          description: 'Sink into plush comfort with our premium memory foam mattress designed for pressure relief.',
          price: 799,
          salePrice: 599,
          images: ['https://images.pexels.com/photos/6782447/pexels-photo-6782447.jpeg'],
          category: 'Memory Foam',
          firmness: 'Medium',
          tags: ['Memory Foam', 'Pressure Relief', 'Medium'],
          rating: 4.7,
          reviewCount: 94
        },
        {
          id: '3',
          name: 'Harmony Organic Latex Mattress',
          description: 'Natural, eco-friendly latex mattress offering responsive support and breathability.',
          price: 1499,
          salePrice: 1199,
          images: ['https://images.pexels.com/photos/6782453/pexels-photo-6782453.jpeg'],
          category: 'Latex',
          firmness: 'Medium-Firm',
          tags: ['Latex', 'Organic', 'Eco-Friendly', 'Medium-Firm'],
          rating: 4.8,
          reviewCount: 76
        },
        {
          id: '4',
          name: 'Essential Innerspring Mattress',
          description: 'Classic innerspring design providing traditional bounce and solid support.',
          price: 599,
          salePrice: undefined,
          images: ['https://images.pexels.com/photos/6782571/pexels-photo-6782571.jpeg'],
          category: 'Innerspring',
          firmness: 'Firm',
          tags: ['Innerspring', 'Traditional', 'Firm', 'Budget-Friendly'],
          rating: 4.5,
          reviewCount: 112
        },
        {
          id: '5',
          name: 'Cooling Gel Hybrid Mattress',
          description: 'Stay cool all night with our temperature-regulating gel hybrid mattress.',
          price: 999,
          salePrice: 799,
          images: ['https://images.pexels.com/photos/6782567/pexels-photo-6782567.jpeg'],
          category: 'Hybrid',
          firmness: 'Medium',
          tags: ['Hybrid', 'Cooling', 'Medium', 'Gel-Infused'],
          rating: 4.8,
          reviewCount: 87
        },
        {
          id: '6',
          name: 'Plush Pillow Top Mattress',
          description: 'Ultra-plush pillow top for those who prefer a softer sleep surface.',
          price: 1099,
          salePrice: 899,
          images: ['https://images.pexels.com/photos/6782447/pexels-photo-6782447.jpeg'],
          category: 'Pillow Top',
          firmness: 'Soft',
          tags: ['Pillow Top', 'Plush', 'Soft', 'Luxury'],
          rating: 4.6,
          reviewCount: 64
        },
        {
          id: '7',
          name: 'Orthopedic Support Mattress',
          description: 'Designed for optimal spinal alignment and back support.',
          price: 1199,
          salePrice: 999,
          images: ['https://images.pexels.com/photos/6782453/pexels-photo-6782453.jpeg'],
          category: 'Orthopedic',
          firmness: 'Firm',
          tags: ['Orthopedic', 'Back Support', 'Firm', 'Therapeutic'],
          rating: 4.9,
          reviewCount: 53
        },
        {
          id: '8',
          name: 'Budget Comfort Mattress',
          description: 'Quality sleep at an affordable price point.',
          price: 499,
          salePrice: 399,
          images: ['https://images.pexels.com/photos/6782571/pexels-photo-6782571.jpeg'],
          category: 'Foam',
          firmness: 'Medium',
          tags: ['Foam', 'Budget', 'Medium', 'Value'],
          rating: 4.4,
          reviewCount: 138
        }
      ];
      
      setProducts(mockProducts);
      setLoading(false);
    };
    
    fetchProducts();
  }, []);
  
  const toggleFilter = (filterType: keyof FilterState, value: string) => {
    setFilters(prevFilters => {
      const currentFilters = [...prevFilters[filterType] as string[]];
      const valueIndex = currentFilters.indexOf(value);
      
      if (valueIndex === -1) {
        return {
          ...prevFilters,
          [filterType]: [...currentFilters, value]
        };
      } else {
        currentFilters.splice(valueIndex, 1);
        return {
          ...prevFilters,
          [filterType]: currentFilters
        };
      }
    });
  };
  
  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };
  
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters(prev => ({
      ...prev,
      sortBy: e.target.value
    }));
  };
  
  const resetFilters = () => {
    setFilters({
      categories: [],
      firmness: [],
      priceRange: [0, 2000],
      sortBy: 'featured'
    });
  };
  
  // Apply filters to products
  const filteredProducts = products.filter(product => {
    // Category filter
    if (filters.categories.length > 0 && !filters.categories.includes(product.category)) {
      return false;
    }
    
    // Firmness filter
    if (filters.firmness.length > 0 && !filters.firmness.includes(product.firmness)) {
      return false;
    }
    
    // Price range filter
    const price = product.salePrice || product.price;
    if (price < filters.priceRange[0] || price > filters.priceRange[1]) {
      return false;
    }
    
    return true;
  });
  
  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (filters.sortBy) {
      case 'price-low-high':
        return (a.salePrice || a.price) - (b.salePrice || b.price);
      case 'price-high-low':
        return (b.salePrice || b.price) - (a.salePrice || a.price);
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return parseInt(b.id) - parseInt(a.id);
      default: // featured
        return 0;
    }
  });
  
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-neutral-100 py-12">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">Shop Our Mattresses</h1>
          <p className="text-neutral-600 max-w-3xl">
            Find your perfect sleep solution from our curated collection of premium mattresses. 
            With options for every sleep style and budget, your best night's sleep is just a click away.
          </p>
        </div>
      </section>
      
      <div className="container-custom py-12">
        {/* Mobile Filter Button */}
        <div className="lg:hidden mb-6">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center justify-center w-full py-3 border border-neutral-300 rounded-md bg-white shadow-sm text-neutral-700 hover:bg-neutral-50"
          >
            <FiFilter className="mr-2" />
            Filter Products
          </button>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters - Mobile */}
          {mobileFiltersOpen && (
            <div className="fixed inset-0 z-40 lg:hidden">
              <div className="fixed inset-0 bg-black bg-opacity-25" onClick={() => setMobileFiltersOpen(false)}></div>
              <div className="relative w-full max-w-xs h-full bg-white shadow-xl flex flex-col">
                <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-200">
                  <h2 className="text-lg font-medium">Filters</h2>
                  <button 
                    onClick={() => setMobileFiltersOpen(false)}
                    className="text-neutral-500 hover:text-neutral-700"
                  >
                    <FiX size={24} />
                  </button>
                </div>
                
                <div className="flex-grow overflow-y-auto p-4">
                  {/* Filter sections - same as desktop but in mobile view */}
                  {/* Category Filter */}
                  <div className="mb-6">
                    <button
                      className="flex items-center justify-between w-full text-left font-medium mb-2"
                      onClick={() => toggleSection('categories')}
                    >
                      <span>Category</span>
                      {expandedSections.categories ? <FiChevronUp /> : <FiChevronDown />}
                    </button>
                    
                    {expandedSections.categories && (
                      <div className="space-y-2">
                        {['Hybrid', 'Memory Foam', 'Latex', 'Innerspring', 'Pillow Top', 'Orthopedic', 'Foam'].map((category) => (
                          <label key={category} className="flex items-center">
                            <input
                              type="checkbox"
                              checked={filters.categories.includes(category)}
                              onChange={() => toggleFilter('categories', category)}
                              className="h-4 w-4 rounded border-neutral-300 text-primary-600 focus:ring-primary-500"
                            />
                            <span className="ml-2 text-neutral-700">{category}</span>
                          </label>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  {/* Firmness Filter */}
                  <div className="mb-6">
                    <button
                      className="flex items-center justify-between w-full text-left font-medium mb-2"
                      onClick={() => toggleSection('firmness')}
                    >
                      <span>Firmness</span>
                      {expandedSections.firmness ? <FiChevronUp /> : <FiChevronDown />}
                    </button>
                    
                    {expandedSections.firmness && (
                      <div className="space-y-2">
                        {['Soft', 'Medium', 'Medium-Firm', 'Firm'].map((firmness) => (
                          <label key={firmness} className="flex items-center">
                            <input
                              type="checkbox"
                              checked={filters.firmness.includes(firmness)}
                              onChange={() => toggleFilter('firmness', firmness)}
                              className="h-4 w-4 rounded border-neutral-300 text-primary-600 focus:ring-primary-500"
                            />
                            <span className="ml-2 text-neutral-700">{firmness}</span>
                          </label>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  {/* Price Range Filter */}
                  <div className="mb-6">
                    <button
                      className="flex items-center justify-between w-full text-left font-medium mb-2"
                      onClick={() => toggleSection('priceRange')}
                    >
                      <span>Price Range</span>
                      {expandedSections.priceRange ? <FiChevronUp /> : <FiChevronDown />}
                    </button>
                    
                    {expandedSections.priceRange && (
                      <div>
                        <div className="flex justify-between mb-2">
                          <span>${filters.priceRange[0]}</span>
                          <span>${filters.priceRange[1]}</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="2000"
                          step="100"
                          value={filters.priceRange[1]}
                          onChange={(e) => setFilters(prev => ({
                            ...prev,
                            priceRange: [prev.priceRange[0], parseInt(e.target.value)]
                          }))}
                          className="w-full"
                        />
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="border-t border-neutral-200 p-4">
                  <button
                    onClick={resetFilters}
                    className="w-full py-2 text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Reset Filters
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {/* Filters - Desktop */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-soft p-6 sticky top-24">
              <h2 className="text-lg font-medium mb-6">Filters</h2>
              
              {/* Category Filter */}
              <div className="mb-6">
                <button
                  className="flex items-center justify-between w-full text-left font-medium mb-2"
                  onClick={() => toggleSection('categories')}
                >
                  <span>Category</span>
                  {expandedSections.categories ? <FiChevronUp /> : <FiChevronDown />}
                </button>
                
                {expandedSections.categories && (
                  <div className="space-y-2">
                    {['Hybrid', 'Memory Foam', 'Latex', 'Innerspring', 'Pillow Top', 'Orthopedic', 'Foam'].map((category) => (
                      <label key={category} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={filters.categories.includes(category)}
                          onChange={() => toggleFilter('categories', category)}
                          className="h-4 w-4 rounded border-neutral-300 text-primary-600 focus:ring-primary-500"
                        />
                        <span className="ml-2 text-neutral-700">{category}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Firmness Filter */}
              <div className="mb-6">
                <button
                  className="flex items-center justify-between w-full text-left font-medium mb-2"
                  onClick={() => toggleSection('firmness')}
                >
                  <span>Firmness</span>
                  {expandedSections.firmness ? <FiChevronUp /> : <FiChevronDown />}
                </button>
                
                {expandedSections.firmness && (
                  <div className="space-y-2">
                    {['Soft', 'Medium', 'Medium-Firm', 'Firm'].map((firmness) => (
                      <label key={firmness} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={filters.firmness.includes(firmness)}
                          onChange={() => toggleFilter('firmness', firmness)}
                          className="h-4 w-4 rounded border-neutral-300 text-primary-600 focus:ring-primary-500"
                        />
                        <span className="ml-2 text-neutral-700">{firmness}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Price Range Filter */}
              <div className="mb-6">
                <button
                  className="flex items-center justify-between w-full text-left font-medium mb-2"
                  onClick={() => toggleSection('priceRange')}
                >
                  <span>Price Range</span>
                  {expandedSections.priceRange ? <FiChevronUp /> : <FiChevronDown />}
                </button>
                
                {expandedSections.priceRange && (
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>${filters.priceRange[0]}</span>
                      <span>${filters.priceRange[1]}</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="2000"
                      step="100"
                      value={filters.priceRange[1]}
                      onChange={(e) => setFilters(prev => ({
                        ...prev,
                        priceRange: [prev.priceRange[0], parseInt(e.target.value)]
                      }))}
                      className="w-full"
                    />
                  </div>
                )}
              </div>
              
              <button
                onClick={resetFilters}
                className="w-full py-2 text-primary-600 hover:text-primary-700 font-medium"
              >
                Reset Filters
              </button>
            </div>
          </div>
          
          {/* Product Grid */}
          <div className="flex-grow">
            {/* Sort and Results Count */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <p className="text-neutral-600 mb-4 sm:mb-0">
                Showing {sortedProducts.length} {sortedProducts.length === 1 ? 'result' : 'results'}
              </p>
              
              <div className="flex items-center">
                <label htmlFor="sort" className="mr-2 text-neutral-600">Sort by:</label>
                <select
                  id="sort"
                  value={filters.sortBy}
                  onChange={handleSortChange}
                  className="border border-neutral-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low-high">Price: Low to High</option>
                  <option value="price-high-low">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest</option>
                </select>
              </div>
            </div>
            
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
              </div>
            ) : (
              <>
                {sortedProducts.length === 0 ? (
                  <div className="bg-white rounded-lg shadow-soft p-8 text-center">
                    <h3 className="text-xl font-medium mb-2">No products found</h3>
                    <p className="text-neutral-600 mb-6">
                      Try adjusting your filters to find what you're looking for.
                    </p>
                    <Button onClick={resetFilters} variant="primary">
                      Reset Filters
                    </Button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sortedProducts.map((product, index) => (
                      <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="bg-white rounded-lg shadow-soft overflow-hidden group"
                      >
                        <Link to={`/product/${product.id}`} className="block relative h-48 overflow-hidden">
                          <img 
                            src={product.images[0]} 
                            alt={product.name} 
                            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                          />
                          {product.salePrice && (
                            <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                              SALE
                            </div>
                          )}
                        </Link>
                        
                        <div className="p-4">
                          <div className="text-sm text-primary-600 mb-1">{product.category}</div>
                          <Link to={`/product/${product.id}`}>
                            <h3 className="font-medium mb-2 group-hover:text-primary-600 transition-colors">
                              {product.name}
                            </h3>
                          </Link>
                          
                          <div className="flex items-center mb-2">
                            <div className="flex">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <svg 
                                  key={star}
                                  xmlns="http://www.w3.org/2000/svg" 
                                  className={`h-4 w-4 ${
                                    star <= Math.round(product.rating) ? 'text-yellow-400' : 'text-neutral-300'
                                  }`}
                                  viewBox="0 0 20 20" 
                                  fill="currentColor"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                            <span className="text-xs text-neutral-500 ml-1">
                              ({product.reviewCount})
                            </span>
                          </div>
                          
                          <p className="text-sm text-neutral-600 mb-3 line-clamp-2">
                            {product.description}
                          </p>
                          
                          <div className="flex items-center justify-between mb-3">
                            {product.salePrice ? (
                              <div className="flex items-center">
                                <span className="font-bold text-lg mr-2">${product.salePrice}</span>
                                <span className="text-sm text-neutral-500 line-through">${product.price}</span>
                              </div>
                            ) : (
                              <span className="font-bold text-lg">${product.price}</span>
                            )}
                            <div className="text-sm text-neutral-600">{product.firmness}</div>
                          </div>
                          
                          <Button 
                            href={`/product/${product.id}`}
                            variant="primary"
                            fullWidth
                          >
                            View Details
                          </Button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      
      {/* Help Section */}
      <section className="bg-neutral-50 py-16">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-serif font-bold mb-4">Not Sure Which Mattress Is Right For You?</h2>
            <p className="text-neutral-600 mb-8">
              Take our sleep quiz to find your perfect match, or speak with one of our sleep experts for personalized recommendations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button href="/sleep-quiz" variant="primary">
                Take Sleep Quiz
              </Button>
              <Button href="/contact" variant="outline">
                Contact a Sleep Expert
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
