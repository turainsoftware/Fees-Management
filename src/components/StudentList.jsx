import React from "react";
import callIcon from "./../assets/images/dashboard/call-icon.svg";

const students = [
  {
    name: "Bikash Dubay",
    description: "Class 9th student",
    isChecked: true,
  },
  {
    name: "Bikash Dubay",
    description: "Class 9th student",
    isChecked: true,
  },
  {
    name: "Bikash Dubay",
    description: "Class 9th student",
    isChecked: true,
  },
  {
    name: "Bikash Dubay",
    description: "Class 9th student",
    isChecked: true,
  },
  {
    name: "Bikash Dubay",
    description: "Class 9th student",
    isChecked: true,
  },
];

const StudentList = () => {
  return (
    <section className="mb-3 student-list">
      <div className="container">
        <div className="inner-contain light-blue-border bg-white radius-8">
          <div className="border-bottom d-flex align-items-center justify-content-between px-14 py-14">
            <h6 className="mb-0 fw-semibold">Students List</h6>
            <a
              href="javascript:void(0);"
              className="d-flex align-items-center fs-6"
            >
              <i className="ri-equalizer-2-line fs-20 primary-color me-1"></i>
              <span className="fw-semibold primary-color">Filter</span>
            </a>
          </div>
          {students.map((student, index) => (
            <div
              key={index}
              className="px-14 d-flex align-items-center justify-content-between py-14 border-bottom"
            >
              <div>
                <h6 className="mb-1 fs-15 fw-semibold">{student.name}</h6>
                <span className="text-muted fs-13 fw-medium">
                  {student.description}
                </span>
              </div>
              <div className="d-flex align-items-center">
                <a href="#" className="me-2">
                  <img src={callIcon} height="32" alt="call-icon" />
                </a>
                <div className="form-check form-switch mb-0 ms-1 ps-0">
                  <input
                    className="form-check-input shadow-none ms-0 mt-0"
                    type="checkbox"
                    role="switch"
                    id={`flexSwitchCheckChecked-${index}`}
                    checked={student.isChecked}
                  />
                </div>
              </div>
            </div>
          ))}
          <div className="my-4 text-center">
            <a href="#" className="btn2">
              View more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentList;
