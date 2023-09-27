import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import { CardMedia } from "@mui/material";

const card = ({
  image,
  color,
  greeeting,
  setCount,
  stock,
  countCart,
  addToCart,
}) => {
  const [product, setProduct] = useState(0);
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
  };
  return (
    <Card
      sx={{
        maxWidth: 400,
        px: 4,
        py: 2,
        justifyContent: "center",
        backgroundColor: "primary.dark",
        color: "white",
      }}
    >
      <CardMedia
        component={"img"}
        sx={{ height: 400, objectFit: "contain" }}
        image={image}
        title="green iguana"
      />
      <CardContent>
        <Typography variant="h3" align="center">
          {greeeting} asdasdasdas
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Box sx={{ display: "flex" }}>
            <Paper sx={{ mx: 5, px: 4, py: 1 }}>price {productStcok}$</Paper>
            <Paper sx={{ mx: 5, px: 4, py: 1 }}>stock {productStcok}</Paper>
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
              sx={{ mx: 2 }}
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
        </Box>
      </CardContent>
    </Card>
  );
};

export default card;
