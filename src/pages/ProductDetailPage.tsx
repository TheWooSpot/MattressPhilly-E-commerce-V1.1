import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft, FiCheck, FiTruck, FiRefreshCw, FiShield } from 'react-icons/fi';
import Button from '../components/ui/Button';
import { useCartStore } from '../store/cartStore';

interface Product {
  id: string;
  name: string;
  description: string;
  features: string[];
  price: number;
  salePrice?: number;
  images: string[];
  category: string;
  firmness: string;
  height: string;
  warranty: string;
  materials: string[];
  sizes: Record<string, number>;
  tags: string[];
}

interface CartStore {
  addItem: (product: Product, size: string, quantity: number) => void;
}

const ProductDetailPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const { addItem } = useCartStore() as CartStore;
  
  useEffect(() => {
    // In a real app, fetch product data from an API
    // For now, we'll simulate a product fetch
    const fetchProduct = async () => {
      setLoading(true);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Mock product data
      const mockProduct: Product = {
        id: productId || '1',
        name: 'Dreamcloud Luxury Hybrid Mattress',
        description: 'Experience the perfect balance of comfort and support with our premium hybrid mattress. The Dreamcloud combines multiple layers of memory foam with individually wrapped coils to provide exceptional pressure relief and minimal motion transfer. The quilted Euro top adds an extra layer of plushness for a truly luxurious sleep experience.',
        features: [
          'Gel-infused memory foam for cooling comfort',
          'Individually wrapped coils for targeted support',
          'Quilted Euro top for plush feel',
          'Edge support system for full mattress use',
          'Minimal motion transfer for undisturbed sleep',
          'CertiPUR-US® certified foams',
          'Compatible with all bed frames and foundations'
        ],
        price: 1299,
        salePrice: 899,
        images: [
          'https://images.pexels.com/photos/6782567/pexels-photo-6782567.jpeg',
          'https://images.pexels.com/photos/6782447/pexels-photo-6782447.jpeg',
          'https://images.pexels.com/photos/6782453/pexels-photo-6782453.jpeg',
          'https://images.pexels.com/photos/6782571/pexels-photo-6782571.jpeg'
        ],
        category: 'Hybrid',
        firmness: 'Medium-Firm (6.5/10)',
        height: '14 inches',
        warranty: '10 Year Limited Warranty',
        materials: [
          'Gel-infused memory foam',
          'Adaptive transition foam',
          'Individually wrapped coils',
          'High-density base foam',
          'Quilted Euro top cover'
        ],
        sizes: {
          twin: 0,
          twinXL: 50,
          full: 100,
          queen: 200,
          king: 300,
          calKing: 300
        },
        tags: ['Hybrid', 'Luxury', 'Medium-Firm', 'Cooling']
      };
      
      setProduct(mockProduct);
      setSelectedSize('queen'); // Default to queen size
      setLoading(false);
      
      // Set page title
      document.title = `${mockProduct.name} | Mattress Philly`;
    };
    
    fetchProduct();
  }, [productId]);
  
  const handleAddToCart = () => {
    if (product && selectedSize) {
      addItem(product, selectedSize, quantity);
      // You could add a toast notification here
    }
  };
  
  const formatSize = (size: string) => {
    return size === 'twinXL' ? 'Twin XL' : 
           size === 'calKing' ? 'Cal King' : 
           size.charAt(0).toUpperCase() + size.slice(1);
  };
  
  const calculatePrice = (basePrice: number, sizePrice: number) => {
    return basePrice + sizePrice;
  };
  
  if (loading) {
    return (
      <div className="container-custom py-20 min-h-[60vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }
  
  if (!product) {
    return (
      <div className="container-custom py-20 min-h-[60vh] flex flex-col items-center justify-center text-center">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <p className="text-neutral-600 mb-8">
          The product you're looking for doesn't exist or has been removed.
        </p>
        <Button href="/products" variant="primary">
          Browse All Mattresses
        </Button>
      </div>
    );
  }
  
  return (
    <div className="container-custom py-20">
      {/* Breadcrumb */}
      <div className="mb-8">
        <Link 
          to="/products" 
          className="inline-flex items-center text-neutral-600 hover:text-primary-600 transition-colors"
        >
          <FiArrowLeft className="mr-2" />
          Back to All Mattresses
        </Link>
      </div>
      
      {/* Product Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div>
          <div className="bg-white rounded-lg shadow-soft overflow-hidden mb-4">
            <img 
              src={product.images[activeImage]} 
              alt={product.name} 
              className="w-full h-[400px] object-cover object-center"
            />
          </div>
          
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`bg-white rounded-lg shadow-soft overflow-hidden ${
                  activeImage === index ? 'ring-2 ring-primary-600' : ''
                }`}
              >
                <img 
                  src={image} 
                  alt={`${product.name} - View ${index + 1}`} 
                  className="w-full h-20 object-cover object-center"
                />
              </button>
            ))}
          </div>
        </div>
        
        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-serif font-bold mb-2">{product.name}</h1>
          
          <div className="flex items-center mb-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg 
                  key={star}
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 text-yellow-400" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-neutral-600 ml-2">4.9 (128 reviews)</span>
          </div>
          
          <div className="mb-6">
            {product.salePrice ? (
              <div className="flex items-center">
                <span className="text-3xl font-bold mr-3">${product.salePrice}</span>
                <span className="text-xl text-neutral-500 line-through">${product.price}</span>
                <span className="ml-3 bg-red-100 text-red-700 px-2 py-1 rounded text-sm font-medium">
                  Save ${product.price - product.salePrice}
                </span>
              </div>
            ) : (
              <span className="text-3xl font-bold">${product.price}</span>
            )}
            <p className="text-sm text-neutral-500 mt-1">Price shown for Queen size</p>
          </div>
          
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Select Size</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {Object.entries(product.sizes).map(([size, priceAdder]) => {
                const formattedSize = formatSize(size);
                const totalPrice = calculatePrice(product.salePrice || product.price, priceAdder);
                
                return (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`border rounded-md py-3 px-4 text-center transition-colors ${
                      selectedSize === size
                        ? 'border-primary-600 bg-primary-50 text-primary-700'
                        : 'border-neutral-300 hover:border-primary-300'
                    }`}
                  >
                    <div className="font-medium">{formattedSize}</div>
                    <div className="text-sm text-neutral-500">${totalPrice}</div>
                  </button>
                );
              })}
            </div>
          </div>
          
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Quantity</h2>
            <div className="flex items-center">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="border border-neutral-300 rounded-l-md p-2 hover:bg-neutral-100"
                disabled={quantity <= 1}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </button>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-16 border-y border-neutral-300 p-2 text-center"
              />
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="border border-neutral-300 rounded-r-md p-2 hover:bg-neutral-100"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
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
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="flex items-start">
              <div className="text-primary-600 mt-1 mr-3">
                <FiTruck size={18} />
              </div>
              <div>
                <h3 className="font-medium text-sm">Free Delivery</h3>
                <p className="text-xs text-neutral-500">2-5 business days</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-primary-600 mt-1 mr-3">
                <FiRefreshCw size={18} />
              </div>
              <div>
                <h3 className="font-medium text-sm">100-Night Trial</h3>
                <p className="text-xs text-neutral-500">Risk-free sleep trial</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-primary-600 mt-1 mr-3">
                <FiShield size={18} />
              </div>
              <div>
                <h3 className="font-medium text-sm">10-Year Warranty</h3>
                <p className="text-xs text-neutral-500">Manufacturer warranty</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-neutral-200 pt-6">
            <h2 className="text-lg font-semibold mb-4">Product Details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div>
                <h3 className="text-sm font-medium text-neutral-500">Category</h3>
                <p>{product.category}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-neutral-500">Firmness</h3>
                <p>{product.firmness}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-neutral-500">Height</h3>
                <p>{product.height}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-neutral-500">Warranty</h3>
                <p>{product.warranty}</p>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-sm font-medium text-neutral-500 mb-2">Materials</h3>
              <ul className="list-disc list-inside space-y-1">
                {product.materials.map((material, index) => (
                  <li key={index}>{material}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Product Description */}
      <div className="mt-16">
        <h2 className="text-2xl font-serif font-bold mb-6">About This Mattress</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-soft p-6">
              <p className="text-neutral-700 mb-6">
                {product.description}
              </p>
              
              <h3 className="text-xl font-semibold mb-4">Key Features</h3>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="text-primary-600 mr-3 mt-1">
                      <FiCheck />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-lg shadow-soft p-6">
              <h3 className="text-xl font-semibold mb-4">Why Choose Us</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-2">Expert Craftsmanship</h4>
                  <p className="text-neutral-600 text-sm">
                    Each mattress is crafted with precision and care using premium materials for exceptional quality and durability.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Risk-Free Sleep Trial</h4>
                  <p className="text-neutral-600 text-sm">
                    Try your new mattress for 100 nights. If you're not completely satisfied, we'll arrange a return and full refund.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Free White Glove Delivery</h4>
                  <p className="text-neutral-600 text-sm">
                    Our delivery team will set up your new mattress and remove your old one at no extra charge.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Comprehensive Warranty</h4>
                  <p className="text-neutral-600 text-sm">
                    Rest easy with our 10-year warranty covering manufacturing defects and premature deterioration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Reviews Section */}
      <div className="mt-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-serif font-bold">Customer Reviews</h2>
          <Button variant="outline">Write a Review</Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              name: "Sarah J.",
              rating: 5,
              date: "October 15, 2023",
              title: "Best sleep of my life!",
              review: "After struggling with back pain for years, I finally found relief with this mattress. The perfect balance of support and comfort. I'm sleeping through the night for the first time in years!"
            },
            {
              name: "Michael T.",
              rating: 5,
              date: "September 28, 2023",
              title: "Worth every penny",
              review: "I was hesitant about ordering a mattress online, but the 100-night trial convinced me to give it a try. So glad I did! The quality is exceptional, and the delivery service was top-notch."
            },
            {
              name: "Jennifer L.",
              rating: 4,
              date: "August 12, 2023",
              title: "Great mattress, slight off-gassing",
              review: "Very comfortable mattress that has helped with my partner's snoring. Only reason for 4 stars is there was some off-gassing smell for the first few days. It dissipated quickly though."
            },
            {
              name: "Robert K.",
              rating: 5,
              date: "July 30, 2023",
              title: "Cooling features actually work",
              review: "As a hot sleeper, I've tried many 'cooling' mattresses with disappointment. This one actually delivers! The gel-infused foam makes a noticeable difference, and I'm no longer waking up sweaty."
            }
          ].map((review, index) => (
            <div key={index} className="bg-white rounded-lg shadow-soft p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold">{review.title}</h3>
                  <div className="flex items-center mt-1">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg 
                          key={star}
                          xmlns="http://www.w3.org/2000/svg" 
                          className={`h-4 w-4 ${star <= review.rating ? 'text-yellow-400' : 'text-neutral-300'}`}
                          viewBox="0 0 20 20" 
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="text-sm text-neutral-500">
                  {review.date}
                </div>
              </div>
              <p className="text-neutral-700 mb-3">{review.review}</p>
              <div className="text-sm text-neutral-500">
                {review.name} - Verified Buyer
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Button variant="outline">Load More Reviews</Button>
        </div>
      </div>
      
      {/* Related Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-serif font-bold mb-8">You Might Also Like</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              id: '2',
              name: 'Serenity Memory Foam Mattress',
              price: 799,
              salePrice: 599,
              image: 'https://images.pexels.com/photos/6782447/pexels-photo-6782447.jpeg',
              category: 'Memory Foam'
            },
            {
              id: '3',
              name: 'Harmony Organic Latex Mattress',
              price: 1499,
              salePrice: 1199,
              image: 'https://images.pexels.com/photos/6782453/pexels-photo-6782453.jpeg',
              category: 'Latex'
            },
            {
              id: '4',
              name: 'Essential Innerspring Mattress',
              price: 599,
              salePrice: undefined,
              image: 'https://images.pexels.com/photos/6782571/pexels-photo-6782571.jpeg',
              category: 'Innerspring'
            },
            {
              id: '5',
              name: 'Cooling Gel Hybrid Mattress',
              price: 999,
              salePrice: 799,
              image: 'https://images.pexels.com/photos/6782567/pexels-photo-6782567.jpeg',
              category: 'Hybrid'
            }
          ].map((relatedProduct) => (
            <div key={relatedProduct.id} className="bg-white rounded-lg shadow-soft overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={relatedProduct.image} 
                  alt={relatedProduct.name} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <div className="text-sm text-primary-600 mb-1">{relatedProduct.category}</div>
                <h3 className="font-medium mb-2 group-hover:text-primary-600 transition-colors">
                  {relatedProduct.name}
                </h3>
                <div className="flex items-center mb-3">
                  {relatedProduct.salePrice ? (
                    <>
                      <span className="font-bold mr-2">${relatedProduct.salePrice}</span>
                      <span className="text-sm text-neutral-500 line-through">${relatedProduct.price}</span>
                    </>
                  ) : (
                    <span className="font-bold">${relatedProduct.price}</span>
                  )}
                </div>
                <Button 
                  href={`/product/${relatedProduct.id}`}
                  variant="outline"
                  fullWidth
                >
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
