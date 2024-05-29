import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const Navigate = useNavigate();
  const location =useLocation()
  function SearchHandler(e) {
    e.preventDefault();
    Navigate(`/search/${keyword}`);
  }
  const clearInput=()=>{
    setKeyword('')
  }

  useEffect(()=>{
    if(location.pathname==='/'){clearInput()}
  },[location])
  
  return (
    <form onSubmit={SearchHandler}>
      <div className="input-group">
        <input
          type="text"
          id="search_field"
          className="form-control"
          placeholder="Enter Product Name ..."
          onChange={(e) => setKeyword(e.target.value)}
          value={keyword}
        />
        <div className="input-group-append">
          <button id="search_btn" className="btn">
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </form>
  );
};

export default Search;
