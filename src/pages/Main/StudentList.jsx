import React, { useEffect, useState } from "react";
import {
  SecondaryNavbar,
  StudentsListNav,
  StudentListData,
} from "../../components";
import { useAuth } from "../../contexts/AuthContext";
import { teacherService } from "../../services/TeacherService";
import { ItemListShimmer } from "./../../Shimmers/index";
import { studentService } from "../../services/StudentService";

const StudentList = () => {
  // Auth Token
  const { authToken } = useAuth();

  const [searchName, setSearchName] = useState("");
  const [batches, setBatches] = useState([]);
  const [selectedBatch, setSelectedBatch] = useState({});
  const [studentData, setStudentData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchBatches = async () => {
    try {
      const data = await teacherService.batches({ authToken: authToken });
      setBatches(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBatches();
  }, []);

  const studentsByBatch = async () => {
    setIsLoading(true);
    try {
      const data = await studentService.studentsByBatch({
        authToken: authToken,
        batchId: selectedBatch.id,
      });
      console.log(data);
      setStudentData(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    studentsByBatch();
  }, [selectedBatch]);

  return (
    <main className="wrapper home-wrapper">
      {/* Common Header */}
      <SecondaryNavbar title={"Student List"} />

      {/* Student Navbar */}
      <StudentsListNav
        searchName={searchName}
        setSearchName={setSearchName}
        batches={batches}
        selectedBatch={selectedBatch}
        setSelectedBatch={setSelectedBatch}
      />

      {/* Student Lists */}
      <StudentListData
        headerText={"Recent Students List"}
        isRecent={true}
        data={studentData}
        isLoading={isLoading}
        studentName={searchName}
      />
    </main>
  );
};

export default StudentList;
