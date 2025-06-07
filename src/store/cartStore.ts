import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Product {
  id: string;
  name: string;
  images: string[];
  price: number;
  salePrice?: number;
  sizes: Record<string, number>;
}

interface CartItem {
  product: Product;
  quantity: number;
  size: string;
}

interface CartStore {
  items: CartItem[];
  addItem: (product: Product, size: string, quantity: number) => void;
  removeItem: (productId: string, size: string) => void;
  updateQuantity: (productId: string, size: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (product, size, quantity) => {
        set((state) => {
          // Check if item already exists in cart
          const existingItemIndex = state.items.findIndex(
            item => item.product.id === product.id && item.size === size
          );
          
          if (existingItemIndex >= 0) {
            // Update quantity if item exists
            const updatedItems = [...state.items];
            updatedItems[existingItemIndex].quantity += quantity;
            return { items: updatedItems };
          } else {
            // Add new item if it doesn't exist
            return { items: [...state.items, { product, size, quantity }] };
          }
        });
      },
      
      removeItem: (productId, size) => {
        set((state) => ({
          items: state.items.filter(
            item => !(item.product.id === productId && item.size === size)
          )
        }));
      },
      
      updateQuantity: (productId, size, quantity) => {
        set((state) => ({
          items: state.items.map(item => 
            item.product.id === productId && item.size === size
              ? { ...item, quantity }
              : item
          )
        }));
      },
      
      clearCart: () => {
        set({ items: [] });
      },
      
      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },
      
      getTotalPrice: () => {
        return get().items.reduce((total, item) => {
          const itemPrice = (item.product.salePrice || item.product.price) + 
                            item.product.sizes[item.size.toLowerCase().replace(' ', '') as keyof typeof item.product.sizes];
          return total + (itemPrice * item.quantity);
        }, 0);
      }
    }),
    {
      name: 'mattress-philly-cart',
    }
  )
);
