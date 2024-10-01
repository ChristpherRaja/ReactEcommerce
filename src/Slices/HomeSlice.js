import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedProduct:{},
    serach:""
}

export const HomeSlice = createSlice({
    name:'homeSlice',
    initialState,
    reducers:{
        setSelectedProduct:(state,action)=>{state.selectedProduct=action.payload},
        setSearch:(state,action)=>{state.search=action.payload}
    }
})

export const {setSelectedProduct,setSearch} = HomeSlice.actions;
export default HomeSlice.reducer;