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
import PaperMessage from "../components/paperMessage/PaperMessage";
import FormConfirmBuy from "../components/formConfirmBuy/FormConfirmBuy";

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
          <FormConfirmBuy
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            shoppingId={shoppingId}
            values={values}
          />
        ) : (
          <PaperMessage message={"Please Login To continue."} />
        )}
      </Container>
    </>
  );
};

export default ConfirmBuyPage;
