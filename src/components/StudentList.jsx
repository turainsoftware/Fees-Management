import React, { useEffect, useMemo, useState } from "react";
import callIcon from "./../assets/images/dashboard/call-icon.svg";

// Data's
// import { students as initialStudents } from "../utils/dummy";
import { teacherService } from "../services/TeacherService";
import { useAuth } from "../contexts/AuthContext";
import { ItemListShimmer } from "../Shimmers";
import { Link } from "react-router-dom";

const StudentList = ({ headerText, isRecent = true }) => {
  //Contexts Values
  const { authToken } = useAuth();
  const [isRecentState, setIsRecentState] = useState(isRecent);

  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredStudents, setFilteredStudents] = useState([]);

  const fetchStudentsList = async () => {
    setIsLoading(true);
    try {
      const data = await teacherService.students({
        authToken: authToken,
        isRecent: isRecentState,
      });
      setStudents(data);
      setFilteredStudents(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchStudentsList();
  }, [isRecentState]);

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
                setIsRecentState((prev) => !prev);
              }}
              href="#"
              className="d-flex align-items-center fs-6"
            >
              {isRecentState ? (
                <i className="ri-sort-asc fs-20 me-1 primary-color"></i>
              ) : (
                <i className="ri-sort-desc fs-20 me-1 primary-color"></i>
              )}
              <span className="fw-semibold primary-color">Sort</span>
            </Link>
          </div>
          {Array.isArray(students) &&
            students.map((student, index) => (
              <div
                key={index}
                className="px-14 d-flex align-items-center justify-content-between py-14 border-bottom"
              >
                <div>
                  <h6 className="mb-1 fs-15 fw-semibold">{student.name}</h6>
                  <span className="text-muted fs-13 fw-medium">
                    {student.email}
                  </span>
                </div>
                <div className="d-flex align-items-center">
                  <a href={`tel:${student.phone}`} className="me-2">
                    <img src={callIcon} height="32" alt="call-icon" />
                  </a>
                  <div className="form-check form-switch mb-0 ms-1 ps-0">
                    <input
                      className="form-check-input shadow-none ms-0 mt-0"
                      type="checkbox"
                      role="switch"
                      id={`flexSwitchCheckChecked-${index}`}
                      checked={true}
                      readOnly
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
