import React from "react";
import { SecondaryNavbar, StudentList, StudentsNav } from "../../components";

const Students = () => {
  return (
    <main className="wrapper home-wrapper">
      {/* Secondary Navbar */}
      <SecondaryNavbar title={"Student"} />

      {/* Students Navbar */}
      <StudentsNav />

      {/* Recent Students List */}
      <StudentList headerText={"Recent Student List"}/>


    </main>
  );
};

export default Students;
