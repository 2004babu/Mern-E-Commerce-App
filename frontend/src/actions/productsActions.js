import axios from 'axios'
import {productsFail,productsRequests,productsSuccess}from '../components/slices/ProductsSlice'

export const getProducts=(currentPage,keyword,price,rating,category)=>async(dispatch)=>{
    try {
        dispatch(productsRequests())
        let link=`/api/v1/products?page=${currentPage}`
       if(keyword){
            link+=`&keyword=${keyword}`
        }
       if(price){
            link+=`&price[gte]=${price[0]}&price[lte]=${price[1]}`
        }
       if(category){
            link+=`&category=${category}`
        }
       if(rating){
            link+=`&ratings=${rating}`
        }

       const {data}=await axios.get(link); 
       dispatch(productsSuccess(data))
    } catch (error) {
        dispatch(productsFail(error.response.data.message))
    }
}