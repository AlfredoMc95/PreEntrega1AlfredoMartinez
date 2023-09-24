import Container from "@mui/material/Container";
import Card from "../card/card";
import { useEffect, useState } from "react";
import { linkProducts } from "../url/urls";

const itemListContainer = ({ setCount, countCart }) => {
  const [mesage, setMesage] = useState([]);
  const [cartItems, setCartItems] = useState([]);

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

  return (
    <Container sx={{ py: 10 }}>
      {mesage.map((mesages) => {
        return (
          <div key={mesages.id}>
            <Card
              greeeting={mesages.text}
              color={mesages.color}
              setCount={setCount}
              countCart={countCart}
              addToCart={addToCart}
            />
          </div>
        );
      })}
    </Container>
  );
};

export default itemListContainer;
