import React from "react";
import FeesNav from "../../components/Navbar/FeesNav";
import { FeesList, SecondaryNavbar } from "../../components";

const FeesHome = () => {
  return (
    <>
      <SecondaryNavbar title={"Fees"} />
      <FeesNav />
      <FeesList />
    </>
  );
};

export default FeesHome;
