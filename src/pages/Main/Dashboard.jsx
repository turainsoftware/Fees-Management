import React from "react";
import {
  ChartSection,
  DashboardHeader,
  FeesList,
  ModelNotification,
  OverviewHeader,
  StudentList,
} from "./../../components/index";

const Dashboard = () => {
  return (
    <main className="wrapper home-wrapper">
      {/* DashBoard Header */}
      <DashboardHeader />

      {/* OverviewHeader */}
      <OverviewHeader />

      {/* Chart Section */}
      <ChartSection />

      {/* Student List */}
      <StudentList headerText={"Students List"} />

      {/* FeesList */}
      <FeesList />
    </main>
  );
};

export default Dashboard;
