import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Categories from "../../common/category/Categories";
import { Button, Container, Grid, Typography } from "@mui/material";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import { Link } from "react-router-dom";

const Confirmed_order = () => {
  const product = useSelector((state) => state.products.buy_product);
  const addressData = useSelector((state) => state.address.selected_address);
  console.log(addressData);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [success, setsuccess] = useState(false);

  useEffect(() => {
    order();
  }, []);

  // ------------------------------------ Set oder in backend - START ----------------------------
  const order = async () => {
    try {
      const authToken = localStorage.getItem("Auth-Token");

      const response = await fetch("http://localhost:3001/api/v1/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": authToken,
        },
        body: JSON.stringify({
          product: product._id,
          address: addressData._id,
          quantity: product.quantity,
        }),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        setErrorMessage(errorMessage);
        return;
      }

      if (response.ok) {
        setsuccess(true);
      }
    } catch (error) {
      console.log(error);
      setErrorMessage("An error occurred. Please try again later.");
    }
  };
  // ------------------------------------ Set oder in backend - START ----------------------------

  return (
    <>
     

      {/* -------------------------- render it only successful - STRAT --------------------------- */}
      <Container>
        {success && (
          <>
            <Typography variant="h5" align="center" sx={{ marginTop: "10px" }}>
            "Order placed successfully!
            </Typography>


           {/* product addrss column */}
            <Grid
              container
              justifyContent="center"
              spacing={4}
              sx={{ marginTop: "2px", marginBottom: "50px" }}
            >
              <Grid item xs={12} sm={4}>
                <Paper
                  sx={{
                    p: 2,
                    boxShadow: "4px 4px 8px grey",
                    marginBottom: "20px",
                  }}
                >
                  <Typography variant="h6" align="center" gutterBottom>
                    Shipping Address
                  </Typography>
                  <Typography variant="body1" align="center" gutterBottom>
                    <strong>Name:</strong> {addressData?.name}
                  </Typography>
                  <Typography variant="body1" align="center" gutterBottom>
                    <strong>Contact Number:</strong>{" "}
                    {addressData?.contactNumber}
                  </Typography>
                  <Typography variant="body1" align="center" gutterBottom>
                    <strong>City:</strong> {addressData?.city}
                  </Typography>
                  <Typography variant="body1" align="center" gutterBottom>
                    <strong>Landmark:</strong> {addressData?.landmark}
                  </Typography>
                  <Typography variant="body1" align="center" gutterBottom>
                    <strong>Street:</strong> {addressData?.street}
                  </Typography>
                  <Typography variant="body1" align="center" gutterBottom>
                    <strong>State:</strong> {addressData?.state}
                  </Typography>
                  <Typography variant="body1" align="center" gutterBottom>
                    <strong>Zipcode:</strong> {addressData?.zipCode}
                  </Typography>
                </Paper>
              </Grid>



              {/* Product Image Column */}
              <Grid item xs={12} sm={4}>
                <img
                  src={product?.imageURL}
                  alt={product?.name}
                  style={{
                    height: "300px",
                    width: "100%",
                    boxShadow: "4px 4px 8px grey",
                  }}
                />
              </Grid>

              {/* Product Information Column */}
              <Grid item xs={12} sm={4}>
                <Typography variant="h6" align="center" gutterBottom>
                  {product?.name}
                </Typography>
                <TableContainer
                  component={Paper}
                  elevation={3}
                  sx={{ boxShadow: "4px 4px 8px grey", marginBottom: "20px" }}
                >
                  <Table>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          <strong>Price of item :</strong>
                        </TableCell>
                        <TableCell>{product?.price}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <strong>Quantity :</strong>
                        </TableCell>
                        <TableCell>{product?.quantity}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <strong>Total :</strong>
                        </TableCell>
                        <TableCell>
                          {product?.price * product?.quantity}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
          </>
        )}

        {/* -------------------------- render it only successful - END --------------------------- */}

        {/* ------------------------------- button to go back - START ----------------------------- */}
        <Grid item xs={4} sm={4} sx={{ textAlign: "center" }}>
          <Link to="/">
            <Button variant="contained" color="primary" sx={{ mt: 4 }}>
              Shop More
            </Button>
          </Link>
        </Grid>
        {/* ------------------------------- button to go back - START ----------------------------- */}

        {/* ------------------------------- Show error messege - START ----------------------------- */}
        <p
          style={{
            fontSize: "14px",
            color: "red",
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          {errorMessage}
        </p>
        {/* ------------------------------- button to go back - END ----------------------------- */}
      </Container>
    </>
  );
};

export default Confirmed_order;
