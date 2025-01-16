import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import MobileNav from "./components/Navbar/MobileNav";

const App = () => {
  // Login checker
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className={isLogin ? "" : "bg-white"}>
      <Outlet />
      {isLogin && <MobileNav />}{" "}
    </div>
  );
};

export default App;
