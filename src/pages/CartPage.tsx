import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiTrash2, FiPlus, FiMinus, FiArrowLeft, FiShoppingCart } from 'react-icons/fi';
import Button from '../components/ui/Button';
import { useCartStore } from '../store/cartStore';

const CartPage = () => {
  const { items, removeItem, updateQuantity, getTotalItems, getTotalPrice } = useCartStore();
  
  useEffect(() => {
    document.title = 'Your Cart | Mattress Philly';
  }, []);
  
  const formatSize = (size: string) => {
    return size === 'twinXL' ? 'Twin XL' : 
           size === 'calKing' ? 'Cal King' : 
           size.charAt(0).toUpperCase() + size.slice(1);
  };
  
  const handleQuantityChange = (productId: string, size: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    updateQuantity(productId, size, newQuantity);
  };
  
  if (items.length === 0) {
    return (
      <div className="container-custom py-20 min-h-[60vh] flex flex-col items-center justify-center">
        <div className="text-center max-w-md">
          <div className="text-neutral-300 mb-6">
            <FiShoppingCart size={64} />
          </div>
          <h1 className="text-2xl font-serif font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-neutral-600 mb-8">
            Looks like you haven't added any mattresses to your cart yet. Explore our collection to find your perfect sleep solution.
          </p>
          <Button href="/products" variant="primary">
            Browse Mattresses
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container-custom py-20">
      <h1 className="text-3xl font-serif font-bold mb-8">Your Cart ({getTotalItems()} items)</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-soft overflow-hidden">
            {items.map((item, index) => {
              const { product, quantity, size } = item;
              const itemPrice = (product.salePrice || product.price) + product.sizes[size.toLowerCase().replace(' ', '') as keyof typeof product.sizes];
              const itemTotal = itemPrice * quantity;
              
              return (
                <motion.div 
                  key={`${product.id}-${size}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`p-6 flex flex-col sm:flex-row gap-4 ${
                    index < items.length - 1 ? 'border-b border-neutral-200' : ''
                  }`}
                >
                  {/* Product Image */}
                  <div className="w-full sm:w-24 h-24 flex-shrink-0">
                    <img 
                      src={product.images[0]} 
                      alt={product.name} 
                      className="w-full h-full object-cover object-center rounded-md"
                    />
                  </div>
                  
                  {/* Product Details */}
                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:justify-between">
                      <div>
                        <Link 
                          to={`/product/${product.id}`}
                          className="font-medium text-lg hover:text-primary-600 transition-colors"
                        >
                          {product.name}
                        </Link>
                        <p className="text-neutral-500">Size: {formatSize(size)}</p>
                      </div>
                      <div className="mt-2 sm:mt-0 text-right">
                        <p className="font-medium">${itemTotal.toFixed(2)}</p>
                        <p className="text-sm text-neutral-500">${itemPrice.toFixed(2)} each</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4">
                      {/* Quantity Controls */}
                      <div className="flex items-center">
                        <button 
                          onClick={() => handleQuantityChange(product.id, size, quantity - 1)}
                          className="border border-neutral-300 rounded-l-md p-1 hover:bg-neutral-100"
                          disabled={quantity <= 1}
                        >
                          <FiMinus size={16} />
                        </button>
                        <input
                          type="number"
                          min="1"
                          value={quantity}
                          onChange={(e) => handleQuantityChange(product.id, size, parseInt(e.target.value) || 1)}
                          className="w-12 border-y border-neutral-300 p-1 text-center text-sm"
                        />
                        <button 
                          onClick={() => handleQuantityChange(product.id, size, quantity + 1)}
                          className="border border-neutral-300 rounded-r-md p-1 hover:bg-neutral-100"
                        >
                          <FiPlus size={16} />
                        </button>
                      </div>
                      
                      {/* Remove Button */}
                      <button 
                        onClick={() => removeItem(product.id, size)}
                        className="text-neutral-500 hover:text-red-600 transition-colors flex items-center"
                      >
                        <FiTrash2 size={16} className="mr-1" />
                        <span className="text-sm">Remove</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          <div className="mt-6">
            <Link 
              to="/products" 
              className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors"
            >
              <FiArrowLeft className="mr-2" />
              Continue Shopping
            </Link>
          </div>
        </div>
        
        {/* Order Summary */}
        <div>
          <div className="bg-white rounded-lg shadow-soft p-6">
            <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-neutral-600">Subtotal</span>
                <span className="font-medium">${getTotalPrice().toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-600">Shipping</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-600">Tax</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="border-t border-neutral-200 pt-4 flex justify-between">
                <span className="font-semibold">Total</span>
                <span className="font-bold text-xl">${getTotalPrice().toFixed(2)}</span>
              </div>
            </div>
            
            <Button 
              href="/checkout"
              variant="primary"
              size="lg"
              fullWidth
            >
              Proceed to Checkout
            </Button>
            
            <div className="mt-6 space-y-4">
              <div className="flex items-start">
                <div className="text-primary-600 mr-3">
                  <FiTruck />
                </div>
                <div>
                  <h4 className="font-medium text-sm">Free White Glove Delivery</h4>
                  <p className="text-xs text-neutral-500">On all mattress orders</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-primary-600 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-sm">100-Night Sleep Trial</h4>
                  <p className="text-xs text-neutral-500">Try it at home risk-free</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 bg-white rounded-lg shadow-soft p-6">
            <h3 className="font-medium mb-4">Have a Promo Code?</h3>
            <div className="flex">
              <input
                type="text"
                placeholder="Enter code"
                className="flex-grow border border-neutral-300 rounded-l-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button className="bg-neutral-800 text-white px-4 py-2 rounded-r-md hover:bg-neutral-700 transition-colors">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
