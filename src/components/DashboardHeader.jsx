import React, { useEffect, useState } from "react";

// Images
import Avatar from "./../assets/images/profile/avatar.jpg";

// Components
import ModelNotification from "./Notifications/ModelNotification";
import { getGreetingBasedOnTime } from "../utils/Common";
import ModelProfile from "./Modals/ModelProfile";

const shimmerStyles = {
  shimmerWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 0",
    backgroundColor: "#fff",
    borderBottom: "1px solid #eee",
  },
  shimmerContainer: {
    width: "100%",
    padding: "0 20px",
  },
  shimmerAvatar: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "#f0f0f0",
    position: "relative",
    overflow: "hidden",
  },
  shimmerAvatarBefore: {
    content: "''",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage:
      "linear-gradient(90deg, #f0f0f0 0px, #e0e0e0 50%, #f0f0f0 100%)",
    animation: "shimmer-pulse 1.5s linear infinite",
  },
  shimmerTextContainer: {
    flexGrow: 1,
    marginLeft: "10px",
    marginRight: "10px",
  },
  shimmerGreeting: {
    width: "100px",
    height: "12px",
    backgroundColor: "#f0f0f0",
    marginBottom: "5px",
    position: "relative",
    overflow: "hidden",
  },
  shimmerGreetingBefore: {
    content: "''",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage:
      "linear-gradient(90deg, #f0f0f0 0px, #e0e0e0 50%, #f0f0f0 100%)",
    animation: "shimmer-pulse 1.5s linear infinite",
  },
  shimmerName: {
    width: "150px",
    height: "14px",
    backgroundColor: "#f0f0f0",
    position: "relative",
    overflow: "hidden",
  },
  shimmerNameBefore: {
    content: "''",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage:
      "linear-gradient(90deg, #f0f0f0 0px, #e0e0e0 50%, #f0f0f0 100%)",
    animation: "shimmer-pulse 1.5s linear infinite",
  },
  shimmerNotification: {
    width: "20px",
    height: "20px",
    backgroundColor: "#f0f0f0",
    borderRadius: "50%",
    position: "relative",
    overflow: "hidden",
  },
  shimmerNotificationBefore: {
    content: "''",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage:
      "linear-gradient(90deg, #f0f0f0 0px, #e0e0e0 50%, #f0f0f0 100%)",
    animation: "shimmer-pulse 1.5s linear infinite",
  },
  "@keyframes shimmer-pulse": {
    "0%": {
      backgroundPosition: "-200px 0",
    },
    "100%": {
      backgroundPosition: "200px 0",
    },
  },
  "@keyframes shimmerPulse": {
    "0%": { opacity: 0.6 },
    "50%": { opacity: 1 },
    "100%": { opacity: 0.6 },
  },

  "@keyframes shimmerGlow": {
    "0%": { boxShadow: "0 0 5px rgba(255, 165, 0, 0.5)" },
    "50%": { boxShadow: "0 0 15px rgba(255, 165, 0, 0.9)" },
    "100%": { boxShadow: "0 0 5px rgba(255, 165, 0, 0.5)" },
  },
};

const DashboardHeader = ({
  avatar,
  name = "User",
  isLoading = false,
  userData = {},
}) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled even a tiny bit
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isLoading ? (
    <section
      style={shimmerStyles.shimmerWrapper}
      className="dashboard-header w-100 d-flex align-items-center light-border-bottom bg-white"
      id="dash-header"
      
    >
      <div style={shimmerStyles.shimmerContainer} className="container px-3 ">
        <div
          style={{
            ...shimmerStyles.shimmerWrapper,
            justifyContent: "space-between",
          }}
          className="row align-items-center justify-content-between gx-0"
        >
          <div className="col-auto">
            <div style={shimmerStyles.shimmerAvatar}>
              <div style={shimmerStyles.shimmerAvatarBefore}></div>
            </div>
          </div>
          <div className="col-8">
            <div style={shimmerStyles.shimmerTextContainer}>
              <div style={shimmerStyles.shimmerGreeting}>
                <div style={shimmerStyles.shimmerGreetingBefore}></div>
              </div>
              <div style={shimmerStyles.shimmerName}>
                <div style={shimmerStyles.shimmerNameBefore}></div>
              </div>
            </div>
          </div>
          <div className="col-auto">
            <div style={shimmerStyles.shimmerNotification}>
              <div style={shimmerStyles.shimmerNotificationBefore}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  ) : (
    <section
      className={`dashboard-header w-100 d-flex align-items-center light-border-bottom bg-white ${
        isSticky ? "position-fixed top-0 start-0" : ""
      }`}
      id="dash-header"
      style={{ zIndex: 1000, transition: "all 1s ease-in-out" }}
    >
      <div className="container px-3 ">
        <div className="row align-items-center justify-content-between gx-0">
          <div className="col-auto">
            <div className="small-logo d-flex align-items-center justify-content-center border-orange rounded-circle bg-white overflow-hidden">
              <img
                data-bs-toggle="offcanvas"
                data-bs-target="#profile"
                aria-controls="profile"
                style={{ cursor: "pointer" }}
                src={import.meta.env.VITE_PROFILEURL + avatar}
                height="40px"
                alt=""
              />
            </div>
          </div>
          <div className="col-8">
            <span className="fs-12 primary-color fw-semibold mb-5px">
              {getGreetingBasedOnTime()}!
            </span>
            <h1 className="fs-14 mb-0 d-flex align-items-center fw-medium">
              {name}
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
      {/* <ModelNotification /> */}
      <ModelProfile
        mobile={userData?.phone}
        profilePic={userData?.profilePic}
        name={userData?.name}
      />
    </section>
  );
};

export default DashboardHeader;
