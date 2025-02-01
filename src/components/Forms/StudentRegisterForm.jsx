import React, { useEffect, useState } from "react";

import Address from "./StudentRegistrationForm/Address";
import BatchAcademics from "./StudentRegistrationForm/BatchAcademics";
import PersonalDetails from "./StudentRegistrationForm/PersonalDetails";
import { useAuth } from "./../../contexts/AuthContext";
import { toast } from "react-toastify";
import { studentService } from "../../services/StudentService";
import Swal from "sweetalert2";
import { isValidMobile } from "../../utils/Validations";

const StudentRegisterForm = () => {
  const { authToken } = useAuth();

  //State Values
  const [isLoading, setIsLoading] = useState(false);

  // State variables for each form field
  const [studentId, setStudentId] = useState(null);
  const [studentName, setStudentName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [gender, setGender] = useState("Male");
  const [guardianName, setGuardianName] = useState("");
  const [guardianNumber, setGuardianNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [joiningMonth, setJoiningMonth] = useState("");
  const [joiningYear, setJoiningYear] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [selectedBatch, setSelectedBatch] = useState({});
  const [selectedClass, setSelectedClass] = useState({});
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [pincode, setPincode] = useState("");

  // Database Validations
  const [isFieldsEnable, setIsFieldsEnable] = useState(true);

  // Form Validations

  const validateForm = () => {
    if (!studentName.trim()) {
      toast.error("Student Name is required");
      setIsLoading(false);
      return false;
    }
    if (!contactNumber.trim()) {
      toast.error("Contact Number is required");
      setIsLoading(false);
      return false;
    }
    if (!gender.trim()) {
      toast.error("Gender is required");
      setIsLoading(false);
      return false;
    }
    if (!guardianName.trim()) {
      toast.error("Guardian Name is required");
      setIsLoading(false);
      return false;
    }
    if (!guardianNumber.trim()) {
      toast.error("Guardian Number is required");
      setIsLoading(false);
      return false;
    }
    if (!emailAddress.trim()) {
      toast.error("Email Address is required");
      setIsLoading(false);
      return false;
    }
    if (!joiningMonth.trim()) {
      toast.error("Joining Month is required");
      setIsLoading(false);
      return false;
    }
    if (!profileImage) {
      toast.error("Profile Image is required");
      setIsLoading(false);
      return false;
    }
    if (Object.keys(selectedBatch).length === 0) {
      toast.error("Please select a batch");
      setIsLoading(false);
      return false;
    }
    if (Object.keys(selectedClass).length === 0) {
      toast.error("Please select a class");
      setIsLoading(false);
      return false;
    }
    if (!address.trim()) {
      toast.error("Address is required");
      setIsLoading(false);
      return false;
    }
    if (!state.trim()) {
      toast.error("State is required");
      setIsLoading(false);
      return false;
    }
    if (!district.trim()) {
      toast.error("District is required");
      setIsLoading(false);
      return false;
    }
    if (!pincode.trim()) {
      toast.error("Pincode is required");
      setIsLoading(false);
      return false;
    }

    // Additional validations
    if (!/^\d{10}$/.test(contactNumber)) {
      toast.error("Contact Number must be 10 digits");
      setIsLoading(false);
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress)) {
      toast.error("Invalid Email Address");
      setIsLoading(false);
      return false;
    }
    if (!/^\d{6}$/.test(pincode)) {
      toast.error("Pincode must be 6 digits");
      setIsLoading(false);
      return false;
    }
    if (
      profileImage &&
      ![
        "image/jpeg", // Valid for JPEG and JPG images
        "image/png",
        "image/gif",
        "image/webp",
        "image/svg+xml",
      ].includes(profileImage.type)
    ) {
      toast.error("Profile Image must be a JPEG, PNG, GIF, WEBP, or SVG file");
      setIsLoading(false);
      return false;
    }

    // If all validations pass
    return true;
  };

  const handleSubmit = async () => {
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    if (isFieldsEnable) {
      if (validateForm()) {
        const studentPayload = {
          name: studentName,
          phone: contactNumber,
          guardianName: guardianName,
          guardianPhone: guardianNumber,
          email: emailAddress,
          gender: gender,
          joiningMonth: joiningMonth,
          joiningClass: {
            id: selectedClass.id,
          },
          address: address,
          state: state,
          district: district,
          pinCode: pincode,
        };
        try {
          const data = await studentService.registerStudent({
            authToken: authToken,
            studentData: studentPayload,
            batchId: selectedBatch.id,
            profileImage: profileImage,
          });
          console.log(data);
          if (data.status) {
            Swal.fire({
              titleText: data.message,
              text: "Registration successful! Welcome aboard—get ready to start your journey!",
              icon: "success",
            });
          } else {
            Swal.fire({
              titleText: data?.message,
              text: "Registration failed! Please check your details and try again.",
              icon: "error",
            });
          }
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      }
    } else {
      try {
        const data = await studentService.assignStudent({
          authToken: authToken,
          batchId: selectedBatch.id,
          studentId: studentId,
        });
        console.info(data);
        if (data.status) {
          Swal.fire({
            text: data?.message,
            icon: "success",
          });
        } else {
          Swal.fire({
            text: data?.message,
            icon: "error",
          });
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  //Fetching the studentdetails
  const studentDetails = async () => {
    try {
      // const data = await studentService.studentByMobile({
      //   authToken: authToken,
      //   mobile: contactNumber,
      // });
      const data = await studentService.isStudentExistByMobileNumber({
        mobile: contactNumber,
        authToken: authToken,
      });
      if (data?.status) {
        const userData = await studentService.studentByMobile({
          authToken: authToken,
          mobile: contactNumber,
        });
        console.log(userData);
        setStudentId(userData?.id);
        setStudentName(userData?.name);
        setGender(userData?.gender);
        setGuardianName(userData?.guardianName);
        setGuardianNumber(userData?.guardianPhone);
        setEmailAddress(userData?.email);
        setAddress(userData?.address);
        setState(userData?.state);
        setDistrict(userData?.district);
        setPincode(userData?.pinCode);
        setIsFieldsEnable(false);
      } else {
        console.log(data);
        setStudentName("");
        setGender("Male");
        setGuardianName("");
        setGuardianNumber("");
        setEmailAddress("");
        setAddress("");
        setState("");
        setDistrict("");
        setPincode("");
        setIsFieldsEnable(true);
      }
    } catch (error) {
      setIsFieldsEnable(true);
    }
  };

  //Checking validation on when mobile will gonna be 10 digit
  useEffect(() => {
    if (contactNumber.length == 10 && isValidMobile(contactNumber)) {
      console.log(contactNumber);
      studentDetails();
    }
  }, [contactNumber]);

  return (
    <section className="student-register mb-3 mt-80 pb-100">
      <div className="container">
        <div className="row g-2">
          <div className="col-12">
            <div className="inner-contain py-14 bg-white light-blue-border radius-8 position-relative">
              <form
                action=""
                className="pt-4"
                onSubmit={(e) => e.preventDefault()}
              >
                {/* Personal Details */}
                <PersonalDetails
                  contactNumber={contactNumber}
                  setContactNumber={setContactNumber}
                  emailAddress={emailAddress}
                  setEmailAddress={setEmailAddress}
                  gender={gender}
                  setGender={setGender}
                  guardianName={guardianName}
                  setGuardianName={setGuardianName}
                  guardianNumber={guardianNumber}
                  setGuardianNumber={setGuardianNumber}
                  joiningMonth={joiningMonth}
                  setJoiningMonth={setJoiningMonth}
                  profileImage={profileImage}
                  setProfileImage={setProfileImage}
                  setStudentName={setStudentName}
                  studentName={studentName}
                  isFieldEnable={isFieldsEnable}
                />

                {/* Batch & Academics Details  */}
                <BatchAcademics
                  authToken={authToken}
                  selectedBatch={selectedBatch}
                  setSelectedBatch={setSelectedBatch}
                  selectedClass={selectedClass}
                  setSelectedClass={setSelectedClass}
                />

                {/* Address Fields */}
                <Address
                  address={address}
                  setAddress={setAddress}
                  district={district}
                  setDistrict={setDistrict}
                  pincode={pincode}
                  setPincode={setPincode}
                  state={state}
                  setState={setState}
                  isFieldsEnable={isFieldsEnable}
                />

                <div className="mt-4 mb-2 text-center">
                  <button onClick={handleSubmit} className="btn1" type="submit">
                    {isLoading
                      ? "Loading..."
                      : isFieldsEnable
                      ? "Register"
                      : "Assign"}
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

export default StudentRegisterForm;
