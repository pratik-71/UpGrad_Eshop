import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    products: [],
    categories:[]
  };
  
  const ProductSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
      setProducts: (state, action) => {
        state.products = action.payload;
      },
      setCategories:(state,action)=>{
        state.categories = action.payload
      }
    },
  });

  export const { setProducts,setCategories } = ProductSlice.actions
  export default ProductSlice.reducer;