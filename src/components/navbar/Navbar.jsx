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
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CartWidgete from "../cartWidgete/CartWidgete";

const navLinks = [
  { title: "Home", path: "#" },
  { title: "Home 1", path: "#" },
  { title: "Home 2", path: "#" },
];

const Navbar = ({ title = "Titulo", countCart }) => {
  const [open, setOpen] = useState(false);

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
            sx={{ flexGrow: 1, fontWeight: "bold" }}
          >
            {title}
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navLinks.map((buttons) => (
              <Button
                color="inherit"
                key={buttons.title}
                components="a"
                href={buttons.path}
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
        <NabListDrawer navLinks={navLinks} />
      </Drawer>
    </>
  );
};

export default Navbar;
