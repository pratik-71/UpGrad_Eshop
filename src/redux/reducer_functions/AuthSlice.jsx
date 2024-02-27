import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isAuthenticated : false,
    isAdmin : false,
    ErrorMessege : ''
}

const AuthSlice = createSlice({
    name:'Auth',
    initialState,
    reducers:{
        setisAuthenticated : (state,action) =>{
            state.isAuthenticated = action.payload;
        },
        setErrorMessege :(state,action)=>{
            state.ErrorMessege=action.payload;
        },
        setisAdmin : (state,action)=>{
            state.isAdmin = action.payload;
        }
    }
})

export const { setisAdmin,setisAuthenticated,setErrorMessege } = AuthSlice.actions;
export default AuthSlice.reducer;
