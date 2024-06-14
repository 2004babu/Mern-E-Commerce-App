import React, { Fragment, useEffect, useState } from "react";
import { getProducts } from "../../actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import MetaData from ".././layouts/MetaData";
import Loader from ".././layouts/Loader";
import Product from ".././product/Product";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Pagination from "react-js-pagination";
import { useParams } from "react-router-dom";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap.css";


const Home = () => {
  const dispatch = useDispatch();
  const { products, loading, error, productsCount, resPerPage } = useSelector(
    (state) => state.productsState
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([1, 1000]);
  const [priceChanged, setPriceChanged] = useState(price);
  const [category, setCategory] = useState(null);
  const [rating, setRating] = useState(null);
  const { keyword } = useParams();
  
  const setCurrentPageNO = (pageno) => {
    setCurrentPage(pageno);
  };
  const Categries = [
    "Electronics",
    "Mobile Phones",
    "Laptops",
    "Accessories",
    "Headphones",
    "Food",
    "Books",
    "Clothes/Shoes",
    "Beauty/Health",
    "Sports",
    "Outdoor",
    "Home",
  ];
  useEffect(() => {
    if (error) {
      return toast(error);
    }
    dispatch(getProducts(currentPage, keyword, priceChanged, rating, category));
  }, [error, dispatch, priceChanged, currentPage, keyword, category, rating]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData Title={"buy good Products "} />
          <h1 id="products_heading">Search Products</h1>
          <section id="products" className="container mt-5">
            <div className="row">
              <div className="col-6 col-md-3 mb-5 mt-5">
                <div className="px-5" onMouseUp={() => setPriceChanged(price)}>
                  <Slider
                    range={true}
                    marks={{
                      1: "$1",
                      1000: "$1000",
                    }}
                    min={1}
                    max={1000}
                    defaultValue={price}
                    onChange={(price) => {
                      setPrice(price);
                    }}
                    // handleRender={
                    //   renderProps=>{
                    //     return (
                    //       <Tooltip overlay={`${renderProps.props['aria-valuenow']}`}>
                    //         <div> {...renderProps.props}</div>
                    //       </Tooltip>
                    //     )
                    //   }
                    // }
                  />

                  <hr className="my-10" />

                  <div className="mt-5">
                    <h3 className="mb-3"> Categories</h3>
                    <ul className="pl-0">
                      {Categries.map((categoryy) => (
                        <li
                          key={categoryy}
                          onClick={() => setCategory(categoryy)}
                          style={{ cursor: "pointer", listStyleType: "none" }}
                        >
                          {categoryy}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <hr className="my-10" />
                  <div className="mt-5">
                    <h3 className="mb-3"> ratings</h3>
                    <ul className="pl-0">
                      {[5,4,3,2,1].map((star) => (
                        <li
                          key={star}
                          onClick={() => setRating(star)}
                          style={{ cursor: "pointer", listStyleType: "none" }}
                        >
                          <div className="rating-outer">
                            <div className="rating-inner" style={{width:`${star*20}%`}}></div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-9">
                <div className="row">
                  {products &&
                    products.map((product) => (
                      <Product col={4} product={product} key={product._id} />
                    ))}
                </div>
              </div>
            </div>

            {productsCount > 0 && productsCount > resPerPage ? (
              <div className="d-flex justify-content-center mt-5">
                <Pagination
                  activePage={currentPage}
                  onChange={setCurrentPageNO}
                  totalItemsCount={productsCount}
                  itemsCountPerPage={resPerPage}
                  nextPageText={"Next"}
                  firstPageText={"First"}
                  lastPageText={"Last"}
                  itemClass={"page-item"}
                  linkClass={"page-link"}
                />
              </div>
            ) : null}
          </section>
        </Fragment>
      )}
    </>
  );
};

export default Home;
