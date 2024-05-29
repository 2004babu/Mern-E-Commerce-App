import axios from 'axios'
import { productFail, productRequests, productSUccess } from '../components/slices/productSlice'

export const getProduct =id=> async (dispacth)=>{
    try {
        dispacth(productRequests())
        const {data}=await axios.get(`/api/v1/products/${id}`)
        dispacth(productSUccess(data))
    } catch (error) {
        dispacth(productFail(error.response.data.message))
        
    }
}
