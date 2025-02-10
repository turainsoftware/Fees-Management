import React from "react";
import feesRecivedImg from "./../../assets/images/dashboard/fees-receive.svg";
import studentListImg from "./../../assets/images/dashboard/fees-list.svg";
import { Link } from "react-router-dom";

const FeesNav = () => {
  return (
    <section className="student-nav my-3">
      <div className="container">
        <div className="row g-2">
          <Link to={'/fees-recive'} className="col-6" href="fees-receive.html">
            <div className="inner-contain px-14 light-blue-border bg-white radius-8 d-flex align-items-center justify-content-between">
              <h6 className="mb-0 fs-14">Fees Receive</h6>
              <img src={feesRecivedImg} alt="Student List" />
            </div>
          </Link>
          <Link className="col-6" href="fees-list.html">
            <div className="inner-contain px-14 light-blue-border bg-white radius-8 d-flex align-items-center justify-content-between">
              <h6 className="mb-0 fs-14">Fees List</h6>
              <img src={studentListImg} alt="Student List" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeesNav;
