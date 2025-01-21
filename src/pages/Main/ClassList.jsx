import React from "react";
import { ItemList, SecondaryNavbar } from "../../components";

const ClassList = () => {
  return (
    <main className="wrapper home-wrapper">
      <SecondaryNavbar
        title={"Class List"}
        isCreateBtnActive={true}
        createBtnPath={"/create-class"}
        crateBtnText={"Create Class"}
      />
      <ItemList />
    </main>
  );
};

export default ClassList;
