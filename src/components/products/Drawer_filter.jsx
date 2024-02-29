import { Checkbox, Container, Divider, FormControlLabel, FormGroup, Grid } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setPricefilterProduct, setTimeFilterProduct } from "../../redux/reducer_functions/ProductSlice";

const Drawer_filter = () => {
  const dispatch = useDispatch()
  const [selectedPriceOption, setSelectedPriceOption] = useState(null);
  const [selectAvailability,setSelectedAvailability] = useState(null);

  const handlePriceCheckboxChange = (option) => {
    setSelectedPriceOption(option);
    if(option=="LowToHigh"){
        dispatch(setPricefilterProduct("LowToHigh"))
    }
    if(option=="HighToLow"){
      dispatch(setPricefilterProduct("HighToLow"))
    }
    if(option==="Default"){
      dispatch(setPricefilterProduct("Default"))
    }
  };
  const handleArrivalCheckboxChange = (option) => {
    setSelectedAvailability(option);
    if(option==="Newest"){
      dispatch(setTimeFilterProduct("Newest"))
    }
    if(option==="Old Stock"){
      dispatch(setTimeFilterProduct("Old"))
    }
    if(option==="All Time"){
      dispatch(setTimeFilterProduct("All Time"))
    }
  };

  return (
    <Container style={{ marginTop: '20px' }}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid sx={{marginBottom:"20px"}}>
          <h3>Filter Products</h3>
          <Divider sx={{marginTop:"8px"}}/>
        </Grid>
        <Grid sx={{marginTop:"20px"}}>
          <h5>Price</h5>
          <FormGroup>
          <FormControlLabel
              control={
                <Checkbox
                  checked={selectedPriceOption === "Default"}
                  onChange={() => handlePriceCheckboxChange("Default")}
                />
              }
              label="Default"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedPriceOption === "LowToHigh"}
                  onChange={() => handlePriceCheckboxChange("LowToHigh")}
                />
              }
              label="Low to High"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedPriceOption === "HighToLow"}
                  onChange={() => handlePriceCheckboxChange("HighToLow")}
                />
              }
              label="High to Low"
            />
          </FormGroup>
        </Grid>
        <Grid sx={{marginTop:"20px"}}>
          <h5>Availability</h5>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectAvailability === "Newest"}
                  onChange={() => handleArrivalCheckboxChange("Newest")}
                />
              }
              label="New Arrivals"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectAvailability === "Old"}
                  onChange={() => handleArrivalCheckboxChange("Old")}
                />
              }
              label="Old Stock"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectAvailability === "All Time"}
                  onChange={() => handleArrivalCheckboxChange("All Time")}
                />
              }
              label="All Time"
            />
          </FormGroup>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Drawer_filter;
