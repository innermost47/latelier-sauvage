import React, { useState } from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import "../style/login.css";
import axios from "axios";
import { url } from "../js/Constantes";
import { useNavigate } from "react-router-dom";
import Auth from "../js/Auth";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const redirect = () => navigate("/back");
  const login = () => {
    axios
      .post(
        url + "api/login_check",
        { username: username, password: password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        Auth.login(() => {
          redirect();
        });
      })
      .catch((error) => {
        alert("mauvais mail ou mot de passe", error.response);
        console.log(error);
      });
  };

  return (
    <div>
      <Navigation />
      <div className="background">
        <div className="login">
          <h2>Login</h2>
          <div className="form-container mt-3">
            <input
              type="text"
              placeholder="Username"
              className="form-control"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div className="form-container mt-3">
            <input
              type="password"
              placeholder="Password"
              className="form-control"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button
            className="btn btn-green mt-3 text-light float-start"
            onClick={login}
          >
            Login
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
