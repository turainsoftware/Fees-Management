import React from "react";
import studentListIcon from "./../../assets/images/student/student-list-icon.svg";
import batchListIcon from "./../../assets/images/student/batch-list-icon.svg";
import newRegisterIcon from "./../../assets/images/student/new-register-list-icon.svg";
import classListIcon from "./../../assets/images/student/class-list-icon.svg";
import { Link } from "react-router-dom";

const StudentsNav = () => {
  return (
    <section className="student-nav my-3">
      <div className="container">
        <div className="row g-2">
          <Link className="col-6" to={'/student-list'}>
            <div className="inner-contain px-14 light-blue-border bg-white radius-8 d-flex align-items-center justify-content-between">
              <h6 className="mb-0 fs-14">Student’s List</h6>
              <img src={studentListIcon} alt="Student List" />
            </div>
          </Link>
          <Link to={"/batch-list"} className="col-6" >
            <div className="inner-contain px-14 light-blue-border bg-white radius-8 d-flex align-items-center justify-content-between">
              <h6 className="mb-0 fs-14">Batch List</h6>
              <img src={batchListIcon} alt="Student List" />
            </div>
          </Link>
          <Link className="col-6" to={"/new-student"}>
            <div className="inner-contain px-14 light-blue-border bg-white radius-8 d-flex align-items-center justify-content-between">
              <h6 className="mb-0 fs-14">New Register</h6>
              <img src={newRegisterIcon} alt="Student List" />
            </div>
          </Link>
          <Link to={"/class-list"} className="col-6">
            <div className="inner-contain px-14 light-blue-border bg-white radius-8 d-flex align-items-center justify-content-between">
              <h6 className="mb-0 fs-14">Class List</h6>
              <img src={classListIcon} alt="Student List" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StudentsNav;
