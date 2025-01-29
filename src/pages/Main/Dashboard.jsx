import React, { useEffect, useState } from "react";
import {
  ChartSection,
  DashboardHeader,
  FeesList,
  ModelNotification,
  OverviewHeader,
  StudentList,
} from "./../../components/index";
import { teacherService } from "../../services/TeacherService";
import { useAuth } from "../../contexts/AuthContext";

const Dashboard = () => {
  const authToken=localStorage.getItem("authToken");
  const [userData,setUserData]=useState({});

  const profile=async ()=>{
    try {
      const data=await teacherService.profile({authToken: authToken});
      console.log(data)
      setUserData(data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    profile();
  },[])

  return (
    <main className="wrapper home-wrapper">
      {/* DashBoard Header */}
      <DashboardHeader avatar={userData?.profilePic} 
      name={userData?.name} />

      {/* OverviewHeader */}
      <OverviewHeader />

      {/* Chart Section */}
      <ChartSection />

      {/* Student List */}
      <StudentList headerText={"Students List"} isRecent={false} />

      {/* FeesList */}
      <FeesList />
    </main>
  );
};

export default Dashboard;
