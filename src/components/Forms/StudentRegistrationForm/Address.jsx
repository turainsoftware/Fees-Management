import React, { useState } from "react";

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
  // State variables for each form field

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
              <option value="West Bengal">West Bengal</option>
              <option value="Goa">Goa</option>
              <option value="Delhi">Delhi</option>
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
              disabled={!isFieldsEnable}
            >
              <option value="">Select District</option>
              <option value="Kolkata">Kolkata</option>
              <option value="South 24 Parganas">South 24 Parganas</option>
              <option value="Bankura">Bankura</option>
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
              onChange={(e) => setPincode(e.target.value)}
              placeholder="Enter pincode"
              disabled={!isFieldsEnable}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Address;
