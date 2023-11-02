import { useParams } from "react-router-dom";
import Card from "../components/card/card";
import { Box, Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import UseReadFB from "../hooks/useReadFB";

const CategoriPage = () => {
  let { categoryId } = useParams();

  const useReadFB = UseReadFB(categoryId);

  return (
    <>
      <Container sx={{ py: 14 }}>
        <Grid container spacing={2} justifyContent="center">
          {useReadFB?.map((item) => (
            <Grid xs={12} sm={4} key={item.id} container spacing={2}>
              <Link
                to={`/ItemDetailPage/${item.id}`}
                style={{ textDecoration: "none" }}
              >
                <Box p={2}>
                  <Card item={item} />
                </Box>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default CategoriPage;
