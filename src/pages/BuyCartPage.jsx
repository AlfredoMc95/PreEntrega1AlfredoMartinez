import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const BuyCartPage = ({ cartItems, setCartItems }) => {
  const deleteeItem = (itemToRemove) => {
    const updatedCart = cartItems.filter((item) => item.item !== itemToRemove);
    setCartItems(updatedCart);
  };
  return (
    <>
      <Container sx={{ py: 10, width: "50%" }}>
        <Grid container gap={2}>
          {cartItems.length === 0 ? (
            <>
              <Paper sx={{ width: "100%", p: 10, textAlign: "center" }}>
                <Typography variant="h3" component="div">
                  There aren't items to buy.
                </Typography>
              </Paper>
            </>
          ) : (
            cartItems.map((itemDet) => (
              <Grid key={itemDet.item.id} xs={12}>
                <Card sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardContent sx={{ flex: "1 0 auto", maxWidth: "80%" }}>
                      <Typography component="div" variant="h5">
                        {itemDet.item.name}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div"
                      >
                        Quantity: {itemDet.quantity}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div"
                      >
                        Price: {itemDet.item.price}$
                      </Typography>
                      <Button onClick={() => deleteeItem(itemDet.item)}>
                        <DeleteForeverIcon />
                      </Button>
                    </CardContent>
                  </Box>
                  <CardMedia
                    component="img"
                    sx={{
                      width: 200,
                      height: 200,
                      objectFit: "contain",
                    }}
                    image={itemDet.item.img}
                    alt="Live from space album cover"
                  />
                </Card>
              </Grid>
            ))
          )}
        </Grid>
      </Container>
    </>
  );
};

export default BuyCartPage;
