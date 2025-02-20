import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Images
import Logo from "./../../assets/images/logo.svg";
import loginImg from "./../../assets/images/login.webp";
import { authService } from "../../services/AuthService";
import Swal from "sweetalert2";
import { teacherService } from "./../../services/TeacherService";

const Login = () => {
  // Hooks
  const navigate = useNavigate();

  // State Variables
  const [mobile, setMobile] = useState("");

  // Error State Variables
  const [error, setError] = useState({ status: false, msg: "" });

  const [isTeacherExist, setIsTeacherExist] = useState(true);

  // Functions
  const mobileNumberValidator = (number) => {
    const regex = /^[6-9]\d{9}$/;
    if (!number) {
      setError({
        status: true,
        msg: "Enter a valid mobile number",
      });
      return false;
    }
    if (!regex.test(number)) {
      setError({
        status: true,
        msg: "Enter a valid mobile number",
      });
      return false;
    }
    setError({ status: false, msg: "" });
    return true;
  };

  // Handle onchange
  const handleMobilenchange = (e) => {
    let value = e.target.value;
    const numRegex = /^\d*$/;
    if (
      value.length <= 10 &&
      numRegex.test(value) &&
      (value.length === 0 || (value[0] >= 6 && value[0] <= 9))
    ) {
      setMobile(value);
      mobileNumberValidator(value);
    }
  };

  const handleSubmit = async () => {
    if (mobileNumberValidator(mobile)) {
      const data = await authService.login({ mobile: mobile });
      if (data?.status) {
        navigate("/otp", {
          state: {
            mobile: mobile,
          },
        });
      } else {
        Swal.fire({
          title: data?.message,
          text: "Teacher not found. Please check the registration details",
          icon: "error",
        });
      }
    }
  };

  const checkIsMobileExist = async () => {
    try {
      const data = await teacherService.isTeacherExist({ mobile: mobile });
      if (!data) {
        setIsTeacherExist(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (mobile.length === 10) {
      checkIsMobileExist();
    } else {
      setIsTeacherExist(true);
    }
  }, [mobile]);

  return (
    <>
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
                      onChange={handleMobilenchange}
                      type="tel"
                      className={`form-control shadow-none bg-white ${
                        error.status ? "border-danger" : ""
                      }`}
                      placeholder="Enter Mobile Number"
                      autoComplete="off"
                      autoFocus
                    />
                    {!isTeacherExist && (
                      <span
                        className="text-danger ps-2 pe-2 d-block mt-1 fs-14 fw-semibold"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        Number not registered! Please{" "}
                        <Link to={"/register"}>
                          <span className="text-primary">Register?</span>
                        </Link>
                        .
                      </span>
                    )}
                    {/* <label>Phone number</label> */}
                    {error.status && (
                      <div className="text-danger fs-12 mt-1">{error.msg}</div>
                    )}
                  </div>
                </div>
                <button
                  disabled={!isTeacherExist}
                  onClick={handleSubmit}
                  className="btn1 w-100"
                >
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
