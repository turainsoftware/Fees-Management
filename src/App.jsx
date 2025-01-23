import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import MobileNav from "./components/Navbar/MobileNav";
import { commonService } from "./services/CommonService";
import { ToastContainer } from "react-toastify";

const App = () => {
  //Login Checker
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <Outlet />
      {isLogin && <MobileNav />}
      <ToastContainer/>
    </>
  );
};

export default App;
