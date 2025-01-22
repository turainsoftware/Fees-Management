import React from "react";

const StudentSearchFees = () => {
  return (
    <section className="student-register my-3">
      <div className="container ">
        <div className="row g-2">
          <div className="col-12">
            <div className="inner-contain pb-14 bg-white light-blue-border radius-8 position-relative">
              <form action="">
                <div className="px-14 mt-2 pt-2">
                  <div className="row g-3">
                    <div className="col-12">
                      <label for="" className="fs-13 mb-2 fw-medium">
                        Student Name
                      </label>
                      <input
                        type="text"
                        className="form-control shadow-none fs-14 fw-medium"
                        placeholder=""
                      />
                    </div>
                    <div className="col-12">
                      <label for="" className="fs-13 mb-2 fw-medium">
                        Select className<span className="red-color">*</span>
                      </label>
                      <select
                        name=""
                        id=""
                        className="form-select shadow-none fs-14 fw-medium"
                      >
                        <option value="">className 1</option>
                        <option value="">className 2</option>
                        <option value="">className 3</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label for="" className="fs-13 mb-2 fw-medium">
                        Select Batch<span className="red-color">*</span>
                      </label>
                      <select
                        name=""
                        id=""
                        className="form-select shadow-none fs-14 fw-medium"
                      >
                        <option value="">Batch 1</option>
                        <option value="">Batch 2</option>
                        <option value="">Batch 3</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="mt-4 mb-2 text-center">
                  <button className="btn1" type="submit">
                    Search
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

export default StudentSearchFees;
