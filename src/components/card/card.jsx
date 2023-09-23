import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const card = ({ color, greeeting, setCount, countCart }) => {
  const [product, setProduct] = useState(0);
  const add = () => {
    setProduct(product + 1);
  };
  const remove = () => {
    product >= 1 ? setProduct(product - 1) : setProduct((product = 0));
  };
  const addToCart = () => {
    setCount((countCart = product));
  };
  return (
    <Card
      sx={{
        minWidth: 275,
        my: 5,
        justifyContent: "center",
        backgroundColor: "primary.dark",
        color: { color },
      }}
    >
      <CardContent>
        <Typography variant="h2" align="center">
          {greeeting}
        </Typography>
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
          <Button onClick={add} variant="contained">
            +
          </Button>
          <Button
            sx={{ mx: 2 }}
            onClick={addToCart}
            variant="contained"
            color="info"
          >
            add
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default card;
