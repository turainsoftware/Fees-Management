import React from "react";
import {
  SecondaryNavbar,
  StudentsListNav,
  StudentList as StudentListData,
} from "../../components";

const StudentList = () => {
  return (
    <main class="wrapper home-wrapper">
      {/* Common Header */}
      <SecondaryNavbar title={"Student List"} />

      {/* Student Navbar */}
      <StudentsListNav />

      {/* Student Lists */}
      <StudentListData headerText={"Recent Students List"} />
    </main>
  );
};

export default StudentList;
