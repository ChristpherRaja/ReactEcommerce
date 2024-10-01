import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartCount : 0,
    cartProducts:{
        product:[],
        productCount:0
    },
    cartTotal:0
}

export const CartSlice = createSlice({
    name:"cartSlice",
    initialState,
    reducers:{
        addCartCount:(state,action)=>{action.payload?state.cartCount=state.cartCount+action.payload:state.cartCount=state.cartCount+1},
        reduceCartCount:(state,action)=>{action?state.cartCount=state.cartCount-action.payload:state.cartCount=state.cartCount-1},
        setCartProducts:(state,action)=>{state.cartProducts.product=[...state.cartProducts.product,action.payload]},
        removeCartProducts:(state,action)=>{state.cartProducts.product=action.payload},
        setProductCount:(state,action)=>{state.cartProducts.productCount=state.cartProducts.productCount+action.payload},
        reduceProductCount:(state,action)=>{state.cartProducts.productCount=state.cartProducts.productCount-action.payload},
    }
})

export const {addCartCount,reduceCartCount,setCartProducts,removeCartProducts,setProductCount,reduceProductCount} = CartSlice.actions;
export default CartSlice.reducer;