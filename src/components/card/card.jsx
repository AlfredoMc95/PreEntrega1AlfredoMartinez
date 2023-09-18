import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const card = ({ color, greeeting }) => {
  return (
    <Card
      sx={{
        minWidth: 275,
        my: 5,
        justifyContent: "center",
        backgroundColor: "primary.dark",
        color: { color },
      }}
    >
      <CardContent>
        <Typography variant="h2" align="center">
          {greeeting}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default card;
