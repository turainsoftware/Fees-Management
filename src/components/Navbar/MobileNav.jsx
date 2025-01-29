import React from "react";
import menuActive from "./../../assets/images/dashboard/menu-active.svg";
import menuNotActive from "./../../assets/images/dashboard/menu-not-active.svg";
import { NavLink, useLocation } from "react-router-dom";

const MobileNav = () => {
  const location = useLocation();

  return (
    <div className="bottomMenu bg-white border-top border-subtile-secondary">
      <div className="menuBTM px-14">
        <ul className="d-flex justify-content-evenly flex-wrap m-0 align-items-center">
          <li className="text-center">
            <NavLink
              to={"dashboard"}
              className="d-flex align-items-center flex-column justify-content-around text-center position-relative"
            >
              <i className="ri-home-5-line"></i>
              <span>Home</span>
              <img
                src={
                  location.pathname.includes("dashboard")
                    ? menuActive
                    : menuNotActive
                }
                alt={
                  location.pathname.includes("dashboard")
                    ? "Active Menu"
                    : "Not Active Menu"
                }
              />
            </NavLink>
          </li>
          <li className="text-center">
            <NavLink
              to={"students"}
              className="d-flex align-items-center flex-column justify-content-around text-center position-relative"
            >
              <i className="ri-user-search-line"></i>
              <span>Student</span>
              <img
                src={
                  location.pathname.includes("students")
                    ? menuActive
                    : menuNotActive
                }
                alt={
                  location.pathname.includes("students")
                    ? "Active Menu"
                    : "Not Active Menu"
                }
              />
            </NavLink>
          </li>
          <li className="text-center">
            <NavLink
              to={"fees"}
              className="d-flex align-items-center flex-column justify-content-around text-center position-relative"
            >
              <i className="ri-wallet-2-line"></i>
              <span>Fees</span>
              <img
                src={
                  location.pathname.includes("fees")
                    ? menuActive
                    : menuNotActive
                }
                alt={
                  location.pathname.includes("fees")
                    ? "Active Menu"
                    : "Not Active Menu"
                }
              />
            </NavLink>
          </li>
          <li className="text-center">
            <NavLink
              to={"menu"}
              className="d-flex align-items-center flex-column justify-content-around text-center position-relative"
            >
              <i className="ri-menu-line"></i>
              <span>Menu</span>
              <img
                src={
                  location.pathname.includes("menu")
                    ? menuActive
                    : menuNotActive
                }
                alt={
                  location.pathname.includes("menu")
                    ? "Active Menu"
                    : "Not Active Menu"
                }
              />
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
