import React, { useEffect, useState } from "react";
import cameraIcon from "./../../../assets/images/camera-line.svg";
import {
  isValidMobile,
  isValidName,
  checkOnChangeMobile,
} from "../../../utils/Validations";
import { message } from "antd";
import { MaleStudents, FemaleStudents } from "./../../../utils/images";

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
  setDefaultProfilePic,
}) => {
  const [contactNumberError, setContactNumberError] = useState("");
  const [guardianNumberError, setGuardianNumberError] = useState("");
  const [studentNameError, setStudentNameError] = useState("");
  const [guardianNameError, setGuardianNameError] = useState("");
  const [profilePreviewImage, setProfilePreviewImage] = useState(null);

  // For Random Profile Images
  const [randomProfileImage, setRandomProfileImage] = useState(0);

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 4);
    if (gender === "Male") {
      setDefaultProfilePic(MaleStudents[randomNumber]);
    } else {
      setDefaultProfilePic(FemaleStudents[randomNumber]);
    }
    setRandomProfileImage(randomNumber);
  }, [gender]);

  const ALLOWED_TYPES = [
    "image/jpeg",
    "image/png",
    "image/gif",
    "image/heic",
    "image/bmp",
  ];
  const MAX_FILE_SIZE = 3000 * 1024; // 3MB in bytes
  const MAX_NAME_LENGTH = 30;

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!ALLOWED_TYPES.includes(file.type) || file.size > MAX_FILE_SIZE) {
        // setProfileImage(file);
        setProfilePreviewImage(null);
        message.info("Image Not Allowed");
      } else {
        setProfileImage(file);
        setProfilePreviewImage(URL.createObjectURL(file));
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

  const validateStudentName = (name) => {
    if (name.length > MAX_NAME_LENGTH) {
      const parts = name.trim().split(/\s+/);
      if (parts.length > 1) {
        const firstName = parts[0];
        const lastName = parts[parts.length - 1];
        setStudentNameError(
          `Name exceeds 30 characters. Use initials like "${firstName[0]}. ${lastName}"`
        );
      } else {
        setStudentNameError(
          `Name exceeds 30 characters. Use initial like "${name[0]}."`
        );
      }
    } else {
      setStudentNameError("");
    }
  };

  const validateGuardianName = (name) => {
    if (name.length > MAX_NAME_LENGTH) {
      const parts = name.trim().split(/\s+/);
      if (parts.length > 1) {
        const firstName = parts[0];
        const lastName = parts[parts.length - 1];
        setGuardianNameError(
          `Name exceeds 30 characters. Use initials like "${firstName[0]}. ${lastName}"`
        );
      } else {
        setGuardianNameError(
          `Name exceeds 30 characters. Use initial like "${name[0]}."`
        );
      }
    } else {
      setGuardianNameError("");
    }
  };

  return (
    <>
      <div className="profile-contain position-absolute top-0 start-50 translate-middle d-flex flex-column align-items-center">
        <label htmlFor="fileToUpload">
          <div
            className="profile-pic"
            style={{
              backgroundImage: `url(${
                profilePreviewImage !== null
                  ? profilePreviewImage
                  : `${
                      import.meta.env.VITE_PROFILEURL +
                      (gender === "Male"
                        ? MaleStudents[randomProfileImage]
                        : FemaleStudents[randomProfileImage])
                    }`
              })`,
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
        {(profileImage === null ||
          (profileImage &&
            (!ALLOWED_TYPES.includes(profileImage.type) ||
              profileImage.size > MAX_FILE_SIZE))) && (
          <span
            className="text-danger mt-2 fs-12 fw-medium text-center"
            style={{ width: "280px" }}
          >
            Please upload a valid image (JPEG, PNG, GIF, HEIC, or BMP, max 3MB)
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
              className={`form-control shadow-none fs-14 fw-medium ${
                studentNameError ? "is-invalid" : ""
              }`}
              value={studentName}
              onChange={(e) => {
                const val = e.target.value;
                if (isValidName(val)) {
                  setStudentName(val);
                  validateStudentName(val);
                }
              }}
              maxLength={60}
              disabled={!isFieldEnable}
            />
            {studentNameError && (
              <div className="invalid-feedback">{studentNameError}</div>
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
              className={`form-control shadow-none fs-14 fw-medium ${
                guardianNameError ? "is-invalid" : ""
              }`}
              value={guardianName}
              onChange={(e) => {
                const val = e.target.value;
                if (isValidName(val)) {
                  setGuardianName(val);
                  validateGuardianName(val);
                }
              }}
              maxLength={60}
              disabled={!isFieldEnable}
            />
            {guardianNameError && (
              <div className="invalid-feedback">{guardianNameError}</div>
            )}
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
