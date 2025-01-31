import React from "react";
import { FeesList, SecondaryNavbar } from "../../components";
import FeesNav from "../../components/Navbar/FeesNav";
import { useAuth } from "../../contexts/AuthContext";

const Fees = () => {
  const { logout } = useAuth();
  const handleSubmit = () => {
    logout();
  };
  return (
    <main class="wrapper home-wrapper">
      <SecondaryNavbar title={"Fees"} />
      <FeesNav />
      <button
        onClick={handleSubmit}
        style={{ marginBlock: "30px", padding: 15, borderRadius: 20 }}
      >
        Logout
      </button>
      <FeesList />
    </main>
  );
};

export default Fees;
