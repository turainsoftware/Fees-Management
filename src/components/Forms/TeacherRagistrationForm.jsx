import React, { useEffect, useState } from "react";
import Select from "react-select";
import Swal from "sweetalert2";

// Images
import {
  FemaleStudents,
  MaleTeachers,
  FemaleTeachers,
} from "./../../utils/images";

import { isValidMobile, isValidName } from "../../utils/Validations";
import { toast } from "react-toastify";
import { authService } from "../../services/AuthService";
import { Link, useNavigate } from "react-router-dom";
import { teacherService } from "../../services/TeacherService";

const MAX_FILE_SIZE = 3072 * 1024; // 200KB in bytes
const ALLOWED_TYPES = [
  "image/jpeg", // .jpg, .jpeg
  "image/png", // .png
  "image/gif", // .gif
  "image/heic", // .heic
  "image/bmp", // .bmp
];

const TeacherRagistrationForm = ({
  language = [],
  board = [],
  subject = [],
  classes = [],
}) => {
  //Hooks
  const navigate = useNavigate();

  // Loading State
  const [loading, setLoading] = useState(false);

  // Options for Multiple
  const languageOptions = language.map((item) => ({
    value: item.id,
    label: item.name,
  }));
  const boardOptions = board.map((item) => ({
    value: item.id,
    label: item.name,
  }));
  const subjectOptions = subject.map((item) => ({
    value: item.id,
    label: item.name,
  }));
  const classOptions = classes.map((item) => ({
    value: item.id,
    label: item.name,
  }));

  // Selected Values
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [gender, setGender] = useState("Male");
  const [profileImage, setProfileImage] = useState(null);
  const [profilePreviewImage, setProfilePreviewImage] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState([]);
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState([]);
  const [selectedClass, setSelectedClass] = useState([]);
  const [defaultProfilePicNumber, setDefaultProfilePicNumber] = useState(0);
  // Added state for mobile validation message
  const [mobileError, setMobileError] = useState("");

  // Error Variables
  const [isTeacherExist, setIsTeacherExist] = useState(false);

  const handleLanguageChange = (selectedOptions) => {
    const setOptions = selectedOptions.map((item) => ({
      id: item.value,
      name: item.label,
    }));
    setSelectedLanguage(setOptions);
  };

  const handleSubjectChange = (selectedOptions) => {
    const setOptions = selectedOptions.map((item) => ({
      id: item.value,
      name: item.label,
    }));
    setSelectedSubjects(setOptions);
  };

  const handleBoardChange = (selectedOptions) => {
    const setOptions = selectedOptions.map((item) => ({
      id: item.value,
      name: item.label,
    }));
    setSelectedBoard(setOptions);
  };

  const handleClassChange = (selectedOptions) => {
    const setOptions = selectedOptions.map((item) => ({
      id: item.value,
      name: item.label,
    }));
    setSelectedClass(setOptions);
  };

  const handleImageChange = (e) => {
    const imagePath = e.target.files[0];
    if (imagePath) {
      // Check if it's an allowed image format
      if (!ALLOWED_TYPES.includes(imagePath.type)) {
        toast.error("Only JPEG, PNG, GIF, HEIC, or BMP files are allowed");
        setProfileImage(null);
        return;
      }

      // Check file size
      if (imagePath.size > MAX_FILE_SIZE) {
        toast.error("Image size should not exceed 3MB");
        setProfileImage(null);
        return;
      }

      // If validation passes
      const previewImage = URL.createObjectURL(imagePath);
      setProfilePreviewImage(previewImage);
      setProfileImage(imagePath);
    }
  };

  //Validation for before submit
  const validateForm = () => {
    // if (profileImage === null) {
    //   toast.error("Profile picture is required!");
    //   return false;
    // }

    if (profileImage) {
      if (!ALLOWED_TYPES.includes(profileImage.type)) {
        toast.error("Only JPEG, PNG, GIF, HEIC, or BMP files are allowed");
        return false;
      }

      if (profileImage.size > MAX_FILE_SIZE) {
        toast.error("Image size should not exceed 3MB");
        return false;
      }
    }

    if (!name.trim() || name.length <= 2 || name.length > 50) {
      toast.error("Name must be between 3 and 50 characters!");
      return false;
    }
    if (!mobile.trim() || !isValidMobile(mobile)) {
      toast.error("Valid mobile number is required!");
      return false;
    }
    if (selectedLanguage.length === 0) {
      toast.error("Please select at least one language!");
      return false;
    }
    if (selectedSubjects.length === 0) {
      toast.error("Please select at least one subject!");
      return false;
    }
    if (selectedBoard.length === 0) {
      toast.error("Please select a board!");
      return false;
    }
    if (selectedClass.length === 0) {
      toast.error("Please select a class!");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Set loading to true *before* validation and API call
    setLoading(true);

    if (!validateForm()) {
      // If validation fails, stop loading
      setLoading(false);
      return;
    }

    try {
      let data = null;
      if (!profileImage) {
        const profilePic =
          gender === "Male"
            ? MaleTeachers[defaultProfilePicNumber]
            : FemaleTeachers[defaultProfilePicNumber];

        data = await authService.signupDefaultProfilePic({
          name: name,
          phoneNumber: mobile,
          gender: gender,
          subjects: selectedSubjects,
          languages: selectedLanguage,
          boards: selectedBoard,
          classes: selectedClass,
          profileImage: profilePic,
        });
      } else {
        data = await authService.signup({
          name: name,
          phoneNumber: mobile,
          gender: gender,
          subjects: selectedSubjects,
          languages: selectedLanguage,
          boards: selectedBoard,
          classes: selectedClass,
          profileImg: profileImage,
        });
      }

      if (data?.status) {
        Swal.fire({
          title: "Success!",
          text: "The teacher has been successfully registered. You can now log in.",
          icon: "success",
          confirmButtonText: "Go to Login",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/login", {
              replace: true,
            });
          }
        });
      } else {
        Swal.fire({
          title: data?.message || "Error",
          text: "The teacher is already registered. Please check the details and try again.",
          icon: "error",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "An error occurred during signup. Please try again.",
        icon: "error",
      });
    } finally {
      setLoading(false); // Ensure loading is turned off after API call
    }
  };

  const resetFields = () => {
    setGender("Male");
    setMobile("");
    setName("");
    setProfileImage(null);
    setSelectedBoard([]);
    setSelectedClass([]);
    setSelectedLanguage([]);
    setSelectedSubjects([]);
    setMobileError(""); // Reset mobile error on form reset
  };

  const checkIsTeacherExist = async () => {
    try {
      const data = await teacherService.isTeacherExist({ mobile: mobile });
      if (data) {
        setIsTeacherExist(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Updated mobile number handling with validation message
  const handleMobileChange = (e) => {
    const val = e.target.value;
    const numRegex = /^\d*$/;

    if (
      val.length <= 10 &&
      numRegex.test(val) &&
      (val.length === 0 || (val[0] >= 5 && val[0] <= 9))
    ) {
      setMobile(val);

      // Check if number is longer than 2 digits and invalid
      if (val.length > 2 && !isValidMobile(val)) {
        setMobileError("Please enter a valid mobile number");
      } else {
        setMobileError("");
      }
    }
  };

  useEffect(() => {
    if (mobile.length === 10) {
      checkIsTeacherExist();
    } else {
      setIsTeacherExist(false);
    }
  }, [mobile]);

  useEffect(() => {
    setDefaultProfilePicNumber((prev) => Math.floor(Math.random() * 4));
  }, [gender]);

  return (
    <section className="student-register mb-3 mt-80 pb-100">
      <div className="container">
        <div className="row g-2">
          <div className="col-12">
            <div className="inner-contain py-14 bg-white light-blue-border radius-8 position-relative">
              <form onSubmit={handleSubmit} className="pt-4">
                <div className="profile-contain position-absolute top-0 start-50 translate-middle d-flex flex-column align-items-center">
                  <label htmlFor="fileToUpload">
                    <div
                      className="profile-pic"
                      style={{
                        backgroundImage: `url(${
                          profilePreviewImage
                            ? profilePreviewImage
                            : import.meta.env.VITE_PROFILEURL +
                              (gender === "Male"
                                ? MaleTeachers[defaultProfilePicNumber]
                                : FemaleTeachers[defaultProfilePicNumber])
                        })`,
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
                  />
                  {(profileImage === null ||
                    (profileImage &&
                      (!ALLOWED_TYPES.includes(profileImage.type) ||
                        profileImage.size > MAX_FILE_SIZE))) && (
                    <span
                      className="text-danger mt-2 fs-12 fw-medium text-center"
                      style={{ width: "280px" }}
                    >
                      Please upload a valid image (JPEG, PNG, GIF, HEIC, or BMP,
                      Max Size 3MB)
                    </span>
                  )}
                </div>
                <div className="form-header-bg mt-5 px-14">
                  <h5 className="mb-0 fs-6 text-white fw-semibold">
                    Teacher Details
                  </h5>
                </div>
                <div className="px-14 mt-2 pt-2">
                  <div className="row g-3">
                    <div className="col-12">
                      <label htmlFor="" className="fs-13 mb-2 fw-medium">
                        Mobile Number<span className="red-color">*</span>
                      </label>
                      <input
                        type="tel"
                        className={`form-control shadow-none fs-14 fw-medium`}
                        placeholder=""
                        value={mobile}
                        onChange={handleMobileChange} // Updated to use new handler
                      />
                      {mobileError && (
                        <span
                          className="text-danger ps-2 pe-2 d-block mt-1 fs-14 fw-semibold"
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                          {mobileError}
                        </span>
                      )}
                      {isTeacherExist && (
                        <span
                          className="text-danger ps-2 pe-2 d-block mt-1 fs-14 fw-semibold"
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                          Teacher already exist! Please{" "}
                          <Link to={"/login"}>
                            <span className="text-primary">log in</span>
                          </Link>
                        </span>
                      )}
                    </div>
                    <div className="col-12">
                      <label htmlFor="" className="fs-13 mb-2 fw-medium">
                        Teacher Name
                      </label>
                      <input
                        type="text"
                        className="form-control shadow-none fs-14 fw-medium"
                        placeholder=""
                        value={name}
                        onChange={(e) => {
                          const val = e.target.value;
                          if (isValidName(val)) {
                            setName(e.target.value);
                          }
                        }}
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
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Others">Others</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label htmlFor="" className="fs-13 mb-2 fw-medium">
                        Language<span className="red-color">*</span>
                      </label>
                      <Select
                        onChange={handleLanguageChange}
                        isMulti
                        options={languageOptions}
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="" className="fs-13 mb-2 fw-medium">
                        Subject<span className="red-color">*</span>
                      </label>
                      <Select
                        isMulti
                        options={subjectOptions}
                        onChange={handleSubjectChange}
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="" className="fs-13 mb-2 fw-medium">
                        Class Name<span className="red-color">*</span>
                      </label>
                      <Select
                        isMulti
                        options={classOptions}
                        onChange={handleClassChange}
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="" className="fs-13 mb-2 fw-medium">
                        Board<span className="red-color">*</span>
                      </label>
                      <Select
                        isMulti
                        options={boardOptions}
                        onChange={handleBoardChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-4 mb-2 text-center">
                  <button
                    disabled={loading || isTeacherExist}
                    className="btn1"
                    type="submit"
                  >
                    {loading ? (
                      <div className="spinner-grow text-light" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    ) : (
                      "Register"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeacherRagistrationForm;
