import React from "react";
import { formatYearMonth } from "../utils/Common"; // Assuming this is still needed

const StudentPaymentSummary = ({
  name,
  batchName,
  monthlyFees,
  yearlyFees,
  totalDue,
  totalPaid,
  joiningDate,
  endDate,
}) => {
  console.log(monthlyFees)
  return (
    <div className="container mt-4">  {/* General Container for Spacing */}
      <div className="card shadow-sm"> {/* Added shadow for depth */}
        <div className="card-header bg-primary text-white py-3"> {/* Improved Header */}
          <h5 className="card-title mb-0 fw-bold">Payment Summary</h5> {/* Make the title stand out */}
        </div>

        <div className="card-body p-0"> {/* Card body for content spacing */}
          <div className="list-group list-group-flush"> {/* Using list-group for cleaner structure */}

            <div className="list-group-item d-flex justify-content-between align-items-center px-3 py-3">
              <span className="text-muted fw-medium">Student Name</span>
              <span className="fw-semibold">{name}</span>
            </div>

            <div className="list-group-item d-flex justify-content-between align-items-center px-3 py-3">
              <span className="text-muted fw-medium">Batch Name</span>
              <span className="fw-semibold">{batchName}</span>
            </div>

            <div className="list-group-item d-flex justify-content-between align-items-center px-3 py-3">
              <span className="text-muted fw-medium">Monthly Fees</span>
              <span className="text-success fw-semibold">₹ {monthlyFees}</span>
            </div>

            <div className="list-group-item d-flex justify-content-between align-items-center px-3 py-3">
              <span className="text-muted fw-medium">Total Fees</span>
              <span className="text-success fw-semibold">₹ {yearlyFees}</span>
            </div>

            <div className="list-group-item d-flex justify-content-between align-items-center px-3 py-3">
              <span className="text-muted fw-medium">Total Due</span>
              <span className="text-danger fw-semibold">₹ {totalDue}</span>
            </div>

            <div className="list-group-item d-flex justify-content-between align-items-center px-3 py-3">
              <span className="text-muted fw-medium">Total Paid</span>
              <span className="text-primary fw-semibold">₹ {totalPaid}</span>
            </div>

            <div className="list-group-item d-flex justify-content-between align-items-center px-3 py-3">
              <span className="text-muted fw-medium">Join Date</span>
              <span className="fw-semibold">{joiningDate}</span>
            </div>

            <div className="list-group-item d-flex justify-content-between align-items-center px-3 py-3">
              <span className="text-muted fw-medium">End Date</span>
              <span className="fw-semibold">{endDate}</span>
            </div>

          </div> {/* End list-group */}
        </div> {/* End card-body */}

        <div className="card-footer text-center bg-light py-3"> {/* Footer for button */}
          <button className="btn btn-primary" type="button"> {/* Use primary button style */}
            Search
          </button>
        </div>
      </div> {/* End Card */}
    </div>  //End Container
  );
};

export default StudentPaymentSummary;