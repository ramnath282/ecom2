import React from "react";
import { useSelector, useDispatch } from "react-redux";
export default function Cart() {
  const cartitemtObj = useSelector((store) => store.CartReducer);
  const dispatch = useDispatch();
  const deleteItem = (itemname) => {
    let cartActionData = cartitemtObj.cartitems.filter((item) => {
      return item.product_name != itemname.product_name;
    });
    dispatch({type:"DELETEITEM", payload:cartActionData})
  };
  function getTotalprice(cartitemtObj){
    let totalVal = 0;
    cartitemtObj.cartitems.map((item, index) => (
      totalVal += parseInt(item.price)
    ))
    console.log(totalVal);
    return totalVal;
  }
  return (
    <div>
      <div className="container cart-table">
        <div className="row">
          <div className="col-12">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">S.No</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Product Image</th>
                  <th scope="col">Price</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {cartitemtObj.cartitems.length != 0 ?
                cartitemtObj.cartitems.map((item, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.product_name}</td>
                    <td className="cart-image"><img src={item.product_image_url} /></td>
                    <td>{item.price}</td>
                    <td>
                      <button
                        type="button"
                        onClick={() => deleteItem(item)}
                        className="btn btn-danger"
                      >
                        delete
                      </button>
                    </td>
                  </tr>
                )):<tr><th colSpan={4} className="text-center">There is no items in your bag</th></tr>}
              </tbody>
            </table>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">TOTAL PRICE</th>
                  <th scope="col">{getTotalprice(cartitemtObj)}</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
