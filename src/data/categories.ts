import { Category } from '../types';

export const categories: Category[] = [
  {
    id: "memory-foam",
    name: "Memory Foam Mattresses",
    description: "Contour-hugging comfort that relieves pressure points and promotes proper spinal alignment.",
    image: "https://images.pexels.com/photos/6782567/pexels-photo-6782567.jpeg",
    slug: "memory-foam"
  },
  {
    id: "hybrid",
    name: "Hybrid Mattresses",
    description: "The perfect balance of supportive coils and contouring foam layers for the best of both worlds.",
    image: "https://images.pexels.com/photos/6782447/pexels-photo-6782447.jpeg",
    slug: "hybrid"
  },
  {
    id: "innerspring",
    name: "Innerspring Mattresses",
    description: "Traditional coil support with a responsive feel and excellent breathability.",
    image: "https://images.pexels.com/photos/6782445/pexels-photo-6782445.jpeg",
    slug: "innerspring"
  },
  {
    id: "latex",
    name: "Latex Mattresses",
    description: "Natural, eco-friendly mattresses with responsive support and excellent durability.",
    image: "https://images.pexels.com/photos/6782453/pexels-photo-6782453.jpeg",
    slug: "latex"
  },
  {
    id: "air-bed",
    name: "Adjustable Air Beds",
    description: "Customizable firmness settings for personalized comfort that can change with your needs.",
    image: "https://images.pexels.com/photos/6782574/pexels-photo-6782574.jpeg",
    slug: "air-bed"
  },
  {
    id: "accessories",
    name: "Bedding Accessories",
    description: "Pillows, protectors, sheets, and more to complete your perfect sleep environment.",
    image: "https://images.pexels.com/photos/6316066/pexels-photo-6316066.jpeg",
    slug: "accessories"
  }
];

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(category => category.slug === slug);
};
