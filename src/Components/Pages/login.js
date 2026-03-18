import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Logsign.css";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const renderRun = "https://rait-watch.onrender.com";
  

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${renderRun}/api/auth/login`,
        { email, password }
      );

      localStorage.setItem("token", response.data.token);

      navigate("/");
    } catch (error) {
      if (error.response) {
        setErrorMsg(error.response.data.message);
      } else {
        setErrorMsg("Something went wrong");
      }
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5">

          <div className="card shadow" id="loginBox">
            <h2 className="text-center mb-4">Login</h2>

            {errorMsg && <div className="alert alert-danger py-2">{errorMsg}</div>}

            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fa-solid fa-user"></i>
                  </span>
                  <
                    input
                    type="email"
                    className="form-control"
                    placeholder="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    className="form-control"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <button className="btn btn-primary w-100 mb-3" type="submit">
                Login
              </button>

              <p className="text-center mt-3">
                Don't have an account?
                <Link to="/signin">
                  <span className="toggle-link"> Register </span>
                </Link>
              </p>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LogIn;
