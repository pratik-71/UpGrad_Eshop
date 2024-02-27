import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Container, Grid } from "@mui/material";
import { useSelector } from "react-redux";

const Product_card = ({ selectedCategory }) => {
  const product_data = useSelector((state) => state.products.products);

  const filteredProducts = selectedCategory ? product_data.filter((product) => product.category === selectedCategory)
    : product_data;

  return (
    <Container maxWidth="md">
      <Grid container spacing={2} justifyContent="center"> 


        {filteredProducts.map((card) => (


          <Grid item key={card._id} xs={12} sm={6} md={4}> 
            <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <CardActionArea style={{ flexGrow: 1 }}> 


                <CardMedia
                  component="img"
                  height="170"
                  image={card.imageURL}
                  alt="Product"
                />
                <CardContent style={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {card.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Buy Now
                </Button>
              </CardActions>


            </Card>
          </Grid>


        ))}
      </Grid>
    </Container>
  );
};

export default Product_card;
