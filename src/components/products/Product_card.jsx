import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "../products/Products.css";
import { Box, Button, CardActions, Container } from "@mui/material";
import { CardActionArea } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/reducer_functions/ProductSlice";
import { Link } from "react-router-dom";

const Product_card = ({ selectedCategory }) => {
   
  const dispatch = useDispatch()
   
   useEffect(()=>{
      get_product()
   },[])

   const get_product = async () => {
    const response = await fetch(`http://localhost:3001/api/v1/products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      console.log("Data not found");
      return;
    }
    const data = await response.json();
    dispatch(setProducts(data));
  };

  const product_data = useSelector((state) => state.products.products);

  const filteredProducts = selectedCategory
    ? product_data.filter((product) => product.category === selectedCategory)
    : product_data;

  return (
    <Container>
     <Box sx={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap", margin: "30px" }}>
        {filteredProducts.map((card) => (
        
            <Card
              key={card.id}
              sx={{ maxWidth: 345, width: 300, borderRadius: "15px", boxShadow: 4 }}
              style={{ margin: "20px", marginBottom: "30px", height: "420px" }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200" 
                  image={card.imageURL}
                  alt={card.name} 
                  style={{ borderTopLeftRadius: "15px", borderTopRightRadius: "15px"}}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" align="center" style={{ maxHeight: "35px", overflow: "hidden" }}>
                    {card.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" align="center" style={{ height:"40px", maxHeight: "40px", overflow: "hidden" }}>
                    {card.description}
                  </Typography>
                  <Typography variant="h6" align="center" mt={2}>
                    {card.price} Rs
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions sx={{ display: "flex", justifyContent: "center" }}>
                <Link to={`/product_details/${card._id}`}>
                <Button variant="contained" size="small" color="primary">
                  BUY NOW
                </Button>
                </Link>
                <Button variant="contained" size="small" color="secondary">
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
         
        ))}
     </Box>
    </Container>
  );
};

export default Product_card;
