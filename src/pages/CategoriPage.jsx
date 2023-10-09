import UseFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import Card from "../components/card/card";
import { linkProducts } from "../components/url/urls";
import { Box, Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const CategoriPage = () => {
  const { data } = UseFetch(linkProducts);

  let { categoryId } = useParams();

  let categoryData = data?.filter((categoryItems) => {
    return categoryItems.category === categoryId;
  });

  console.log(categoryData);

  return (
    <>
      <Container sx={{ py: 10 }}>
        <Grid container spacing={2} justifyContent="center">
          {categoryData?.map((item) => (
            <Grid xs={12} sm={4} key={item.id} container spacing={2}>
              <Link
                to={`/ItemDetailPage/${item.id}`}
                style={{ textDecoration: "none" }}
              >
                <Box p={2}>
                  <Card
                    greeeting={item.title}
                    image={item.image}
                    price={item.price}
                  />
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
