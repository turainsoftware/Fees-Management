import React from "react";
import { DetailsCardShimmer } from "../../Shimmers";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";

const DetailsCard = ({
  value,
  icon,
  description,
  changeClass,
  changeType,
  changeValue,
  isLoading = false,
}) => {
  // Extract percentage value and ensure proper formatting
  const formatPercentage = (val) => {
    // If changeValue already includes %, strip any + or - and use the number
    const cleanedValue =
      typeof val === "string" ? val.replace(/[+-]/g, "") : val;
    const num = parseFloat(cleanedValue);
    return isNaN(num) ? "0.0%" : `${Math.abs(num).toFixed(1)}%`;
  };

  const percentageValue = formatPercentage(changeValue);

  return isLoading ? (
    <DetailsCardShimmer />
  ) : (
    <div className="col-auto col-md-3">
      <div className="inner-contain light-blue-border radius-8 bg-white">
        <div className="pb-12 border-bottom px-14 pt-14">
          <div className="d-flex align-items-center justify-content-between mb-2">
            <h2 className="mb-0 fs-20 fw-semibold">{value}</h2>
            <img src={icon} alt="" />
          </div>
          <p className="mb-0 text-color fs-13">{description}</p>
        </div>
        <div className="d-flex align-items-center justify-content-between px-14 py-2">
          <span className={`fs-12 ${changeClass} fw-medium`}>{changeType}</span>
          <span
            className={`my-badge ${
              changeClass === "green-color" ? changeClass : "my-badge-red"
            } fw-semibold fs-10 radius-5`}
            style={{
              display: "flex",
              alignItems: "center",
              width: "auto",
              height: "auto",
              padding: 3,
            }}
          >
            {changeClass === "green-color" ? (
              <FaCaretUp size={15} style={{ marginRight: 4 }} />
            ) : (
              <FaCaretDown size={15} style={{ marginRight: 4 }} />
            )}
            <span>{percentageValue}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
