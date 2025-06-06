import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Product } from '../../types';
import { FiStar } from 'react-icons/fi';
import Button from './Button';

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const { id, name, images, price, salePrice, rating, reviewCount, shortDescription, isNew, isBestseller } = product;
  
  const discount = salePrice ? Math.round(((price - salePrice) / price) * 100) : 0;
  
  return (
    <motion.div 
      className="card group h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className="relative overflow-hidden">
        <Link to={`/product/${id}`}>
          <img 
            src={images[0]} 
            alt={name} 
            className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {isNew && (
            <span className="bg-secondary-600 text-white text-xs font-bold px-2 py-1 rounded">
              NEW
            </span>
          )}
          {isBestseller && (
            <span className="bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded">
              BESTSELLER
            </span>
          )}
          {salePrice && (
            <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
              {discount}% OFF
            </span>
          )}
        </div>
        
        {/* Quick actions */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link 
            to={`/product/${id}`} 
            className="bg-white text-primary-600 hover:bg-primary-600 hover:text-white font-medium px-4 py-2 rounded-full shadow-md transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
      
      <div className="p-4 flex-grow flex flex-col">
        <div className="flex items-center mb-2">
          <div className="flex items-center text-amber-500">
            <FiStar className="fill-current" />
            <span className="ml-1 text-sm font-medium">{rating.toFixed(1)}</span>
          </div>
          <span className="mx-2 text-neutral-300">|</span>
          <span className="text-sm text-neutral-500">{reviewCount} reviews</span>
        </div>
        
        <Link to={`/product/${id}`} className="mb-2">
          <h3 className="text-lg font-medium text-neutral-800 hover:text-primary-600 transition-colors">
            {name}
          </h3>
        </Link>
        
        <p className="text-neutral-600 text-sm mb-4 flex-grow">{shortDescription}</p>
        
        <div className="mt-auto">
          <div className="flex items-center mb-3">
            {salePrice ? (
              <>
                <span className="text-xl font-bold text-neutral-900">${salePrice}</span>
                <span className="ml-2 text-sm text-neutral-500 line-through">${price}</span>
              </>
            ) : (
              <span className="text-xl font-bold text-neutral-900">${price}</span>
            )}
          </div>
          
          <Button 
            href={`/product/${id}`}
            variant="primary"
            fullWidth
          >
            Shop Now
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
