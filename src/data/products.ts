import { Product } from '../types';

export const products: Product[] = [
  {
    id: "memory-foam-cloud",
    name: "Cloud Memory Foam Mattress",
    category: "memory-foam",
    type: "Memory Foam",
    price: 899,
    salePrice: 699,
    description: "Experience the perfect balance of comfort and support with our Cloud Memory Foam Mattress. This premium mattress features multiple layers of high-density memory foam that contours to your body, relieving pressure points and promoting proper spinal alignment. The breathable, cooling gel-infused top layer helps regulate temperature for a cooler night's sleep, while the supportive base layer ensures durability and prevents sagging. Ideal for side and back sleepers, this mattress offers a medium-firm feel that's just right for most sleepers.",
    shortDescription: "Premium memory foam with cooling gel technology for the perfect night's sleep.",
    features: [
      "Cooling gel-infused memory foam",
      "Medium-firm support (6/10 firmness)",
      "Motion isolation technology",
      "Breathable, hypoallergenic cover",
      "CertiPUR-US® certified foams",
      "Removable, washable cover",
      "Edge support reinforcement"
    ],
    specifications: {
      "Height": "12 inches",
      "Cover Material": "Tencel™ blend fabric",
      "Comfort Layer": "2\" Cooling gel memory foam",
      "Transition Layer": "2\" Responsive comfort foam",
      "Support Core": "8\" High-density base foam",
      "Certifications": "CertiPUR-US®, OEKO-TEX®",
      "Made In": "USA"
    },
    images: [
      "https://images.pexels.com/photos/6585598/pexels-photo-6585598.jpeg",
      "https://images.pexels.com/photos/6585750/pexels-photo-6585750.jpeg",
      "https://images.pexels.com/photos/6782567/pexels-photo-6782567.jpeg"
    ],
    rating: 4.7,
    reviewCount: 1243,
    inStock: true,
    isBestseller: true,
    sizes: {
      twin: 699,
      twinXL: 749,
      full: 849,
      queen: 899,
      king: 1199,
      calKing: 1199
    },
    firmness: 6,
    materials: ["Memory Foam", "Cooling Gel", "High-Density Support Foam"],
    warranty: "15 years limited",
    trialPeriod: 100
  },
  {
    id: "luxury-hybrid",
    name: "Luxury Hybrid Mattress",
    category: "hybrid",
    type: "Hybrid",
    price: 1299,
    salePrice: 999,
    description: "Our Luxury Hybrid Mattress combines the best of both worlds with premium memory foam and individually wrapped coils. The plush Euro-top provides immediate cushioning comfort, while five zones of pocketed coils deliver targeted support where you need it most. The perimeter is reinforced with our EdgeShield™ technology, maximizing the usable sleep surface and preventing edge sagging. Multiple layers of cooling, copper-infused memory foam help dissipate heat and create a naturally antimicrobial sleep environment. This mattress is perfect for couples and combination sleepers who want responsive support with the plush comfort of foam.",
    shortDescription: "The perfect combination of supportive coils and contouring memory foam for luxurious sleep.",
    features: [
      "Individually wrapped pocket coils",
      "Copper-infused memory foam",
      "5-zone targeted support system",
      "EdgeShield™ reinforced perimeter",
      "Euro pillow top with quilted cover",
      "Minimal motion transfer",
      "Compatible with adjustable bases"
    ],
    specifications: {
      "Height": "14 inches",
      "Cover Material": "Organic cotton and wool blend",
      "Comfort Layer": "3\" Copper-infused memory foam",
      "Transition Layer": "2\" Responsive latex alternative",
      "Support Core": "8\" Individually wrapped coils (1,024 count in Queen)",
      "Edge Support": "EdgeShield™ reinforced perimeter",
      "Certifications": "CertiPUR-US®, GREENGUARD Gold",
      "Made In": "USA"
    },
    images: [
      "https://images.pexels.com/photos/6782447/pexels-photo-6782447.jpeg",
      "https://images.pexels.com/photos/6782581/pexels-photo-6782581.jpeg",
      "https://images.pexels.com/photos/6782426/pexels-photo-6782426.jpeg"
    ],
    rating: 4.9,
    reviewCount: 856,
    inStock: true,
    isNew: true,
    sizes: {
      twin: 999,
      twinXL: 1049,
      full: 1149,
      queen: 1299,
      king: 1599,
      calKing: 1599
    },
    firmness: 7,
    materials: ["Pocketed Coils", "Memory Foam", "Copper-Infused Foam", "Organic Cotton"],
    warranty: "20 years limited",
    trialPeriod: 120
  },
  {
    id: "essential-spring",
    name: "Essential Spring Mattress",
    category: "innerspring",
    type: "Innerspring",
    price: 599,
    salePrice: 499,
    description: "The Essential Spring Mattress offers traditional innerspring support at an affordable price without compromising on quality. Featuring a Bonnell coil system topped with layers of comfortable padding and quilted foam, this mattress provides the familiar, responsive feel many sleepers prefer. The breathable design promotes airflow throughout the mattress, helping to keep you cool throughout the night. A quilted damask cover adds a touch of luxury to this budget-friendly option. Perfect for guest rooms, growing children, or anyone who prefers a traditional mattress feel with a medium-firm support level.",
    shortDescription: "Traditional innerspring support at an affordable price with quality construction.",
    features: [
      "Bonnell coil support system",
      "Quilted foam comfort layer",
      "Breathable design for cooling",
      "Damask quilted cover",
      "Medium-firm feel",
      "Durable border rod for edge support",
      "Budget-friendly quality"
    ],
    specifications: {
      "Height": "10 inches",
      "Cover Material": "Quilted damask fabric",
      "Comfort Layer": "1.5\" Quilted foam",
      "Support Core": "8\" Bonnell coil system (460 coils in Queen)",
      "Edge Support": "Heavy gauge border rod",
      "Certifications": "CertiPUR-US®",
      "Made In": "USA"
    },
    images: [
      "https://images.pexels.com/photos/6782445/pexels-photo-6782445.jpeg",
      "https://images.pexels.com/photos/6782443/pexels-photo-6782443.jpeg",
      "https://images.pexels.com/photos/6782438/pexels-photo-6782438.jpeg"
    ],
    rating: 4.3,
    reviewCount: 512,
    inStock: true,
    sizes: {
      twin: 499,
      twinXL: 549,
      full: 599,
      queen: 649,
      king: 849,
      calKing: 849
    },
    firmness: 6,
    materials: ["Bonnell Coils", "Quilted Foam", "Damask Fabric"],
    warranty: "10 years limited",
    trialPeriod: 60
  },
  {
    id: "premium-latex",
    name: "Natural Latex Luxury Mattress",
    category: "latex",
    type: "Latex",
    price: 1599,
    salePrice: 1399,
    description: "Our Natural Latex Luxury Mattress is crafted for those seeking an eco-friendly, premium sleep experience. Made with 100% natural Talalay latex harvested from sustainable rubber trees, this mattress offers exceptional pressure relief with a uniquely responsive feel that's different from memory foam. The organic cotton and wool cover is naturally flame-retardant without chemicals and helps regulate temperature year-round. The latex construction provides natural resistance to dust mites and mold, making it ideal for allergy sufferers. With customizable firmness layers, this mattress can be configured to your exact preference, from plush to firm.",
    shortDescription: "Eco-friendly natural latex with customizable firmness for a luxurious, responsive sleep experience.",
    features: [
      "100% natural Talalay latex",
      "Organic cotton and wool cover",
      "Customizable firmness layers",
      "Naturally cooling and breathable",
      "Hypoallergenic and antimicrobial",
      "Exceptional durability",
      "Minimal motion transfer"
    ],
    specifications: {
      "Height": "12 inches",
      "Cover Material": "GOTS certified organic cotton and wool",
      "Comfort Layer": "3\" Natural Talalay latex (customizable ILD)",
      "Support Core": "6\" Natural Dunlop latex core",
      "Base Layer": "3\" High-density support latex",
      "Certifications": "GOLS, GOTS, OEKO-TEX®, eco-INSTITUT",
      "Made In": "USA with imported materials"
    },
    images: [
      "https://images.pexels.com/photos/6782453/pexels-photo-6782453.jpeg",
      "https://images.pexels.com/photos/6782455/pexels-photo-6782455.jpeg",
      "https://images.pexels.com/photos/6782456/pexels-photo-6782456.jpeg"
    ],
    rating: 4.8,
    reviewCount: 324,
    inStock: true,
    sizes: {
      twin: 1399,
      twinXL: 1499,
      full: 1699,
      queen: 1899,
      king: 2299,
      calKing: 2299
    },
    firmness: 5,
    materials: ["Natural Talalay Latex", "Natural Dunlop Latex", "Organic Cotton", "Organic Wool"],
    warranty: "25 years limited",
    trialPeriod: 180
  },
  {
    id: "cooling-gel",
    name: "Arctic Gel Cooling Mattress",
    category: "memory-foam",
    type: "Cooling Memory Foam",
    price: 1099,
    salePrice: 899,
    description: "The Arctic Gel Cooling Mattress is specifically engineered for hot sleepers who need serious temperature regulation. This advanced mattress features multiple cooling technologies, including our proprietary Arctic Gel memory foam that actively draws heat away from the body. The breathable, phase-change cover material stays cool to the touch all night long. Beneath the cooling layers, responsive transition foam and a supportive base ensure proper spinal alignment and pressure relief. This medium-firm mattress is perfect for hot sleepers who love the contouring feel of memory foam but need enhanced cooling properties for comfortable sleep.",
    shortDescription: "Advanced cooling technology with phase-change materials for hot sleepers.",
    features: [
      "Arctic Gel cooling technology",
      "Phase-change cover material",
      "Open-cell foam structure for airflow",
      "Medium-firm support level",
      "Moisture-wicking cover",
      "Minimal off-gassing",
      "Compatible with all bed frames"
    ],
    specifications: {
      "Height": "12 inches",
      "Cover Material": "Phase-change cooling fabric",
      "Comfort Layer": "2\" Arctic Gel memory foam",
      "Transition Layer": "2\" Open-cell responsive foam",
      "Support Core": "8\" High-density base foam",
      "Certifications": "CertiPUR-US®",
      "Made In": "USA"
    },
    images: [
      "https://images.pexels.com/photos/6782571/pexels-photo-6782571.jpeg",
      "https://images.pexels.com/photos/6782572/pexels-photo-6782572.jpeg",
      "https://images.pexels.com/photos/6782573/pexels-photo-6782573.jpeg"
    ],
    rating: 4.6,
    reviewCount: 487,
    inStock: true,
    isNew: true,
    sizes: {
      twin: 899,
      twinXL: 949,
      full: 1049,
      queen: 1099,
      king: 1399,
      calKing: 1399
    },
    firmness: 6,
    materials: ["Arctic Gel Memory Foam", "Open-Cell Foam", "Phase-Change Fabric"],
    warranty: "15 years limited",
    trialPeriod: 100
  },
  {
    id: "adjustable-air",
    name: "CustomAir Adjustable Mattress",
    category: "air-bed",
    type: "Adjustable Air",
    price: 1899,
    salePrice: 1699,
    description: "The CustomAir Adjustable Mattress offers personalized comfort with dual-sided adjustability, perfect for couples with different firmness preferences. Using our whisper-quiet air pump technology, each sleeper can precisely dial in their preferred firmness level from ultra-plush to extra-firm with 50 incremental settings. The mattress combines air chamber technology with layers of pressure-relieving memory foam and a responsive latex-alternative top layer. The moisture-wicking, removable cover is easily washable for a fresh sleep surface. Built-in sleep sensors can track your sleep quality and make automatic micro-adjustments throughout the night for optimal support.",
    shortDescription: "Dual-sided adjustable firmness with 50 comfort settings and sleep tracking technology.",
    features: [
      "Dual-zone adjustability (50 settings)",
      "Whisper-quiet pump technology",
      "Built-in sleep tracking sensors",
      "Responsive latex-alternative top layer",
      "Memory foam comfort layer",
      "Removable, washable cover",
      "Smartphone app control"
    ],
    specifications: {
      "Height": "13 inches",
      "Cover Material": "Moisture-wicking performance fabric",
      "Comfort Layer": "2\" Latex-alternative foam",
      "Support Layer": "3\" Gel memory foam",
      "Support Core": "8\" Dual air chambers with reinforced perimeter",
      "Technology": "Bluetooth connectivity, sleep sensors",
      "Certifications": "CertiPUR-US®, UL Certified",
      "Made In": "USA"
    },
    images: [
      "https://images.pexels.com/photos/6782574/pexels-photo-6782574.jpeg",
      "https://images.pexels.com/photos/6782575/pexels-photo-6782575.jpeg",
      "https://images.pexels.com/photos/6782576/pexels-photo-6782576.jpeg"
    ],
    rating: 4.7,
    reviewCount: 213,
    inStock: true,
    sizes: {
      twin: 0, // Not available
      twinXL: 1499,
      full: 1699,
      queen: 1899,
      king: 2399,
      calKing: 2399
    },
    firmness: 1, // Adjustable from 1-10
    materials: ["Air Chambers", "Memory Foam", "Latex Alternative", "Performance Fabric"],
    warranty: "25 years limited",
    trialPeriod: 120
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'all') return products;
  return products.filter(product => product.category === category);
};

export const getRelatedProducts = (currentProductId: string, limit: number = 4): Product[] => {
  const currentProduct = getProductById(currentProductId);
  if (!currentProduct) return [];
  
  return products
    .filter(product => product.id !== currentProductId && product.category === currentProduct.category)
    .slice(0, limit);
};

export const getFeaturedProducts = (limit: number = 3): Product[] => {
  return products
    .filter(product => product.isBestseller || product.isNew)
    .slice(0, limit);
};

export const getNewArrivals = (limit: number = 4): Product[] => {
  return products
    .filter(product => product.isNew)
    .slice(0, limit);
};

export const getBestSellers = (limit: number = 4): Product[] => {
  return products
    .filter(product => product.isBestseller)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);
};
