import React, { useRef, useEffect } from "react";

// Images
import Logo from "./../../assets/images/logo.svg";
import OtpSvg from "./../../assets/images/otp.svg";

const Otp = () => {
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleInputChange = (e, index) => {
    const value = e.target.value;
    
    // Allow only numbers
    if (!/^\d*$/.test(value)) {
      e.target.value = "";
      return;
    }

      // Restrict to a single digit
    if (value.length > 1) {
      e.target.value = value.charAt(0);
    }
    

    if (value.length === 1 && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && index > 0 && e.target.value === '') {
        inputRefs[index - 1].current.focus();
    }
};

  useEffect(() => {
    //Focus on the first input when component mounts
    inputRefs[0].current.focus();
  },[])

  return (
    <main className="wrapper home-wrapper">
      {/* ================================ 
          Login or Register 
        =================================== */}
      <section className="py-5 login h-100 justify-content-center d-flex">
        <div className="logo">
          <img src={Logo} height="30px" alt="" />
        </div>
        <div className="container mt-5 pt-4">
          <div className="row justify-content-center">
            <div className="col-11 text-center">
              <img src={OtpSvg} className="img-fluid" alt="" />
              <h1 className="fs-24 mt-30 mb-0 fw-semibold text-capitalize">
                Log In
              </h1>
              <p className="mb-0 text-color mt-10 fs-13">
                Stay connected and manage everything in one place.
              </p>
              <div className="mt-20 mb-30">
                <div className="position-relative">
                  <div id="otp" className="">
                    <div className="opt-area d-flex align-items-center justify-content-center otp-input-fields ">
                      <input
                        type="text"
                        id="txt_otp1"
                        autoFocus
                        className="otp__digit otp__field__1 ms-0"
                        maxLength="1"
                        ref={inputRefs[0]}
                        onChange={(e) => handleInputChange(e, 0)}
                        onKeyDown={(e) => handleKeyDown(e, 0)}
                      />
                      <input
                        type="text"
                        id="txt_otp2"
                        className="otp__digit otp__field__2"
                        maxLength="1"
                        ref={inputRefs[1]}
                        onChange={(e) => handleInputChange(e, 1)}
                        onKeyDown={(e) => handleKeyDown(e, 1)}
                      />
                      <input
                        type="text"
                        id="txt_otp3"
                        className="otp__digit otp__field__3"
                        maxLength="1"
                        ref={inputRefs[2]}
                         onChange={(e) => handleInputChange(e, 2)}
                         onKeyDown={(e) => handleKeyDown(e, 2)}
                      />
                      <input
                        type="text"
                        id="txt_otp4"
                         className="otp__digit otp__field__3"
                         maxLength="1"
                        ref={inputRefs[3]}
                        onChange={(e) => handleInputChange(e, 3)}
                        onKeyDown={(e) => handleKeyDown(e, 3)}
                      />
                      <input
                        type="text"
                        id="txt_otp5"
                        className="otp__digit otp__field__4 me-0"
                        maxLength="1"
                        ref={inputRefs[4]}
                        onChange={(e) => handleInputChange(e, 4)}
                        onKeyDown={(e) => handleKeyDown(e, 4)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <a href="otp.html" className="btn1 otp-btn">
                Login
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Otp;