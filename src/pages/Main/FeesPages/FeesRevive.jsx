import React, { useEffect, useState } from "react";
import {
  CommonLoader,
  FeesPayment,
  SecondaryNavbar,
  StudentPaymentSummary,
  StudentSearchFees,
} from "../../../components/index";
import { useAuth } from "../../../contexts/AuthContext";
import { feesService } from "../../../services/FeesService";
import { formatYearMonth } from "../../../utils/Common";
import { toast } from "react-toastify";
import { teacherService } from "../../../services/TeacherService";
import { studentService } from "../../../services/StudentService";

const FeesRevive = () => {
  const { authToken } = useAuth();
  const [selectedBatch, setSelectedBatch] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [feesDetails, setFeesDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [searchIndex, setSearchIndex] = useState(0);
  // State Variables
  const [batches, setBatches] = useState([]);
  const [studentsOfBatch, setStudentOfBatch] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmitSearch = async (e) => {
    e.preventDefault();
    if (selectedBatch === null) {
      toast.info("Select a batch");
      return;
    }
    if (selectedStudent === null) {
      toast.info("Enter Student Name");
      return;
    }
    setIsLoading(true);
    try {
      const data = await feesService.feesSummery({
        authToken: authToken,
        batchId: selectedBatch.id,
        studentId: selectedStudent.id,
      });
      setFeesDetails(data);
      setShowCard(true);
    } catch (error) {
      setShowCard(false);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmitPrototype = async () => {
    setIsLoading(true);
    try {
      const data = await feesService.feesSummery({
        authToken: authToken,
        batchId: selectedBatch.id,
        studentId: selectedStudent.id,
      });
      setFeesDetails(data);
    } catch (error) {
      setShowCard(false);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleSubmitPrototype();
  }, [searchIndex]);

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

  return (
    <main className="wrapper home-wrapper">
      <SecondaryNavbar title={"Fees Recive"} />
      <StudentSearchFees
        selectedBatch={selectedBatch}
        setSelectedBatch={setSelectedBatch}
        selectedStudent={selectedStudent}
        setSelectedStudent={setSelectedStudent}
        handleSubmitSearch={handleSubmitSearch}
        paymentIndex={searchIndex}
        batches={batches}
        setBatches={setBatches}
        studentsOfBatch={studentsOfBatch}
        setStudentOfBatch={setStudentOfBatch}
        suggestions={suggestions}
        setSuggestions={setSuggestions}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleBatchSearch={handleBatchSearch}
        handleSuggestionClick={handleSuggestionClick}
      />

      {isLoading && <CommonLoader />}

      {showCard && (
        <>
          {showCard && (
            <StudentPaymentSummary
              name={selectedStudent?.name}
              batchName={selectedBatch?.name}
              monthlyFees={feesDetails?.monthlyFees}
              yearlyFees={feesDetails?.totalFees}
              totalDue={feesDetails?.totalDue}
              totalPaid={feesDetails?.totalPaid}
              joiningDate={formatYearMonth({
                month: feesDetails?.startMonth,
                year: feesDetails?.startYear,
              })}
              endDate={formatYearMonth({
                month: feesDetails?.endMonth,
                year: feesDetails?.endYear,
              })}
            />
          )}
          {showCard && (
            <FeesPayment
              headerText={"Monthly Fees"}
              batchId={selectedBatch?.id}
              studentName={selectedStudent?.name}
              studentId={selectedStudent?.id}
              startMonth={feesDetails?.startMonth}
              startYear={feesDetails.startYear}
              endMonth={feesDetails?.endMonth}
              endYear={feesDetails?.endYear}
              monthlyFees={feesDetails?.monthlyFees}
              paidFees={feesDetails?.feesHistories}
              setPayIndex={setSearchIndex}
            />
          )}
        </>
      )}
    </main>
  );
};

export default FeesRevive;
