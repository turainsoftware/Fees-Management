import React, { useEffect, useState } from "react";
import {
  SecondaryNavbar,
  StudentPaymentSummary,
  StudentSearchFees,
} from "./../../components/index";
import { useAuth } from "../../contexts/AuthContext";
import { feesService } from "../../services/FeesService";
import { formatYearMonth } from "../../utils/Common";

const FeesRevive = () => {
  const { authToken } = useAuth();
  const [selectedBatch, setSelectedBatch] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [feesDetails, setFeesDetails] = useState({});

  const handleSubmitSearch = async (e) => {
    e.preventDefault();
    try {
      const data = await feesService.feesSummery({
        authToken: authToken,
        batchId: selectedBatch.id,
        studentId: selectedStudent.id,
      });
      console.info(data);
      console.log("selectedBatch", selectedBatch);
      console.log("selectedStudents", selectedStudent);
      setFeesDetails(data);
    } catch (error) {
      console.error(error);
    }
    e.preventDefault();
  };

  return (
    <main className="wrapper home-wrapper">
      <SecondaryNavbar title={"Fees Revive"} />
      <StudentSearchFees
        selectedBatch={selectedBatch}
        setSelectedBatch={setSelectedBatch}
        selectedStudent={selectedStudent}
        setSelectedStudent={setSelectedStudent}
        handleSubmitSearch={handleSubmitSearch}
      />
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
    </main>
  );
};

export default FeesRevive;
