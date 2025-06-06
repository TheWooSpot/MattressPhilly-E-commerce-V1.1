import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiStar, FiTruck, FiRefreshCw, FiShield, FiPlus, FiMinus, FiCheck } from 'react-icons/fi';
import Button from '../components/ui/Button';
import ProductCard from '../components/ui/ProductCard';
import FaqAccordion from '../components/ui/FaqAccordion';
import { getProductById, getRelatedProducts } from '../data/products';
import { useCartStore } from '../store/cartStore';
import { Product } from '../types';
import { faqs } from '../data/faqs';

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [selectedSize, setSelectedSize] = useState('queen');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const addItem = useCartStore((state) => state.addItem);
  
  useEffect(() => {
    if (!id) return;
    
    const fetchedProduct = getProductById(id);
    if (fetchedProduct) {
      setProduct(fetchedProduct);
      document.title = `${fetchedProduct.name} | Mattress Philly`;
      setRelatedProducts(getRelatedProducts(id, 3));
    } else {
      navigate('/products');
    }
  }, [id, navigate]);
  
  const handleAddToCart = () => {
    if (!product) return;
    
    addItem(product, quantity, selectedSize);
    
    // Show confirmation message or modal
    alert(`Added ${quantity} ${product.name} (${selectedSize}) to your cart!`);
  };
  
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const getSizePrice = (size: string) => {
    if (!product) return 0;
    
    const basePrice = product.salePrice || product.price;
    const sizeKey = size.toLowerCase().replace(' ', '') as keyof typeof product.sizes;
    const sizePrice = product.sizes[sizeKey] || 0;
    
    return sizePrice;
  };
  
  if (!product) {
    return (
      <div className="container-custom py-20 text-center">
        <p>Loading product...</p>
      </div>
    );
  }
  
  const { 
    name, 
    description, 
    images, 
    price, 
    salePrice, 
    rating, 
    reviewCount, 
    features, 
    specifications,
    firmness,
    materials,
    warranty,
    trialPeriod
  } = product;
  
  const discount = salePrice ? Math.round(((price - salePrice) / price) * 100) : 0;
  const currentPrice = getSizePrice(selectedSize);
  
  return (
    <div className="pt-20">
      {/* Product Detail */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div>
              <div className="mb-4 overflow-hidden rounded-lg">
                <img 
                  src={images[activeImageIndex]} 
                  alt={name} 
                  className="w-full h-[400px] object-cover object-center"
                />
              </div>
              
              <div className="grid grid-cols-4 gap-2">
                {images.map((image, index) => (
                  <button
                    key={index}
                    className={`overflow-hidden rounded-md border-2 ${
                      index === activeImageIndex ? 'border-primary-600' : 'border-transparent'
                    }`}
                    onClick={() => setActiveImageIndex(index)}
                  >
                    <img 
                      src={image} 
                      alt={`${name} view ${index + 1}`} 
                      className="w-full h-20 object-cover object-center"
                    />
                  </button>
                ))}
              </div>
            </div>
            
            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-serif font-bold mb-2">{name}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex items-center text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <FiStar 
                      key={i} 
                      className={`${i < Math.floor(rating) ? 'fill-current' : ''} mr-1`} 
                    />
                  ))}
                  <span className="ml-1 text-sm font-medium">{rating.toFixed(1)}</span>
                </div>
                <span className="mx-2 text-neutral-300">|</span>
                <span className="text-sm text-neutral-500">{reviewCount} reviews</span>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  {salePrice ? (
                    <>
                      <span className="text-3xl font-bold text-neutral-900">${currentPrice}</span>
                      <span className="ml-3 text-lg text-neutral-500 line-through">${price}</span>
                      <span className="ml-3 bg-red-600 text-white text-sm font-bold px-2 py-1 rounded">
                        {discount}% OFF
                      </span>
                    </>
                  ) : (
                    <span className="text-3xl font-bold text-neutral-900">${currentPrice}</span>
                  )}
                </div>
                <p className="text-sm text-neutral-500">
                  Or as low as ${Math.round(currentPrice / 12)}/month with financing
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="font-medium mb-2">Select Size</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {Object.entries(product.sizes).map(([size, price]) => {
                    if (price === 0) return null;
                    
                    const formattedSize = size === 'twinXL' ? 'Twin XL' : 
                                         size === 'calKing' ? 'Cal King' : 
                                         size.charAt(0).toUpperCase() + size.slice(1);
                    
                    return (
                      <button
                        key={size}
                        className={`border rounded-md py-2 px-3 text-center transition-colors ${
                          selectedSize === size 
                            ? 'border-primary-600 bg-primary-50 text-primary-700' 
                            : 'border-neutral-300 hover:border-primary-300'
                        }`}
                        onClick={() => setSelectedSize(size)}
                      >
                        {formattedSize}
                      </button>
                    );
                  })}
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="font-medium mb-2">Quantity</h3>
                <div className="flex items-center">
                  <button 
                    onClick={decrementQuantity}
                    className="border border-neutral-300 rounded-l-md p-2 hover:bg-neutral-100"
                    disabled={quantity <= 1}
                  >
                    <FiMinus />
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                    className="w-16 border-y border-neutral-300 p-2 text-center"
                  />
                  <button 
                    onClick={incrementQuantity}
                    className="border border-neutral-300 rounded-r-md p-2 hover:bg-neutral-100"
                  >
                    <FiPlus />
                  </button>
                </div>
              </div>
              
              <div className="mb-8">
                <Button 
                  onClick={handleAddToCart}
                  variant="primary"
                  size="lg"
                  fullWidth
                >
                  Add to Cart
                </Button>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <FiTruck className="text-primary-600 mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium">Free White Glove Delivery</h4>
                    <p className="text-sm text-neutral-600">Includes in-home setup and old mattress removal</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FiRefreshCw className="text-primary-600 mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium">{trialPeriod}-Night Trial</h4>
                    <p className="text-sm text-neutral-600">Try it at home risk-free for {trialPeriod} nights</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FiShield className="text-primary-600 mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium">{warranty} Warranty</h4>
                    <p className="text-sm text-neutral-600">Protected against manufacturing defects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Product Details Tabs */}
      <section className="py-12 bg-neutral-50">
        <div className="container-custom">
          <div className="border-b border-neutral-200 mb-8">
            <div className="flex flex-wrap -mb-px">
              <button
                className={`inline-block py-4 px-6 border-b-2 font-medium text-lg ${
                  activeTab === 'description' 
                    ? 'border-primary-600 text-primary-700' 
                    : 'border-transparent text-neutral-500 hover:text-neutral-700'
                }`}
                onClick={() => setActiveTab('description')}
              >
                Description
              </button>
              <button
                className={`inline-block py-4 px-6 border-b-2 font-medium text-lg ${
                  activeTab === 'features' 
                    ? 'border-primary-600 text-primary-700' 
                    : 'border-transparent text-neutral-500 hover:text-neutral-700'
                }`}
                onClick={() => setActiveTab('features')}
              >
                Features
              </button>
              <button
                className={`inline-block py-4 px-6 border-b-2 font-medium text-lg ${
                  activeTab === 'specifications' 
                    ? 'border-primary-600 text-primary-700' 
                    : 'border-transparent text-neutral-500 hover:text-neutral-700'
                }`}
                onClick={() => setActiveTab('specifications')}
              >
                Specifications
              </button>
              <button
                className={`inline-block py-4 px-6 border-b-2 font-medium text-lg ${
                  activeTab === 'reviews' 
                    ? 'border-primary-600 text-primary-700' 
                    : 'border-transparent text-neutral-500 hover:text-neutral-700'
                }`}
                onClick={() => setActiveTab('reviews')}
              >
                Reviews ({reviewCount})
              </button>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {activeTab === 'description' && (
              <div>
                <p className="text-neutral-700 mb-6">{description}</p>
                
                <div className="mb-6">
                  <h3 className="text-xl font-medium mb-4">Materials</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    {materials.map((material, index) => (
                      <li key={index} className="text-neutral-700">{material}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-4">Firmness</h3>
                  <div className="relative h-8 bg-neutral-200 rounded-full mb-2">
                    <div 
                      className="absolute top-0 bottom-0 left-0 bg-primary-600 rounded-full"
                      style={{ width: `${firmness * 10}%` }}
                    ></div>
                    <div 
                      className="absolute top-0 bottom-0 flex items-center justify-center w-8 h-8 bg-white border-2 border-primary-600 rounded-full -mt-0 transform -translate-y-1/4"
                      style={{ left: `calc(${firmness * 10}% - 16px)` }}
                    >
                      <span className="text-xs font-bold">{firmness}</span>
                    </div>
                  </div>
                  <div className="flex justify-between text-sm text-neutral-600">
                    <span>Soft</span>
                    <span>Medium</span>
                    <span>Firm</span>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'features' && (
              <div>
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <FiCheck className="text-primary-600 mt-1 mr-3" />
                      <span className="text-neutral-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {activeTab === 'specifications' && (
              <div className="border rounded-lg overflow-hidden">
                <table className="w-full">
                  <tbody>
                    {Object.entries(specifications).map(([key, value], index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-neutral-50' : 'bg-white'}>
                        <td className="py-3 px-4 border-b border-neutral-200 font-medium">{key}</td>
                        <td className="py-3 px-4 border-b border-neutral-200">{value}</td>
                      </tr>
                    ))}
                    <tr className={Object.keys(specifications).length % 2 === 0 ? 'bg-neutral-50' : 'bg-white'}>
                      <td className="py-3 px-4 border-b border-neutral-200 font-medium">Firmness</td>
                      <td className="py-3 px-4 border-b border-neutral-200">
                        {firmness}/10 ({firmness < 4 ? 'Soft' : firmness < 7 ? 'Medium' : 'Firm'})
                      </td>
                    </tr>
                    <tr className={Object.keys(specifications).length % 2 !== 0 ? 'bg-neutral-50' : 'bg-white'}>
                      <td className="py-3 px-4 border-b border-neutral-200 font-medium">Warranty</td>
                      <td className="py-3 px-4 border-b border-neutral-200">{warranty}</td>
                    </tr>
                    <tr className={Object.keys(specifications).length % 2 === 0 ? 'bg-neutral-50' : 'bg-white'}>
                      <td className="py-3 px-4 font-medium">Trial Period</td>
                      <td className="py-3 px-4">{trialPeriod} nights</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
            
            {activeTab === 'reviews' && (
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <div className="flex items-center mb-2">
                      <div className="flex items-center text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <FiStar 
                            key={i} 
                            className={`${i < Math.floor(rating) ? 'fill-current' : ''} mr-1`} 
                            size={24}
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-2xl font-bold">{rating.toFixed(1)}</span>
                    </div>
                    <p className="text-neutral-600">Based on {reviewCount} reviews</p>
                  </div>
                  
                  <Button variant="outline">
                    Write a Review
                  </Button>
                </div>
                
                <div className="text-center py-8">
                  <p className="text-neutral-600 mb-4">Reviews are coming soon!</p>
                  <Button href="/reviews" variant="outline">
                    See All Reviews
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-12">
        <div className="container-custom">
          <h2 className="text-2xl font-serif font-bold mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto">
            <FaqAccordion faqs={faqs.slice(0, 3)} />
            
            <div className="text-center mt-8">
              <Button href="/faq" variant="outline">
                View All FAQs
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Products */}
      <section className="py-12 bg-neutral-50">
        <div className="container-custom">
          <h2 className="text-2xl font-serif font-bold mb-8">You May Also Like</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailPage;
