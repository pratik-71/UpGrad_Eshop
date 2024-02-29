import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../product_info/product_info_css.css"

const Product_details = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

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

  return (
    <>
      <Grid container spacing={2}>
        <Grid xs={4}>
            <div className="image_holder">
            <img src={product.imageURL}/>
            </div>
        </Grid>
        <Grid xs={8}>
          
        </Grid>
      </Grid>
    </>
  );
};

export default Product_details;
