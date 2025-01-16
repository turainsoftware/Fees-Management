import React from "react";
import { SecondaryNavbar, StudentRegisterForm } from "../../components";

const NewStudentRegister = () => {
  return (
    <main class="wrapper home-wrapper">
      {/* Header Section */}
      <SecondaryNavbar title={"New Student Register"} />

      {/* Student Register Form */}
      <StudentRegisterForm />
    </main>
  );
};

export default NewStudentRegister;
