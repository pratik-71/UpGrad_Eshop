import React, { useEffect, useState } from "react";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import {
  setCategories,
  setProducts,
} from "../../redux/reducer_functions/ProductSlice";
import Product_card from "./Product_card";
import Drawer_filter from "./Drawer_filter";
import { Divider, Grid } from "@mui/material";
import Categories from "./Categories";

const Products_Page = () => {
  
  return (
    <>
      <Categories/>
     <Grid container spacing={2}>
          <Grid xs={2}>
              <Drawer_filter/>
            
          </Grid>
            <Divider orientation="vertical" flexItem />
          <Grid>
          <Product_card/>
          </Grid>
     </Grid>
    </>
  );
};

export default Products_Page;
