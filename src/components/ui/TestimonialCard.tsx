import { FiStar } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { TestimonialItem } from '../../types';

interface TestimonialCardProps {
  testimonial: TestimonialItem;
  index: number;
}

const TestimonialCard = ({ testimonial, index }: TestimonialCardProps) => {
  const { name, location, rating, comment, productPurchased } = testimonial;
  
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-soft p-6 h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className="mb-4">
        {/* Rating stars */}
        <div className="flex text-amber-500 mb-2">
          {[...Array(5)].map((_, i) => (
            <FiStar 
              key={i} 
              className={`${i < rating ? 'fill-current' : ''} mr-1`} 
            />
          ))}
        </div>
        
        {/* Product purchased */}
        {productPurchased && (
          <div className="text-sm text-neutral-500 mb-2">
            Purchased: <span className="font-medium text-neutral-700">{productPurchased}</span>
          </div>
        )}
      </div>
      
      {/* Testimonial content */}
      <div className="flex-grow">
        <p className="text-neutral-700 italic mb-6">"{comment}"</p>
      </div>
      
      {/* Customer info */}
      <div className="mt-auto">
        <p className="font-medium text-neutral-900">{name}</p>
        <p className="text-sm text-neutral-500">{location}</p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
