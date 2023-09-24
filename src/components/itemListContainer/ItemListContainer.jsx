import Container from "@mui/material/Container";
import Card from "../card/card";
import { useEffect, useState } from "react";
import { linkProducts } from "../url/urls";

const itemListContainer = ({ setCount, countCart }) => {
  const [mesages, setMesages] = useState([]);
  const fetchData = () => {
    fetch(linkProducts)
      .then((datos) => datos.json())
      .then((respuesta) => setMesages(respuesta));
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(mesages);
  return (
    <Container sx={{ py: 10 }}>
      <Card
        greeeting="Hola"
        color="#a6454e"
        setCount={setCount}
        countCart={countCart}
      />
    </Container>
  );
};

export default itemListContainer;
