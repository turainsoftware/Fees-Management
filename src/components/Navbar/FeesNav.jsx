import React from "react";
import feesRecivedImg from "./../../assets/images/dashboard/fees-receive.svg";
import studentListImg from "./../../assets/images/dashboard/fees-list.svg";
import { Link } from "react-router-dom";

const FeesNav = () => {
  return (
    <section class="student-nav my-3">
      <div class="container">
        <div class="row g-2">
          <Link to={'/fees-recive'} class="col-6" href="fees-receive.html">
            <div class="inner-contain px-14 light-blue-border bg-white radius-8 d-flex align-items-center justify-content-between">
              <h6 class="mb-0 fs-14">Fees Receive</h6>
              <img src={feesRecivedImg} alt="Student List" />
            </div>
          </Link>
          <Link class="col-6" href="fees-list.html">
            <div class="inner-contain px-14 light-blue-border bg-white radius-8 d-flex align-items-center justify-content-between">
              <h6 class="mb-0 fs-14">Fees List</h6>
              <img src={studentListImg} alt="Student List" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeesNav;
