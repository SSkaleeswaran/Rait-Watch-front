
import { useState, useEffect } from "react";
import axios from "axios";

const AdminPanel = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [products, setProducts] = useState([]);
  const [editId, setEditId] = useState(null);

  const fetchProducts = async () => {
    const res = await axios.get("http://localhost:5000/api/products");
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("price", price);
    if (image) formData.append("image", image);

    if (editId) {
      await axios.put(
        `http://localhost:5000/api/products/${editId}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
    } else {
      await axios.post(
        "http://localhost:5000/api/products",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
    }

    setTitle("");
    setPrice("");
    setImage(null);
    setEditId(null);
    fetchProducts();
  };

  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:5000/api/products/${id}`);
    fetchProducts();
     setImage(null);
  };

  const startEdit = (product) => {
    setEditId(product._id);
    setTitle(product.title);
    setPrice(product.price);
  };

  return (
  <div className="container-fluid mt-4">
    <div className="row">

      {/* LEFT SIDEBAR */}
      <div className="col-lg-2 col-md-3 bg-light vh-100 p-4 border-end">
        <h5 className="fw-bold mb-4">Admin Panel</h5>

        <ul className="list-unstyled">
          <li className="mb-3 fw-semibold text-primary">
            Update Products
          </li>
          <li className="mb-3 text-muted">
            Ordered Products
          </li>
        </ul>
      </div>

      {/* RIGHT CONTENT */}
      <div className="col-lg-10 col-md-9 px-4">

        <div className="row">

          {/* FORM CARD */}
          <div className="col-lg-4">
            <div className="card shadow-sm mb-4">
              <div className="card-body">
                <h5 className="fw-bold mb-3">
                  {editId ? "Edit Product" : "Add New Product"}
                </h5>

                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Product Name"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />

                  <input
                    type="number"
                    className="form-control mb-3"
                    placeholder="Product Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                  />

                  {!editId && (
                    <input
                      type="file"
                      className="form-control mb-3"
                      onChange={(e) => setImage(e.target.files[0])}
                      required
                    />
                  )}

                  <button className="btn btn-primary w-100">
                    {editId ? "Update Product" : "Add Product"}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* PRODUCT LIST */}
          <div className="col-lg-8">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="fw-bold mb-3">All Products</h5>

                {products.map((p) => (
                  <div
                    key={p._id}
                    className="d-flex align-items-center justify-content-between border rounded p-3 mb-3"
                  >
                    <div className="d-flex align-items-center gap-3">
                      {p.image && (
                        <img
                          src={`http://localhost:5000/uploads/${p.image}`}
                          alt="product"
                          style={{
                            width: "70px",
                            height: "70px",
                            objectFit: "cover",
                            borderRadius: "8px",
                          }}
                        />
                      )}

                      <div>
                        <h6 className="mb-1 fw-semibold">{p.title}</h6>
                        <small className="text-muted">₹{p.price}</small>
                      </div>
                    </div>

                    <div>
                      <button
                        className="btn btn-outline-warning btn-sm me-2"
                        onClick={() => startEdit(p)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => deleteProduct(p._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
);

};

export default AdminPanel;
