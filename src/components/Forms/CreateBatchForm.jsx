import React, { useEffect, useState } from "react";
import Select from "react-select";

//Custom Hooks
import { useAuth } from "./../../contexts/AuthContext";
import { teacherService } from "./../../services/TeacherService";
import { toast } from "react-toastify";
import { batchService } from "../../services/BatchService";
import Swal from "sweetalert2";

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
  const { authToken } = useAuth();

  //State variables
  const [boards, setBoards] = useState([]);
  const [language, setLanguage] = useState([]);
  const [classes, setClasses] = useState([]);
  const [subjects, setSubjects] = useState([]);

  // Form Variables
  const [name, setName] = useState("");
  const [batchSession, setBatchSession] = useState("");
  const [selectedClassName, setSelectedClassName] = useState([]);
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedDays, setSelectedDays] = useState([]);
  const [batchStartTime, setBatchStartTime] = useState("");
  const [batchEndTime, setBatchEndTime] = useState("");
  const [monthlyFees, setMonthlyFees] = useState("");
  const [monthlyExamFees, setMonthlyExamFees] = useState("");

  const fetchUserData = async ({ authToken }) => {
    try {
      const data = await teacherService.profile({ authToken: authToken });
      console.log(data);
      setBoards((prev) => data.boards);
      setLanguage(data?.languages);
      setSubjects(data?.subjects);
      setClasses(data?.classes);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserData({ authToken: authToken });
  }, []);

  const validateFields = () => {
    if (
      !name ||
      !batchSession ||
      selectedClassName.length === 0 ||
      selectedSubjects.length === 0 ||
      !selectedBoard ||
      !selectedLanguage ||
      selectedDays.length === 0 ||
      !batchStartTime ||
      !batchEndTime ||
      !monthlyFees ||
      !monthlyExamFees
    ) {
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateFields()) {
      const data = await batchService.createBatch({
        authToken: authToken,
        name: name,
        batchSession: batchSession,
        startTime: batchStartTime,
        endTime: batchEndTime,
        days: selectedDays,
        monthlyFees: monthlyFees,
        monthlyExamFees: monthlyExamFees,
        subjects: selectedSubjects,
        classes: selectedClassName,
        board: selectedBoard,
        language: selectedLanguage,
      });
      console.log(data);
      if (data?.status) {
        Swal.fire({
          title: data?.message || "Success",
          text: "Operation completed successfully",
          icon: "success",
        });
        
      } else {
        Swal.fire({
          title: "Error",
          text: data?.message || "Something went wrong, please try again.",
          icon: "error",
        });
      }
    } else {
      toast.error("Please fill all fields");
      return;
    }
  };

  return (
    <section className="student-register my-3 pb-100">
      <div className="container">
        <div className="row g-2">
          <div className="col-12">
            <div className="inner-contain pb-14 bg-white light-blue-border radius-8 position-relative">
              <form onSubmit={handleSubmit}>
                <div className="form-header-bg px-14">
                  <h5 className="mb-0 fs-6 text-white fw-semibold">
                    Batch Details
                  </h5>
                </div>
                <div className="px-14 mt-2 pt-2">
                  <div className="row g-3">
                    <div className="col-12">
                      <label htmlFor="" className="fs-13 mb-2 fw-medium">
                        Batch Name
                      </label>
                      <input
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        type="text"
                        className="form-control shadow-none fs-14 fw-medium"
                        placeholder=""
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="" className="fs-13 mb-2 fw-medium">
                        Batch Session<span className="red-color">*</span>
                      </label>
                      <select
                        onChange={(e) => setBatchSession(e.target.value)}
                        id=""
                        className="form-select shadow-none fs-14 fw-medium"
                      >
                        <option value="" defaultValue={true}>
                          Select a session
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
                    <div className="col-12">
                      <label htmlFor="" className="fs-13 mb-2 fw-medium">
                        className
                      </label>
                      <Select
                        onChange={(items) => {
                          setSelectedClassName(
                            items.map((item) => ({
                              id: item.value,
                              name: item.label,
                            }))
                          );
                        }}
                        isMulti
                        options={classes.map((item, index) => ({
                          value: item.id,
                          label: item.name,
                        }))}
                      />{" "}
                    </div>
                    <div className="col-12">
                      <label htmlFor="" className="fs-13 mb-2 fw-medium">
                        Subject
                      </label>
                      <Select
                        onChange={(items) => {
                          setSelectedSubjects(
                            items.map((item) => ({
                              id: item.value,
                              name: item.label,
                            }))
                          );
                        }}
                        isMulti
                        options={subjects.map((item, index) => ({
                          value: item.id,
                          label: item.name,
                        }))}
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="" className="fs-13 mb-2 fw-medium">
                        Board<span className="red-color">*</span>
                      </label>
                      <select
                        onChange={(e) => {
                          setSelectedBoard(e.target.value);
                        }}
                        name=""
                        id=""
                        className="form-select shadow-none fs-14 fw-medium"
                      >
                        <option defaultValue={true} value={""}>
                          Select a board
                        </option>
                        {boards.map((item, index) => (
                          <option key={index} value={item?.id}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-12">
                      <label htmlFor="" className="fs-13 mb-2 fw-medium">
                        Language<span className="red-color">*</span>
                      </label>
                      <select
                        onChange={(e) => setSelectedLanguage(e.target.value)}
                        name=""
                        id=""
                        className="form-select shadow-none fs-14 fw-medium"
                      >
                        <option defaultValue value={""}>
                          Select a language
                        </option>
                        {language.map((item, index) => (
                          <option key={index} value={item?.id}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-12">
                      <label htmlFor="" className="fs-13 mb-2 fw-medium">
                        Batch Day
                      </label>
                      <Select
                        onChange={(dayss) =>
                          setSelectedDays(dayss.map((item) => item.value))
                        }
                        isMulti
                        options={dayOptions}
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="" className="fs-13 mb-2 fw-medium">
                        Batch Start Time<span className="red-color">*</span>
                      </label>
                      <input
                        onChange={(e) => setBatchStartTime(e.target.value)}
                        type="time"
                        className="form-control shadow-none fs-14 fw-medium"
                        placeholder=""
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="" className="fs-13 mb-2 fw-medium">
                        Batch End Time
                      </label>
                      <input
                        onChange={(e) => setBatchEndTime(e.target.value)}
                        type="time"
                        className="form-control shadow-none fs-14 fw-medium"
                        placeholder=""
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="" className="fs-13 mb-2 fw-medium">
                        Student Monthly Fees
                      </label>
                      <input
                        value={monthlyFees}
                        onChange={(e) => setMonthlyFees(e.target.value)}
                        type="text"
                        className="form-control shadow-none fs-14 fw-medium"
                        placeholder=""
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="" className="fs-13 mb-2 fw-medium">
                        Monthly Exam Fees
                      </label>
                      <input
                        value={monthlyExamFees}
                        onChange={(e) => setMonthlyExamFees(e.target.value)}
                        type="text"
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
