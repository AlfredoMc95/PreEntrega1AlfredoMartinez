import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { useEffect, useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CategoriPage from "./pages/CategoriPage";
import ItemDetailPage from "./pages/ItemDetailPage";
import ItemListContainerPage from "./pages/ItemListContainerPage";

const navLinksArray = [
  { title: "Home", path: "/" },
  { title: "Men's clothing", path: "/CategoriPage/men's clothing" },
  { title: "jewelery", path: "/CategoriPage/jewelery" },
  { title: "Electronics", path: "/CategoriPage/electronics" },
  { title: "women's clothing", path: "/CategoriPage/women's clothing" },
];

function App() {
  const [cartItems, setCartItems] = useState([]);
  let [count, setCount] = useState(0);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  useEffect(() => {
    const totalItems = cartItems.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );

    setCount(totalItems);
  }, [cartItems, setCount]);

  return (
    <>
      <Router>
        <Navbar
          title={"Alfredo's Store"}
          countCart={count}
          navLinksArray={navLinksArray}
        />

        <Routes>
          <Route path="/" element={<ItemListContainerPage />}></Route>
          <Route path="/CategoriPage" element={<CategoriPage />}></Route>
          <Route
            path="/ItemDetailPage/:id"
            element={<ItemDetailPage addToCart={addToCart} />}
          ></Route>
          <Route
            path="/CategoriPage/:categoryId"
            element={<CategoriPage />}
          ></Route>
          <Route
            path="/CategoriPage/:categoryId"
            element={<CategoriPage />}
          ></Route>
          <Route
            path="/CategoriPage/:categoryId"
            element={<CategoriPage />}
          ></Route>
          <Route
            path="/CategoriPage/:categoryId"
            element={<CategoriPage />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
