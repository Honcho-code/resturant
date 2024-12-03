import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [watchList, setWatchList] = useState([]);


  useEffect(()=>{
    const storedCart = JSON.parse(localStorage.getItem("cartItems")) || []
    const storedWatchList = JSON.parse(localStorage.getItem("watchList")) || [];
    setCartItems(storedCart)
    setWatchList(storedWatchList)
  },[])

  useEffect(()=>{
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
  },[cartItems])

  useEffect(()=>{
    localStorage.setItem("watchList", JSON.stringify(watchList))
  },[watchList])

  const addToCart = (product, quantity = 1) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity }];
      }
    });
  };
  const removeFromCart = (product) => {
    setCartItems((prevCart) =>
      prevCart.filter((item) => item.id !== product.id)
    );
  };

  const isInCart = (productId) => {
    return cartItems.some((item) => item.id === productId);
  };
  const updateQuantity = (productId, quantity) => {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(1, quantity) }
          : item
      )
    );
  };

  const addToWatchList = (product) => {
    if (isInWatchList(product.id)) {
      setWatchList(watchList.filter((item) => item.id !== product.id));
    } else {
      setWatchList([...watchList, product]);
    }
  };
  const isInWatchList = (id) => watchList.some((item) => item.id === id);
  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity, isInCart,watchList, addToWatchList, isInWatchList, setCartItems }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
