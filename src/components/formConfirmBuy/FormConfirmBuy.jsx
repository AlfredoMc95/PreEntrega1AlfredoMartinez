import { Box, Button, TextField, Typography } from "@mui/material";
import MessageSucces from "../messgeSucces/MessageSucces";

const FormConfirmBuy = ({ handleSubmit, handleChange, shoppingId, values }) => {
  return (
    <>
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
    </>
  );
};

export default FormConfirmBuy;
