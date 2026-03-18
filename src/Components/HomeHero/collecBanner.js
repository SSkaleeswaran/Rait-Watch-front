import React from "react";
import { Link } from "react-router-dom";
import "./collecBanner.css";

import menimg from "../images/category-banner-1.jpg";
import womenimg from "../images/category-banner-2.jpg";
import accessimg from "../images/businessman-accessories.jpg";

function CollecBanner() {
    return (
        <section className="pt-5 pb-0">
            <div className="container">
                 <h3 className="text-center mb-5 fw-bold">Category</h3>
                <div className="row g-4 justify-content-center">

                    {/* Mens */ }
                    <div className="col-6 col-md-4 col-lg-3">
                        <Link to="/collections/mens" className="category-card text-center">
                            <div className="img-wrapper">
                                <img src={menimg} className="category-img" alt="Mens" />
                                <div className="overlay"></div>
                            </div>
                            <h5 className="mt-2 category-title">Mens</h5>
                        </Link>
                    </div>

                    {/* Womens */}
                    <div className="col-6 col-md-4 col-lg-3">
                        <Link to="/collections/womens" className="category-card text-center">
                            <div className="img-wrapper">
                                <img src={womenimg} className="category-img" alt="Womens" />
                                <div className="overlay"></div>
                            </div>
                            <h5 className="mt-2 category-title">Womens</h5>
                        </Link>
                    </div>

                    {/* Accessories */}
                    <div className="col-6 col-md-4 col-lg-3">
                        <Link to="/collections/accessories" className="category-card text-center">
                            <div className="img-wrapper">
                                <img src={accessimg} className="category-img" alt="Accessories" />
                                <div className="overlay"></div>
                            </div>
                            <h5 className="mt-2 category-title">Accessories</h5>
                        </Link>
                    </div>

                </div>
            </div>
          <hr></hr>
        </section>
    );
}

export default CollecBanner;
