import Container from "@mui/material/Container";
import Card from "../card/card";

const itemListContainer = () => {
  return (
    <Container sx={{ py: 10 }}>
      <Card greeeting="Hola" color="#a6454e" />
      <Card greeeting="esta es mi primera Preentrega" color="#45a0a6" />
      <Card greeeting="aun no estoy seguro" color="#8ea645" />
      <Card greeeting="que tipo de tienda hacer" color="#459da6" />
      <Card greeeting="depronto libros o" color="#8c45a6" />
      <Card
        greeeting="usar la API de pokemon para verder estos."
        color="#a6457d"
      />
      <Card
        greeeting="Saludos, solo quiero testear que el navbar"
        color="#c67db3"
      />
      <Card greeeting="sea sticky y los colores." color="#7dc6b9" />
    </Container>
  );
};

export default itemListContainer;
