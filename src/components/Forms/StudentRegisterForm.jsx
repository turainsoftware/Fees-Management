import React, { useEffect, useState } from "react";
import Address from "./StudentRegistrationForm/Address";
import BatchAcademics from "./StudentRegistrationForm/BatchAcademics";
import PersonalDetails from "./StudentRegistrationForm/PersonalDetails";
import { useAuth } from "./../../contexts/AuthContext";
import { toast } from "react-toastify";
import { studentService } from "../../services/StudentService";
import Swal from "sweetalert2";
import { isValidMobile } from "../../utils/Validations";
import { useNavigate } from "react-router-dom";

const StudentRegisterForm = () => {
  const { authToken } = useAuth();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [studentId, setStudentId] = useState(null);
  const [studentName, setStudentName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [gender, setGender] = useState("Male");
  const [guardianName, setGuardianName] = useState("");
  const [guardianNumber, setGuardianNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [selectedBatch, setSelectedBatch] = useState({});
  const [selectedClass, setSelectedClass] = useState({});
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [pincode, setPincode] = useState("");
  const [joiningYear, setJoininYear] = useState(null);
  const [joiningMonth, setJoiningMonth] = useState("");
  const [isFieldsEnable, setIsFieldsEnable] = useState(true);
  const [isValidBatch, setIsValidBatch] = useState(true);

  const validateForm = () => {
    if (isFieldsEnable && !profileImage) {
      toast.error("Student Image is required");
      setIsLoading(false);
      return false;
    }
    if (!studentName.trim()) {
      toast.error("Student Name is required");
      setIsLoading(false);
      return false;
    }
    if (studentName.trim().length > 30) {
      toast.error("Student Name must not exceed 30 characters");
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
    if (guardianName.trim().length > 30) {
      toast.error("Guardian Name must not exceed 30 characters");
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
    if (!selectedBatch || Object.keys(selectedBatch).length === 0) {
      toast.error("Please select a batch");
      setIsLoading(false);
      return false;
    }
    if (!selectedBatch.id) {
      toast.error("Selected batch is invalid");
      setIsLoading(false);
      return false;
    }
    if (!selectedBatch.classes || selectedBatch.classes.length === 0) {
      toast.error("Selected batch must have associated classes");
      setIsLoading(false);
      return false;
    }
    if (!selectedClass || Object.keys(selectedClass).length === 0) {
      toast.error("Please select a class");
      setIsLoading(false);
      return false;
    }
    if (!selectedClass.id) {
      toast.error("Selected class is invalid");
      setIsLoading(false);
      return false;
    }
    if (!joiningYear) {
      toast.error("Joining Year is required");
      setIsLoading(false);
      return false;
    }
    if (!joiningMonth) {
      toast.error("Joining Month is required");
      setIsLoading(false);
      return false;
    }
    const isClassValid = selectedBatch.classes.some(
      (cls) => cls.id === selectedClass.id
    );
    if (!isClassValid) {
      toast.error("Selected class doesn't belong to the chosen batch");
      setIsLoading(false);
      return false;
    }
    if (
      joiningYear < selectedBatch.startYear ||
      joiningYear > selectedBatch.endYear
    ) {
      toast.error("Joining Year must be within batch duration");
      setIsLoading(false);
      return false;
    }
    if (
      joiningYear === selectedBatch.startYear &&
      joiningMonth < selectedBatch.startMonth
    ) {
      toast.error("Joining Month cannot be before batch start month");
      setIsLoading(false);
      return false;
    }
    if (
      joiningYear === selectedBatch.endYear &&
      joiningMonth > selectedBatch.endMonth
    ) {
      toast.error("Joining Month cannot be after batch end month");
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
    if (!/^\d{10}$/.test(contactNumber)) {
      toast.error("Contact Number must be 10 digits");
      setIsLoading(false);
      return false;
    }
    if (!/^\d{10}$/.test(guardianNumber)) {
      toast.error("Guardian Number must be 10 digits");
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
        "image/jpeg",
        "image/png",
        "image/gif",
        "image/webp",
        "image/svg+xml",
        "image/heic",
        "image/heif",
      ].includes(profileImage.type)
    ) {
      toast.error(
        "Profile Image must be a JPEG, PNG, GIF, WEBP, SVG, HEIC, or HEIF file"
      );
      setIsLoading(false);
      return false;
    }
    // Check first and last name lengths
    const studentNameParts = studentName.trim().split(/\s+/);
    if (studentNameParts.length > 1) {
      const firstName = studentNameParts[0];
      const lastName = studentNameParts[studentNameParts.length - 1];
      if (firstName.length > 30 || lastName.length > 30) {
        toast.error("Student's first name and last name must not exceed 30 characters each");
        setIsLoading(false);
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async () => {
    if (isLoading) return;
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
          joiningClass: { id: selectedClass.id },
          address: address,
          state: state,
          district: district,
          pinCode: pincode,
        };
        try {
          const data = await studentService.registerStudent({
            authToken,
            studentData: studentPayload,
            batchId: selectedBatch.id,
            profileImage,
            joiningMonth,
            joiningYear,
          });
          if (data.status) {
            Swal.fire({
              titleText: data.message,
              text: "Registration successful! Welcome aboard—get ready to start your journey!",
              icon: "success",
            });
            resetForm();
            setIsFieldsEnable(true);
            navigate("/students", { replace: true });
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
      } else {
        setIsLoading(false);
      }
    } else {
      if (validateForm()) {
        try {
          const data = await studentService.assignStudent({
            authToken,
            batchId: selectedBatch.id,
            studentId,
            joiningMonth,
            joiningYear,
          });
          if (data.status) {
            Swal.fire({
              text: data?.message,
              icon: "success",
            });
            resetForm();
            setIsFieldsEnable(true);
            navigate("/students", { replace: true });
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
      } else {
        setIsLoading(false);
      }
    }
  };

  const studentDetails = async () => {
    try {
      const data = await studentService.isStudentExistByMobileNumber({
        mobile: contactNumber,
        authToken,
      });
      if (data?.status) {
        const userData = await studentService.studentByMobile({
          authToken,
          mobile: contactNumber,
        });
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
        setSelectedClass(userData?.joiningClass);
        setIsFieldsEnable(false);
      } else {
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

  const resetForm = () => {
    setStudentName("");
    setContactNumber("");
    setGender("Male");
    setGuardianName("");
    setGuardianNumber("");
    setEmailAddress("");
    setProfileImage(null);
    setSelectedBatch({});
    setSelectedClass({});
    setAddress("");
    setState("");
    setDistrict("");
    setPincode("");
    setJoininYear(null);
    setJoiningMonth("");
  };

  useEffect(() => {
    const clearFormData = () => {
      setStudentId(null);
      setStudentName("");
      setGender("Male");
      setGuardianName("");
      setGuardianNumber("");
      setEmailAddress("");
      setAddress("");
      setState("");
      setDistrict("");
      setPincode("");
      setSelectedClass({});
      setIsFieldsEnable(true);
    };

    if (contactNumber.length === 10 && isValidMobile(contactNumber)) {
      studentDetails();
    } else if (contactNumber.length < 10) {
      clearFormData();
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
                <BatchAcademics
                  authToken={authToken}
                  selectedBatch={selectedBatch}
                  setSelectedBatch={setSelectedBatch}
                  selectedClass={selectedClass}
                  setSelectedClass={setSelectedClass}
                  joiningMonth={joiningMonth}
                  joiningYear={joiningYear}
                  setJoiningMonth={setJoiningMonth}
                  setJoininYear={setJoininYear}
                  isFieldsEnable={isFieldsEnable}
                  isValidBatch={isValidBatch}
                  setIsValidBatch={setIsValidBatch}
                />
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
                  <button
                    disabled={isLoading}
                    onClick={handleSubmit}
                    className="btn1"
                    type="submit"
                  >
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