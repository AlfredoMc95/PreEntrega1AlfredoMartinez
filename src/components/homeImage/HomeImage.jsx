import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";

const HomeImage = ({ FBImage }) => {
  return (
    <>
      <Paper sx={{ display: "flex", p: 10, backgroundColor: "primary.light" }}>
        <Card
          sx={{
            display: "flex",
            backgroundColor: "primary.dark",
            color: "white",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", width: "60%" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography sx={{ py: 4 }} component="div" variant="h5">
                {FBImage.name}
              </Typography>
              <Typography variant="subtitle1" component="div">
                {FBImage.about}
              </Typography>
            </CardContent>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: "40%", p: 5 }}
            image={FBImage.img}
            alt="Live from space album cover"
          />
        </Card>
      </Paper>
    </>
  );
};

export default HomeImage;
