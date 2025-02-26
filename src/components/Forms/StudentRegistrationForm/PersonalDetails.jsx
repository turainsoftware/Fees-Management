import React, { useState } from "react";
import profileAvatar from "./../../../assets/images/profile/avatar.jpg";
import cameraIcon from "./../../../assets/images/camera-line.svg";
import {
  isValidMobile,
  isValidName,
  checkOnChangeMobile,
} from "../../../utils/Validations";
import { message } from "antd";

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
  isFieldEnable = true,
}) => {
  const [contactNumberError, setContactNumberError] = useState("");
  const [guardianNumberError, setGuardianNumberError] = useState("");
  const [profilePreviewImage, setProfilePreviewImage] = useState(profileAvatar); // Default preview

  const ALLOWED_TYPES = [
    "image/jpeg",
    "image/png",
    "image/gif",
    "image/heic",
    "image/bmp",
  ];
  const MAX_FILE_SIZE = 200 * 1024; // 200KB in bytes

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!ALLOWED_TYPES.includes(file.type) || file.size > MAX_FILE_SIZE) {
        setProfileImage(file); // Keep file for validation display
        setProfilePreviewImage(profileAvatar); // Reset to default if invalid
        message.info("Image Not Allowed")
      } else {
        setProfileImage(file);
        setProfilePreviewImage(URL.createObjectURL(file)); // Update preview
      }
    }
  };

  const validateContactNumber = (number) => {
    if (!isValidMobile(number)) {
      setContactNumberError("Enter a valid mobile number");
    } else {
      setContactNumberError("");
    }
  };

  const validateGuardianNumber = (number) => {
    if (!isValidMobile(number)) {
      setGuardianNumberError("Enter a valid mobile number");
    } else {
      setGuardianNumberError("");
    }
  };

  return (
    <>
      <div className="profile-contain position-absolute top-0 start-50 translate-middle d-flex flex-column align-items-center">
        <label htmlFor="fileToUpload">
          <div
            className="profile-pic"
            style={{
              backgroundImage: `url(${profilePreviewImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100px",
              height: "100px",
              borderRadius: "50%",
            }}
          >
            <span>
              <i className="ri-camera-line fs-1 text-white"></i>
            </span>
          </div>
        </label>
        <input
          type="file"
          name="fileToUpload"
          id="fileToUpload"
          accept=".jpg,.jpeg,.png,.gif,.heic,.bmp"
          onChange={handleImageChange}
          style={{ display: "none" }}
          disabled={!isFieldEnable}
        />
        {/* Error message for invalid image */}
        {(profileImage === null ||
          (profileImage &&
            (!ALLOWED_TYPES.includes(profileImage.type) ||
              profileImage.size > MAX_FILE_SIZE))) && (
          <span
            className="text-danger mt-2 fs-12 fw-medium text-center"
            style={{ width: "280px" }}
          >
            Please upload a valid image (JPEG, PNG, GIF, HEIC, or BMP, max
            200KB)
          </span>
        )}
      </div>
      <div className="form-header-bg mt-5 px-14">
        <h5 className="mb-0 fs-6 text-white fw-semibold">Personal Details</h5>
      </div>
      <div className="px-14 mt-2 pt-2">
        <div className="row g-3">
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
                const value = e.target.value;
                if (checkOnChangeMobile(value) && value.length <= 10) {
                  setContactNumber(value);
                  validateContactNumber(value);
                }
              }}
              maxLength={10}
            />
            {contactNumberError && (
              <div className="invalid-feedback">{contactNumberError}</div>
            )}
          </div>
          <div className="col-12">
            <label htmlFor="studentName" className="fs-13 mb-2 fw-medium">
              Student Name
            </label>
            <input
              type="text"
              id="studentName"
              className="form-control shadow-none fs-14 fw-medium"
              value={studentName}
              onChange={(e) => {
                const val = e.target.value;
                if (isValidName(val)) {
                  setStudentName(val);
                }
              }}
              maxLength={60}
              disabled={!isFieldEnable}
            />
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
              disabled={!isFieldEnable}
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
              onChange={(e) => {
                const val = e.target.value;
                if (isValidName(val)) {
                  setGuardianName(val);
                }
              }}
              disabled={!isFieldEnable}
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
                const value = e.target.value;
                if (checkOnChangeMobile(value) && value.length <= 10) {
                  setGuardianNumber(value);
                  validateGuardianNumber(value);
                }
              }}
              maxLength={10}
              disabled={!isFieldEnable}
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
              disabled={!isFieldEnable}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalDetails;
