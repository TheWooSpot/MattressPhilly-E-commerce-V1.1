import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight, FiCreditCard, FiLock } from 'react-icons/fi';
import Button from '../components/ui/Button';
import { useCartStore } from '../store/cartStore';

const CheckoutPage = () => {
  const { items, getTotalPrice } = useCartStore();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Contact Information
    email: '',
    phone: '',
    
    // Shipping Information
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: '',
    state: '',
    zipCode: '',
    
    // Payment Information
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    
    // Additional
    saveInfo: true,
    sameAsBilling: true,
  });
  
  useEffect(() => {
    document.title = 'Checkout | Mattress Philly';
    
    // Redirect to cart if cart is empty
    if (items.length === 0) {
      window.location.href = '/cart';
    }
  }, [items]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };
  
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const nextStep = () => {
    setStep(step + 1);
    window.scrollTo(0, 0);
  };
  
  const prevStep = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };
  
  const formatSize = (size: string) => {
    return size === 'twinXL' ? 'Twin XL' : 
           size === 'calKing' ? 'Cal King' : 
           size.charAt(0).toUpperCase() + size.slice(1);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Process order
    alert('Order placed successfully! This is a demo, no actual order was processed.');
    // In a real app, you would submit the order to your backend
  };
  
  return (
    <div className="container-custom py-20">
      {/* Checkout Steps */}
      <div className="mb-12">
        <div className="flex items-center justify-center">
          <div className={`flex items-center ${step >= 1 ? 'text-primary-600' : 'text-neutral-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-primary-600 text-white' : 'bg-neutral-200 text-neutral-600'}`}>
              1
            </div>
            <span className="ml-2 font-medium">Information</span>
          </div>
          <div className={`w-12 h-1 mx-2 ${step >= 2 ? 'bg-primary-600' : 'bg-neutral-200'}`}></div>
          <div className={`flex items-center ${step >= 2 ? 'text-primary-600' : 'text-neutral-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-primary-600 text-white' : 'bg-neutral-200 text-neutral-600'}`}>
              2
            </div>
            <span className="ml-2 font-medium">Shipping</span>
          </div>
          <div className={`w-12 h-1 mx-2 ${step >= 3 ? 'bg-primary-600' : 'bg-neutral-200'}`}></div>
          <div className={`flex items-center ${step >= 3 ? 'text-primary-600' : 'text-neutral-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-primary-600 text-white' : 'bg-neutral-200 text-neutral-600'}`}>
              3
            </div>
            <span className="ml-2 font-medium">Payment</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Checkout Form */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-soft p-6">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Contact Information */}
              {step === 1 && (
                <div>
                  <h2 className="text-2xl font-serif font-bold mb-6">Contact Information</h2>
                  
                  <div className="space-y-4 mb-8">
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
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required
                      />
                      <p className="text-sm text-neutral-500 mt-1">
                        For delivery updates and questions about your order
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between mt-8">
                    <Link to="/cart" className="text-primary-600 hover:text-primary-700 transition-colors">
                      Return to cart
                    </Link>
                    <Button 
                      onClick={nextStep}
                      variant="primary"
                    >
                      Continue to Shipping
                      <FiChevronRight className="ml-2" />
                    </Button>
                  </div>
                </div>
              )}
              
              {/* Step 2: Shipping Information */}
              {step === 2 && (
                <div>
                  <h2 className="text-2xl font-serif font-bold mb-6">Shipping Information</h2>
                  
                  <div className="space-y-4 mb-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-neutral-700 mb-1">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-neutral-700 mb-1">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-neutral-700 mb-1">
                        Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="apartment" className="block text-sm font-medium text-neutral-700 mb-1">
                        Apartment, suite, etc. (optional)
                      </label>
                      <input
                        type="text"
                        id="apartment"
                        name="apartment"
                        value={formData.apartment}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label htmlFor="city" className="block text-sm font-medium text-neutral-700 mb-1">
                          City
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="state" className="block text-sm font-medium text-neutral-700 mb-1">
                          State
                        </label>
                        <select
                          id="state"
                          name="state"
                          value={formData.state}
                          onChange={handleSelectChange}
                          className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          required
                        >
                          <option value="">Select State</option>
                          <option value="PA">Pennsylvania</option>
                          <option value="NJ">New Jersey</option>
                          <option value="DE">Delaware</option>
                          <option value="NY">New York</option>
                          <option value="MD">Maryland</option>
                          {/* Add more states as needed */}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="zipCode" className="block text-sm font-medium text-neutral-700 mb-1">
                          ZIP Code
                        </label>
                        <input
                          type="text"
                          id="zipCode"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 mb-8">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="saveInfo"
                        checked={formData.saveInfo}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <span className="text-sm text-neutral-700">Save this information for next time</span>
                    </label>
                  </div>
                  
                  <div className="flex justify-between mt-8">
                    <button 
                      type="button"
                      onClick={prevStep}
                      className="text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      Return to information
                    </button>
                    <Button 
                      onClick={nextStep}
                      variant="primary"
                    >
                      Continue to Payment
                      <FiChevronRight className="ml-2" />
                    </Button>
                  </div>
                </div>
              )}
              
              {/* Step 3: Payment Information */}
              {step === 3 && (
                <div>
                  <h2 className="text-2xl font-serif font-bold mb-6">Payment Information</h2>
                  
                  <div className="mb-6 p-4 bg-neutral-50 rounded-md border border-neutral-200 flex items-center">
                    <FiLock className="text-neutral-500 mr-3" />
                    <p className="text-sm text-neutral-600">
                      Your payment information is encrypted and secure. We never store your full credit card details.
                    </p>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <div>
                      <label htmlFor="cardName" className="block text-sm font-medium text-neutral-700 mb-1">
                        Name on Card
                      </label>
                      <input
                        type="text"
                        id="cardName"
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="cardNumber" className="block text-sm font-medium text-neutral-700 mb-1">
                        Card Number
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="cardNumber"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleChange}
                          placeholder="1234 5678 9012 3456"
                          className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          required
                        />
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                          <FiCreditCard className="text-neutral-400" />
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="expiryDate" className="block text-sm font-medium text-neutral-700 mb-1">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          id="expiryDate"
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={handleChange}
                          placeholder="MM/YY"
                          className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="cvv" className="block text-sm font-medium text-neutral-700 mb-1">
                          CVV
                        </label>
                        <input
                          type="text"
                          id="cvv"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleChange}
                          placeholder="123"
                          className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 mb-8">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="sameAsBilling"
                        checked={formData.sameAsBilling}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <span className="text-sm text-neutral-700">Billing address same as shipping address</span>
                    </label>
                  </div>
                  
                  <div className="flex justify-between mt-8">
                    <button 
                      type="button"
                      onClick={prevStep}
                      className="text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      Return to shipping
                    </button>
                    <Button 
                      type="submit"
                      variant="primary"
                      size="lg"
                    >
                      Complete Order
                    </Button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
        
        {/* Order Summary */}
        <div>
          <div className="bg-white rounded-lg shadow-soft p-6">
            <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              {items.map((item) => {
                const { product, quantity, size } = item;
                const itemPrice = (product.salePrice || product.price) + product.sizes[size.toLowerCase().replace(' ', '') as keyof typeof product.sizes];
                const itemTotal = itemPrice * quantity;
                
                return (
                  <div key={`${product.id}-${size}`} className="flex items-start">
                    <div className="relative">
                      <img 
                        src={product.images[0]} 
                        alt={product.name} 
                        className="w-16 h-16 object-cover object-center rounded-md"
                      />
                      <span className="absolute -top-2 -right-2 bg-neutral-800 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                        {quantity}
                      </span>
                    </div>
                    <div className="ml-4 flex-grow">
                      <p className="font-medium">{product.name}</p>
                      <p className="text-sm text-neutral-500">Size: {formatSize(size)}</p>
                    </div>
                    <div className="ml-4 text-right">
                      <p className="font-medium">${itemTotal.toFixed(2)}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="border-t border-neutral-200 pt-4 space-y-4 mb-6">
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
                <span>${(getTotalPrice() * 0.06).toFixed(2)}</span>
              </div>
              <div className="border-t border-neutral-200 pt-4 flex justify-between">
                <span className="font-semibold">Total</span>
                <span className="font-bold text-xl">${(getTotalPrice() * 1.06).toFixed(2)}</span>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-neutral-50 rounded-md border border-neutral-200">
              <h3 className="font-medium mb-2">Delivery Information</h3>
              <p className="text-sm text-neutral-600 mb-2">
                Your order will be delivered within 3-7 business days. Our delivery team will contact you to schedule a convenient delivery window.
              </p>
              <p className="text-sm text-neutral-600">
                White glove delivery includes in-home setup and old mattress removal at no extra charge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
