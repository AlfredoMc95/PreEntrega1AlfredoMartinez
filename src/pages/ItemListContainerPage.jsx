import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Card from "../components/card/card";
import Grid from "@mui/material/Unstable_Grid2";
import { linkProducts } from "../components/url/urls";
import UseFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

const ItemListContainer = () => {
  const [indexCard, setIndexCard] = useState(0);

  const { data } = UseFetch(linkProducts);

  useEffect(() => {
    let counter = indexCard;
    const interval = setInterval(() => {
      if (counter >= data.length) {
        clearInterval(interval);
      } else {
        setIndexCard((indexCard) => indexCard + 1);
        counter++;
      }
    }, 500);
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
