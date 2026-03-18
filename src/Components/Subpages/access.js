import "./mens.css";
import { Accessdata } from "../../constant/accessdata";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addToCart } from "../../redux/cart";
import { addToFav } from "../../redux/fav";

function Access() {

  const dispatch = useDispatch();
  const navigate = useNavigate()

  function handleAdd(item) {
    dispatch(addToCart(item));
    navigate("/cart");
  }

  function handleAddFav(item) {
    dispatch(addToFav(item));
    // navigate("/wishlist");
  }

  return (
    <section className="mens-section">
      <h2 className="section-title" >Accessories</h2>

      <div className="mens-grid">

        {
          Accessdata.map((item) => (
            <div className="product-card" key={item.id}>
              
              <div className="position-relative">
                <button className="btn btn-sm position-absolute top-0 end-0 m-2"
                  onClick={() => handleAddFav(item)}>
                  <i class="fa-solid fa-heart" style={{ color: "#ff0000e0", size: "auto" }}></i>
                </button>
              </div>

              <img src={item.img} alt="Mens Belt 1" />
              <h3>{item.title}</h3>
              <p>{item.price}</p>
               < button type="button" class="btn btn-white  p-2" onClick={() => handleAdd(item)} > Add to Cart </button>
                       < button type="button" class="btn btn-warning p-2">Quick Check</button>

            </div>
          ))
        }

      </div>
    </section>


  );

}

export default Access;
