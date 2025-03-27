import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

// Utility function to parse price
const parsePrice = (price) => {
  // Remove currency symbols and convert to number
  const cleanPrice = String(price)
    .replace(/[₹$,]/g, '')  // Remove ₹, $, and comma
    .trim();
  return Number(cleanPrice) || 0;
};

const cartSlice = createSlice({
  name: "mycart",
  initialState: {
    cart: []
  },
  reducers: {
    addtoCart: (state, action) => {
      const price = parsePrice(action.payload.price);
      const existingProduct = state.cart.find(item => item.id === action.payload.id);
      
      if (existingProduct) {
        existingProduct.quantity += 1;
        existingProduct.price = price;
        existingProduct.totalPrice = Number((existingProduct.quantity * price).toFixed(2));
        
        toast.success(`Increased quantity of ${action.payload.name}!`, {
          position: "top-center",
        });
      } else {
        state.cart.push({
          ...action.payload,
          price: price,
          quantity: 1,
          totalPrice: Number(price.toFixed(2))
        });
        
        toast.success(`${action.payload.name} added to cart!`, {
          position: "top-center",
        });
      }
    },
    increaseQuantity: (state, action) => {
      const product = state.cart.find(item => item.id === action.payload);
      if (product) {
        product.quantity += 1;
        product.totalPrice = Number((product.quantity * product.price).toFixed(2));
      }
    },
    decreaseQuantity: (state, action) => {
      const product = state.cart.find(item => item.id === action.payload);
      if (product) {
        if (product.quantity > 1) {
          product.quantity -= 1;
          product.totalPrice = Number((product.quantity * product.price).toFixed(2));
        } else {
          state.cart = state.cart.filter(item => item.id !== action.payload);
          toast.error("Product removed from cart!", {
            position: "top-center",
          });
        }
      }
    }
  }
});

export const { addtoCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;