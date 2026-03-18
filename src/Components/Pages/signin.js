import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Logsign.css";
import axios from "axios";

const SignIn = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");

  // input change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/auth/register", form);

      setMessage("Registration Successful!");

      setForm({
        name: "",
        email: "",
        password: ""
      });

      setTimeout(() => navigate("/login"), 1000);
    } catch (err) {
      setMessage(err.response?.data?.message || "Registration Failed. Try another email.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card shadow" id="registerBox">
            <h2 className="text-center mb-4">Register</h2>

            {message && (
              <p className={`text-center ${message.includes("Failed") ? "text-danger" : "text-success"}`}>
                {message}
              </p>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fa-solid fa-user"></i>
                  </span>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Username"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="mb-3">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fa-solid fa-envelope"></i>
                  </span>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="mb-3">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fa-solid fa-lock"></i>
                  </span>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <button className="btn btn-success w-100 mb-3" type="submit">
                Sign Up
              </button>

              <p className="text-center mt-3">
                Already have an account?
                <Link to="/login">
                  <span className="toggle-link"> Login</span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
 