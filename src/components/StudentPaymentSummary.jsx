import React from "react";
import { formatYearMonth } from "../utils/Common";

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
  return (
    <section className="student-nav my-3" style={{paddingBottom: '80px'}}>
      <div className="container">
        <div className="row justify-content-between g-0 bg-white rounded shadow-sm">
          <div className="col-12 border-bottom">
            <div className="px-3 py-3 d-flex align-items-center justify-content-between">
              <p className="mb-0 fs-6 text-secondary fw-medium">Student Name</p>
              <p className="mb-0 fs-6 text-dark fw-semibold">{name}</p>
            </div>
          </div>

          <div className="col-12 border-bottom">
            <div className="px-3 py-3 d-flex align-items-center justify-content-between">
              <p className="mb-0 fs-6 text-secondary fw-medium">
                Batch Details
              </p>
              <p className="mb-0 fs-6 text-dark fw-semibold">{batchName}</p>
            </div>
          </div>

          <div className="col-12 border-bottom">
            <div className="px-3 py-3 d-flex align-items-center justify-content-between">
              <p className="mb-0 fs-6 text-secondary fw-medium">Monthly Fees</p>
              <p className="mb-0 fs-6 text-success fw-semibold">
                ₹ {monthlyFees}
              </p>
            </div>
          </div>

          <div className="col-12 border-bottom">
            <div className="px-3 py-3 d-flex align-items-center justify-content-between">
              <p className="mb-0 fs-6 text-secondary fw-medium">Yearly Fees</p>
              <p className="mb-0 fs-6 text-success fw-semibold">
                ₹ {yearlyFees}
              </p>
            </div>
          </div>

          <div className="col-12 border-bottom">
            <div className="px-3 py-3 d-flex align-items-center justify-content-between">
              <p className="mb-0 fs-6 text-secondary fw-medium">Total Paid</p>
              <p className="mb-0 fs-6 text-primary fw-semibold">
                ₹ {totalPaid}
              </p>
            </div>
          </div>

          <div className="col-12 border-bottom">
            <div className="px-3 py-3 d-flex align-items-center justify-content-between">
              <p className="mb-0 fs-6 text-secondary fw-medium">Total Due</p>
              <p className="mb-0 fs-6 text-danger fw-semibold">₹ {totalDue}</p>
            </div>
          </div>

          <div className="col-12 border-bottom">
            <div className="px-3 py-3 d-flex align-items-center justify-content-between">
              <p className="mb-0 fs-6 text-secondary fw-medium">Join Date</p>
              <p className="mb-0 fs-6 text-dark fw-semibold">{joiningDate}</p>
            </div>
          </div>

          <div className="col-12 border-bottom">
            <div className="px-3 py-3 d-flex align-items-center justify-content-between">
              <p className="mb-0 fs-6 text-secondary fw-medium">End Date</p>
              <p className="mb-0 fs-6 text-dark fw-semibold">
                {endDate}
              </p>
            </div>
          </div>

          <div className="mt-3 mb-3 text-center">
            <button className="btn btn-primary" type="button">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentPaymentSummary;
