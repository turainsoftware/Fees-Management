import React, { useState } from "react";
import { Link } from "react-router-dom";

// Images
import Logo from "./../../assets/images/logo.svg";
import loginImg from "./../../assets/images/login.webp";


const Login = () => {
  // State Variables
  const [mobile, setMobile] = useState("");

  // Error State Variables
  const [error, setError] = useState({});

  // Functions
  const mobileNumberValidator = (mobile) => {
    if (!mobile) {
      // setError({...error,{"Enter A mobile number"}})
      return false;
    }

    const regex = /^[6-9]\d{9}$/;
    return regex.test(mobile);
  };

  return (
    <main className="wrapper home-wrapper">
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
                    onChange={(e) => setMobile(e.target.value)}
                    type="number"
                    className="form-control shadow-none bg-white"
                    placeholder=""
                    autoComplete="off"
                    autoFocus
                  />
                  <label>Phone number</label>
                </div>
              </div>
              <Link to={"otp"} className="btn1 w-100">
                Login
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
