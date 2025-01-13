import React from 'react';
import menuActive from './../../assets/images/dashboard/menu-active.svg';
import menuNotActive from './../../assets/images/dashboard/menu-not-active.svg';

const MobileNav = () => {
  return (
    <div className="bottomMenu bg-white border-top border-subtile-secondary">
      <div className="menuBTM px-14">
        <ul className="d-flex justify-content-evenly flex-wrap m-0 align-items-center">
          <li className="text-center">
            <a
              href="dashboard.html"
              className="active d-flex align-items-center flex-column justify-content-around text-center position-relative"
            >
              <i className="ri-home-5-line"></i>
              <span>Home</span>
              <img src={menuActive} alt="Active Menu" />
            </a>
          </li>
          <li className="text-center">
            <a
              href="student.html"
              className="d-flex align-items-center flex-column justify-content-around text-center position-relative"
            >
              <i className="ri-user-search-line"></i>
              <span>Student</span>
              <img src={menuNotActive} alt="Not Active Menu" />
            </a>
          </li>
          <li className="text-center">
            <a
              href="fees.html"
              className="d-flex align-items-center flex-column justify-content-around text-center position-relative"
            >
              <i className="ri-wallet-2-line"></i>
              <span>Fees</span>
              <img src={menuNotActive} alt="Not Active Menu" />
            </a>
          </li>
          <li className="text-center">
            <a
              href="menu.html"
              className="d-flex align-items-center flex-column justify-content-around text-center position-relative"
            >
              <i className="ri-menu-line"></i>
              <span>Menu</span>
              <img src={menuNotActive} alt="Not Active Menu" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
