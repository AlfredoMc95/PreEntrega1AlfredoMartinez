import Badge from "@mui/material/Badge";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";

//CartWidgete

const CartWidgete = () => {
  return (
    <div>
      <Badge badgeContent={1} color="error">
        <LocalGroceryStoreIcon />
      </Badge>
    </div>
  );
};

export default CartWidgete;
