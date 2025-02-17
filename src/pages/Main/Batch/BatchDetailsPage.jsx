import React from "react";
import { BatchDetails, SecondaryNavbar } from "../../../components";
import { useLocation } from "react-router-dom";
const batchData = {
    "board": {
      "id": 56,
      "name": "West Bengal Council of Higher Secondary Education (WBCHSE)"
    },
    "classes": [
      {"id": 4, "name": "Class 11"}
    ],
    "createdAt": "2025-02-17T05:20:19.340+00:00",
    "days": ["Monday", "Thursday", "Wednesday", "Tuesday"],
    "endMonth": 9,
    "endTime": "12:50:00",
    "endYear": 2025,
    "id": 10,
    "language": {"id": 4, "name": "Bengali"},
    "monthlyExamFees": 20,
    "monthlyFees": 350,
    "name": "C++ 2025",
    "startMonth": 2,
    "startTime": "10:50:00",
    "startYear": 2025,
    "subjects": [
      {"id": 19, "name": "Computer Science"},
      {"id": 18, "name": "Computer Applications"}
    ]
  };
const BatchDetailsPage = () => {
    const location=useLocation();
    const {data}=location.state;

  return (
    <main className="wrapper home-wrapper">
      <SecondaryNavbar title={"Batch Details"}/>
      <BatchDetails batchData={data}/>
    </main>
  );
};

export default BatchDetailsPage;
