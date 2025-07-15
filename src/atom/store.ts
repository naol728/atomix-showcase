import { products } from "@/atom/data";
import type { Actions, InitalState } from "@/types";
import { createAtom } from "atomix-core";

const initialState: InitalState = {
  products,
  cartItems: [],
};

export const store = createAtom<InitalState, Actions>(initialState, (set) => ({
  addtoCart: (product) =>
    set((s) => {
      const inStock =
        s.products.find((p) => p.id === product.id)?.quantity ?? 0;
      if (inStock <= 0) return s;

      const alreadyInCart = s.cartItems.find((item) => item.id === product.id);

      return {
        products: s.products.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity - 1 } : p
        ),
        cartItems: alreadyInCart
          ? s.cartItems.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          : [...s.cartItems, { ...product, quantity: 1 }],
      };
    }),

  removefromCart: (productId) =>
    set((s) => {
      const itemToRemove = s.cartItems.find((item) => item.id === productId);
      if (!itemToRemove) return s;

      return {
        products: s.products.map((p) =>
          p.id === productId
            ? { ...p, quantity: p.quantity + itemToRemove.quantity }
            : p
        ),
        cartItems: s.cartItems.filter((item) => item.id !== productId),
      };
    }),

  incCartItems: (cartId) =>
    set((s) => {
      const stock = s.products.find((p) => p.id === cartId)?.quantity ?? 0;
      const cartItem = s.cartItems.find((item) => item.id === cartId);

      if (!cartItem || stock <= 0) return s;

      return {
        products: s.products.map((p) =>
          p.id === cartId ? { ...p, quantity: p.quantity - 1 } : p
        ),
        cartItems: s.cartItems.map((item) =>
          item.id === cartId ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };
    }),

  decCartItems: (cartId) =>
    set((s) => {
      const cartItem = s.cartItems.find((item) => item.id === cartId);
      if (!cartItem) return s;

      if (cartItem.quantity <= 1) {
        // remove item from cart
        return {
          products: s.products.map((p) =>
            p.id === cartId ? { ...p, quantity: p.quantity + 1 } : p
          ),
          cartItems: s.cartItems.filter((item) => item.id !== cartId),
        };
      }

      return {
        products: s.products.map((p) =>
          p.id === cartId ? { ...p, quantity: p.quantity + 1 } : p
        ),
        cartItems: s.cartItems.map((item) =>
          item.id === cartId ? { ...item, quantity: item.quantity - 1 } : item
        ),
      };
    }),
}));
