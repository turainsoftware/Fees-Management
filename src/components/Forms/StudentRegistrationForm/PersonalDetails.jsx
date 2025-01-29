import React, { useState } from "react";
import profileAvatar from "./../../../assets/images/profile/avatar.jpg";
import cameraIcon from "./../../../assets/images/camera-line.svg"; // Uncommented
import { isValidMobile } from "../../../utils/Validations"; // Import validation function

const PersonalDetails = ({
  studentName,
  setStudentName,
  contactNumber,
  setContactNumber,
  gender,
  setGender,
  guardianName,
  setGuardianName,
  guardianNumber,
  setGuardianNumber,
  emailAddress,
  setEmailAddress,
  joiningMonth,
  setJoiningMonth,
  profileImage,
  setProfileImage,
}) => {
  const [contactNumberError, setContactNumberError] = useState(""); // State for mobile validation error
  const [guardianNumberError, setGuardianNumberError] = useState(""); // State for guardian mobile validation error

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
    }
  };

  const validateContactNumber = (number) => {
    if (!isValidMobile(number)) {
      setContactNumberError("Invalid mobile number");
    } else {
      setContactNumberError("");
    }
  };

  const validateGuardianNumber = (number) => {
    if (!isValidMobile(number)) {
      setGuardianNumberError("Invalid mobile number");
    } else {
      setGuardianNumberError("");
    }
  };

  return (
    <>
      <div className="profile-contain position-absolute top-0 start-50 translate-middle">
        <label htmlFor="fileToUpload">
          <div
            className="profile-pic"
            style={{
              backgroundImage: `url(${profileImage || profileAvatar})`, // Use uploaded image or default avatar
            }}
          >
            <span>
              <i className="ri-camera-line fs-1 text-white">
                <img
                  src={cameraIcon}
                  alt="camera icon"
                  style={{ width: "1em", height: "1em" }}
                />
              </i>
            </span>
          </div>
        </label>
        <input
          type="file"
          name="fileToUpload"
          id="fileToUpload"
          accept="image/*"
          onChange={handleFileUpload} // Handle file upload
          style={{ display: "none" }} // Hide the default file input
        />
      </div>
      <div className="form-header-bg mt-5 px-14">
        <h5 className="mb-0 fs-6 text-white fw-semibold">Personal Details</h5>
      </div>
      <div className="px-14 mt-2 pt-2">
        <div className="row g-3">
          <div className="col-12">
            <label htmlFor="studentName" className="fs-13 mb-2 fw-medium">
              Student Name
            </label>
            <input
              type="text"
              id="studentName"
              className="form-control shadow-none fs-14 fw-medium"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
            />
          </div>
          <div className="col-12">
            <label htmlFor="contactNumber" className="fs-13 mb-2 fw-medium">
              Contact Number<span className="red-color">*</span>
            </label>
            <input
              type="text"
              id="contactNumber"
              className={`form-control shadow-none fs-14 fw-medium ${
                contactNumberError ? "is-invalid" : ""
              }`}
              value={contactNumber}
              onChange={(e) => {
                setContactNumber(e.target.value);
                validateContactNumber(e.target.value);
              }}
            />
            {contactNumberError && (
              <div className="invalid-feedback">{contactNumberError}</div>
            )}
          </div>
          <div className="col-12">
            <label htmlFor="gender" className="fs-13 mb-2 fw-medium">
              Gender<span className="red-color">*</span>
            </label>
            <select
              id="gender"
              className="form-select shadow-none fs-14 fw-medium"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div className="col-12">
            <label htmlFor="guardianName" className="fs-13 mb-2 fw-medium">
              Guardian Name<span className="red-color">*</span>
            </label>
            <input
              type="text"
              id="guardianName"
              className="form-control shadow-none fs-14 fw-medium"
              value={guardianName}
              onChange={(e) => setGuardianName(e.target.value)}
            />
          </div>
          <div className="col-12">
            <label htmlFor="guardianNumber" className="fs-13 mb-2 fw-medium">
              Guardian Number<span className="red-color">*</span>
            </label>
            <input
              type="text"
              id="guardianNumber"
              className={`form-control shadow-none fs-14 fw-medium ${
                guardianNumberError ? "is-invalid" : ""
              }`}
              value={guardianNumber}
              onChange={(e) => {
                setGuardianNumber(e.target.value);
                validateGuardianNumber(e.target.value); // Validate on change
              }}
            />
            {guardianNumberError && (
              <div className="invalid-feedback">{guardianNumberError}</div>
            )}
          </div>
          <div className="col-12">
            <label htmlFor="emailAddress" className="fs-13 mb-2 fw-medium">
              Email Address
            </label>
            <input
              type="email"
              id="emailAddress"
              className="form-control shadow-none fs-14 fw-medium"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
            />
          </div>
          <div className="col-12">
            <label htmlFor="joiningMonth" className="fs-13 mb-2 fw-medium">
              Joining Month<span className="red-color">*</span>
            </label>
            <select
              id="joiningMonth"
              className="form-select shadow-none fs-14 fw-medium"
              value={joiningMonth}
              onChange={(e) => setJoiningMonth(e.target.value)}
            >
              <option value="">Select Month</option>
              <option value="JANUARY">January</option>
              <option value="FEBRUARY">February</option>
              <option value="MARCH">March</option>
              {/* Add other months as needed */}
            </select>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default PersonalDetails;
