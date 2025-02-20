import React, { useEffect, useState } from "react";
import {
  ChartSection,
  DashboardHeader,
  FeesList,
  Logout,
  ModelNotification,
  OverviewHeader,
  StudentList,
} from "./../../components/index";
import { teacherService } from "../../services/TeacherService";
import { useAuth } from "../../contexts/AuthContext";

const Dashboard = () => {
  const authToken = localStorage.getItem("authToken");
  const { logout } = useAuth();
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const profile = async () => {
    setIsLoading(true);
    try {
      const data = await teacherService.profileLess({ authToken: authToken });
      if (!data) {
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
        userData={userData}
      />

      {/* OverviewHeader */}
      <OverviewHeader authToken={authToken} />

      {/* Chart Section */}
      <ChartSection />

      {/* Student List */}
      <StudentList headerText={"Students List"} isRecent={false} />

      {/* FeesList */}
      <FeesList pageNo={0} size={10} />
    </main>
  );
};

export default Dashboard;
