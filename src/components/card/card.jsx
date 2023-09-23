import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const card = ({ color, greeeting, setCount, countCart }) => {
  const add = () => {
    setCount(countCart + 1);
  };

  const remove = () => {
    countCart >= 1 ? setCount(countCart - 1) : setCount((countCart = 0));
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
        <Box sx={{ textAlign: "center" }}>
          <Button sx={{ m: 2 }} onClick={add} variant="contained">
            add
          </Button>
          <Button onClick={remove} variant="contained">
            remove
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default card;
