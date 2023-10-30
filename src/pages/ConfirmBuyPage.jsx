import { Box, Button, Container, TextField, Typography } from "@mui/material";

const ConfirmBuyPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("entro");
  };
  return (
    <>
      <Container sx={{ py: 10 }}>
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
            id="name"
            label="Name"
            type="text"
            required
            variant="filled"
          />
          <TextField
            id="lastName"
            label="Last name"
            type="text"
            required
            variant="filled"
          />
          <TextField
            id="phone"
            label="Phone"
            required
            type="text"
            variant="filled"
          />
          <TextField
            id="email"
            label="Email"
            required
            type="email"
            variant="filled"
          />
          <Button type="submit" variant="contained">
            Confirm
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default ConfirmBuyPage;
