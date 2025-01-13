import React from "react";

// Images
import Avatar from './../assets/images/profile/avatar.jpg'


const DashboardHeader = () => {
  return (
    <section
      class="dashboard-header w-100 d-flex align-items-center light-border-bottom bg-white"
      id="dash-header"
    >
      <div class="container px-3 ">
        <div class="row align-items-center justify-content-between gx-0">
          <div class="col-auto">
            <div class="small-logo d-flex align-items-center justify-content-center border-orange rounded-circle bg-white overflow-hidden">
              <img
                src={Avatar}
                height="40px"
                alt=""
              />
            </div>
          </div>
          <div class="col-8">
            <span class="fs-12 primary-color fw-semibold mb-5px">
              Good Morning !
            </span>
            <h1 class="fs-14 mb-0 d-flex align-items-center fw-medium">
              SK MOUSIN ALI
            </h1>
          </div>
          <a
            data-bs-toggle="offcanvas"
            href="#notification"
            role="button"
            aria-controls="offcanvasExample"
            class="col-auto"
          >
            <div class="position-relative text-end">
              <i class="ri-notification-2-line fs-20 me-2"></i>
              <span class="noti d-inline-block position-absolute bg-red rounded-circle top-0 end-0"></span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default DashboardHeader;
