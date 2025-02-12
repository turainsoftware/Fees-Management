import React from "react";
import { Outlet } from "react-router-dom";

const Fees = () => {
  return (
    <main className="wrapper home-wrapper">
      <Outlet/>
    </main>
  );
};

export default Fees;
