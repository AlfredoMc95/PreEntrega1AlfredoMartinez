import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { CardMedia } from "@mui/material";

const MyCard = ({ item }) => {
  return (
    <Card
      sx={{
        px: 4,
        py: 2,
        justifyContent: "center",
        backgroundColor: "primary.dark",
        color: "white",
      }}
    >
      <CardMedia
        component={"img"}
        sx={{ height: 400, objectFit: "contain", background: "#FFFFFF" }}
        image={item.img}
        title={item.name}
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignContent: "space-around",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <Typography variant="subtitle1" sx={{ height: 120 }}>
            {item.name}
          </Typography>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Button variant="contained" size="large">
            Buy
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MyCard;
