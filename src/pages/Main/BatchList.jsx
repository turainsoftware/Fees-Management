import React from "react";
import SecondaryNavbar from "../../components/Navbar/SecondaryNavbar";
import { ItemList } from "../../components";

const BatchList = () => {
  return (
    <main className="wrapper home-wrapper">
      <SecondaryNavbar
        title={"Batch List"}
        isCreateBtnActive={true}
        createBtnPath={"/create-batch"}
        crateBtnText={"Create Batch"}
      />
      <ItemList />
    </main>
  );
};

export default BatchList;
