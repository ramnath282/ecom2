import React, { useState,useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";


export default function Sidebar() {
    const [categorydata, setCategoryData] = useState();
    const fetchProductsFilter = async () => {
        const response = await axios
          .get("https://fakestoreapi.com/products/categories")
          .catch((err) => {
            console.log("Err: ", err);
          });
          setCategoryData(response.data);
      };
      useEffect(() => {
        fetchProductsFilter();
      },[]);    
  return (
    <div>
        <ul className="list-group">
           
          {
          Array.isArray(categorydata) ?  categorydata.map((item) => (
                <Link to={`/products/${item}`}>
                    <li className="list-group-item">{item}</li>
                </Link>
              )) : "..."
            }
        </ul>
    </div>
  )
}
