import { Alert, Stack } from "@mui/material";

const MessageSucces = ({ shoppingId }) => {
  return (
    <>
      <Stack sx={{ width: "100%" }}>
        <Alert severity="success">
          Thanks for your purchase, your purchase ID is: {shoppingId}
        </Alert>
      </Stack>
    </>
  );
};

export default MessageSucces;
