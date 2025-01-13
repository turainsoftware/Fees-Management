import React, { useState } from "react";
import { Outlet } from "react-router-dom";


const App = () => {
  //Login Checker
  const [isLogin,setIsLogin] = useState(false);

  return isLogin ? null : (
    <>
      <Outlet/>
    </>
  );
};

export default App;
