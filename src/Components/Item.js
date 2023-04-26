import React from "react";
import { useSelector, useDispatch } from "react-redux";

let cartData = [],cartDataobj = {};
const Item  = ({item}) =>  {
  const dispatch = useDispatch();
  
 
  const addItem = (cartitem) => {
    const {title,image,price} = cartitem;
    //let existItem = false;
    if(cartDataobj[title]){
      cartDataobj[title]["qty"]++;
    }
    else {
      cartDataobj[title] = {
        title: title,
        image: image,
        price: price,
        qty : 1
      }
    }
    const cartDataarray = Object.values(cartDataobj);
    // const item = {
    //   product_name: cartitem.title,
    //   product_image_url: cartitem.image,
    //   price: cartitem.price,
    //   qty : 1
    // };
    // if(!cartData.length){
    //   cartData.push(item);
    // }
    // else{
    //   cartData.map((element,index) => {
    //     if (element.product_name === item.product_name) {
    //       existItem = true;
    //       cartData[index].qty = element.qty+1
    //     }
    //   })
    //   if(!existItem) {
    //     cartData.push(item);
    //   }
    //}
    console.log(cartDataarray);
    dispatch({ type: "ADD_CARTITEM", payload: cartDataarray });
  };
  return (
    <div className="col-sm-4">
      <div className="card">
        <img src={item.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <span className="card-text"> &#x20B9;{item.price}</span>
          <button className="btn btn-primary float-end" onClick={(e) => addItem(item)}>add to bag</button>
        </div>
      </div>
    </div>
  );
}
export default Item;
