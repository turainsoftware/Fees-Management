import React from "react";

// Images
import logo from "./../../assets/images/logo.svg"
import loginImg from './../../assets/images/login.webp'
import { Link } from "react-router-dom";

const AuthHome = () => {
  return (
    <main class="wrapper home-wrapper">
      <section class="py-5 login h-100 justify-content-center d-flex">
        <div class="logo">
          <img src={logo} height="30px" alt="" />
        </div>
        <div class="container mt-5 pt-4">
          <div class="row justify-content-center">
            <div class="col-11 text-center">
              <img src={loginImg} class="img-fluid" alt="" />
              <h1 class="fs-2 mt-30 mb-0 fw-bold text-capitalize primary-color">
                Hello
              </h1>
              <p class="mb-0 text-color mt-10 fs-13">
                Welcome to Fees Management, where you can manage your institute
              </p>

              <div class="d-flex flex-column align-items-center mt-30">
                <Link to={"/login"} href="index.html" class="btn1 w-50">
                  Login
                </Link>
                <span class="my-3 d-inline-block fs-6 text-muted fw-medium orr">
                  or
                </span>
                <a
                  href="teacher-register.html"
                  class="btn1 bg-transparent text-dark border-dark w-50"
                >
                  Register
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AuthHome;
