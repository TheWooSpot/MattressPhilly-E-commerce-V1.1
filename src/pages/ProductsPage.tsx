import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiFilter, FiX, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import ProductCard from '../components/ui/ProductCard';
import Button from '../components/ui/Button';
import { getProductsByCategory } from '../data/products';
import { getCategoryBySlug, categories } from '../data/categories';
import { Product } from '../types';

const ProductsPage = () => {
  const { category } = useParams<{ category?: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    priceRange: [0, 3000],
    types: [] as string[],
    firmness: [] as number[],
    features: [] as string[],
  });
  const [sortOption, setSortOption] = useState('featured');
  const [expandedSections, setExpandedSections] = useState({
    price: true,
    type: true,
    firmness: true,
    features: false,
  });
  
  const categoryInfo = category ? getCategoryBySlug(category) : null;
  
  useEffect(() => {
    document.title = categoryInfo 
      ? `${categoryInfo.name} | Mattress Philly` 
      : 'All Mattresses | Mattress Philly';
    
    const fetchedProducts = category 
      ? getProductsByCategory(category) 
      : getProductsByCategory('all');
    
    setProducts(fetchedProducts);
    setFilteredProducts(fetchedProducts);
  }, [category, categoryInfo]);
  
  const toggleFilterSection = (section: keyof typeof expandedSections) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section],
    });
  };
  
  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };
  
  const handleTypeFilter = (type: string) => {
    const updatedTypes = activeFilters.types.includes(type)
      ? activeFilters.types.filter(t => t !== type)
      : [...activeFilters.types, type];
    
    setActiveFilters({
      ...activeFilters,
      types: updatedTypes,
    });
  };
  
  const handleFirmnessFilter = (firmness: number) => {
    const updatedFirmness = activeFilters.firmness.includes(firmness)
      ? activeFilters.firmness.filter(f => f !== firmness)
      : [...activeFilters.firmness, firmness];
    
    setActiveFilters({
      ...activeFilters,
      firmness: updatedFirmness,
    });
  };
  
  const handlePriceChange = (range: [number, number]) => {
    setActiveFilters({
      ...activeFilters,
      priceRange: range,
    });
  };
  
  const handleSort = (option: string) => {
    setSortOption(option);
    
    let sortedProducts = [...filteredProducts];
    
    switch (option) {
      case 'price-low':
        sortedProducts.sort((a, b) => (a.salePrice || a.price) - (b.salePrice || b.price));
        break;
      case 'price-high':
        sortedProducts.sort((a, b) => (b.salePrice || b.price) - (a.salePrice || a.price));
        break;
      case 'rating':
        sortedProducts.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        sortedProducts.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default: // featured
        sortedProducts.sort((a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0));
        break;
    }
    
    setFilteredProducts(sortedProducts);
  };
  
  const applyFilters = () => {
    let filtered = [...products];
    
    // Filter by price
    filtered = filtered.filter(product => {
      const price = product.salePrice || product.price;
      return price >= activeFilters.priceRange[0] && price <= activeFilters.priceRange[1];
    });
    
    // Filter by type
    if (activeFilters.types.length > 0) {
      filtered = filtered.filter(product => 
        activeFilters.types.includes(product.type)
      );
    }
    
    // Filter by firmness
    if (activeFilters.firmness.length > 0) {
      filtered = filtered.filter(product => 
        activeFilters.firmness.includes(Math.round(product.firmness))
      );
    }
    
    setFilteredProducts(filtered);
    
    // Re-apply current sort
    handleSort(sortOption);
    
    // Close filter on mobile after applying
    if (window.innerWidth < 768) {
      setIsFilterOpen(false);
    }
  };
  
  const resetFilters = () => {
    setActiveFilters({
      priceRange: [0, 3000],
      types: [],
      firmness: [],
      features: [],
    });
    
    setFilteredProducts(products);
    setSortOption('featured');
  };
  
  // Get unique mattress types from products
  const mattressTypes = Array.from(new Set(products.map(product => product.type)));
  
  return (
    <div className="pt-20">
      {/* Category Header */}
      <div className="bg-neutral-100 py-12">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            {categoryInfo ? categoryInfo.name : 'All Mattresses'}
          </h1>
          <p className="text-neutral-600 max-w-3xl">
            {categoryInfo 
              ? categoryInfo.description 
              : 'Browse our complete collection of premium mattresses designed for every sleep style, body type, and budget.'}
          </p>
        </div>
      </div>
      
      {/* Product Filtering and Listing */}
      <div className="container-custom py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filter Toggle (Mobile) */}
          <div className="md:hidden">
            <Button 
              onClick={toggleFilter}
              variant="outline"
              fullWidth
              className="flex items-center justify-center"
            >
              <FiFilter className="mr-2" />
              {isFilterOpen ? 'Hide Filters' : 'Show Filters'}
            </Button>
          </div>
          
          {/* Filters Sidebar */}
          <div 
            className={`w-full md:w-64 flex-shrink-0 transition-all duration-300 ${
              isFilterOpen || window.innerWidth >= 768 ? 'block' : 'hidden'
            }`}
          >
            <div className="bg-white rounded-lg shadow-soft p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Filters</h2>
                <button 
                  onClick={resetFilters}
                  className="text-sm text-primary-600 hover:text-primary-700"
                >
                  Reset All
                </button>
              </div>
              
              {/* Price Range */}
              <div className="mb-6 border-b border-neutral-200 pb-6">
                <button 
                  className="flex items-center justify-between w-full text-left font-medium mb-4"
                  onClick={() => toggleFilterSection('price')}
                >
                  <span>Price Range</span>
                  {expandedSections.price ? <FiChevronUp /> : <FiChevronDown />}
                </button>
                
                {expandedSections.price && (
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>${activeFilters.priceRange[0]}</span>
                      <span>${activeFilters.priceRange[1]}</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="3000"
                      step="100"
                      value={activeFilters.priceRange[1]}
                      onChange={(e) => handlePriceChange([activeFilters.priceRange[0], parseInt(e.target.value)])}
                      className="w-full"
                    />
                  </div>
                )}
              </div>
              
              {/* Mattress Type */}
              <div className="mb-6 border-b border-neutral-200 pb-6">
                <button 
                  className="flex items-center justify-between w-full text-left font-medium mb-4"
                  onClick={() => toggleFilterSection('type')}
                >
                  <span>Mattress Type</span>
                  {expandedSections.type ? <FiChevronUp /> : <FiChevronDown />}
                </button>
                
                {expandedSections.type && (
                  <div className="space-y-2">
                    {mattressTypes.map((type) => (
                      <label key={type} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={activeFilters.types.includes(type)}
                          onChange={() => handleTypeFilter(type)}
                          className="mr-2"
                        />
                        <span>{type}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Firmness */}
              <div className="mb-6 border-b border-neutral-200 pb-6">
                <button 
                  className="flex items-center justify-between w-full text-left font-medium mb-4"
                  onClick={() => toggleFilterSection('firmness')}
                >
                  <span>Firmness</span>
                  {expandedSections.firmness ? <FiChevronUp /> : <FiChevronDown />}
                </button>
                
                {expandedSections.firmness && (
                  <div className="space-y-2">
                    {[
                      { value: 3, label: 'Soft (3-4)' },
                      { value: 5, label: 'Medium (5-6)' },
                      { value: 7, label: 'Firm (7-8)' },
                      { value: 9, label: 'Extra Firm (9-10)' },
                    ].map((option) => (
                      <label key={option.value} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={activeFilters.firmness.includes(option.value)}
                          onChange={() => handleFirmnessFilter(option.value)}
                          className="mr-2"
                        />
                        <span>{option.label}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
              
              <Button 
                onClick={applyFilters}
                variant="primary"
                fullWidth
              >
                Apply Filters
              </Button>
            </div>
          </div>
          
          {/* Product Listing */}
          <div className="flex-grow">
            {/* Sort Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <p className="text-neutral-600">
                Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              </p>
              
              <div className="flex items-center">
                <label htmlFor="sort" className="mr-2 text-neutral-600">Sort by:</label>
                <select
                  id="sort"
                  value={sortOption}
                  onChange={(e) => handleSort(e.target.value)}
                  className="border border-neutral-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest</option>
                </select>
              </div>
            </div>
            
            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-neutral-50 rounded-lg">
                <h3 className="text-xl font-medium mb-2">No products found</h3>
                <p className="text-neutral-600 mb-6">Try adjusting your filters or browse our categories below.</p>
                <div className="flex flex-wrap justify-center gap-3">
                  {categories.map((cat) => (
                    <Button 
                      key={cat.id}
                      href={`/products/${cat.slug}`}
                      variant="outline"
                    >
                      {cat.name}
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Help Section */}
      <section className="bg-neutral-50 py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">Need Help Finding the Perfect Mattress?</h2>
            <p className="text-neutral-600 mb-8">
              Our sleep experts are here to help you find the perfect mattress for your sleep style, preferences, and budget.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button href="/sleep-quiz" variant="primary">
                Take the Sleep Quiz
              </Button>
              <Button href="/contact" variant="outline">
                Contact Our Sleep Experts
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
