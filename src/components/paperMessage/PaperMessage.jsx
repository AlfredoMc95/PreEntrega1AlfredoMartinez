import { Paper, Typography } from "@mui/material";

const PaperMessage = ({ message }) => {
  return (
    <>
      <Paper sx={{ width: "100%", p: 10, textAlign: "center" }}>
        <Typography variant="h3" component="div">
          {message}
        </Typography>
      </Paper>
    </>
  );
};

export default PaperMessage;
