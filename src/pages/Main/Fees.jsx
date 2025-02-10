import React from "react";
import { FeesList, SecondaryNavbar } from "../../components";
import FeesNav from "../../components/Navbar/FeesNav";
import { useAuth } from "../../contexts/AuthContext";

const Fees = () => {
  return (
    <main className="wrapper home-wrapper">
      <SecondaryNavbar title={"Fees"} />
      <FeesNav />
      <FeesList />
    </main>
  );
};

export default Fees;
