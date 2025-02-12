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
  StudentList,
  Students,
} from "./pages/index.js";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import ProtectedRoute from "./Auth/ProtectedRoute.jsx";
import AuthHomeOrRedirect from "./Auth/AuthHomeOrRedirect.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

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
        <Route path="/students" element={<Students />} />
        <Route path="/student-list" element={<StudentList />} />
        <Route path="/new-student" element={<NewStudentRegister />} />
        <Route path="/batch-list" element={<BatchList />} />
        <Route path="/class-list" element={<ClassList />} />
        <Route path="/create-batch" element={<BatchCreate />} />
        <Route path="/fees" element={<Fees />}>
          <Route path="/fees" element={<FeesHome />} />
          <Route path="fees-recive" element={<FeesRevive />} />
          <Route path="fees-list" element={<FeesListPage />} />
        </Route>
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
