import Badge from "@mui/material/Badge";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";

//CartWidgete

const CartWidgete = ({ countCart }) => {
  return (
    <>
      <Badge badgeContent={countCart} color="error">
        <LocalGroceryStoreIcon />
      </Badge>
    </>
  );
};

export default CartWidgete;
