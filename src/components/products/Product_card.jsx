import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "../products/Products.css";
import { Button, CardActions, Container, Grid, Hidden } from "@mui/material";
import { CardActionArea } from "@mui/material";

import { useSelector } from "react-redux";

const Product_card = ({ selectedCategory }) => {
  const product_data = useSelector((state) => state.products.products);

  const filteredProducts = selectedCategory
    ? product_data.filter((product) => product.category === selectedCategory)
    : product_data;

  return (
    <Container maxWidth="md">
      <Grid container spacing={5} style={{ marginTop: "20px" }}>
        {filteredProducts.map((card) => (
          <Grid xs={12} ms={4} sm={4} key={card._id}>
            <Card
              sx={{ maxWidth: 345, boxShadow:4 }}
              style={{ margin: "10px", marginBottom: "30px",borderRadius:"15px",height:"330px" }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={card.imageURL}
                  alt="green iguana"
                  style={{ borderRadius: "15px" }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" align="center" component="div" style={{height:"30px",overflow:"hidden"}}>
                    {card.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" style={{height:"50px", overflow: "hidden"}}>
                    {card.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button variant="contained" size="small">
                  Medium
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
