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
import { useState, useContext, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CartWidgete from "../cartWidgete/CartWidgete";
import { NavLink } from "react-router-dom";
import { ItemsContext } from "../../context/ItemsContext";
import { auth } from "../../firebase/firebaseConfig";

const Navbar = ({ title = "Titulo", countCart }) => {
  const [open, setOpen] = useState(false);
  const [navLinksArray, buyCartLink] = useContext(ItemsContext);
  const LogIn = { title: "signIn", path: "/sigin" };
  const [user, setUser] = useState(null);

  const signOut = () => {
    auth.signOut();
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

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
          <IconButton color="inherit" component={NavLink} to={buyCartLink.path}>
            <CartWidgete countCart={countCart} />
          </IconButton>

          <Typography
            variant="overline"
            fontSize="large"
            component={NavLink}
            to={LogIn.path}
            underline="none"
            sx={{
              fontWeight: "bold",
              textDecoration: "none",
              color: "white",
              mx: 2,
            }}
            onClick={user ? signOut : undefined} // Check if user is logged in before showing "Log Out"
          >
            {user ? `${user.email} Log Out` : "Log In"}
          </Typography>
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
