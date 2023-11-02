import { useState, createContext, useEffect, useMemo } from "react";

export const ItemsContext = createContext();

export const ItemProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  let [count, setCount] = useState(0);

  useEffect(() => {
    const totalItems = cartItems.reduce(
      (accumulator, currentValue) => accumulator + currentValue.quantity,
      0
    );

    setCount(totalItems);
  }, [cartItems, setCount]);

  useEffect(() => {
    const totalItems = cartItems.reduce((accumulator, currentValue) => {
      const totalPriceQuantity =
        currentValue.quantity * currentValue.item.price;
      return accumulator + totalPriceQuantity;
    }, 0);

    setTotalPrice(totalItems);
  }, [cartItems, setTotalPrice]);

  const addToCart = () => {
    const itemIndex = cartItems.findIndex((item) => item.item === selectedItem);

    if (itemIndex !== -1) {
      const updatedCart = [...cartItems];
      updatedCart[itemIndex].quantity = quantity;
      setCartItems(updatedCart);
    } else {
      const updatedCart = [...cartItems, { item: selectedItem, quantity }];
      setCartItems(updatedCart);
    }
  };

  const value = useMemo(() => {
    return {
      count,
      addToCart,
      setSelectedItem,
      setQuantity,
      cartItems,
      totalPrice,
      setCartItems,
    };
  }, [count, cartItems, setCount, cartItems, setTotalPrice, addToCart]);

  return (
    <ItemsContext.Provider value={value}>{children}</ItemsContext.Provider>
  );
};
