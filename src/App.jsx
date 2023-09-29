import "./App.css";
import ItemListContainer from "./components/itemListContainer/itemListContainer";
import Navbar from "./components/navbar/Navbar";
import { useState } from "react";

function App() {
  let [count, setCount] = useState(0);
  return (
    <>
      <Navbar title={"Alfredo's Store"} countCart={count} />
      <ItemListContainer setCount={setCount} countCart={count} />
    </>
  );
}

export default App;
