import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ItemPage from "./pages/ItemPage";
import ItemListContainerPage from "./pages/ItemListContainerPage";

const navLinksArray = [
  { title: "Home", path: "/" },
  { title: "Home 1", path: "#" },
  { title: "Home 2", path: "#" },
];

function App() {
  let [count, setCount] = useState(0);
  return (
    <>
      <Router>
        <Navbar
          title={"Alfredo's Store"}
          countCart={count}
          navLinksArray={navLinksArray}
        />

        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainerPage setCount={setCount} countCart={count} />
            }
          ></Route>
          <Route path="/Product" element={<ItemPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
