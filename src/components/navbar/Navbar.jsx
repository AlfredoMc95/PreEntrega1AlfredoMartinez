//navbar
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuButtons from "../MenuButtons/MenuButtons";
import CartWidgete from "../cartWidgete/CartWidgete";

const Navbar = ({ countCart }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Alfredo's Store
          </Typography>
          <Box sx={{ flexGrow: 1 }}>
            <MenuButtons />
          </Box>
          <CartWidgete countCart={countCart} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
