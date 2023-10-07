import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Card from "../components/card/card";
import Grid from "@mui/material/Unstable_Grid2";
import { linkProducts } from "../components/url/urls";
import UseFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

const ItemListContainer = ({ setCount, countCart }) => {
  const [cartItems, setCartItems] = useState([]);
  const [indexCard, setIndexCard] = useState(0);

  const { data } = UseFetch(linkProducts);

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

  useEffect(() => {
    let counter = indexCard;
    const interval = setInterval(() => {
      if (counter >= data.length) {
        clearInterval(interval);
      } else {
        setIndexCard((indexCard) => indexCard + 1);
        counter++;
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [data]);

  let cardDraftList = data?.slice(0, indexCard).map((products) => {
    return (
      <Grid xs={12} sm={4} key={products.id}>
        <Link
          to={`/ItemDetailPage/${products.id}`}
          style={{ textDecoration: "none" }}
        >
          <Card
            greeeting={products.title}
            image={products.image}
            price={products.price}
            stock={products.rating.count}
            rating={products.rating.rate}
            setCount={setCount}
            countCart={countCart}
            addToCart={addToCart}
          />
        </Link>
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

export default ItemListContainer;
