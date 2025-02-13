import React from "react";
import { SecondaryNavbar, StudentList, StudentsNav } from "../../components";
import { Outlet } from "react-router-dom";

const Students = () => {
  return (
    <main className="wrapper home-wrapper">
      <Outlet/>
    </main>
  );
};

export default Students;
