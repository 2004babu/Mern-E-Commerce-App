import {combineReducers, configureStore}from '@reduxjs/toolkit'
import {thunk}  from 'redux-thunk'
import productsReducer from './components/slices/ProductsSlice';
import productReducer from './components/slices/productSlice';


const reducer=combineReducers({
    productsState:productsReducer,
    productState:productReducer
})

 const store=configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})

export default  store;