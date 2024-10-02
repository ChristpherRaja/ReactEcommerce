import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allProducts:[],
    selectedProduct:{},
    search:""
}

export const HomeSlice = createSlice({
    name:'homeSlice',
    initialState,
    reducers:{
        setAllProducts:(state,action)=>{state.allProducts=action.payload},
        setSelectedProduct:(state,action)=>{state.selectedProduct=action.payload},
        setSearch:(state,action)=>{state.search=action.payload}
    }
})

export const {setSelectedProduct,setAllProducts,setSearch} = HomeSlice.actions;
export default HomeSlice.reducer;