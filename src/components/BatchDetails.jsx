import React from "react";
import {
  FaGraduationCap,
  FaBook,
  FaCalendarAlt,
  FaRupeeSign,
  FaBookOpen,
  FaClock,
  FaCalendarDay,
} from "react-icons/fa";

const BatchDetails = ({ batchData }) => {
  const formatTime = (timeString) => {
    return new Date(`2000-01-01T${timeString}`).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  const formatMonth = (monthNum) => {
    return new Date(2000, monthNum - 1, 1).toLocaleString("default", {
      month: "long",
    });
  };

  return (
    <div className="container py-4">
      <div className="row g-4">
        {/* Main Batch Info */}
        <div className="col-12">
          <div className="card shadow-sm">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <h2 className="card-title mb-0 text-primary fw-bold">
                  {batchData.name}
                </h2>
                <span className="badge bg-primary-subtle text-primary-emphasis px-3 py-2 rounded-pill">
                  {batchData.language.name}
                </span>
              </div>
              <hr className="border-light opacity-75" />
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="d-flex align-items-center">
                    <FaGraduationCap className="text-primary fs-4 me-3" />
                    <div>
                      <small className="text-body-secondary">Board</small>
                      <p className="mb-0 text-primary fw-semibold">
                        {batchData.board.name}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-center">
                    <FaBook className="text-info fs-4 me-3" />
                    <div>
                      <small className="text-body-secondary">Class</small>
                      <p className="mb-0 text-primary fw-semibold">
                        {batchData.classes.map((cls) => cls.name).join(", ")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Schedule Info */}
        <div className="col-md-6">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title text-primary d-flex align-items-center">
                <FaCalendarAlt className="fs-4 me-2" />
                Schedule
              </h5>
              <hr className="border-light opacity-75" />
              <div className="mb-4">
                <small className="text-body-secondary d-flex align-items-center mb-2">
                  <FaCalendarDay className="me-2" />
                  Class Days
                </small>
                <div className="d-flex flex-wrap gap-2">
                  {batchData.days.sort().map((day, index) => (
                    <span
                      key={index}
                      className="badge bg-primary-subtle text-primary-emphasis px-3 py-2 rounded-pill"
                    >
                      {day}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mb-3">
                <small className="text-body-secondary d-flex align-items-center mb-2">
                  <FaClock className="me-2" />
                  Timing
                </small>
                <p className="mb-0 text-primary fw-semibold">
                  {`${formatTime(batchData.startTime)} - ${formatTime(
                    batchData.endTime
                  )}`}
                </p>
              </div>
              <div>
                <small className="text-body-secondary">Duration</small>
                <p className="mb-0 text-primary fw-semibold">
                  {`${formatMonth(batchData.startMonth)} ${
                    batchData.startYear
                  } - ${formatMonth(batchData.endMonth)} ${batchData.endYear}`}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Fees Structure */}
        <div className="col-md-6">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title text-success d-flex align-items-center">
                <FaRupeeSign className="fs-4 me-2" />
                Fees Structure
              </h5>
              <hr className="border-light opacity-75" />
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <small className="text-body-secondary">Monthly Fees</small>
                  <p className="mb-0 text-success fw-bold fs-4">
                    ₹{batchData.monthlyFees}
                  </p>
                </div>
                <div className="text-end">
                  <small className="text-body-secondary">Exam Fees</small>
                  <p className="mb-0 text-success fw-bold fs-4">
                    ₹{batchData.monthlyExamFees}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subjects */}
        <div className="col-12">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title text-warning d-flex align-items-center">
                <FaBookOpen className="fs-4 me-2" />
                Subjects
              </h5>
              <hr className="border-light opacity-75" />
              <div className="d-flex flex-wrap gap-3">
                {batchData.subjects.map((subject, index) => (
                  <span
                    key={index}
                    className="badge bg-warning-subtle text-warning-emphasis px-4 py-2 fs-6"
                  >
                    {subject.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BatchDetails;
