import React from 'react';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function Navbar() {
const cartitemObj = useSelector(store=>store.CartReducer);
  return (
    <div className='custom-nav'>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
            <div className="row">
                <div className="col">
                <Link to="/">
                <span className='project_title'>Ecom React Project</span>
                </Link>
                </div>
                <div className="col text-center">
                  <Link to="/additem">
                    <button type="button" className="btn btn-warning new-item-btn">add new item</button>
                  </Link>

                </div>
                <div className="col text-end">
                <Link to="/cart">
                  <button type="button" className="btn btn-danger">cart
                  <span className="badge bg-dark">{cartitemObj.cartitems.length}</span>
                  </button>
                </Link>
                </div>
            </div>
        </div>
    </nav>
    </div>
  )
}
