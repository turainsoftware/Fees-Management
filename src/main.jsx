import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//Styles Properties
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./assets/css/style.css";

import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import {
  BatchCreate,
  BatchList,
  ClassList,
  Dashboard,
  Fees,
  FeesRevive,
  Login,
  NewStudentRegister,
  Otp,
  StudentList,
  Students,
} from "./pages/index.js";
import RequireAuth from "./Auth/RequireAuth.jsx";
import AuthPages from "./Auth/AuthPages.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* Auth Routes */}

      <Route path="/" element={<Login />} />
      <Route path="otp" element={<Otp />} />

      {/* Home Routes */}
      {/* <Route element={<RequireAuth />}> */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/students" element={<Students />} />
      <Route path="/student-list" element={<StudentList />} />
      <Route path="/new-student" element={<NewStudentRegister />} />
      <Route path="/batch-list" element={<BatchList/>}/>
      <Route path="/class-list" element={<ClassList/>}/>
      <Route path="/create-batch" element={<BatchCreate/>}/>
      <Route path="/fees" element={<Fees/>}/>
      <Route path="/fees-recive" element={<FeesRevive/>}/>
      {/* </Route> */}
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
