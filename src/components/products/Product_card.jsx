import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Container } from "@mui/material";
import { useSelector } from "react-redux";

const Product_card = () => {
  const product_data = useSelector((state) => state.products.products);

  return (
    <>
      <Container maxWidth="sm">
        {product_data.map((card) => (
          <Card sx={{ maxWidth: 345 }} key={card._id}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={card.imageURL}
                alt="green iguana"
              />
              <CardContent>
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
        ))}
      </Container>
    </>
  );
};

export default Product_card;
