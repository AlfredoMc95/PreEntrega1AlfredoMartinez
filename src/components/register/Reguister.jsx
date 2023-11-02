import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { useState } from "react";

const Reguister = ({ changeSing }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(false);

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordMatch(newPassword === confirmPassword && newPassword !== "");
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    setPasswordMatch(
      newConfirmPassword === password && newConfirmPassword !== ""
    );
  };

  const SignedIn = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <Container sx={{ py: 10 }}>
      <Box
        component="form"
        onSubmit={SignedIn}
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
          Create New User
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
          placeholder="Password"
          required
          type="password"
          variant="filled"
          value={password}
          onChange={handlePasswordChange}
        />
        <TextField
          name="confirmPassword"
          placeholder="Confirm Password"
          required
          type="password"
          variant="filled"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
        <Button type="submit" variant="contained" disabled={!passwordMatch}>
          Create Acount
        </Button>
        <Button variant="contained" onClick={changeSing}>
          Log In
        </Button>
      </Box>
    </Container>
  );
};

export default Reguister;
