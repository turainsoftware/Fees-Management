import React from "react";
import { FeesList, SecondaryNavbar } from "../../../components";

const FeesListPage = () => {
  return (
    <>
      <SecondaryNavbar title={"Fees"} />
      <FeesList pageNo={0} size={50} isLatest={false} />
    </>
  );
};

export default FeesListPage;
