import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { useParams } from "react-router-dom";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Paper,
  Typography,
} from "@mui/material";
import { db } from "../firebase/firebaseConfig";
import {
  collection,
  query,
  getDocs,
  where,
  documentId,
} from "firebase/firestore";

const ItemDetailPage = ({ addToCart, setSelectedItem, setQuantity }) => {
  let { id } = useParams();
  const [items, setItems] = useState([]);
  let [product, setProduct] = useState(0);

  useEffect(() => {
    const getProducts = async () => {
      let q = query(collection(db, "products"), where(documentId(), "==", id));
      const docs = [];
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setItems(docs);
    };
    getProducts();
  }, [items]);

  console.log(items);

  const add = () => {
    setProduct(product + 1);
  };
  const remove = () => {
    if (product >= 1) {
      setProduct(product - 1);
    } else {
      setProduct((product = 0));
    }
  };

  useEffect(() => {
    setSelectedItem(items?.title);
    setQuantity(product);
  }, [items?.title, product, setSelectedItem, setQuantity]);

  const buy = () => {
    addToCart();
  };

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
            image={items?.image}
            sx={{ width: "40%", objectFit: "contain" }}
            alt={`image ${items?.title}`}
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
                  {items?.title}
                </Typography>
                <Typography sx={{ fontSize: 40, color: "#EDDD53" }}>
                  {items?.rating.rate}
                </Typography>
              </Box>
              <Paper sx={{ py: 5, px: 2 }}>
                <Typography variant="subtitle1" component="div">
                  {items?.description}
                </Typography>
              </Paper>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
                  <Paper sx={{ p: 1 }}>Price {items?.price}$</Paper>
                </Box>
                <Box
                  sx={{
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Button variant="contained" onClick={remove}>
                    -
                  </Button>
                  <Paper sx={{ px: 4, py: 1 }}>{product}</Paper>
                  <Button variant="contained" onClick={add}>
                    +
                  </Button>
                  <Button
                    sx={{ mx: 1 }}
                    variant="contained"
                    color="info"
                    onClick={buy}
                  >
                    add
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
