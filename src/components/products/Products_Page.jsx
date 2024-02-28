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

const Products_Page = () => {
  useEffect(() => {
    fetchData();
    get_product();
  }, []);

  const [value, setValue] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("");
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.products.categories);

  const fetchData = async () => {
    try {
      console.log("working on it ..................");
      const response = await fetch(
        "http://localhost:3001/api/v1/products/categories",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        console.log("Data not found");
        return;
      }

      const data = await response.json();
      dispatch(setCategories(data));
    } catch (error) {
      console.log(error);
    }
  };

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

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setSelectedCategory(categories[newValue]);
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Drawer_filter/>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {categories.map((category, index) => (
            <Tab key={index} label={category} />
          ))}
        </Tabs>
      </Box>

      <Product_card/>
    </>
  );
};

export default Products_Page;
