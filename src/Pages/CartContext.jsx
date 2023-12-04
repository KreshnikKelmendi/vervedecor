// CartContext.js
import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      if (state.itemIds.has(action.payload.id)) {
        // Item already exists in the cart, handle accordingly (maybe show a message)
        console.log(`Product with ID ${action.payload.id} is already in the cart.`);
        return state;
      } else {
        // Item doesn't exist in the cart, add it
        return {
          ...state,
          itemIds: new Set([...state.itemIds, action.payload.id]),
          items: [...state.items, action.payload],
        };
      }
    case 'REMOVE_FROM_CART':
      const newItems = state.items.filter(item => item.id !== action.payload);
      const newItemIds = new Set(newItems.map(item => item.id));

      return {
        ...state,
        itemIds: newItemIds,
        items: newItems,
      };
    case 'CLEAR_CART':
      return {
        ...state,
        itemIds: new Set(),
        items: [],
      };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, { itemIds: new Set(), items: [] });

  const addToCart = (item) => {
    if (!cartState.itemIds.has(item.id)) {
      // Item doesn't exist in the cart, add it
      dispatch({ type: 'ADD_TO_CART', payload: item });
    } else {
      // Item already exists in the cart, handle accordingly (maybe show a message)
      console.log(`Product with ID ${item.id} is already in the cart.`);
    }
   
  };

  const removeFromCart = (itemId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <CartContext.Provider value={{ cartState, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
