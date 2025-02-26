import React, { useEffect, useMemo, useState } from "react";
import callIcon from "./../assets/images/dashboard/call-icon.svg";

import { teacherService } from "../services/TeacherService";
import { useAuth } from "../contexts/AuthContext";
import { ItemListShimmer } from "../Shimmers";
import { Link } from "react-router-dom";

// Images/Logos
import Empty from "./../assets/images/empty.svg";
import { data } from "jquery";

const StudentListData = ({
  headerText,
  data = [],
  isLoading = false,
  studentName,
}) => {
  // State Values
  const screenWidth = window.innerWidth;
  const imageWidth = screenWidth >= 768 ? "25%" : "50%";

  const [isRecent, setIsRecent] = useState(false);

  //Contexts Values
  const { authToken } = useAuth();
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    if (studentName) {
      const filtered = data.filter((student) =>
        student.name.toLowerCase().includes(studentName.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  }, [studentName, data, isRecent]);

  useEffect(() => {
    if (isRecent) {
      const sortedData = [...data].sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
      setFilteredData(sortedData);
      return;
    } else {
      const sortedData = [...data].sort((a, b) => {
        return new Date(a.createdAt) - new Date(b.createdAt);
      });
      setFilteredData(sortedData);
      return;
    }
  }, [isRecent]);

  return isLoading ? (
    <ItemListShimmer />
  ) : (
    <section
      className="pb-80 mb-3 student-list"
      style={{ marginBottom: "50px" }}
    >
      <div className="container">
        <div className="inner-contain light-blue-border bg-white radius-8">
          <div className="border-bottom d-flex align-items-center justify-content-between px-14 py-14">
            <h6 className="mb-0 fw-semibold">{headerText}</h6>
            <Link
              onClick={() => {
                setIsRecent((prev) => !prev);
              }}
              href="#"
              className="d-flex align-items-center fs-6"
            >
              {isRecent ? (
                <i className="ri-sort-asc fs-20 me-1 primary-color"></i>
              ) : (
                <i className="ri-sort-desc fs-20 me-1 primary-color"></i>
              )}
              <span className="fw-semibold primary-color">Sort</span>
            </Link>
          </div>
          {filteredData.length === 0 ? (
            <div className="container mt-5">
              <div className="text-center">
                <img
                  src={Empty}
                  style={{
                    width: imageWidth,
                    height: "auto",
                    marginBottom: "20px",
                    maxWidth: "100%",
                  }}
                  alt="Empty"
                />
              </div>
            </div>
          ) : (
            Array.isArray(filteredData) &&
            filteredData.map((student, index) => (
              <div
                key={index}
                className="px-14 d-flex align-items-center justify-content-between py-14 border-bottom"
              >
                <div className="d-flex align-items-center">
                  {/* Profile Picture */}
                  <div className="me-3">
                    {student.profilePic ? (
                      <img
                        src={import.meta.env.VITE_PROFILEURL+student.profilePic}
                        alt={student.name}
                        className="rounded-circle"
                        style={{
                          width: "40px",
                          height: "40px",
                          objectFit: "cover",
                        }}
                      />
                    ) : (
                      <div
                        className="rounded-circle d-flex align-items-center justify-content-center"
                        style={{
                          width: "40px",
                          height: "40px",
                          backgroundColor: "#f0f0f0",
                          fontSize: "14px",
                        }}
                      >
                        {student.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .toUpperCase()}
                      </div>
                    )}
                  </div>

                  {/* Student Info */}
                  <div>
                    <h6 className="mb-1 fs-15 fw-semibold">{student.name}</h6>
                    <span className="text-muted fs-13 fw-medium">
                      +91 {student.phone}
                    </span>
                  </div>
                </div>

                {/* Call Icon */}
                <div className="d-flex align-items-center">
                  <a href={`tel:${student.phone}`} className="me-2">
                    <img src={callIcon} height="32" alt="call-icon" />
                  </a>
                  {/* <div className="form-check form-switch mb-0 ms-1 ps-0">
                    <input
                      className="form-check-input shadow-none ms-0 mt-0"
                      type="checkbox"
                      role="switch"
                      id={`flexSwitchCheckChecked-${index}`}
                      checked={true}
                      readOnly
                    />
                  </div> */}
                </div>
                
              </div>
            ))
          )}

          {/* <div className="my-4 text-center">
            <a href="#" className="btn2">
              View more
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default StudentListData;
