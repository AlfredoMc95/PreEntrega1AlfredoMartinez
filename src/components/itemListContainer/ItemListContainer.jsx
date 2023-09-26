import Container from "@mui/material/Container";
import Card from "../card/card";
import { useEffect, useState } from "react";
import { linkProducts } from "../url/urls";

const itemListContainer = ({ setCount, countCart }) => {
  const [mesage, setMesage] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [indexCard, setIndexCard] = useState(0);

  const fetchData = () => {
    fetch(linkProducts)
      .then((datos) => datos.json())
      .then((respuesta) => setMesage(respuesta));
  };

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const totalItems = cartItems.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );

    setCount(totalItems);
    console.log(cartItems);
  }, [cartItems, setCount]);

  useEffect(() => {
    let counter = indexCard;
    const interval = setInterval(() => {
      if (counter >= mesage.length) {
        clearInterval(interval);
      } else {
        setIndexCard((indexCard) => indexCard + 1);
        counter++;
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [mesage]);

  let cardDraftList = mesage.slice(0, indexCard).map((mesages, index) => {
    return (
      <div key={index}>
        <Card
          greeeting={mesages.text}
          color={mesages.color}
          stock={mesages.stock}
          setCount={setCount}
          countCart={countCart}
          addToCart={addToCart}
        />
      </div>
    );
  });

  return <Container sx={{ py: 10 }}>{cardDraftList}</Container>;
};

export default itemListContainer;
