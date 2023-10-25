import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import NabListDrawer from "./NabListDrawer";
import { useState, useContext } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CartWidgete from "../cartWidgete/CartWidgete";
import { NavLink } from "react-router-dom";
import { ItemsContext } from "../../context/ItemsContext";

const Navbar = ({ title = "Titulo", countCart }) => {
  const [open, setOpen] = useState(false);
  const [navLinksArray] = useContext(ItemsContext);

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            fontSize="large"
            onClick={() => setOpen(true)}
            sx={{ display: { xs: "flex", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h1"
            fontSize="large"
            align="left"
            component={NavLink}
            to={navLinksArray[0].path}
            underline="none"
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
              textDecoration: "none",
              color: "white",
            }}
          >
            {title}
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navLinksArray.map((buttons) => (
              <Button
                color="inherit"
                key={buttons.title}
                component={NavLink}
                to={buttons.path}
              >
                {buttons.title}
              </Button>
            ))}
          </Box>
          <CartWidgete countCart={countCart} />
        </Toolbar>
      </AppBar>
      <Drawer
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}
        sx={{ display: { xs: "flex", sm: "none" } }}
      >
        <NabListDrawer navLinksArray={navLinksArray} />
      </Drawer>
    </>
  );
};

export default Navbar;
