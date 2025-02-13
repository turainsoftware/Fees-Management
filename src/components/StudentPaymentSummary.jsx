import React from "react";
import { FaWallet } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";
import { FaMoneyBillWave, FaCheckCircle, FaUserPlus } from "react-icons/fa"; // More icons

const StudentPaymentSummary = ({
  monthlyFees,
  totalDue,
  totalPaid,
  joiningDate,
}) => {
  return (
    <div className="container mt-4">
      <div
        className="card shadow-lg border-0"
        style={{ backgroundColor: "#D0EFFF" }}
      >
        {" "}
        <div className="card-body p-4">
          <h5 className="card-title mb-4 text-center" style={{ color: "#333" }}>
            <FaWallet size={25} color="#28a745" className="me-2"/> Payment Summary
          </h5>
          <div className="row g-3">
            {" "}
            {/* Grid with gap for spacing */}
            {/* Monthly Fees */}
            <div className="col-md-6">
              <div
                className="d-flex justify-content-between align-items-center p-3 rounded shadow-sm"
                style={{ backgroundColor: "#fff" }}
              >
                <span className="text-muted d-flex align-items-center">
                  <CiCalendarDate size={24} color="#007bff" className="me-2"/>
                  Monthly Fees
                </span>
                <span className="text-success fw-semibold">
                  ₹ {monthlyFees}
                </span>
              </div>
            </div>
            {/* Total Due */}
            <div className="col-md-6">
              <div
                className="d-flex justify-content-between align-items-center p-3 rounded shadow-sm"
                style={{ backgroundColor: "#fff" }}
              >
                <span className="text-muted d-flex align-items-center">
                  <FaMoneyBillWave size={24} color="#dc3545" className="me-2"/> Total Due
                </span>
                <span className="text-danger fw-semibold"> {totalDue===0?"Fully Paid":`₹${totalDue}`}</span>
              </div>
            </div>
            {/* Total Paid */}
            <div className="col-md-6">
              <div
                className="d-flex justify-content-between align-items-center p-3 rounded shadow-sm"
                style={{ backgroundColor: "#fff" }}
              >
                <span className="text-muted d-flex align-items-center">
                  <FaCheckCircle size={24} color="#28a745" className="me-2"/> Total Paid
                </span>
                <span className="text-primary fw-semibold">₹ {totalPaid}</span>
              </div>
            </div>
            {/* Joining Date */}
            <div className="col-md-6">
              <div
                className="d-flex justify-content-between align-items-center p-3 rounded shadow-sm"
                style={{ backgroundColor: "#fff" }}
              >
                <span className="text-muted d-flex align-items-center">
                  <FaUserPlus size={24} color="#6c757d" className="me-2"/> Joining Date
                </span>
                <span className="fw-semibold">{joiningDate}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentPaymentSummary;