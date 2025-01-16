import React from "react";

const Address = () => {
  return (
    <>
      <div className="form-header-bg mt-4 px-14">
        <h5 className="mb-0 fs-6 text-white fw-semibold">Address Details</h5>
      </div>
      <div className="px-14 mt-2 pt-2">
        <div className="row g-3">
          <div className="col-12">
            <label htmlFor="" className="fs-13 mb-2 fw-medium">
              Address
            </label>
            <input
              type="text"
              className="form-control shadow-none fs-14 fw-medium"
              placeholder=""
            />
          </div>
          <div className="col-12">
            <label htmlFor="" className="fs-13 mb-2 fw-medium">
              Select State<span className="red-color">*</span>
            </label>
            <select
              name=""
              id=""
              className="form-select shadow-none fs-14 fw-medium"
            >
              <option value="">West Bengal</option>
              <option value="">Goa</option>
              <option value="">Delhi</option>
            </select>
          </div>
          <div className="col-12">
            <label htmlFor="" className="fs-13 mb-2 fw-medium">
              District<span className="red-color">*</span>
            </label>
            <select
              name=""
              id=""
              className="form-select shadow-none fs-14 fw-medium"
            >
              <option value="">Kolkata</option>
              <option value="">South 24 Parganas</option>
              <option value="">Bankura</option>
            </select>
          </div>
          <div className="col-12">
            <label htmlFor="" className="fs-13 mb-2 fw-medium">
              Pincode
            </label>
            <input
              type="text"
              className="form-control shadow-none fs-14 fw-medium"
              placeholder=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Address;
