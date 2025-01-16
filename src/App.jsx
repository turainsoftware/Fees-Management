import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import MobileNav from "./components/Navbar/MobileNav";

const App = () => {
  //Login Checker
  const [isLogin, setIsLogin] = useState(false);

  return isLogin ? (
    <>
      <Outlet />
      <MobileNav />
    </>
  ) : (
    <div className="bg-white">
      <Outlet />
    </div>
  );
};

export default App;
