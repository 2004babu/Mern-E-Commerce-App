import { createSlice } from "@reduxjs/toolkit";

const productSlice=createSlice({
    name:"products",
    initialState:{
        loading:false
    },
    reducers:{
        productsRequests(state,action){
            return{
                loading:true
            }
        },productsSuccess(state,action){
            return {
                loading:false,
                products:action.payload.products,
                productsCount:action.payload.count,
                resPerPage:action.payload.resPerPage
            }
        },
        productsFail(state,action){
            return {
                loading:false,
                error:action.payload
            }
        }
    }
});

const {actions,reducer}=productSlice

 export const {productsFail,productsRequests,productsSuccess}=actions

 export default reducer; 