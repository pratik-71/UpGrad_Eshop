import { Container, Grid, Typography, TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../product_info/product_info_css.css";

const Product_details = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1); 

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/api/v1/products/${id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Product not found");
        }
        const productData = await response.json();
        setProduct(productData);
      } catch (error) {
        console.error("Error", error.message);
      }
    };

    fetchProductDetails();
  }, [id]);


  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };


  const handleBuyNow = () => {

    console.log(`Buying ${quantity} ${product?.name}(s)`);
  };

  return (
    <>
      <Container>
        <Typography variant="h4" align="center" className="product-name" style={{ marginTop: '20px' }}>
          {product?.name}
        </Typography>
        <Grid
          container
          align="center"
          spacing={4}
          className="product-details-container"
        >
          <Grid item xs={12} sm={6} md={6}>
            <img
              src={product?.imageURL}
              alt={product?.name}
              className="product-image"
              style={{ height: "500px", width: "500px", boxShadow: '4px 4px 8px grey' }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Typography
              variant="body1"
              align="center"
              className="product-description"
            >
              {product?.description}
            </Typography>
            <div style={{ marginTop: '20px' }}>
              <TableContainer component={Paper} elevation={3} style={{ boxShadow: '4px 4px 8px grey' }}>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell><strong>Category:</strong></TableCell>
                      <TableCell>{product?.category}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><strong>Manufacturer:</strong></TableCell>
                      <TableCell>{product?.manufacturer}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><strong>Available Items:</strong></TableCell>
                      <TableCell>{product?.availableItems}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
            <div style={{ marginTop: '20px' }}>
              <TextField
                type="number"
                label="Qty"
                variant="outlined"
                value={quantity}
                onChange={handleQuantityChange}
                inputProps={{ min: 1 }}
                style={{ width: '100px', marginRight: '20px' }}
              />
              <Button variant="contained" color="primary" onClick={handleBuyNow}>
                BUY NOW
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Product_details;
