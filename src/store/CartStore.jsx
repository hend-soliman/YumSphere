import { create } from "zustand";

const useStore = create((set) => ({

  cart: [],

  addToCart: (item) =>
    set((state) => {
      const exists = state.cart.find((i) => i.id === item.id);
      if (exists) {
        return {
          cart: state.cart.map((i) =>
            i.id === item.id ? { ...i, qty: i.qty + 1 } : i
          ),
        };
      }
      return {
        cart: [...state.cart, { ...item, qty: 1 }],
      };
    }),

  increaseQty: (id) =>
    set((state) => ({
      cart: state.cart.map((i) =>
        i.id === id ? { ...i, qty: i.qty + 1 } : i
      ),
    })),

  decreaseQty: (id) =>
    set((state) => ({
      cart: state.cart
        .map((i) =>
          i.id === id ? { ...i, qty: i.qty - 1 } : i
        )
        .filter((i) => i.qty > 0),
    })),

  removeItem: (id) =>
    set((state) => ({
      cart: state.cart.filter((i) => i.id !== id),
    })),

  
  isLoggedIn: false,
  user: null,

  login: (userData) => set({ isLoggedIn: true, user: userData }),
  logout: () => set({ isLoggedIn: false, user: null, cart: [] }),
}));

export default useStore;



























