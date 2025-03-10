import React, { useEffect, useState } from "react";
import {
  BatchDetails,
  BatchInfoCard,
  CommonStudentList,
  FeesStructure,
  ScheduleInfo,
  SecondaryNavbar,
  SubjectsCard,
} from "../../../components";
import { useLocation, useParams } from "react-router-dom";
import { BatchDetailsShimmer } from "../../../Shimmers";
import { batchService } from "../../../services/BatchService";
import { useAuth } from "../../../contexts/AuthContext";
import {
  FaBook,
  FaBookOpen,
  FaCalendarAlt,
  FaCalendarDay,
  FaClock,
  FaGraduationCap,
} from "react-icons/fa";
import { error } from "jquery";
import { studentService } from "../../../services/StudentService";

const BatchDetailsPage = () => {
  const { id } = useParams();
  const { authToken } = useAuth();

  // State Variables
  const [isLoading, setIsLoading] = useState(true);
  const [batchData, setBatchData] = useState({});

  // Students State Variables
  const [isStudentLogin, setIsStudentLogin] = useState(true);
  const [studentsData, setStudentsData] = useState([]);
  const [isStudentReload, setIsStudentReload] = useState(1);

  const fetchBatchData = async () => {
    try {
      const data = await batchService.byId({ id: id, authToken: authToken });
      setBatchData(data);
    } catch (error) {
      console.error("Error in fetching batch data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchStudentsData = async () => {
    try {
      const data = await studentService.studentsByBatch({
        authToken: authToken,
        batchId: id,
      });
      setStudentsData(data);
    } catch {
      console.error(error);
    } finally {
      setIsStudentLogin(false);
    }
  };

  const fetchData = async () => {
    await fetchBatchData();
    await fetchStudentsData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchStudentsData();
  }, [isStudentReload]);

  return (
    <main className="wrapper home-wrapper">
      <SecondaryNavbar title={"Batch Details"} />
      {isLoading ? (
        <BatchDetailsShimmer />
      ) : (
        <div className="container py-4 pb-100">
          <div className="row g-4">
            {/* Main Batch Info */}
            <BatchInfoCard
              batchId={batchData?.id}
              name={batchData?.name}
              board={batchData?.board}
              classes={batchData?.classes}
              language={batchData?.language}
              authToken={authToken}
            />

            {/* Schedule Info */}
            {/* <div className="col-md-6">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title text-primary d-flex align-items-center">
                    <FaCalendarAlt className="fs-4 me-2" />
                    Schedule
                  </h5>
                  <hr className="border-light opacity-75" />
                  <div className="mb-4">
                    <small className="text-body-secondary d-flex align-items-center mb-2">
                      <FaCalendarDay className="me-2" />
                      Class Days
                    </small>
                    <div className="d-flex flex-wrap gap-2">
                      {batchData.days.sort().map((day, index) => (
                        <span
                          key={index}
                          className="badge bg-primary-subtle text-primary-emphasis px-3 py-2 rounded-pill"
                        >
                          {day}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-3">
                    <small className="text-body-secondary d-flex align-items-center mb-2">
                      <FaClock className="me-2" />
                      Timing
                    </small>
                    <p className="mb-0 text-primary fw-semibold">
                      {`${formatTime(batchData.startTime)} - ${formatTime(
                        batchData.endTime
                      )}`}
                    </p>
                  </div>
                  <div>
                    <small className="text-body-secondary">Duration</small>
                    <p className="mb-0 text-primary fw-semibold">
                      {`${formatMonth(batchData.startMonth)} ${
                        batchData.startYear
                      } - ${formatMonth(batchData.endMonth)} ${
                        batchData.endYear
                      }`}
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
            <ScheduleInfo
              authToken={authToken}
              batchId={id}
              days={batchData?.days}
              startTime={batchData?.startTime}
              endTime={batchData?.endTime}
              startYear={batchData?.startYear}
              endYear={batchData?.endYear}
              startMonth={batchData?.startMonth}
              endMonth={batchData?.endMonth}
            />

            <FeesStructure
              monthlyfees={batchData.monthlyFees}
              monthlyexamfees={batchData.monthlyExamFees}
              batchId={batchData.id}
              authToken={authToken}
            />

            {/* Subjects */}
            {/* <div className="col-12">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-warning d-flex align-items-center">
                    <FaBookOpen className="fs-4 me-2" />
                    Subjects
                  </h5>
                  <hr className="border-light opacity-75" />
                  <div className="d-flex flex-wrap gap-3">
                    {batchData.subjects.map((subject, index) => (
                      <span
                        key={index}
                        className="badge bg-warning-subtle text-warning-emphasis px-4 py-2 fs-6"
                      >
                        {subject.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div> */}
            <SubjectsCard
              authToken={authToken}
              batchId={id}
              defaultSubjects={batchData?.subjects}
            />
          </div>
          <CommonStudentList
            headerText={"Students"}
            isLoading={isStudentLogin}
            data={studentsData}
            setIsStudentReload={setIsStudentReload}
            batchId={id}
          />
        </div>
      )}
    </main>
  );
};

export default BatchDetailsPage;
