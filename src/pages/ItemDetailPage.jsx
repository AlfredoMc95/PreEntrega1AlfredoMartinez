import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { linkProducts } from "../components/url/urls";
import UseFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Paper,
  Typography,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";

const ItemDetailPage = () => {
  let { id } = useParams();

  const { data } = UseFetch(linkProducts, id);

  return (
    <>
      <Container sx={{ py: 10 }}>
        <Card
          sx={{
            display: "flex",
            p: 2,
            gap: 4,
            backgroundColor: "primary.dark",
            color: "white",
          }}
        >
          <CardMedia
            component="img"
            image={data?.image}
            sx={{ width: "40%" }}
            alt={`image ${data?.title}`}
          />
          <Box sx={{ width: "60%" }}>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 5,
                height: "100%",
                alignContent: "center",
              }}
            >
              <Box sx={{ display: "flex", gap: 10 }}>
                <Typography component="div" variant="h5">
                  {data?.title}
                </Typography>
                <Typography sx={{ fontSize: 40, color: "#EDDD53" }}>
                  {data?.rating.rate}
                </Typography>
              </Box>
              <Paper sx={{ py: 5, px: 2 }}>
                <Typography variant="subtitle1" component="div">
                  {data?.description}
                </Typography>
              </Paper>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
                  <Paper sx={{ p: 1 }}>Price {data?.price}$</Paper>
                </Box>
                <Box
                  sx={{
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Button variant="contained">-</Button>
                  <Paper sx={{ px: 4, py: 1 }}>asdasd</Paper>
                  <Button variant="contained">+</Button>
                  <Button sx={{ mx: 1 }} variant="contained" color="info">
                    add
                  </Button>
                  <Button variant="contained" color="info">
                    <DeleteIcon />
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </Box>
        </Card>
      </Container>
    </>
  );
};

export default ItemDetailPage;
