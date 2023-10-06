import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { linkProducts } from "../components/url/urls";
import UseFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";

const ItemDetailPage = () => {
  let { id } = useParams();

  const { data } = UseFetch(linkProducts, id);

  console.log(data);
  return (
    <>
      <Container sx={{ py: 10 }}>
        <Box sx={{ p: 2, bgcolor: "#cfe8fc", height: "100vh" }}>
          <h1>Hola</h1>
          <p>id es igual a {id}</p>
        </Box>
      </Container>
    </>
  );
};

export default ItemDetailPage;
