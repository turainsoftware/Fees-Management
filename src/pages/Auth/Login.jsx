import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Images
import Logo from "./../../assets/images/logo.svg";
import loginImg from "./../../assets/images/login.webp";

const Login = () => {
  // Hooks
  const navigate = useNavigate();

  // State Variables
  const [mobile, setMobile] = useState("");

  // Error State Variables
  const [error, setError] = useState({ status: false });

  // Functions
  const mobileNumberValidator = () => {
    const regex = /^[6-9]\d{9}$/;
    if (mobile.length < 10 && mobile.length > 10) {
      return;
    }
    if (!mobile) {
      setError((prev) => ({
        status: true,
        msg: "Enter a valid mobile number",
      }));
      return false;
    }

    if (!regex.test(mobile)) {
      setError((prev) => ({
        status: true,
        msg: "Enter a valid mobile number",
      }));
      return;
    }
  };

  // Handle onchange
  const handleMobilenchange = (e) => {
    let value = e.target.value;
    if (value.length <= 10) {
      setMobile(value);
    }
  };

  const handleSubmit = () => {
    mobileNumberValidator();
    navigate("/otp");
  };

  return (
    <>
      <main className="wrapper home-wrapper bg-white">
        {/* Login or Register  */}

        <section className="py-5 login h-100 justify-content-center d-flex">
          <div className="logo">
            <img src={Logo} height="30px" alt="" />
          </div>
          <div className="container mt-5 pt-4">
            <div className="row justify-content-center">
              <div className="col-11 text-center">
                <img src={loginImg} className="img-fluid" alt="" />
                <h1 className="fs-24 mt-30 mb-0 fw-semibold text-capitalize">
                  Log In
                </h1>
                <p className="mb-0 text-color mt-10 fs-13">
                  Stay connected and manage everything in one place.
                </p>
                <div className="mt-20 mb-30">
                  <div className="input-container">
                    <input
                      value={mobile}
                      onChange={handleMobilenchange}
                      type="text"
                      className={`form-control shadow-none bg-white ${
                        error.status ? "border-danger" : ""
                      }`}
                      placeholder=""
                      autoComplete="off"
                      autoFocus
                    />
                    <label>Phone number</label>
                  </div>
                </div>
                <button onClick={handleSubmit} className="btn1 w-100">
                  Login
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;
