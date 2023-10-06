import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import { CardMedia } from "@mui/material";

const MyCard = ({
  image,
  price,
  greeeting,
  setCount,
  stock,
  rating,
  addToCart,
}) => {
  /*   let [product, setProduct] = useState(0);
  const [productStcok] = useState(stock);
  const [stockReach, setStockReach] = useState(false);

  const add = () => {
    product >= productStcok ? setStockReach(true) : setProduct(product + 1);
  };
  const remove = () => {
    if (product >= 1) {
      setProduct(product - 1);
      setStockReach(false);
    } else {
      setProduct((product = 0));
    }
  };
  const deleteItems = () => {
    setCount(0);
    setProduct(0);
  }; */
  return (
    <Card
      sx={{
        px: 4,
        py: 2,
        justifyContent: "center",
        backgroundColor: "primary.dark",
        color: "white",
      }}
    >
      <CardMedia
        component={"img"}
        sx={{ height: 400, objectFit: "contain", background: "#FFFFFF" }}
        image={image}
        title={greeeting}
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignContent: "space-around",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <Typography variant="subtitle1" sx={{ height: 120 }}>
            {greeeting}
          </Typography>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Button variant="contained" size="large">
            Buy
          </Button>
        </Box>
        {/*         <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
            <Paper sx={{ p: 1 }}>Price {price}$</Paper>
            <Paper sx={{ p: 1 }}>Stock {productStcok}</Paper>
            <Paper sx={{ p: 1 }}>{rating}</Paper>
          </Box>
          <Box
            sx={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button onClick={remove} variant="contained">
              -
            </Button>
            <Paper sx={{ px: 4, py: 1 }}>{product}</Paper>
            <Button onClick={add} variant="contained" disabled={stockReach}>
              +
            </Button>
            <Button
              sx={{ mx: 1 }}
              onClick={() => addToCart(product)}
              variant="contained"
              color="info"
            >
              add
            </Button>
            <Button onClick={deleteItems} variant="contained" color="info">
              <DeleteIcon />
            </Button>
          </Box>
        </Box> */}
      </CardContent>
    </Card>
  );
};

export default MyCard;
