import React, { useEffect } from "react";
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
import { ConfigProvider, Image } from "antd";
import { Link } from "react-router-dom";

const ModelProfile = ({ name, mobile, profilePic }) => {
  return (
    <>
      <div
        className="offcanvas offcanvas-start profile"
        tabIndex="-1"
        id="profile"
        aria-labelledby="offcanvasExampleLabel"
        data-bs-backdrop="static" // Prevents closing on outside click
        style={{ width: "300px" }}
      >
        {/* Offcanvas Header */}
        <div className="offcanvas-header bg-primary text-white justify-content-between align-items-center py-3">
          <h5
            className="offcanvas-title d-flex align-items-center"
            id="offcanvasExampleLabel"
          >
            <RiUserLine className="me-2 fs-20" />
            <span className="fs-18">Profile</span>
          </h5>
          <button
            type="button"
            className="border-0 outline-none bg-transparent"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <RiCloseLine className="fs-24 text-white" />
          </button>
        </div>

        {/* Offcanvas Body */}
        <div className="offcanvas-body pt-3 px-0">
          <div className="d-flex flex-column align-items-center border-bottom py-4 px-3">
            <ConfigProvider
              theme={{
                token: {
                  zIndexPopupBase: 2000,
                },
              }}
            >
              <Image
                src={import.meta.env.VITE_PROFILEURL + profilePic}
                height="80px"
                width="80px"
                preview={{
                  maskStyle: {
                    backgroundColor: "rgba(173, 216, 230, 0.5)",
                  },
                }}
                className="rounded-circle mb-3 border border-3 border-primary custom-rounded-image"
                alt="Profile Image"
              />
            </ConfigProvider>
            <h6 className="mb-1 fs-16 fw-semibold text-dark">{name}</h6>
            <p className="mb-0 fs-12 text-muted">+91 {mobile}</p>
          </div>

          <div className="py-3 px-3">
            <Link
              to={"/profile"}
              className="d-flex align-items-center mb-3 text-decoration-none text-dark"
            >
              <RiUserSettingsLine className="me-2 fs-18 text-primary" />
              <span>Profile</span>
            </Link>
            <Link
              to={"/batch"}
              className="d-flex align-items-center mb-3 text-decoration-none text-dark"
            >
              <RiBookLine className="me-2 fs-18 text-info" />
              <span>My Batches</span>
            </Link>
            <Link
              to={'/help-support'}
              className="d-flex align-items-center mb-3 text-decoration-none text-dark"
            >
              <RiQuestionLine className="me-2 fs-18 text-purple" />
              <span>Help & Support</span>
            </Link>
          </div>
        </div>

        {/* Offcanvas Footer */}
        <div className="offcanvas-footer justify-content-center d-flex py-3 bg-light border-top border-subtle px-3">
          <Logout />
          <Link
            to={"/profile"}
            className="btn btn-primary btn-sm d-flex align-items-center"
          >
            <RiEditLine className="fs-16 me-2" />
            Profile
          </Link>
        </div>
      </div>

      {/* Custom CSS to ensure overlay blocks clicks */}
      <style jsx>{`
        .offcanvas-backdrop {
          background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent overlay */
          z-index: 1040; /* Ensure it’s below offcanvas but above other content */
        }
        .offcanvas {
          z-index: 1050; /* Ensure offcanvas is above the backdrop */
        }
      `}</style>
    </>
  );
};

export default ModelProfile;