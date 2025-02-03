import React from "react";
import { DetailsCardShimmer } from "../../Shimmers";

const DetailsCard = ({
  value,
  icon,
  description,
  changeClass,
  changeType,
  changeValue,
  isLoading = false,
}) => {
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
          >
            {changeValue}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
