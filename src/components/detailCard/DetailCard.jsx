import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Paper,
  Typography,
} from "@mui/material";

const DetailCArd = ({ add, remove, buy, item, product }) => {
  return (
    <>
      <Container sx={{ py: 10 }}>
        <Card
          sx={{
            display: "flex",
            p: 2,
            gap: 4,
            backgroundColor: "primary.dark",
            color: "white",
          }}
        >
          <CardMedia
            component="img"
            image={item.img}
            sx={{ width: "40%", objectFit: "contain" }}
            alt={`image ${item.name}`}
          />
          <Box sx={{ width: "60%" }}>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 5,
                height: "100%",
                alignContent: "center",
              }}
            >
              <Box sx={{ display: "flex", gap: 10 }}>
                <Typography component="div" variant="h5">
                  {item.name}
                </Typography>
                <Typography sx={{ fontSize: 40, color: "#EDDD53" }}>
                  {item.reviews}
                </Typography>
              </Box>
              <Paper sx={{ py: 5, px: 2 }}>
                <Typography variant="subtitle1" component="div">
                  {item.about}
                </Typography>
              </Paper>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
                  <Paper sx={{ p: 1 }}>Price {item.price}$</Paper>
                </Box>
                <Box
                  sx={{
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Button variant="contained" onClick={remove}>
                    -
                  </Button>
                  <Paper sx={{ px: 4, py: 1 }}>{product}</Paper>
                  <Button variant="contained" onClick={add}>
                    +
                  </Button>
                  <Button
                    sx={{ mx: 1 }}
                    variant="contained"
                    color="info"
                    onClick={buy}
                  >
                    add
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </Box>
        </Card>
      </Container>
    </>
  );
};

export default DetailCArd;
