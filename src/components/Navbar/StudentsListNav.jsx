import React, { useState } from "react";

const StudentsListNav = ({
  searchName,
  setSearchName,
  selectedBatch,
  setSelectedBatch,
  batches = [],
}) => {
  return (
    <section className="student-nav my-3">
      <div className="container">
        <div className="row g-2">
          <div className="col-12">
            <div className="inner-contain px-14 py-14 bg-white light-blue-border radius-8">
              <div>
                <label htmlFor="" className="fs-13 mb-2 fw-medium">
                  Select Batch<span className="red-color">*</span>
                </label>
                <select
                  id=""
                  className="form-select shadow-none fs-14 fw-medium"
                  onChange={(e) => {
                    const id = e.target.value;
                    const data = batches.find(
                      (item) => item.id === parseInt(id)
                    );
                    setSelectedBatch(data);
                  }}
                >
                  <option value="" defaultValue={true}>
                    Select a batch
                  </option>
                  {batches.map((item, index) => {
                    return (
                      <option key={index} value={item.id}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="mt-3">
                <label htmlFor="" className="fs-13 mb-2 fw-medium">
                  Student Name<span className="red-color">*</span>
                </label>
                <input
                  type="text"
                  value={searchName}
                  onChange={(e) => {
                    setSearchName(e.target.value);
                  }}
                  className="form-control shadow-none fs-14 fw-medium"
                  placeholder="Eg : Rahul Kumar"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentsListNav;
