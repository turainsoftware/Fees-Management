import React, { useEffect, useState } from "react";
import {
  SecondaryNavbar,
  StudentsListNav,
  StudentList as StudentListData,
} from "../../components";
import { useAuth } from "../../contexts/AuthContext";
import { teacherService } from "../../services/TeacherService";
import { ItemListShimmer } from "./../../Shimmers/index";

const StudentList = () => {
  const [searchName, setSearchName] = useState("");
  const [searchSession, setSearchSession] = useState("");

  return (
    <main className="wrapper home-wrapper">
      {/* Common Header */}
      <SecondaryNavbar title={"Student List"} />

      {/* Student Navbar */}
      <StudentsListNav searchName={searchName} setSearchName={setSearchName} />

      {/* Student Lists */}
      <StudentListData headerText={"Recent Students List"} isRecent={true} />
    </main>
  );
};

export default StudentList;
