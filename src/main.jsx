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
import { Dashboard, Login, Otp } from "./pages/index.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      
      {/* Auth Routes */}

      <Route path="/" element={<Login/>}/>
      <Route path="otp" element={<Otp/>}/>


      {/* Home Routes */}
      <Route path="/dashboard" element={<Dashboard/>}/>

    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
