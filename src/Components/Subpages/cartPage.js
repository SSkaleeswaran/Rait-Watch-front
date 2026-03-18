import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase, removeFromCart } from "../../redux/cart";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  // console.log(cartItems)

  const handleRemove = (id) => {
    // console.log("Dispatching remove for id:", id);
    dispatch(removeFromCart(id));
  };

  const handleOrder = ()=>{
    navigate("/place-order")
  }

  const totalPrice = cartItems.reduce((sum, item) => {
    const price = item.price
      ? parseFloat(String(item.price).replace(/[^0-9.]/g, ""))
      : 0;

    const qty = item.quantity ? Number(item.quantity) : 1;

    return sum + price * qty;
  }, 0);



  return (
  <div className="container mt-4">
    <h2 className="mb-1 fw-bold">Your Cart</h2>
    <hr />

    <div className="row">

      {/* LEFT SIDE – CART ITEMS */}
      <div className="col-lg-8 col-md-7">
        {cartItems.length === 0 ? (
          <h4 className="mb-5 fw-bold">Your cart is empty</h4>
        ) : (
          cartItems.map((item, index) => (
            <div
              key={index}
              className="d-flex align-items-center mb-3 border p-3 position-relative"
            >
              <img
                src={item.img}
                alt={item.name}
                style={{ width: "120px", height: "auto" }}
              />

              <button
                className="btn btn-danger btn-sm position-absolute top-0 end-0 m-2"
                onClick={() => handleRemove(item.id)}
              >
                X
              </button>

              <div className="col ms-4">
                <h5>{item.title}</h5>
                <p>{item.price}</p>
                <button
                  className="btn btn-outline-danger btn-sm me-2"
                  onClick={() => dispatch(decrease(item.id))}
                >
                  -
                </button>
                <button className="btn border me-2">
                  {item.quantity}
                </button>
                <button
                  className="btn btn-outline-success btn-sm"
                  onClick={() => dispatch(increase(item.id))}
                >
                  +
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* RIGHT SIDE – PRICE DETAILS */}
      {cartItems.length > 0 && (
        <div className="col-lg-4 col-md-5">
          <div className="card shadow-sm border-0 sticky-top" style={{ top: "80px" }}>
            <div className="card-body">

              <h5 className="fw-bold mb-3 border-bottom pb-2">
                Price Details
              </h5>

              <div className="d-flex justify-content-between mb-2 text-muted">
                <span>Subtotal</span>
                <span>₹{totalPrice}</span>
              </div>

              <div className="d-flex justify-content-between mb-2 text-muted">
                <span>Delivery Charges</span>
                <span className="text-success fw-semibold">FREE</span>
              </div>

              <div className="d-flex justify-content-between mb-2 text-muted">
                <span>Discount</span>
                <span className="text-success">- ₹0</span>
              </div>

              <hr />

              <div className="d-flex justify-content-between fs-5 fw-bold mb-3">
                <span>Total Amount</span>
                <span className="text-dark">₹{totalPrice}</span>
              </div>

              <button className="btn btn-success w-100 py-2 fw-semibold"
              onClick={()=>handleOrder()}>
                Proceed to Payment
              </button>

              <div className="text-center mt-3">
                <small className="text-muted">
                  Secure Payments • UPI • Card • Net Banking • COD
                </small>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  </div>
);

}
