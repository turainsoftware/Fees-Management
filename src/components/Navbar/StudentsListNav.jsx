import React from "react";

const StudentsListNav = () => {
  return (
    <section class="student-nav my-3">
      <div class="container">
        <div class="row g-2">
          <div class="col-12">
            <div class="inner-contain px-14 py-14 bg-white light-blue-border radius-8">
              <div>
                <label for="" class="fs-13 mb-2 fw-medium">
                  Student Name
                </label>
                <input
                  type="text"
                  class="form-control shadow-none fs-14 fw-medium"
                  placeholder="Eg : Rahul Kumar"
                />
              </div>
              <div class="mt-3">
                <label for="" class="fs-13 mb-2 fw-medium">
                  Select Batch<span class="red-color">*</span>
                </label>
                <select
                  name=""
                  id=""
                  class="form-select shadow-none fs-14 fw-medium"
                >
                  <option value="">Select Batch</option>
                  <option value="">2021-2022</option>
                  <option value="">2022-2023</option>
                  <option value="">2023-2024</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentsListNav;
