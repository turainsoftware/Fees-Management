import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import MobileNav from "./components/Navbar/MobileNav";

const App = () => {
  //Login Checker
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <Outlet />
      {isLogin && <MobileNav />}
    </>
  );
};

export default App;
