import "./App.css";
import ItemListContainer from "./components/itemListContainer/itemListContainer";
import Navbar from "./components/navbar/Navbar";
import { useState } from "react";

function App() {
  let [count, setCount] = useState(0);
  return (
    <>
      <Navbar countCart={count} />
      <ItemListContainer setCount={setCount} countCart={count} />
    </>
  );
}

export default App;
