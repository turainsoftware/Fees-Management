import React, { useEffect, useMemo, useState } from "react";
import callIcon from "./../assets/images/dashboard/call-icon.svg";

import { useAuth } from "../contexts/AuthContext";
import { ItemListShimmer } from "../Shimmers";

// Images/Logos
import Empty from "./../assets/images/empty.svg";
import StudentContexts from "./Contexts/StudentContexts";
import StudentProfileModal from "./Profile/StudentProfileModal";
import DeleteStudent from "./Modals/DeleteStudent";
import { batchService } from "../services/BatchService";
import { notification } from "antd";

const CommonStudentList = ({
  headerText,
  data = [],
  isLoading = false,
  batchId,
  setIsStudentReload,
}) => {
  // State Values
  const screenWidth = window.innerWidth;
  const imageWidth = screenWidth >= 768 ? "25%" : "50%";

  //Contexts Values
  const { authToken } = useAuth();

  // For Profile Data
  const [contextVisible, setContextVisible] = useState(false);
  const [contextXPositon, setContextXPosition] = useState(null);
  const [contextYPositon, setContextYPosition] = useState(null);
  const [selectedStudentContext, setSelectedStudentContext] = useState(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const [isDelete, setIsDelete] = useState(false);
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);

  const handleContext = ({ xPosition, yPosition, studentId }) => {
    if (contextVisible) {
      setContextVisible(false);
    } else {
      setContextXPosition(xPosition);
      setContextYPosition(yPosition);
      setContextVisible(true);
      setSelectedStudentContext((prev) => studentId);
      const student = data.find(
        (item) => Number(item.id) === Number(studentId)
      );
      setSelectedStudent(student);
    }
  };

  const handleRemoveStudent = async () => {
    setIsDeleteLoading(true);
    try {
      const data = await batchService.removeStudentFromBatch({
        authToken: authToken,
        batchId: batchId,
        studentID: selectedStudent.id,
      });
      console.log(data);
      if (data?.status) {
        setIsStudentReload((prev) => prev + 1);
        notification.success({
          message: data?.message,
          description: "Student removed successfully.",
        });
      }
    } catch (error) {
      notification.error({
        message: "Something went wrong?",
        description: "Failed to remove student. Please try again.",
        duration: 5000,
      });
    } finally {
      setIsDeleteLoading(false);
      setIsDelete(false);
    }
  };

  return isLoading ? (
    <ItemListShimmer />
  ) : (
    <>
      <section
        className="pb-80 mt-4 mb-3 student-list"
        style={{ marginBottom: "50px" }}
      >
        <div className="container">
          <div className="inner-contain light-blue-border bg-white radius-8">
            <div className="border-bottom d-flex align-items-center justify-content-between px-14 py-14">
              <h6 className="mb-0 fw-semibold">{headerText}</h6>
            </div>
            {data.length === 0 ? (
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
              Array.isArray(data) &&
              data.map((student, index) => (
                <div
                  key={index}
                  className="px-14 d-flex align-items-center justify-content-between py-14 border-bottom"
                  onClick={() => {
                    setContextVisible(false);
                    setSelectedStudentContext(null);
                  }}
                  onContextMenu={(e) => {
                    e.preventDefault();
                    handleContext({
                      xPosition: e.clientX,
                      yPosition: e.clientY,
                      studentId: student.id,
                    });
                  }}
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <div className="d-flex align-items-center">
                    {/* Profile Picture */}
                    <div className="me-3">
                      {student.profilePic ? (
                        <img
                          src={
                            import.meta.env.VITE_PROFILEURL + student.profilePic
                          }
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

                  {contextVisible &&
                    selectedStudentContext === Number(student.id) && (
                      <StudentContexts
                        xPosition={contextXPositon}
                        yPosition={contextYPositon}
                        setIsProfileOpen={setIsProfileOpen}
                        isDelete={true}
                        setIsDelete={setIsDelete}
                      />
                    )}

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
      {isProfileOpen && selectedStudent !== null && (
        <StudentProfileModal
          studentData={selectedStudent}
          setIsProfileOpen={setIsProfileOpen}
          isProfileOpen={isProfileOpen}
        />
      )}
      <DeleteStudent
        setIsDelete={setIsDelete}
        isDelete={isDelete}
        handleRemove={handleRemoveStudent}
        isLoading={isDeleteLoading}
      />
    </>
  );
};

export default CommonStudentList;
