import React, { useEffect, useState } from "react";
import { useAuth } from "./../../contexts/AuthContext";
import { teacherService } from "../../services/TeacherService";
import { studentService } from "../../services/StudentService";

const StudentSearchFees = ({
  selectedBatch,
  handleSubmitSearch,
  batches,
  suggestions,
  searchTerm,
  setSearchTerm,
  handleBatchSearch,
  handleSuggestionClick,
}) => {

  return (
    <section className="student-register my-3">
      <div className="container ">
        <div className="row g-2">
          <div className="col-12">
            <div className="inner-contain pb-14 bg-white light-blue-border radius-8 position-relative">
              <form action="" onSubmit={handleSubmitSearch}>
                <div className="px-14 mt-2 pt-2">
                  <div className="row g-3">
                    <div className="col-12">
                      <label htmlFor="" className="fs-13 mb-2 fw-medium">
                        Select Batch
                      </label>
                      <select
                        value={selectedBatch?.id || ""}
                        onChange={handleBatchSearch}
                        className="form-select shadow-none fs-14 fw-medium"
                      >
                        <option value="" defaultChecked={true}>
                          Select Batch
                        </option>
                        {batches.map((item) => (
                          <option key={item.id} value={item.id}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-12">
                      <label htmlFor="" className="fs-13 mb-2 fw-medium">
                        Student Name<span className="red-color">*</span>
                      </label>
                      <input
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        type="text"
                        className="form-control shadow-none fs-14 fw-medium"
                        placeholder="Enter Students Name"
                        disabled={selectedBatch === null}
                      />
                      {suggestions.length > 0 && (
                        <ul
                          className="list-group position-absolute w-100 mt-1 shadow-sm"
                          style={{ zIndex: 1000 }}
                        >
                          {suggestions.map((student) => (
                            <li
                              key={student.id}
                              className="list-group-item list-group-item-action d-flex flex-row gap-3 px-3 py-2"
                              onClick={() => handleSuggestionClick(student)}
                              role="button"
                            >
                              <img
                                src={
                                  import.meta.env.VITE_PROFILEURL +
                                  student.profilePic
                                }
                                width={40}
                                height={40}
                                className="rounded-circle"
                              />
                              <div className="d-flex flex-column">
                                <span className="fw-medium">
                                  {student.name}
                                </span>
                                <small className="text-muted">
                                  +91 {student.phone}
                                </small>
                              </div>
                            </li>
                          ))}
                        </ul>
                      )}
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
