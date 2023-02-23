import React from "react";
import { useDispatch } from "react-redux";
function Item({ item }) {
  const dispatch = useDispatch();
  const addItem = (cartitem) => {
    const item = {
      product_name: cartitem.product_name,
      product_image_url: cartitem.product_image_url,
      price: cartitem.price,
    };
    console.log(item);
    dispatch({ type: "ADDCARTITEM", payload: item });
  };
  return (
    <div className="col-sm-4">
      <div className="card">
        <img src={item.product_image_url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.product_name}</h5>
          <span className="card-text"> &#x20B9;{item.price}</span>
          <button className="btn btn-primary float-end" onClick={() => addItem(item)}>add to bag</button>
        </div>
      </div>
    </div>
  );
}
export default Item;
