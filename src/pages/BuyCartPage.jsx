import { Container, Grid, Paper, Typography } from "@mui/material";
import CartItemCard from "../components/cartItemCard/CartItemCard";

const BuyCartPage = ({ cartItems, setCartItems, totalPrice }) => {
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
              <CartItemCard
                key={itemDet.item.id}
                itemDet={itemDet}
                deleteeItem={deleteeItem}
              />
            ))
          )}
          {cartItems.length === 0 ? (
            <></>
          ) : (
            <>
              <Paper sx={{ width: "100%", p: 10, textAlign: "center" }}>
                <Typography variant="h3" component="div">
                  Total:{totalPrice}$
                </Typography>
              </Paper>
            </>
          )}
        </Grid>
      </Container>
    </>
  );
};

export default BuyCartPage;
