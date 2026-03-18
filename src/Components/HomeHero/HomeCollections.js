import React from "react";

import { HomeCollectiondata } from "../../constant/homeCollectiondata";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/cart";
import { addToFav } from "../../redux/fav";

function HomeCollections() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function addCart(item){
    dispatch(addToCart(item))
     navigate("/cart");
  }

  function addfav(item){
    dispatch(addToFav(item))
    navigate("/wishlist");
  }

  return (
    <section className="py-5">
      <div className="container">

        <h3 className="text-center mb-5 fw-bold">Our Collections</h3>

        <div className="row g-4">

          {
            HomeCollectiondata.map((item) => (
              <div className="col-6 col-md-4 col-lg-3">
                <div className="card border-0 shadow-sm h-100 d-flex flex-column" key={item.id}>
                  <img src={item.img} className="card-img-top img-fluid" alt="" />
                  <div className="card-body mt-auto text-center">
                    <h6 className="text-uppercase mb-1">{item.title}</h6>
                    <p className="text-muted fw-semibold">{item.price}</p>
                    <button className="btn btn-sm position-absolute top-0 end-0 m-2"
                                  onClick={()=>addfav(item)}>
                                    <i class="fa-solid fa-heart" style={{color: "#ff0000e0", size: "auto"}}></i>
                       </button>
                       < button type="button" class="btn btn-outline-danger p-2" onClick={()=>addCart(item)}>Add to Cart</button>
                       < button type="button" class="btn btn-warning p-2">Quick Check</button>
                  </div>
                </div>
              </div>
            ))
          }


        </div>
      </div>
    </section>
  );
}

export default HomeCollections;
