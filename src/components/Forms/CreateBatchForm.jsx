import React from "react";
import Select from "react-select";

const dayOptions = [
  { value: "Monday", label: "Monday" },
  { value: "Tuesday", label: "Tuesday" },
  { value: "Wednesday", label: "Wednesday" },
  { value: "Thursday", label: "Thursday" },
  { value: "Friday", label: "Friday" },
  { value: "Saturday", label: "Saturday" },
  { value: "Sunday", label: "Sunday" },
];

const CreateBatchForm = () => {
  return (
    <section className="student-register my-3 pb-100">
      <div className="container">
        <div className="row g-2">
          <div className="col-12">
            <div className="inner-contain pb-14 bg-white light-blue-border radius-8 position-relative">
              <form action="">
                <div className="form-header-bg px-14">
                  <h5 className="mb-0 fs-6 text-white fw-semibold">
                    Batch Details
                  </h5>
                </div>
                <div className="px-14 mt-2 pt-2">
                  <div className="row g-3">
                    <div className="col-12">
                      <label for="" className="fs-13 mb-2 fw-medium">
                        Batch Name
                      </label>
                      <input
                        type="text"
                        className="form-control shadow-none fs-14 fw-medium"
                        placeholder=""
                      />
                    </div>
                    <div className="col-12">
                      <label for="" className="fs-13 mb-2 fw-medium">
                        Batch Session<span className="red-color">*</span>
                      </label>
                      <select
                        name=""
                        id=""
                        className="form-select shadow-none fs-14 fw-medium"
                      >
                        <option value="">2025-2026</option>
                        <option value="">2024-2025</option>
                        <option value="">2023-2024</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label for="" className="fs-13 mb-2 fw-medium">
                        className
                      </label>
                      <Select isMulti options={dayOptions} />
                    </div>
                    <div className="col-12">
                      <label for="" className="fs-13 mb-2 fw-medium">
                        Subject
                      </label>
                      <Select isMulti options={dayOptions} />
                    </div>
                    <div className="col-12">
                      <label for="" className="fs-13 mb-2 fw-medium">
                        Board<span className="red-color">*</span>
                      </label>
                      <select
                        name=""
                        id=""
                        className="form-select shadow-none fs-14 fw-medium"
                      >
                        <option value="">CBSE</option>
                        <option value="">ISC</option>
                        <option value="">WBBSE</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label for="" className="fs-13 mb-2 fw-medium">
                        Board<span className="red-color">*</span>
                      </label>
                      <select
                        name=""
                        id=""
                        className="form-select shadow-none fs-14 fw-medium"
                      >
                        <option value="">English</option>
                        <option value="">Bengali</option>
                        <option value="">Hindi</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label for="" className="fs-13 mb-2 fw-medium">
                        Batch Day
                      </label>
                      <Select isMulti options={dayOptions} />
                    </div>
                    <div className="col-12">
                      <label for="" className="fs-13 mb-2 fw-medium">
                        Batch Start Time<span className="red-color">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control shadow-none fs-14 fw-medium"
                        placeholder=""
                      />
                    </div>
                    <div className="col-12">
                      <label for="" className="fs-13 mb-2 fw-medium">
                        Batch End Time
                      </label>
                      <input
                        type="email"
                        className="form-control shadow-none fs-14 fw-medium"
                        placeholder=""
                      />
                    </div>
                    <div className="col-12">
                      <label for="" className="fs-13 mb-2 fw-medium">
                        Student Monthly Fees
                      </label>
                      <input
                        type="email"
                        className="form-control shadow-none fs-14 fw-medium"
                        placeholder=""
                      />
                    </div>
                    <div className="col-12">
                      <label for="" className="fs-13 mb-2 fw-medium">
                        Monthly Exam Fees
                      </label>
                      <input
                        type="email"
                        className="form-control shadow-none fs-14 fw-medium"
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-4 mb-2 text-center">
                  <button className="btn1" type="submit">
                    Create
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateBatchForm;
