import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import Swal from 'sweetalert2';
import { useAuth } from './AuthContext';
import { getCartFn, addToCartFn, removeFromCartFn, updateCartQuantityFn, getWishlistFn, addToWishlistFn, removeFromWishlistFn } from '@/functions/auth';

export interface CartItem {
  id: string;
  name: string;
  brand: string;
  price: number;
  img: string;
  qty: number;
}

export interface WishlistItem {
  id: string;
  name: string;
  brand: string;
  cat: string;
  price: number;
  old: number;
  rating: number;
  img: string;
}

interface CartWishlistContextType {
  cart: CartItem[];
  wishlist: WishlistItem[];
  addToCart: (product: any, qty?: number) => void;
  removeFromCart: (productId: string) => void;
  updateCartQty: (productId: string, qty: number) => void;
  clearCart: () => void;
  toggleWishlist: (product: any) => void;
  isInWishlist: (productId: string) => boolean;
  moveToCart: (product: any) => void;
}

const CartWishlistContext = createContext<CartWishlistContextType | undefined>(undefined);

export function CartWishlistProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const { user } = useAuth();

  // Load cart and wishlist from server or localStorage on mount
  useEffect(() => {
    if (user) {
      loadCartAndWishlist();
    } else {
      // Load from localStorage if not logged in
      try {
        const storedCart = localStorage.getItem('fastcomputers_cart');
        const storedWishlist = localStorage.getItem('fastcomputers_wishlist');
        
        if (storedCart) setCart(JSON.parse(storedCart));
        if (storedWishlist) setWishlist(JSON.parse(storedWishlist));
      } catch (e) {
        console.error('Failed to load cart/wishlist from localStorage:', e);
      }
      setIsLoaded(true);
    }
  }, [user]);

  const loadCartAndWishlist = async () => {
    if (!user) return;
    
    try {
      const [cartResult, wishlistResult] = await Promise.all([
        getCartFn({ data: { userId: user.id } }),
        getWishlistFn({ data: { userId: user.id } }),
      ]);
      
      // Convert server cart format to local format
      const localCart = cartResult.cart.map((item: any) => ({
        id: item.productId,
        name: '', // Will be populated when product data is loaded
        brand: '',
        price: 0,
        img: '',
        qty: item.quantity,
      }));
      
      setCart(localCart);
      setWishlist(wishlistResult.wishlist.map((id: string) => ({
        id,
        name: '',
        brand: '',
        cat: '',
        price: 0,
        old: 0,
        rating: 0,
        img: '',
      })));
    } catch (error) {
      console.error('Failed to load cart/wishlist:', error);
    } finally {
      setIsLoaded(true);
    }
  };

  const addToCart = async (product: any, qty: number = 1) => {
    const productId = product.id || product._id || product.customId;
    if (!productId) return;

    if (user) {
      // Use server function if logged in
      try {
        await addToCartFn({ data: { userId: user.id, productId, quantity: qty } });
        await loadCartAndWishlist();
        Swal.fire({
          title: "Added to Cart!",
          text: `"${product.name}" has been added to your cart.`,
          icon: "success",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 2000,
          background: "#1E1E1E",
          color: "#FFF",
        });
      } catch (error) {
        console.error('Failed to add to cart:', error);
        Swal.fire({
          title: "Error",
          text: "Failed to add to cart. Please try again.",
          icon: "error",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 2000,
          background: "#1E1E1E",
          color: "#FFF",
        });
      }
    } else {
      // Use localStorage if not logged in
      setCart((prevCart) => {
        const existingItem = prevCart.find((item) => item.id === productId);
        if (existingItem) {
          Swal.fire({
            title: "Added to Cart!",
            text: `Increased quantity of "${product.name}" in your cart.`,
            icon: "success",
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2000,
            background: "#1E1E1E",
            color: "#FFF",
          });
          return prevCart.map((item) =>
            item.id === productId ? { ...item, qty: item.qty + qty } : item
          );
        }

        Swal.fire({
          title: "Added to Cart!",
          text: `"${product.name}" has been added to your cart.`,
          icon: "success",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 2000,
          background: "#1E1E1E",
          color: "#FFF",
        });

        return [
          ...prevCart,
          {
            id: productId,
            name: product.name,
            brand: product.brand || '',
            price: Number(product.price),
            img: product.img,
            qty,
          },
        ];
      });
    }
  };

  const removeFromCart = async (productId: string) => {
    if (user) {
      // Use server function if logged in
      try {
        await removeFromCartFn({ data: { userId: user.id, productId } });
        await loadCartAndWishlist();
      } catch (error) {
        console.error('Failed to remove from cart:', error);
      }
    } else {
      // Use localStorage if not logged in
      setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    }
  };

  const updateCartQty = async (productId: string, qty: number) => {
    if (user) {
      // Use server function if logged in
      try {
        await updateCartQuantityFn({ data: { userId: user.id, productId, quantity: qty } });
        await loadCartAndWishlist();
      } catch (error) {
        console.error('Failed to update quantity:', error);
      }
    } else {
      // Use localStorage if not logged in
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === productId ? { ...item, qty: Math.max(1, qty) } : item
        )
      );
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleWishlist = async (product: any) => {
    const productId = product.id || product._id || product.customId;
    if (!productId) return;

    if (user) {
      // Use server function if logged in
      const exists = wishlist.some((item) => item.id === productId);
      
      try {
        if (exists) {
          await removeFromWishlistFn({ data: { userId: user.id, productId } });
          Swal.fire({
            title: "Removed from Wishlist",
            text: `"${product.name}" has been removed from your wishlist.`,
            icon: "info",
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2000,
            background: "#1E1E1E",
            color: "#FFF",
          });
        } else {
          await addToWishlistFn({ data: { userId: user.id, productId } });
          Swal.fire({
            title: "Added to Wishlist!",
            text: `"${product.name}" has been added to your wishlist.`,
            icon: "success",
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2000,
            background: "#1E1E1E",
            color: "#FFF",
          });
        }
        await loadCartAndWishlist();
      } catch (error) {
        console.error('Failed to toggle wishlist:', error);
      }
    } else {
      // Use localStorage if not logged in
      setWishlist((prevWishlist) => {
        const exists = prevWishlist.some((item) => item.id === productId);
        if (exists) {
          Swal.fire({
            title: "Removed from Wishlist",
            text: `"${product.name}" has been removed from your wishlist.`,
            icon: "info",
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2000,
            background: "#1E1E1E",
            color: "#FFF",
          });
          return prevWishlist.filter((item) => item.id !== productId);
        }

        Swal.fire({
          title: "Added to Wishlist!",
          text: `"${product.name}" has been added to your wishlist.`,
          icon: "success",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 2000,
          background: "#1E1E1E",
          color: "#FFF",
        });

        return [
          ...prevWishlist,
          {
            id: productId,
            name: product.name,
            brand: product.brand || '',
            cat: product.cat || '',
            price: Number(product.price),
            old: Number(product.old || product.price),
            rating: Number(product.rating || 5),
            img: product.img,
          },
        ];
      });
    }
  };

  const isInWishlist = (productId: string) => {
    return wishlist.some((item) => item.id === productId);
  };

  const moveToCart = (product: any) => {
    const productId = product.id || product._id || product.customId;
    if (!productId) return;

    addToCart(product, 1);
    removeFromWishlist(productId);
  };

  return (
    <CartWishlistContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        removeFromCart,
        updateCartQty,
        clearCart,
        toggleWishlist,
        isInWishlist,
        moveToCart,
      }}
    >
      {children}
    </CartWishlistContext.Provider>
  );
}

export function useCartWishlist() {
  const context = useContext(CartWishlistContext);
  if (context === undefined) {
    throw new Error('useCartWishlist must be used within a CartWishlistProvider');
  }
  return context;
}
