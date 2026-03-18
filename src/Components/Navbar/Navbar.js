import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useSelector } from "react-redux";

const Navbar = () => {

  const cartItems = useSelector((state) => state.cart.items);
  const favItems = useSelector((state) => state.fav.items);


  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm py-3">
      <div className="container">

        <Link className="navbar-brand fw-bold fs-4 " to="/">
          Rait Watch
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
        >
          <span className="navbar-toggler-icon">

          </span>
        </button>


        <div className="collapse navbar-collapse" id="mainNavbar">


          <ul className="navbar-nav mx-auto gap-2">

            <li className="nav-item ">
              <Link className="nav-link text-dark" to="/">Home</Link>
            </li>

            <li className="dropdown">
              <span className="dropbtn">Collections ▾</span>

              <div className="dropdown-content">
                <Link to="/collections/mens">Mens</Link>
                <Link to="/collections/womens">Womens</Link>
                <Link to="/collections/accessories">Accessories</Link>
              </div>
            </li>

            <li className="dropdown">
              <span className="dropbtn">Shop ▾</span>

              <div className="dropdown-content">
                <Link to="/collections/bestreviewed">Best Reviewed</Link>
                <Link to="/collections/newarrivals">New Arrivals</Link>
                <Link to="/collections/bestsellers">Best Sellers</Link>
              </div>
              
            </li>

            <li className="nav-item">
              <Link className="nav-link text-dark" to="/">About</Link>
              {/* <span className="dropbtn">About</span> */}

              {/* <div className="dropdown-content">
                <Link to="/collections/about">About Us</Link>
                <Link to="/collections/blog">Blog</Link>
                <Link to="/collections/contact">Contact</Link>
              </div> */}
              
            </li>

            <li className="nav-item ">
                
                   <Link className="nav-link text-dark" to="/admin-panel">
                     <span>admin</span>
                    </Link>
             
            </li>

          </ul>


          <div className="d-flex align-items-center gap-4">

            <Link to="/wishlist" className="text-dark fs-5 position-relative">
              <i className="fa-regular fa-heart">
                   <h6 className="position-absolute top-0 px-4">
                   {favItems.length}
              
                    </h6>
                    </i>
            </Link>


            <Link to="/cart" className="text-dark fs-5 position-relative">
              <i className="fa-solid fa-cart-shopping">
                <h6 className="position-absolute top-0 px-4">
                {cartItems.length }
                </h6>
                </i>
              {/* <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            >
              {cartItems.length } 
            </span> */}
            </Link>


            <Link to="/login" className="text-dark fs-5">
              <i className="fa-regular fa-user"></i>
            </Link>

          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
