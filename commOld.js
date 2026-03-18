// import { useState, useEffect } from "react";
// import axios from "axios";

// const AdminPanel = () => {
//   const [title, setTitle] = useState("");
//   const [price, setPrice] = useState("");
//   const [image, setImage] = useState(null);
//   const [products, setProducts] = useState([]);
//   const [editId, setEditId] = useState(null);

//   // Load products
//   const fetchProducts = async () => {
//     const res = await axios.get("http://localhost:5000/api/products");
//     setProducts(res.data);
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   // Add or Update
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("title", title);
//     formData.append("price", price);
//     if (image) formData.append("image", image);

//     if (editId) {
//       await axios.put(
//         `http://localhost:5000/api/products/${editId}`,
//         formData,
//         { headers: { "Content-Type": "multipart/form-data" } }
//       );
//     } else {
//       await axios.post(
//         "http://localhost:5000/api/products",
//         formData,
//         { headers: { "Content-Type": "multipart/form-data" } }
//       );
//     }

//     setTitle("");
//     setPrice("");
//     setImage(null);
//     setEditId(null);
//     fetchProducts();
//   };


//   const deleteProduct = async (id) => {
//     await axios.delete(`http://localhost:5000/api/products/${id}`);
//     fetchProducts();
//   };

//   const startEdit = (product) => {
//     setEditId(product._id);
//     setTitle(product.title);
//     setPrice(product.price);
//   };

//   return (
//     <div className="container mt-4">
//       <h2>Admin Panel</h2>

//       {/* FORM */}
//       <form onSubmit={handleSubmit} className="border p-3 rounded mb-3">
//         <input
//           type="text"
//           className="form-control mb-2"
//           placeholder="Product Name"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           required
//         />

//         <input
//           type="number"
//           className="form-control mb-2"
//           placeholder="Product Price"
//           value={price}
//           onChange={(e) => setPrice(e.target.value)}
//           required
//         />

//         {/* FILE INPUT ADDED */}
//         {!editId && (
//           <input
//             type="file"
//             className="form-control mb-2"
//             onChange={(e) => setImage(e.target.files[0])}
//             required
//           />
//         )}

//         <button className="btn btn-primary">
//           {editId ? "Update Product" : "Add Product"}
//         </button>
//       </form>

//       {/* all */}
//       <h4>All Products</h4>
//       {products.map((p) => (
//         <div
//           key={p._id}
//           className="d-flex justify-content-between align-items-center border rounded p-2 mb-2">

//           {p.image && (
//             <img
//               src={`http://localhost:5000/uploads/${p.image}`}
//               alt="product"
//               style={{ width: "60px", height: "60px", objectFit: "cover", borderRadius: "5px" }}
//             />
//           )}


//           <div> <strong>{p.title}</strong> — ₹{p.price} </div>

//           <div>
//             <button
//               className="btn btn-warning btn-sm me-2"
//               onClick={() => startEdit(p)}
//             >
//               Edit
//             </button>
//             <button
//               className="btn btn-danger btn-sm"
//               onClick={() => deleteProduct(p._id)}
//             >
//               Delete
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AdminPanel;