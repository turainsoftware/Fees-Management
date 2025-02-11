import React from "react";
import { FeesList, SecondaryNavbar } from "../../components";
import FeesNav from "../../components/Navbar/FeesNav";
import { useAuth } from "../../contexts/AuthContext";
import { Outlet } from "react-router-dom";

const Fees = () => {
  return (
    <main className="wrapper home-wrapper">
      <Outlet/>
    </main>
  );
};

export default Fees;
