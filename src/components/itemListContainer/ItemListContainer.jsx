import Container from "@mui/material/Container";
import Card from "../card/card";
import { useEffect, useState } from "react";
import { linkProducts } from "../url/urls";

const itemListContainer = ({ setCount, countCart }) => {
  const [mesage, setMesage] = useState([]);
  const fetchData = () => {
    fetch(linkProducts)
      .then((datos) => datos.json())
      .then((respuesta) => setMesage(respuesta));
  };

  useEffect(() => {
    fetchData();
  }, []);

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
            />
          </div>
        );
      })}
    </Container>
  );
};

export default itemListContainer;
