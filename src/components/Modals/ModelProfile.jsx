import React from "react";
import {
  RiEditLine,
  RiUserLine,
  RiUserSettingsLine,
  RiLockLine,
  RiLogoutCircleLine,
  RiCloseLine,
  RiBookLine,
  RiCalendarLine,
  RiFileListLine,
  RiSettingsLine,
  RiQuestionLine,
  RiLogoutBoxLine,
} from "react-icons/ri";
import avatar from "./../../assets/images/profile/avatar.jpg";
import Logout from "../Buttons/Logout";

const ModelProfile = ({ name, mobile, profilePic }) => {
  return (
    <div
      className="offcanvas offcanvas-start profile"
      tabIndex="-1"
      id="profile"
      aria-labelledby="offcanvasExampleLabel"
      style={{ width: "300px" }} // Decreased width
    >
      {/* Offcanvas Header */}
      <div className="offcanvas-header bg-primary text-white justify-content-between align-items-center py-3">
        <h5
          className="offcanvas-title d-flex align-items-center"
          id="offcanvasExampleLabel"
        >
          <RiUserLine className="me-2 fs-20" /> {/* User Icon */}
          <span className="fs-18">Profile</span>
        </h5>
        <button
          type="button"
          className="border-0 outline-none bg-transparent"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <RiCloseLine className="fs-24 text-white" /> {/* Close Icon */}
        </button>
      </div>

      {/* Offcanvas Body */}
      <div className="offcanvas-body pt-3 px-0">
        {/* Profile Image and Name */}
        <div className="d-flex flex-column align-items-center border-bottom py-4 px-3">
          <img
            src={import.meta.env.VITE_PROFILEURL + profilePic}
            height="80px"
            width="80px"
            className="rounded-circle mb-3 border border-3 border-primary"
            alt="Profile Image"
          />
          <h6 className="mb-1 fs-16 fw-semibold text-dark">{name}</h6>
          <p className="mb-0 fs-12 text-muted">+91 {mobile}</p>
        </div>

        {/* Profile Actions */}
        <div className="py-3 px-3">
          <a
            href="#"
            className="d-flex align-items-center mb-3 text-decoration-none text-dark"
          >
            <RiUserSettingsLine className="me-2 fs-18 text-primary" />{" "}
            {/* Edit Profile Icon */}
            <span>Edit Profile</span>
          </a>
          <a
            href="#"
            className="d-flex align-items-center mb-3 text-decoration-none text-dark"
          >
            <RiLockLine className="me-2 fs-18 text-warning" />{" "}
            {/* Change Password Icon */}
            <span>Change Password</span>
          </a>
          <a
            href="#"
            className="d-flex align-items-center mb-3 text-decoration-none text-dark"
          >
            <RiBookLine className="me-2 fs-18 text-info" /> {/* Courses Icon */}
            <span>My Courses</span>
          </a>
          <a
            href="#"
            className="d-flex align-items-center mb-3 text-decoration-none text-dark"
          >
            <RiCalendarLine className="me-2 fs-18 text-success" />{" "}
            {/* Schedule Icon */}
            <span>Class Schedule</span>
          </a>
          <a
            href="#"
            className="d-flex align-items-center mb-3 text-decoration-none text-dark"
          >
            <RiFileListLine className="me-2 fs-18 text-secondary" />{" "}
            {/* Reports Icon */}
            <span>Student Reports</span>
          </a>
          <a
            href="#"
            className="d-flex align-items-center mb-3 text-decoration-none text-dark"
          >
            <RiSettingsLine className="me-2 fs-18 text-danger" />{" "}
            {/* Settings Icon */}
            <span>Settings</span>
          </a>
          <a
            href="#"
            className="d-flex align-items-center mb-3 text-decoration-none text-dark"
          >
            <RiQuestionLine className="me-2 fs-18 text-purple" />{" "}
            {/* Help Icon */}
            <span>Help & Support</span>
          </a>
        </div>
      </div>

      {/* Offcanvas Footer */}
      <div className="offcanvas-footer justify-content-center d-flex py-3 bg-light border-top border-subtle px-3">
        {/* <a
          href="#"
          className="btn btn-danger btn-sm d-flex align-items-center me-2"
        >
          <RiLogoutBoxLine className="fs-16 me-2" />
          Logout
        </a> */}
        <Logout/>
        <a href="#" className="btn btn-primary btn-sm d-flex align-items-center">
          <RiEditLine className="fs-16 me-2" /> {/* Edit Icon */}
          Edit Profile
        </a>
      </div>
    </div>
  );
};

export default ModelProfile;
