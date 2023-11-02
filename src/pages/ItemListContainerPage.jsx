import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Card from "../components/card/card";
import Grid from "@mui/material/Unstable_Grid2";
import { Link } from "react-router-dom";
import UseReadFB from "../hooks/useReadFB";
import HomeImage from "../components/homeImage/HomeImage";

const ItemListContainer = () => {
  const [indexCard, setIndexCard] = useState(0);

  const useReadFB = UseReadFB();

  useEffect(() => {
    let counter = indexCard;
    const interval = setInterval(() => {
      if (counter >= useReadFB?.length) {
        clearInterval(interval);
      } else {
        setIndexCard((indexCard) => indexCard + 1);
        counter++;
      }
    }, 500);
    return () => clearInterval(interval);
  }, [useReadFB]);

  return (
    <>
      <HomeImage FBImage={useReadFB[8]} />
      <Container sx={{ py: 10 }}>
        <Grid container spacing={2}>
          {useReadFB.map((item) => {
            return (
              <Grid xs={12} sm={4} key={item.id}>
                <Link
                  to={`/ItemDetailPage/${item.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Card item={item} />
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default ItemListContainer;
