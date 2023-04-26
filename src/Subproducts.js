import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Item from "./Components/Item";
import Title from './Components/Title';
import Sidebar from "./Components/Sidebar";

export default function Subproducts() {
  const productObj = useSelector(store => store.ItemReducer);
  const FilterproductObj = useSelector(store => store.FilterReducer);
  const { filterName } = useParams();
  const dispatch = useDispatch();

  const fetchFilterproductpage = async (filtername) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/category/${filtername}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch({type:"FILTER_PRODUCT_DATA", payload : response.data});
  };

  useEffect(() => {
    if (filterName && filterName !== "") fetchFilterproductpage(filterName);
  }, [filterName]);

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
          {FilterproductObj.products.map((item) => (
              <Item item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
