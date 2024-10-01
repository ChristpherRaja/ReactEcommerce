import {configureStore} from '@reduxjs/toolkit'
import CartSlice from '../Slices/CartSlice'
import HomeSlice from '../Slices/HomeSlice';

const Store = configureStore({
    reducer:{
        cartInfo:CartSlice,
        homeInfo:HomeSlice
    }
})

export default Store;