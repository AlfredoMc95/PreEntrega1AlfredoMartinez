import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const CartItemCard = ({ itemDet, deleteeItem }) => {
  return (
    <>
      <Grid xs={12}>
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
                <DeleteForeverIcon fontSize="large" />
              </Button>
            </CardContent>
          </Box>
          <CardMedia
            component="img"
            sx={{
              width: 200,
              height: 200,
              objectFit: "contain",
              p: 2,
            }}
            image={itemDet.item.img}
            alt="Live from space album cover"
          />
        </Card>
      </Grid>
    </>
  );
};

export default CartItemCard;
