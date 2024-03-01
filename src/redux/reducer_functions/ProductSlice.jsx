import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    products: [],
    categories:[],
    selectedCategory:"All",
    filterProduct : []
  };
let oldProductData = []  
  const ProductSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
      setProducts: (state, action) => {
        state.products = action.payload;
        oldProductData = action.payload
      },
      setCategories:(state,action)=>{
        state.categories = action.payload
      },
      setSelectedCategory: (state, action) => {
        state.selectedCategory = action.payload;
      },
      setPricefilterProduct:(state,action)=>{
        if (action.payload ==="LowToHigh"){
          const lowtohigh_sort = [...state.products].sort((a,b)=>a.price-b.price)
          state.products = lowtohigh_sort
        }
        else if(action.payload==="HighToLow"){
          const hightolow_sort = [...state.products].sort((a,b)=>b.price-a.price)
          state.products = hightolow_sort
        }
        else if(action.payload==="Default"){
          state.products = oldProductData
        }
        else{
          state.products = [...state.products]
        }
      },
      setTimeFilterProduct:(state,action)=>{
        if (action.payload === "Newest") {
          state.products = [...state.products].sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
        } 
        else if (action.payload === "Old") {
          state.products = [...state.products].sort((a, b) => new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime());
        } 
        else if (action.payload === "All Time") {
         state.products=oldProductData
        }
        else{
          state.products=[...state.products]
        }
        
      }
    },
  });

  export const { setProducts,setCategories,setPricefilterProduct,setTimeFilterProduct,setSelectedCategory } = ProductSlice.actions
  export default ProductSlice.reducer;