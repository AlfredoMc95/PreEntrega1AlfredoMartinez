import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Card from "../components/card/card";
import Grid from "@mui/material/Unstable_Grid2";
import { Link } from "react-router-dom";
import UseReadFB from "../hooks/useReadFB";
import HomeImage from "../components/homeImage/HomeImage";
import SignIn from "./SignInPage";

/* import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig"; */

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

  //toma la api fakeStore y sube todos los elementos en la base de datos, no see borrar por si es necesario llenar de nuevo la base de datos
  /*   useEffect(() => {
    data?.map((currentProduct) => {
      const docRef = addDoc(collection(db, "products"), {
        about: currentProduct.description,
        category: currentProduct.category,
        img: currentProduct.image,
        name: currentProduct.title,
        reviews: currentProduct.rating.rate,
        stock: 10,
        price: currentProduct.price,
      });
    });
  }, []); */

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
