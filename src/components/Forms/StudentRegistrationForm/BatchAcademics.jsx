import React from "react";
import { boardOptions } from "../../../utils/dummy";
import Select from "react-select";

const BatchAcademics = () => {
  return (
    <>
      <div className="form-header-bg mt-4 px-14">
        <h5 className="mb-0 fs-6 text-white fw-semibold">
          Batch & Academic Details
        </h5>
      </div>
      <div className="px-14 mt-2 pt-2">
        <div className="row g-3">
          <div className="col-12">
            <label htmlFor="" className="fs-13 mb-2 fw-medium">
              Select Batch<span className="red-color">*</span>
            </label>
            <select
              name=""
              id=""
              className="form-select shadow-none fs-14 fw-medium"
            >
              <option value="">2022</option>
              <option value="">2023</option>
              <option value="">2024</option>
            </select>
          </div>
          <div className="col-12">
            <label htmlFor="" className="fs-13 mb-2 fw-medium">
              Batch Fees
            </label>
            <input
              type="text"
              className="form-control shadow-none fs-14 fw-medium"
              placeholder=""
            />
          </div>
          <div className="col-12">
            <label htmlFor="" className="fs-13 mb-2 fw-medium">
              Subject
            </label>
            <input
              type="text"
              className="form-control shadow-none fs-14 fw-medium"
              placeholder=""
            />
          </div>
          <div className="col-12">
            <label htmlFor="" className="fs-13 mb-2 fw-medium">
              Class
            </label>
            <input
              type="text"
              className="form-control shadow-none fs-14 fw-medium"
              placeholder=""
            />
          </div>
          <div className="col-12">
            <label htmlFor="" className="fs-13 mb-2 fw-medium">
              Board
            </label>
            <Select isMulti options={boardOptions} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BatchAcademics;
