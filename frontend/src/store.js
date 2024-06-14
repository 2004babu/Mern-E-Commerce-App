import {combineReducers, configureStore}from '@reduxjs/toolkit'
import {thunk}  from 'redux-thunk'
import productsReducer from './components/slices/ProductsSlice';
import productReducer from './components/slices/productSlice';
import authReducer ,{checkeUserReducer}from './components/slices/authSlice';



const reducer=combineReducers({
    productsState:productsReducer,
    productState:productReducer,
    authState:authReducer,
    // userState:checkeUserReducer
})

 const store=configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})

export default  store;