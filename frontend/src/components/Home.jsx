import React, { Fragment, useEffect, useState } from "react";
import {getProducts} from '../actions/productsActions'
import {useDispatch, useSelector}from 'react-redux'
import MetaData from "./layouts/MetaData";
import Loader from "./layouts/Loader";
import Product from "./product/Product";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Pagination from 'react-js-pagination'
const Home = () => {
  const dispatch=useDispatch()
 const {products,loading,error,productsCount,resPerPage}=useSelector((state)=>state.productsState)
 const [currentPage,setCurrentPage]=useState(1)

 const setCurrentPageNO=(pageno)=>{
  setCurrentPage(pageno)
 }
  useEffect(()=>{
    if(error){
      return toast(error)
    }
    dispatch(getProducts(currentPage,null,null,null,null))
  },[error,dispatch,currentPage])
  return (
   <>
   {loading?<Loader/>: <Fragment>
    <MetaData Title={"buy good Products "}/>
      <h1 id="products_heading">Latest Products</h1>
      <section id="products" className="container mt-5">
        <div className="row">
        { products && products.map(product=>(
          <Product col={3} product={product} key={product._id}/>
        )) }
        </div>

        { productsCount >0 && productsCount >resPerPage ?
        <div className="d-flex justify-content-center mt-5">
        <Pagination 
             activePage={currentPage}
             onChange={setCurrentPageNO}
             totalItemsCount={productsCount}
             itemsCountPerPage={resPerPage}
             nextPageText={'Next'}
             firstPageText={'First'}
             lastPageText={'Last'}
             itemClass={'page-item'}
             linkClass={'page-link'}
        />     
 </div> : null

        }
      </section>
    </Fragment>
   }
   </>
  );
};

export default Home;
