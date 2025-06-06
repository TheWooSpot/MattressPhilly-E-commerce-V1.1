import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Category } from '../../types';

interface CategoryCardProps {
  category: Category;
  index: number;
}

const CategoryCard = ({ category, index }: CategoryCardProps) => {
  const { name, description, image, slug } = category;
  
  return (
    <motion.div 
      className="relative group overflow-hidden rounded-lg shadow-md h-64"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
      
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
      />
      
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
        <p className="text-white/80 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{description}</p>
        <Link 
          to={`/products/${slug}`} 
          className="inline-block bg-white text-primary-600 hover:bg-primary-600 hover:text-white text-sm font-medium px-4 py-2 rounded-full transition-colors"
        >
          Shop Now
        </Link>
      </div>
    </motion.div>
  );
};

export default CategoryCard;
