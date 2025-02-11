import React, { useState } from "react";

import { feesData } from "../utils/dummy";
import { feesService } from "../services/FeesService";
import { useAuth } from "../contexts/AuthContext";
import { FeesListShimmer } from "../Shimmers";
import { formatDate } from "../utils/Common";
import { Link } from "react-router-dom";

const FeesList = ({ isLatest = true,pageNo,size }) => {
  const { authToken } = useAuth();

  // State Variables
  const [isLoading, setIsLoading] = useState(true);
  const [feesDetails, setFeesDetails] = useState([]);

  const fetchFeesHistory = async () => {
    setIsLoading(true);
    try {
      const data = isLatest
        ? await feesService.latestFees({ authToken: authToken })
        : await feesService.feesHistory({ authToken: authToken });
      console.log(data);
      setFeesDetails(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useState(() => {
    fetchFeesHistory();
  }, []);

  return isLoading ? (
    <FeesListShimmer />
  ) : (
    <section className="pb-100 mt-2 student-list">
      <div className="container">
        <div className="inner-contain light-blue-border bg-white radius-8">
          <div className="border-bottom d-flex align-items-center justify-content-between px-14 py-14">
            <h6 className="mb-0 fw-semibold">Fees List</h6>
            <a href="#" className="d-flex align-items-center fs-6">
              <i className="ri-equalizer-2-line fs-20 primary-color me-1"></i>
              <span className="fw-semibold primary-color">Filter</span>
            </a>
          </div>
          {feesDetails.map((fee, index) => (
            <div
              key={index}
              className="px-14 d-flex align-items-center justify-content-between py-14 border-bottom"
            >
              <div>
                <h6 className="mb-1 fs-15 fw-semibold">{fee.studentName}</h6>
                <p className="mb-0 text-muted">Batch - {fee.batchName}</p>
                <span className="text-muted fs-13 fw-medium">
                  {fee.description}
                </span>
              </div>
              <div>
                <h6
                  className={`mb-1 fs-18 fw-bold text-end ${
                    fee.status === "green" ? "green-color" : "red-color"
                  }`}
                >
                  ₹ {fee.amountPaid}
                </h6>
                <span className="text-muted fs-13 fw-medium text-end">
                  Received in {formatDate({ isoString: fee.paymentDate })}
                </span>
              </div>
            </div>
          ))}
          {isLatest && (
            <div className="my-4 text-center">
              <Link to={"/fees/fees-list"} className="btn2">
                View more
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeesList;
