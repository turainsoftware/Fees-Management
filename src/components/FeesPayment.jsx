import React, { useEffect, useState } from "react";
import { feesService } from "../services/FeesService";
import { useAuth } from "../contexts/AuthContext";
import { ItemListShimmer } from "../Shimmers";
import Empty from "./../assets/images/empty.svg";
import {
  checkIfBefore,
  formatDate,
  formatYearMonth,
  isAdvanceDate,
} from "../utils/Common";
import { toast } from "react-toastify";

const FeesPayment = ({
  headerText,
  studentName,
  studentId,
  monthlyFees = 1000,
  batchId,
  startMonth,
  startYear,
  endMonth,
  endYear,
  paidFees = [],
  setPayIndex,
}) => {
  const [payments, setPayments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { authToken } = useAuth();
  const [paymentStatuses, setPaymentStatuses] = useState({});
  const [loadingIndex, setLoadingIndex] = useState(null);

  useEffect(() => {
    const generatePayments = () => {
      const newPayments = [];
      for (let year = startYear; year <= endYear; year++) {
        let monthStart = year === startYear ? startMonth : 1;
        let monthEnd = year === endYear ? endMonth : 12;

        for (let month = monthStart; month <= monthEnd; month++) {
          newPayments.push({ year, month });
        }
      }
      return newPayments;
    };

    setPayments(generatePayments());
  }, [startMonth, startYear, endMonth, endYear]);

  const handlePay = async ({ year, month, index}) => {
    setIsLoading(true);
    console.log(index)
    setLoadingIndex(index)
    try {
      const data = await feesService.payFees({
        authToken: authToken,
        amount: monthlyFees,
        batchId: batchId,
        studentId: studentId,
        month: month,
        year: year,
      });
      setPayIndex((prev) => prev + 1);
      if (data.status) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Payment error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mt-4 pb-100">
      <div className="card shadow-sm">
        <div className="card-header bg-primary text-white py-3">
          <h5 className="card-title mb-0 fw-bold">{headerText}</h5>
        </div>
        <div className="card-body p-0">
          {payments.length === 0 ? (
            <div className="text-center p-4">
              <img
                src={Empty}
                alt="No payments available"
                className="img-fluid"
                style={{ maxWidth: "200px" }}
              />
              <p className="text-muted mt-3">No payment records found.</p>
            </div>
          ) : (
            <ul className="list-group list-group-flush">
              {payments.map((item, index) => {
                const key = `${item.year}-${item.month}`;
                const isPaid = paidFees.some(
                  (fee) => fee.month === item.month && fee.year === item.year
                );

                const feeDetails = paidFees.find(
                  (fee) => fee.month === item.month && fee.year === item.year
                );
                const paymentDate = feeDetails
                  ? formatDate({ isoString: feeDetails.paymentDate })
                  : "N/A";
                const isDue =
                  checkIfBefore({
                    month: item.month,
                    year: item.year,
                  }) && !isPaid;

                const isAdv =
                  isPaid &&
                  isAdvanceDate({
                    month: item.month,
                    year: item.year,
                    paymentDate: paymentDate,
                  });

                return (
                  <li
                    key={index}
                    className="list-group-item d-flex justify-content-between align-items-center px-3 py-3"
                  >
                    <div>
                      <h6 className="mb-1 fs-15 fw-semibold">
                        {formatYearMonth({
                          month: item.month,
                          year: item.year,
                        })}
                      </h6>
                      {isPaid && (
                        <p className="text-muted fs-13 fw-medium mb-1">
                          Payment Date: {paymentDate}
                        </p>
                      )}
                      {isDue && <span class="badge text-bg-danger">Due</span>}
                      {isAdv ? (
                        <span class="badge bg-info">Prepaid</span>
                      ) : (
                        isPaid && (
                          <span class="badge bg-warning">BelatedPayment</span>
                        )
                      )}
                    </div>
                    <div className="d-flex align-items-center">
                      <span className="me-3 fw-bold">₹ {monthlyFees}</span>
                      <button
                        onClick={() =>
                          handlePay({ year: item.year, month: item.month, index: index })
                        }
                        className={`btn btn-sm ${
                          isDue
                            ? "btn-danger"
                            : isPaid
                            ? "btn-success"
                            : "btn-primary"
                        }`}
                        disabled={isPaid}
                      >
                        {isLoading && loadingIndex===index ? (
                          <span
                            class="spinner-border spinner-border-sm"
                            aria-hidden="true"
                          ></span>
                        ) : isDue ? (
                          "Due"
                        ) : isPaid ? (
                          "Paid"
                        ) : (
                          "Pay"
                        )}
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeesPayment;
