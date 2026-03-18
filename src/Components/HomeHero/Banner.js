// import React from "react";
// import "./Banner.css";

// import Banner1 from "../images/two-col-banner-1.png";
// import Banner2 from "../images/two-col-banner-2.png";
// import Banner3 from "../images/two-col-banner-3.png";

// const HeroBanner = () => {
//   return (
//     <section className="bg-secondary-subtle pt-4 mt-0">
//       <div className="container">
//         <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">

//           <div className="carousel-inner">

//             {/* SLIDE 1 */}
//             <div className="carousel-item active">
//               <div className="row banner-item text-center align-item-center">
//                 <div className="col-lg-9 d-flex">
//                   <div className="image-holder">
//                     <img src={Banner3} alt="banner" className="img-fluid" />
//                   </div>

//                   <div className="banner-content col-lg-6 p-5">
//                     <h2 className="display-2 fw-bold text-uppercase">
//                       classic RAIT
//                     </h2>
//                     <p>
//                       "For those who appreciate timeless sophistication…"
//                     </p>
//                     <a className="btn btn-outline-dark mt-3" href="">Explore collection</a>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* SLIDE 2 */}
//             <div className="carousel-item">
//               <div className="row banner-item text-center align-item-center">
//                 <div className="col-lg-9 d-flex">
//                   <div className="image-holder">
//                     <img src={Banner1} alt="banner" className="img-fluid" />
//                   </div>

//                   <div className="banner-content col-lg-6 p-5">
//                     <h2 className="display-2 fw-bold text-uppercase">
//                       sports adventure
//                     </h2>
//                     <p>"Engineered for precision under pressure…"</p>
//                     <a className="btn btn-outline-dark mt-3" href="">Explore collection</a>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* SLIDE 3 */}
//             <div className="carousel-item">
//               <div className="row banner-item text-center align-item-center">
//                 <div className="col-lg-9 d-flex">
//                   <div className="image-holder">
//                     <img src={Banner2} alt="banner" className="img-fluid" />
//                   </div>

//                   <div className="banner-content col-lg-6 p-5">
//                     <h2 className="display-2 fw-bold text-uppercase">
//                       Timeless RAIT
//                     </h2>
//                     <p>Discover the world’s finest luxury timepieces</p>
//                     <a className="btn btn-outline-dark mt-3" href="">Explore collection</a>
//                   </div>
//                 </div>
//               </div>
//             </div>

//           </div>

//           {/* CONTROLS */}
//           <button
//             className="carousel-control-prev"
//             type="button"
//             data-bs-target="#heroCarousel"
//             data-bs-slide="prev"
//           >
//             <span className="carousel-control-prev-icon"></span>
//           </button>

//           <button
//             className="carousel-control-next"
//             type="button"
//             data-bs-target="#heroCarousel"
//             data-bs-slide="next"
//           >
//             <span className="carousel-control-next-icon"></span>
//           </button>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroBanner;

import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";

import Banner1 from "../images/two-col-banner-1.png";
import Banner2 from "../images/two-col-banner-2.png";
import Banner3 from "../images/two-col-banner-3.png";

const HeroBanner = () => {
  return (
    <section className="bg-secondary-subtle pt-4 mt-0">
      <div className="container">
        <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">

          <div className="carousel-inner">

            {/* SLIDE 1 */}
            <div className="carousel-item active">
              <div className="row banner-item text-center align-items-center">
                <div className="col-lg-9 d-flex">
                  <div className="image-holder">
                    <img src={Banner3} alt="banner" className="img-fluid" />
                  </div>

                  <div className="banner-content col-lg-6 p-5">
                    <h2 className="display-2 fw-bold text-uppercase">
                      classic RAIT
                    </h2>
                    <p>
                      "For those who appreciate timeless sophistication…"
                    </p>

                    <Link className="btn btn-outline-dark mt-3" to="/shop">
                      Explore collection
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* SLIDE 2 */}
            <div className="carousel-item">
              <div className="row banner-item text-center align-items-center">
                <div className="col-lg-9 d-flex">
                  <div className="image-holder">
                    <img src={Banner1} alt="banner" className="img-fluid" />
                  </div>

                  <div className="banner-content col-lg-6 p-5">
                    <h2 className="display-2 fw-bold text-uppercase">
                      sports adventure
                    </h2>
                    <p>"Engineered for precision under pressure…"</p>

                    <Link className="btn btn-outline-dark mt-3" to="/shop">
                      Explore collection
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* SLIDE 3 */}
            <div className="carousel-item">
              <div className="row banner-item text-center align-items-center">
                <div className="col-lg-9 d-flex">
                  <div className="image-holder">
                    <img src={Banner2} alt="banner" className="img-fluid" />
                  </div>

                  <div className="banner-content col-lg-6 p-5">
                    <h2 className="display-2 fw-bold text-uppercase">
                      Timeless RAIT
                    </h2>
                    <p>Discover the world’s finest luxury timepieces</p>

                    <Link className="btn btn-outline-dark mt-3" to="/shop">
                      Explore collection
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* CONTROLS */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>

        </div>
      </div>
    </section>
  );
};

export default HeroBanner;