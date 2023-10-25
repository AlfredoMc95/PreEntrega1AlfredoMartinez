import { useState, createContext } from "react";

export const ItemsContext = createContext();

const navLinksArray = [
  { title: "Home", path: "/" },
  { title: "Men's clothing", path: "/CategoriPage/men's clothing" },
  { title: "jewelery", path: "/CategoriPage/jewelery" },
  { title: "Electronics", path: "/CategoriPage/electronics" },
  { title: "women's clothing", path: "/CategoriPage/women's clothing" },
];

export const ItemProvider = ({ children }) => {
  const [items, setItems] = useState(navLinksArray);

  return (
    <ItemsContext.Provider value={[items]}>{children}</ItemsContext.Provider>
  );
};
