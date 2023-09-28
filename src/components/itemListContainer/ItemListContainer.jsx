import Container from "@mui/material/Container";
import Card from "../card/card";
import { useEffect, useState } from "react";
import { linkProducts } from "../url/urls";
import Grid from "@mui/material/Unstable_Grid2";

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
      <Grid xs={4} key={index}>
        <Card
          greeeting={products.title}
          image={products.image}
          color={products.color}
          price={products.price}
          stock={products.rating.count}
          rating={products.rating.rate}
          setCount={setCount}
          countCart={countCart}
          addToCart={addToCart}
        />
      </Grid>
    );
  });

  return (
    <Container sx={{ py: 10 }}>
      <Grid container spacing={2}>
        {cardDraftList}
      </Grid>
    </Container>
  );
};

export default itemListContainer;
