import React from "react";
import profileAvatar from "./../../../assets/images/profile/avatar.jpg";
// import cameraIcon from "./../../../assets/images/camera-line.svg";

const PersonalDetails = () => {
  return (
    <>
      <div className="profile-contain position-absolute top-0 start-50 translate-middle">
        <label htmlFor="fileToUpload">
          <div
            className="profile-pic"
            style={{ backgroundImage: `url(${profileAvatar})` }}
          >
            <span>
              <i className="ri-camera-line fs-1 text-white">
                {/* <img
                  src={cameraIcon}
                  alt="camera icon"
                  style={{ width: "1em", height: "1em" }}
                /> */}
              </i>
            </span>
          </div>
        </label>
        <input type="File" name="fileToUpload" id="fileToUpload" />
      </div>
      <div className="form-header-bg mt-5 px-14">
        <h5 className="mb-0 fs-6 text-white fw-semibold">Personal Details</h5>
      </div>
      <div className="px-14 mt-2 pt-2">
        <div className="row g-3">
          <div className="col-12">
            <label htmlFor="" className="fs-13 mb-2 fw-medium">
              Student Name
            </label>
            <input
              type="text"
              className="form-control shadow-none fs-14 fw-medium"
              placeholder=""
            />
          </div>
          <div className="col-12">
            <label htmlFor="" className="fs-13 mb-2 fw-medium">
              Contact Number<span className="red-color">*</span>
            </label>
            <input
              type="text"
              className="form-control shadow-none fs-14 fw-medium"
              placeholder=""
            />
          </div>
          <div className="col-12">
            <label htmlFor="" className="fs-13 mb-2 fw-medium">
              Gender<span className="red-color">*</span>
            </label>
            <select
              name=""
              id=""
              className="form-select shadow-none fs-14 fw-medium"
            >
              <option value="">Male</option>
              <option value="">Female</option>
              <option value="">Others</option>
            </select>
          </div>
          <div className="col-12">
            <label htmlFor="" className="fs-13 mb-2 fw-medium">
              Guardian Name<span className="red-color">*</span>
            </label>
            <input
              type="text"
              className="form-control shadow-none fs-14 fw-medium"
              placeholder=""
            />
          </div>
          <div className="col-12">
            <label htmlFor="" className="fs-13 mb-2 fw-medium">
              Guardian Number<span className="red-color">*</span>
            </label>
            <input
              type="text"
              className="form-control shadow-none fs-14 fw-medium"
              placeholder=""
            />
          </div>
          <div className="col-12">
            <label htmlFor="" className="fs-13 mb-2 fw-medium">
              Email Address
            </label>
            <input
              type="email"
              className="form-control shadow-none fs-14 fw-medium"
              placeholder=""
            />
          </div>
          <div className="col-12">
            <label htmlFor="" className="fs-13 mb-2 fw-medium">
              Joining Month<span className="red-color">*</span>
            </label>
            <select
              name=""
              id=""
              className="form-select shadow-none fs-14 fw-medium"
            >
              <option value="">January</option>
              <option value="">Febuary</option>
              <option value="">March</option>
            </select>
          </div>
          <div className="col-12">
            <label htmlFor="" className="fs-13 mb-2 fw-medium">
              Joining Year<span className="red-color">*</span>
            </label>
            <select
              name=""
              id=""
              className="form-select shadow-none fs-14 fw-medium"
            >
              <option value="">2022</option>
              <option value="">2023</option>
              <option value="">2024</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalDetails;
