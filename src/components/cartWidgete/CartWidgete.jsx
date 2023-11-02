import Badge from "@mui/material/Badge";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import { ItemsContext } from "../../context/ItemsContext";
import { useContext } from "react";

//CartWidgete

const CartWidgete = () => {
  const { count } = useContext(ItemsContext);
  return (
    <>
      <Badge badgeContent={count} color="error">
        <LocalGroceryStoreIcon />
      </Badge>
    </>
  );
};

export default CartWidgete;
