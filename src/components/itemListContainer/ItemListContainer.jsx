import Container from "@mui/material/Container";
import Card from "../card/card";

const itemListContainer = ({ setCount, countCart }) => {
  return (
    <Container sx={{ py: 10 }}>
      <Card
        greeeting="Hola"
        color="#a6454e"
        setCount={setCount}
        countCart={countCart}
      />
      <Card
        greeeting="esta es mi primera Preentrega"
        color="#45a0a6"
        setCount={setCount}
        countCart={countCart}
      />
      <Card
        greeeting="aun no estoy seguro"
        color="#8ea645"
        setCount={setCount}
        countCart={countCart}
      />
      <Card
        greeeting="que tipo de tienda hacer"
        color="#459da6"
        setCount={setCount}
        countCart={countCart}
      />
      <Card
        greeeting="depronto libros o"
        color="#8c45a6"
        setCount={setCount}
        countCart={countCart}
      />
      <Card
        greeeting="usar la API de pokemon para verder estos."
        color="#a6457d"
        setCount={setCount}
        countCart={countCart}
      />
      <Card
        greeeting="Saludos, solo quiero testear que el navbar"
        color="#c67db3"
        setCount={setCount}
        countCart={countCart}
      />
      <Card
        greeeting="sea sticky y los colores."
        color="#7dc6b9"
        setCount={setCount}
        countCart={countCart}
      />
    </Container>
  );
};

export default itemListContainer;
