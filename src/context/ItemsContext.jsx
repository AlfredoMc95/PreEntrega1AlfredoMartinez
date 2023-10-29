import { useState, createContext } from "react";

export const ItemsContext = createContext();

const navLinksArray = [
  { title: "Home", path: "/" },
  { title: "Men's clothing", path: "/CategoriPage/men's clothing" },
  { title: "jewelery", path: "/CategoriPage/jewelery" },
  { title: "Electronics", path: "/CategoriPage/electronics" },
  { title: "women's clothing", path: "/CategoriPage/women's clothing" },
];

const buyCartLink = { title: "buyCar", path: "/buyCar" };
const confirmBuyLink = { title: "confirmBuy", path: "/confirmBuy" };

export const ItemProvider = ({ children }) => {
  const [items, setItems] = useState(navLinksArray);
  const [buyCart, setBuyCart] = useState(buyCartLink);
  const [confirmBuy, setConfirmBuy] = useState(confirmBuyLink);

  return (
    <ItemsContext.Provider value={[items, buyCart, confirmBuy]}>
      {children}
    </ItemsContext.Provider>
  );
};
