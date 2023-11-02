import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CategoriPage from "./pages/CategoriPage";
import ItemDetailPage from "./pages/ItemDetailPage";
import ItemListContainerPage from "./pages/ItemListContainerPage";
import BuyCartPage from "./pages/BuyCartPage";
import { ItemProvider } from "./context/ItemsContext";
import ConfirmBuyPage from "./pages/ConfirmBuyPage";
import SignInPage from "./pages/SignInPage";

const navLinksArray = [
  { title: "Home", path: "/" },
  { title: "Men's clothing", path: "/CategoriPage/men's clothing" },
  { title: "jewelery", path: "/CategoriPage/jewelery" },
  { title: "Electronics", path: "/CategoriPage/electronics" },
  { title: "women's clothing", path: "/CategoriPage/women's clothing" },
];

function App() {
  return (
    <ItemProvider>
      <Router>
        <Navbar title={"Alfredo's Store"} navLinksArray={navLinksArray} />

        <Routes>
          <Route path="/" element={<ItemListContainerPage />}></Route>
          <Route path="/CategoriPage" element={<CategoriPage />}></Route>
          <Route
            path="/ItemDetailPage/:id"
            element={<ItemDetailPage />}
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
          <Route path="/buyCar" element={<BuyCartPage />}></Route>
          <Route path="/confirmBuy" element={<ConfirmBuyPage />}></Route>
          <Route path="/sigIn" element={<SignInPage />} />
        </Routes>
      </Router>
    </ItemProvider>
  );
}

export default App;
