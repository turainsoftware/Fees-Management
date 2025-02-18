import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//Styles Properties
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./assets/css/style.css";
import "react-toastify/ReactToastify.css";

import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import {
  BatchCreate,
  BatchHome,
  BatchList,
  ClassList,
  Dashboard,
  Fees,
  FeesHome,
  FeesListPage,
  FeesRevive,
  Login,
  NewStudentRegister,
  NotFound,
  Otp,
  Register,
  StudentHome,
  StudentList,
  Students,
  BatchDetailsPage,
  Profile
} from "./pages/index.js";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import ProtectedRoute from "./Auth/ProtectedRoute.jsx";
import AuthHomeOrRedirect from "./Auth/AuthHomeOrRedirect.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* Public Routes */}
      <Route path="/" element={<AuthHomeOrRedirect />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="otp" element={<Otp />} />

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Studennt Routes Start*/}
        <Route path="/students" element={<Students />}>
          <Route path="/students" element={<StudentHome />} />
          <Route path="student-list" element={<StudentList />} />
          <Route path="new-student" element={<NewStudentRegister />} />
        </Route>
        {/* Studennt Routes End*/}

        <Route path="/batch" element={<BatchList />} >
          <Route path="/batch" element={<BatchHome/>}/>
          <Route path="create-batch" element={<BatchCreate />} />
          <Route path="batch-details/:id" element={<BatchDetailsPage />} />
        </Route>

        {/* Profile Routes */}
        <Route path="/profile" element={<Profile/>}/>


        <Route path="/class-list" element={<ClassList />} />

        {/* Fees Routes Start*/}
        <Route path="/fees" element={<Fees />}>
          <Route path="/fees" element={<FeesHome />} />
          <Route path="fees-recive" element={<FeesRevive />} />
          <Route path="fees-list" element={<FeesListPage />} />
        </Route>
        {/* Fees Routes End*/}
      </Route>

      {/* For Not Found Page */}
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
  </AuthProvider>
);
