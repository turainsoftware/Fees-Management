import React, { useState, useEffect } from "react";
import { indianStatesAndDistricts } from "../../../utils/Common";

const Address = ({
  address,
  setAddress,
  state,
  setState,
  district,
  setDistrict,
  pincode,
  setPincode,
  isFieldsEnable = true,
}) => {
  const states = Object.keys(indianStatesAndDistricts);
  const [availableDistricts, setAvailableDistricts] = useState([]);

  useEffect(() => {
    if (state && indianStatesAndDistricts[state]) {
      setAvailableDistricts(indianStatesAndDistricts[state]);
      if (!indianStatesAndDistricts[state].includes(district)) {
        setDistrict("");
      }
    } else {
      setAvailableDistricts([]);
      setDistrict("");
    }
  }, [state, setDistrict]);

  return (
    <>
      <div className="form-header-bg mt-4 px-14">
        <h5 className="mb-0 fs-6 text-white fw-semibold">Address Details</h5>
      </div>
      <div className="px-14 mt-2 pt-2">
        <div className="row g-3">
          <div className="col-12">
            <label htmlFor="address" className="fs-13 mb-2 fw-medium">
              Address
            </label>
            <input
              type="text"
              id="address"
              className="form-control shadow-none fs-14 fw-medium"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your address"
              disabled={!isFieldsEnable}
            />
          </div>
          <div className="col-12">
            <label htmlFor="state" className="fs-13 mb-2 fw-medium">
              Select State<span className="red-color">*</span>
            </label>
            <select
              id="state"
              className="form-select shadow-none fs-14 fw-medium"
              value={state}
              onChange={(e) => setState(e.target.value)}
              disabled={!isFieldsEnable}
            >
              <option value="">Select State</option>
              {states.map((stateName) => (
                <option key={stateName} value={stateName}>
                  {stateName}
                </option>
              ))}
            </select>
          </div>
          <div className="col-12">
            <label htmlFor="district" className="fs-13 mb-2 fw-medium">
              District<span className="red-color">*</span>
            </label>
            <select
              id="district"
              className="form-select shadow-none fs-14 fw-medium"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              disabled={!isFieldsEnable || !state}
            >
              <option value="">Select District</option>
              {availableDistricts.map((districtName) => (
                <option key={districtName} value={districtName}>
                  {districtName}
                </option>
              ))}
            </select>
          </div>
          <div className="col-12">
            <label htmlFor="pincode" className="fs-13 mb-2 fw-medium">
              Pincode
            </label>
            <input
              type="text"
              id="pincode"
              className="form-control shadow-none fs-14 fw-medium"
              value={pincode}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");
                if (value.length <= 6) setPincode(value);
              }}
              placeholder="Enter 6-digit pincode"
              disabled={!isFieldsEnable}
              maxLength={6}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Address;