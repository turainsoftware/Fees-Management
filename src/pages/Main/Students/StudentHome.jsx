import React from "react";
import { SecondaryNavbar, StudentList, StudentsNav } from "../../../components";

const StudentHome = () => {
  return (
    <>
      {/* Secondary Navbar */}
      <SecondaryNavbar title={"Student"} />

      {/* Students Navbar */}
      <StudentsNav />

      {/* Recent Students List */}
      <StudentList headerText={"Recent Student List"} />
    </>
  );
};

export default StudentHome;
