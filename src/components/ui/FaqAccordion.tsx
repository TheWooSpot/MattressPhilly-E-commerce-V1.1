import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { FaqItem } from '../../types';

interface FaqAccordionProps {
  faqs: FaqItem[];
}

const FaqAccordion = ({ faqs }: FaqAccordionProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div 
          key={index} 
          className="border border-neutral-200 rounded-lg overflow-hidden"
        >
          <button
            className={`w-full flex justify-between items-center p-5 text-left font-medium transition-colors ${
              activeIndex === index ? 'bg-primary-50 text-primary-700' : 'bg-white text-neutral-800 hover:bg-neutral-50'
            }`}
            onClick={() => toggleAccordion(index)}
            aria-expanded={activeIndex === index}
          >
            <span>{faq.question}</span>
            {activeIndex === index ? (
              <FiChevronUp className="flex-shrink-0 ml-2" />
            ) : (
              <FiChevronDown className="flex-shrink-0 ml-2" />
            )}
          </button>
          
          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-5 bg-white border-t border-neutral-200">
                  <p className="text-neutral-700">{faq.answer}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;
