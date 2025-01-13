import React from "react";
import {
  ChartSection,
  DashboardHeader,
  FeesList,
  OverviewHeader,
  StudentList,
} from "./../../components/index";

export const Dashboard = () => {
  return (
    <main className="wrapper home-wrapper">
      {/* DashBoard Header */}
      <DashboardHeader />

      {/* OverviewHeader */}
      <OverviewHeader />

      {/* Chart Section */}
      <ChartSection />

      {/* Student List */}
      <StudentList />

      {/* FeesList */}
      <FeesList />
    </main>
  );
};
