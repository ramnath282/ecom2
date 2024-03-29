import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import Item from "./Components/Item";
import Title from './Components/Title';
import Sidebar from "./Components/Sidebar";

export default function Product() {

  const productObj = useSelector(store => store.ItemReducer);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch({type:"FETCH_PRODUCTS",payload : response.data});
  };

  

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="container">
      <div className="row">
        <Title></Title>
        <div className="col-sm-2">
          <div>
              <Sidebar></Sidebar>
          </div>
        </div>
        <div className="col-sm-10">
          <div className="row">
            {productObj.products.map((item) => (
              <Item item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
