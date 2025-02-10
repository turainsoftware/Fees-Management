import React, { useEffect, useState } from "react";
import { useAuth } from "./../../contexts/AuthContext";
import { teacherService } from "../../services/TeacherService";
import { studentService } from "../../services/StudentService";

const StudentSearchFees = ({
  selectedBatch,
  setSelectedBatch,
  selectedStudent,
  setSelectedStudent,
  handleSubmitSearch,
}) => {
  // Context Variable
  const { authToken } = useAuth();

  // State Variables
  const [batches, setBatches] = useState([]);
  const [studentsOfBatch, setStudentOfBatch] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchBatchDetails = async () => {
    try {
      const data = await teacherService.batches({ authToken });
      setBatches(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBatchDetails();
  }, []);

  const fetchStudents = async ({ batchId }) => {
    try {
      const data = await studentService.studentsByBatch({
        authToken: authToken,
        batchId: batchId,
      });
      console.log(data);
      setStudentOfBatch(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleBatchSearch = (e) => {
    const batchId = parseInt(e.target.value);
  
    const chosenBatch = batches.find((item) => item.id === batchId);
  
    if (chosenBatch) {
      setSelectedBatch(chosenBatch); // Update the selected batch state
      fetchStudents({ batchId: chosenBatch.id });
    } else {
      setSelectedBatch(null);
      setStudentOfBatch([]); // Reset students list if no batch is selected
    }
  };
  

  //Filtered Student
  useEffect(() => {
    if (searchTerm) {
      const filteredData = studentsOfBatch.filter((student) =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      console.log(filteredData);
      setSuggestions(filteredData);
    } else {
      setSuggestions([]);
    }
  }, [searchTerm, selectedStudent]);

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion.name);
    setSelectedStudent(suggestion);
    setTimeout(() => {
      setSuggestions([]);
    }, 0);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
  };

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
                        placeholder=""
                      />
                      {suggestions.length > 0 && (
                        <ul className="suggestion-list">
                          {suggestions.map((student) => (
                            <li
                              key={student.id}
                              onClick={() => handleSuggestionClick(student)}
                            >
                              {student.name}
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
