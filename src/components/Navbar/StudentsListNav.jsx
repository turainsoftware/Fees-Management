import React, { useState } from "react";

const StudentsListNav = ({ searchName, setSearchName }) => {
  const [searchSession, setSearchSession] = useState("");
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
                >
                  <option value="" defaultValue={true}>
                    Select a batch
                  </option>
                  <option value="2023-2024">2023-2024</option>
                  <option value="2024-2025">2024-2025</option>
                  <option value="2025-2026">2025-2026</option>
                  <option value="2026-2027">2026-2027</option>
                  <option value="2027-2028">2027-2028</option>
                  <option value="2028-2029">2028-2029</option>
                  <option value="2029-2030">2029-2030</option>
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
                    console.log(searchName);
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
