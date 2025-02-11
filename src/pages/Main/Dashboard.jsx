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
import { RiLogoutCircleRFill } from "@remixicon/react";

const Dashboard = () => {
  const authToken = localStorage.getItem("authToken");
  const {logout} = useAuth();
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const profile = async () => {
    setIsLoading(true);
    try {
      const data = await teacherService.profile({ authToken: authToken });
      if(!data){
        logout();
        return;
      }
      setUserData(data);
    } catch (error) {
      console.log(error);
      
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    profile();
  }, []);

  return (
    <main className="wrapper home-wrapper">
      {/* DashBoard Header */}
      <DashboardHeader
        avatar={userData?.profilePic}
        name={userData?.name}
        isLoading={isLoading}
      />

      {/* OverviewHeader */}
      <OverviewHeader/>

      {/* Chart Section */}
      <ChartSection />

      {/* Student List */}
      <StudentList headerText={"Students List"} isRecent={false} />

      {/* FeesList */}
      <FeesList/>

    </main>
  );
};

export default Dashboard;
