import React from "react";
import { FeesList, SecondaryNavbar } from "../../components";

const FeesListPage = () => {
  return (
    <>
      <SecondaryNavbar title={"Fees"} />
      <FeesList isLatest={false} />
    </>
  );
};

export default FeesListPage;
