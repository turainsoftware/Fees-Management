import React from "react";

// Images
import Avatar from "./../assets/images/profile/avatar.jpg";

// Components
import ModelNotification from "./Notifications/ModelNotification";

const DashboardHeader = () => {
  return (
    <section
      className="dashboard-header w-100 d-flex align-items-center light-border-bottom bg-white"
      id="dash-header"
    >
      <div className="container px-3 ">
        <div className="row align-items-center justify-content-between gx-0">
          <div className="col-auto">
            <div className="small-logo d-flex align-items-center justify-content-center border-orange rounded-circle bg-white overflow-hidden">
              <img src={Avatar} height="40px" alt="" />
            </div>
          </div>
          <div className="col-8">
            <span className="fs-12 primary-color fw-semibold mb-5px">
              Good Morning !
            </span>
            <h1 className="fs-14 mb-0 d-flex align-items-center fw-medium">
              SK MOUSIN ALI
            </h1>
          </div>
          <a
            data-bs-toggle="offcanvas"
            href="#notification"
            role="button"
            aria-controls="offcanvasExample"
            className="col-auto"
          >
            <div className="position-relative text-end">
              <i className="ri-notification-2-line fs-20 me-2"></i>
              <span className="noti d-inline-block position-absolute bg-red rounded-circle top-0 end-0"></span>
            </div>
          </a>
        </div>
      </div>
      {/* Model Notification */}
      <ModelNotification />
    </section>
  );
};

export default DashboardHeader;
