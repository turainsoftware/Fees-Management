import React from "react";

// Images
import logo from "./../../assets/images/logo.svg"
import loginImg from './../../assets/images/login.webp'
import { Link } from "react-router-dom";

const AuthHome = () => {
  return (
    <main className="wrapper home-wrapper">
      <section className="py-5 login h-100 justify-content-center d-flex">
        <div className="logo">
          <img src={logo} height="30px" alt="" />
        </div>
        <div className="container mt-5 pt-4">
          <div className="row justify-content-center">
            <div className="col-11 text-center">
              <img src={loginImg} className="img-fluid" alt="" />
              <h1 className="fs-2 mt-30 mb-0 fw-bold text-capitalize primary-color">
                Hello
              </h1>
              <p className="mb-0 text-color mt-10 fs-13">
                Welcome to Fees Management, where you can manage your institute
              </p>

              <div className="d-flex flex-column align-items-center mt-30">
                <Link to={"/login"} href="index.html" className="btn1 w-50">
                  Login
                </Link>
                <span className="my-3 d-inline-block fs-6 text-muted fw-medium orr">
                  or
                </span>
                <Link
                  to={"/register"}
                  className="btn1 bg-transparent text-dark border-dark w-50"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AuthHome;
