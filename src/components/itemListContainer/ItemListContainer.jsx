import Container from "@mui/material/Container";
import Card from "../card/card";
import { useEffect, useState } from "react";
import { linkProducts } from "../url/urls";

const itemListContainer = ({ setCount, countCart }) => {
  const [product, setProduct] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [indexCard, setIndexCard] = useState(0);

  const fetchData = () => {
    fetch(linkProducts)
      .then((datos) => datos.json())
      .then((respuesta) => setProduct(respuesta));
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
      if (counter >= product.length) {
        clearInterval(interval);
      } else {
        setIndexCard((indexCard) => indexCard + 1);
        counter++;
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [product]);

  let cardDraftList = product.slice(0, indexCard).map((products, index) => {
    return (
      <div key={index}>
        <Card
          image={products.image}
          greeeting={products.text}
          color={products.color}
          stock={products.rating.count}
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
