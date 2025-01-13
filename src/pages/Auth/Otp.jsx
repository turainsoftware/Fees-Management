import React from 'react';

// Images
import Logo from './../../assets/images/logo.svg'
import OtpSvg from './../../assets/images/otp.svg'

const Otp = () => {
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
                    <div
                      className="opt-area d-flex align-items-center justify-content-center otp-input-fields "
                    >
                      <input
                        type="number"
                        id="txt_otp1"
                        autoFocus
                        className="otp__digit otp__field__1 ms-0"
                      />
                      <input
                        type="number"
                        id="txt_otp2"
                        className="otp__digit otp__field__2"
                      />
                      <input
                        type="number"
                        id="txt_otp3"
                        className="otp__digit otp__field__3"
                      />
                      <input
                        type="number"
                        id="txt_otp3"
                        className="otp__digit otp__field__3"
                      />
                      <input
                        type="number"
                        id="txt_otp4"
                        className="otp__digit otp__field__4 me-0"
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