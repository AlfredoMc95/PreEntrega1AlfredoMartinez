import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from "../firebase/firebaseConfig";
import MessageSucces from "../components/messgeSucces/MessageSucces";

const initialState = {
  name: "",
  lastName: "",
  phone: "",
  email: "",
  products: [],
};

const ConfirmBuyPage = ({ cartItems, setCartItems }) => {
  const [values, setValues] = useState(initialState);
  const [shoppingId, setShoppingId] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // User is signed in
        setUser(authUser);
      } else {
        // User is signed out
        setUser(null);
      }
    });

    // Unsubscribe when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value, products: cartItems });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const docRef = await addDoc(collection(db, "shopping"), {
      values,
    });
    setValues(initialState);
    setCartItems([]);
    setShoppingId(docRef.id);
  };

  return (
    <>
      <Container sx={{ py: 10, width: "50%" }}>
        {user ? (
          <Box>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                textAlign: "center",
                background: "white",
                borderRadius: 2,
                p: 2,
                display: "flex",
                justifyContent: "center",
                flexFlow: "column",
                gap: 2,
              }}
            >
              <Typography variant="h3" component="div">
                Please validate your info
              </Typography>
              <TextField
                name="name"
                placeholder="Name"
                type="text"
                required
                variant="filled"
                value={values.name}
                onChange={handleChange}
              />
              <TextField
                name="lastName"
                placeholder="Last name"
                type="text"
                required
                variant="filled"
                value={values.lastName}
                onChange={handleChange}
              />
              <TextField
                name="phone"
                placeholder="Phone"
                required
                type="text"
                variant="filled"
                value={values.phone}
                onChange={handleChange}
              />
              <TextField
                name="email"
                placeholder="Email"
                required
                type="email"
                variant="filled"
                value={values.email}
                onChange={handleChange}
              />
              <Button type="submit" variant="contained">
                Confirm
              </Button>
            </Box>

            {shoppingId && <MessageSucces shoppingId={shoppingId} />}
          </Box>
        ) : (
          <Paper sx={{ width: "100%", p: 10, textAlign: "center" }}>
            <Typography variant="h3" component="div">
              Please Login To continue.
            </Typography>
          </Paper>
        )}
      </Container>
    </>
  );
};

export default ConfirmBuyPage;
