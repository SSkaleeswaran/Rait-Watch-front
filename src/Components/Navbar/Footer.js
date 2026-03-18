import React from "react";


import visa from "../images/visa-card.png";
import paypal from "../images/paypal-card.png";
import master from "../images/master-card.png";

function Footer() {
  return (
    <footer id="footer" className="mt-5 bg-light">
      <div className="container">
        <div className="row d-flex flex-wrap justify-content-between py-5">

          {/* LOGO + DESCRIPTION */}
          <div className="col-md-3 col-sm-6 mb-4">
            <div>
                <h2 className="text-danger">Rait Watch</h2>
              {/* <img src={logo} alt="logo" className="img-fluid mb-3" /> */}

              <p className="text-muted">
                Gravida massa volutpat aenean odio. Amet, turpis erat nullam fringilla elementum diam in.
              </p>

              <ul className="list-unstyled d-flex gap-3 mt-3">
                <li><a className="text-secondary"><i className="fab fa-facebook fa-lg"></i></a></li>
                <li><a className="text-secondary"><i className="fab fa-twitter fa-lg"></i></a></li>
                <li><a className="text-secondary"><i className="fab fa-youtube fa-lg"></i></a></li>
                <li><a className="text-secondary"><i className="fab fa-pinterest fa-lg"></i></a></li>
                <li><a className="text-secondary"><i className="fab fa-instagram fa-lg"></i></a></li>
              </ul>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h5 className="text-uppercase mb-4">Quick Links</h5>
            <ul className="list-unstyled text-uppercase fs-6">
              <li><a href="/" className="text-dark text-decoration-none">Home</a></li>
              <li><a href="/about" className="text-dark text-decoration-none">About</a></li>
              <li><a className="text-dark text-decoration-none">Services</a></li>
              <li><a className="text-dark text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* HELP & INFO */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h5 className="text-uppercase mb-4">Help & Info</h5>
            <ul className="list-unstyled text-uppercase fs-6">
              <li><a className="text-dark text-decoration-none">Returns & Exchanges</a></li>
              <li><a className="text-dark text-decoration-none">Shipping & Delivery</a></li>
              <li><a className="text-dark text-decoration-none">Contact Us</a></li>
              <li><a className="text-dark text-decoration-none">Find Us Easy</a></li>
              <li><a className="text-dark text-decoration-none">FAQs</a></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h5 className="text-uppercase mb-4">Contact Us</h5>
            <p>
              Questions?
              <br />
              <a href="mailto:contact@yourcompany.com"
                 className="text-dark text-decoration-none">
                contact@RaitWatch.com
              </a>
            </p>
            <p>
              Need support?
              <br />
              <a href="tel:+43720115278"
                 className="text-dark text-decoration-none">
                +91 987 654 3210
              </a>
            </p>
          </div>

        </div>
      </div>

      {/* COPYRIGHT BAR */}
      <div className="border-top py-4">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-md-6 d-flex gap-2 flex-wrap align-items-center">
              <strong>We Accept:</strong>
              <img src={visa} alt="card" />
              <img src={paypal} alt="card" />
              <img src={master} alt="card" />
            </div>

            <div className="col-md-6 text-md-end mt-3 mt-md-0">
              <p className="mb-0">
                © 2025 Rait Watch. All rights reserved. Design by
                <a className="text-dark text-decoration-none ms-1">simple</a>
              </p>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
