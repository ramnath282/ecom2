import React, { useState } from "react";
import { useDispatch } from "react-redux";
export default function Additem({history}) {
  const [productname, setProductname] = useState();
  const [productimage, setProductimage] = useState();
  const [productprice, setProductprice] = useState();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    let product_name = document.getElementById("product_name").value,
      product_image = document.getElementById("product_image").value,
      product_price = document.getElementById("product_price").value,
      product_type = document.getElementsByClassName("product_type")[0].value;
      product_name != "" ? hideError("product_name_error") : showError("product_name_error");
      product_image != "" ? hideError("product_image_error") : showError("product_image_error");
      product_price != "" ? hideError("product_price_error") :showError("product_price_error");
      product_type != "Select Type" ? hideError("product_type_error") :showError("product_type_error"); 
      if(product_name == "" || product_image == "" || product_price == "" || product_type == "Select Type" ) {
        return false;
      }
      else{
        const item = {
          product_name: product_name,
          product_image_url: product_image,
          price: product_price,
        };
        dispatch({ type: "ADDITEM", payload: item });
        history.push('/')
      }
  };
  function showError(ele) {
    document.getElementsByClassName(ele)[0].style.display = "block";
  }
  function hideError(ele) {
    document.getElementsByClassName(ele)[0].style.display = "none";
  }
  return (
    <div className="container">
      <h1 className="add_item_title">ADD NEW ITEM TO PRODUCT COMPONENT</h1>
      <form className="add_item_form" onSubmit={handleSubmit}>
        <div className="mb-3 row">
          <label htmlFor="product_name" className="col-sm-2 col-form-label">
            Product Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="product_name"
              value={productname}
              onChange={(e) => setProductname(e.target.value)}
            />
            <div className="product_name_error" style={{display:"none"}}>entre product name</div>
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="product_image" className="col-sm-2 col-form-label">
            Product Image
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="product_image"
              value={productimage}
              onChange={(e) => setProductimage(e.target.value)}
            />
            <div className="product_image_error" style={{display:"none"}}>entre the image url</div>
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="product_price" className="col-sm-2 col-form-label">
            Product price
          </label>
          <div className="col-sm-10">
            <input
              type="number"
              className="form-control"
              id="product_price"
              value={productprice}
              onChange={(e) => setProductprice(e.target.value)}
            />
            <div className="product_price_error" style={{display:"none"}}>entre product price</div>
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="" className="col-sm-2 col-form-label">
            Category
          </label>
          <div className="col-sm-10">
          <select className="form-select form-select-sm product_type" aria-label=".form-select-sm example">
            <option defaultValue="Select Type">Select Type</option>
            <option value="mobile">mobile</option>
            <option value="laptop">laptop</option>
            <option value="tv">tv</option>
            <option value="others">others</option>
          </select>
            <div className="product_type_error" style={{display:"none"}}>Select type</div>
          </div>
        </div>
        <div className="text-center">
        <input type="submit" />
        </div>
      </form>
    </div>
  );
}
