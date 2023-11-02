import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { useState } from "react";

const LogIn = ({ changeSing }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
      });

    setEmail("");
    setPassword("");
  };

  return (
    <Container sx={{ py: 10 }}>
      <Box
        component="form"
        onSubmit={logIn}
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
          LogIn
        </Typography>
        <TextField
          name="email"
          placeholder="Email"
          required
          type="email"
          variant="filled"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          name="password"
          placeholder="password"
          required
          type="password"
          variant="filled"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="contained">
          Log In
        </Button>
        <Button variant="contained" onClick={changeSing}>
          sigIn
        </Button>
      </Box>
    </Container>
  );
};

export default LogIn;
