import React from "react";
import avatar from "./../../assets/images/profile/avatar.jpg";
import deleteIcon from "./../../assets/images/dashboard/delete.svg";

import { notifications } from "../../utils/dummy";

const ModelNotification = () => {
  return (
    <div
      className="offcanvas offcanvas-end notification"
      tabIndex="-1"
      id="notification"
      aria-labelledby="offcanvasExampleLabel"
    >
      <div className="offcanvas-header bg-light justify-content-between align-items-center py-1 light-border-bottom">
        <h5
          className="offcanvas-title d-flex align-items-center"
          id="offcanvasExampleLabel"
        >
          <i className="ri-notification-3-line me-1 fs-18 lh-1"></i>
          Notification
        </h5>
        <button
          type="button"
          className="border-0 outline-none bg-transparent"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <i className="ri-close-line fs-1 text-danger"></i>
        </button>
      </div>
      <div className="offcanvas-body pt-1 px-0">
        {notifications.map((notification, index) => (
          <div
            key={index}
            className="d-flex justify-content-between border-bottom py-10 px-14"
          >
            <a href="#" className="d-flex align-items-center">
              <img
                src={avatar}
                height="34px"
                className="rounded-circle me-2"
                alt="Student Image"
              />
              <div>
                <h6 className="mb-2px fs-12 fw-medium student-name">
                  {notification.studentName}'s fees{" "}
                  <span className="green-color fw-semibold">received</span> of
                  {notification.amount}/-
                </h6>
                <p className="mb-0 fs-10 text-muted">{notification.time}</p>
              </div>
            </a>
            <a className="pe-1" href="#">
              <img src={deleteIcon} height="22px" alt="" />
            </a>
          </div>
        ))}
      </div>
      <div className="offcanvas-footer justify-content-between d-flex py-10 bg-light border-top border-subtile-secondary px-14">
        <a href="#" className="btn btn-outline-dark btn-sm">
          <i className="ri-check-double-line fs-17 me-1"></i>Mark all read
        </a>
        <a href="#" className="btn btn-outline-danger btn-sm">
          <i className="ri-delete-bin-line fs-17 me-1"></i>Delete all
        </a>
      </div>
    </div>
  );
};

export default ModelNotification;
