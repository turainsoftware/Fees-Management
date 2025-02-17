import React, { useState } from "react";
import { BatchDetails, SecondaryNavbar } from "../../../components";
import { useLocation, useParams } from "react-router-dom";
import { BatchDetailsShimmer } from "../../../Shimmers";
import { batchService } from "../../../services/BatchService";
import { useAuth } from "../../../contexts/AuthContext";
const batchData = {
  board: {
    id: 56,
    name: "West Bengal Council of Higher Secondary Education (WBCHSE)",
  },
  classes: [{ id: 4, name: "Class 11" }],
  createdAt: "2025-02-17T05:20:19.340+00:00",
  days: ["Monday", "Thursday", "Wednesday", "Tuesday"],
  endMonth: 9,
  endTime: "12:50:00",
  endYear: 2025,
  id: 10,
  language: { id: 4, name: "Bengali" },
  monthlyExamFees: 20,
  monthlyFees: 350,
  name: "C++ 2025",
  startMonth: 2,
  startTime: "10:50:00",
  startYear: 2025,
  subjects: [
    { id: 19, name: "Computer Science" },
    { id: 18, name: "Computer Applications" },
  ],
};
const BatchDetailsPage = () => {
  const { id } = useParams();
  const { authToken } = useAuth();

  // State Variables
  const [isLoading, setIsLoading] = useState(true);
  const [batchData, setBatchData] = useState({});

  const fetchBatchData = async () => {
    try {
      const data = await batchService.byId({ id: id, authToken: authToken });
      console.log(data);
      setBatchData(data);
    } catch (error) {
      console.error("Error in fetching batch data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useState(() => {
    fetchBatchData();
  }, []);

  return (
    <main className="wrapper home-wrapper">
      <SecondaryNavbar title={"Batch Details"} />
      {isLoading ? (
        <BatchDetailsShimmer />
      ) : (
        <BatchDetails batchData={batchData} />
      )}
    </main>
  );
};

export default BatchDetailsPage;
