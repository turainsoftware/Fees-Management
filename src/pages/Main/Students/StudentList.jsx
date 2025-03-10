// StudentList.js
import React, { useEffect, useState } from "react";
import {
  SecondaryNavbar,
  StudentsListNav,
  StudentListData,
} from "../../../components";
import { useAuth } from "../../../contexts/AuthContext";
import { teacherService } from "../../../services/TeacherService";
import { ItemListShimmer } from "../../../Shimmers/index";
import { studentService } from "../../../services/StudentService";

const StudentList = () => {
  const { authToken } = useAuth();
  const [searchName, setSearchName] = useState("");
  const [batches, setBatches] = useState([]);
  const [selectedBatch, setSelectedBatch] = useState({});
  const [studentData, setStudentData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isStudentReload, setIsStudentReload] = useState(1);

  const fetchBatches = async () => {
    try {
      const data = await teacherService.batches({ authToken: authToken });
      setBatches(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBatches();
  }, []);

  useEffect(() => {
    setSearchName("");
  }, [selectedBatch]);

  const studentsByBatch = async () => {
    setIsLoading(true);
    try {
      const data = await studentService.studentsByBatch({
        authToken: authToken,
        batchId: selectedBatch.id,
      });
      setStudentData(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (selectedBatch.id) {
      // Only fetch if a batch is selected
      studentsByBatch();
    } else {
      setStudentData([]); // Reset student data when no batch is selected
    }
  }, [selectedBatch, isStudentReload]);

  return (
    <main className="wrapper home-wrapper">
      <SecondaryNavbar title={"Student List"} />
      <StudentsListNav
        searchName={searchName}
        setSearchName={setSearchName}
        batches={batches}
        selectedBatch={selectedBatch}
        setSelectedBatch={setSelectedBatch}
        isLoading={isLoading} // Pass loading state
        hasStudents={studentData.length > 0} // Pass whether students exist
      />
      <StudentListData
        headerText={"Recent Students List"}
        isRecent={true}
        data={studentData || []}
        isLoading={isLoading}
        studentName={searchName}
        batchId={selectedBatch.id}
        setIsStudentsReload={setIsStudentReload}
      />
    </main>
  );
};

export default StudentList;
