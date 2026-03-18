import React from "react";
import { useSelector } from "react-redux";

const PlaceOrder = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const totalPrice = cartItems.reduce((sum, item) => {
    const price = item.price
      ? parseFloat(String(item.price).replace(/[^0-9.]/g, ""))
      : 0;
    return sum + price * item.quantity;
  }, 0);

  return (
    <div className="container mt-4">
      <h2 className="fw-bold mb-4">Place Your Order</h2>

      <div className="row">

        {/* LEFT – ADDRESS */}
        <div className="col-lg-7 col-md-6 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="fw-bold mb-3">Delivery Address</h5>

              <form>
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Full Name"
                  required
                />

                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Mobile Number"
                  required
                />

                <textarea
                  className="form-control mb-3"
                  placeholder="Full Address"
                  rows="3"
                  required
                />

                <div className="row">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control mb-3"
                      placeholder="City"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control mb-3"
                      placeholder="Pincode"
                      required
                    />
                  </div>
                </div>

                <input
                  type="text"
                  className="form-control"
                  placeholder="State"
                  required
                />
              </form>
            </div>
          </div>
        </div>

        {/* RIGHT – ORDER SUMMARY */}
        <div className="col-lg-5 col-md-6">
          <div className="card shadow-sm sticky-top" style={{ top: "80px" }}>
            <div className="card-body">
              <h5 className="fw-bold mb-3">Order Summary</h5>

              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="d-flex justify-content-between align-items-center mb-3"
                >
                  <div className="d-flex align-items-center gap-3">
                    <img
                      src={item.img}
                      alt={item.title}
                      style={{
                        width: "60px",
                        height: "60px",
                        objectFit: "cover",
                      }}
                    />
                    <div>
                      <p className="mb-0 fw-semibold">{item.title}</p>
                      <small className="text-muted">
                        Qty: {item.quantity}
                      </small>
                    </div>
                  </div>
                  <span>₹{item.price}</span>
                </div>
              ))}

              <hr />

              <div className="d-flex justify-content-between fw-bold fs-5 mb-3">
                <span>Total</span>
                <span>₹{totalPrice}</span>
              </div>

              <button className="btn btn-success w-100 py-2">
                Place Order
              </button>

              <p className="text-center text-muted mt-2 mb-0">
                Cash on Delivery • Online Payment
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PlaceOrder;
