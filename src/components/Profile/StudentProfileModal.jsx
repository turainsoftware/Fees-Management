import React from "react";
import { Modal } from "antd";
import { FaPhone, FaUserCircle } from "react-icons/fa";

const StudentProfileModal = ({ isProfileOpen, setIsProfileOpen }) => {
  const studentData = {
    address: "8/1/c Gurudas Dutta Garden Lane",
    district: "Paschim Bardhaman",
    email: "jhantubala626@gmail.com",
    gender: "Female",
    guardianName: "Jhantu Bala",
    guardianPhone: "9775746484",
    id: 22,
    joiningClass: { id: 4, name: "Class 11" },
    name: "Ishita Giri",
    phone: "9888888365",
    pinCode: "700067",
    profilePic: "5f70c4c7-a5cb-40bd-aed3-5d9938e29c36.jpg",
    state: "West Bengal",
  };

  return (
    <Modal
      title={<h2 className="modal-title">Student Profile</h2>}
      open={isProfileOpen}
      onCancel={() => setIsProfileOpen(false)}
      centered
      className="custom-modal"
      footer={null}
    >
      <div className="modal-container">
        {/* Profile Picture */}
        <div className="profile-picture">
          {studentData.profilePic ? (
            <img
              src={import.meta.env.VITE_PROFILEURL + studentData.profilePic}
              alt="Profile"
              className="profile-img"
            />
          ) : (
            <FaUserCircle className="default-profile-icon" />
          )}
        </div>

        {/* Student Information */}
        <div className="info-container">
          <div className="info-item">
            <span>Name</span>
            <span>{studentData.name}</span>
          </div>
          <div className="info-item">
            <span>Gender</span>
            <span>{studentData.gender}</span>
          </div>
          <div className="info-item">
            <span>Class</span>
            <span>{studentData.joiningClass.name}</span>
          </div>
          <div className="info-item">
            <span>Phone</span>
            <a href={`tel:${studentData.phone}`} className="phone-link">
              +91 {studentData.phone}
            </a>
          </div>
          <div className="info-item">
            <span>Guardian</span>
            <span>{studentData.guardianName}</span>
          </div>
          <div className="info-item">
            <span>Guardian Phone</span>
            <a href={`tel:${studentData.guardianPhone}`} className="phone-link">
              +91 {studentData.guardianPhone}
            </a>
          </div>
          <div className="info-item">
            <span>Email</span>
            <span>{studentData.email}</span>
          </div>
          <div className="info-item">
            <span>Address</span>
            <span>{studentData.address}</span>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style>
        {`
          .custom-modal .ant-modal {
            width: 90% !important;
            max-width: 500px;
          }
          .modal-title {
            font-family: 'Poppins', sans-serif;
            font-size: 20px;
            font-weight: 600;
            text-align: center;
          }
          .modal-container {
            padding: 20px;
            font-family: 'Poppins', sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .profile-picture {
            display: flex;
            justify-content: center;
            margin-bottom: 15px;
          }
          .profile-img {
            width: 90px;
            height: 90px;
            border-radius: 50%;
            object-fit: cover;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          }
          .default-profile-icon {
            font-size: 90px;
            color: #ccc;
          }
          .info-container {
            width: 100%;
            background: #f9f9f9;
            border-radius: 8px;
            padding: 15px;
            box-shadow: 0 1px 5px rgba(0,0,0,0.1);
          }
          .info-item {
            display: flex;
            justify-content: space-between;
            padding: 10px 0;
            border-bottom: 1px solid #ddd;
            font-size: 14px;
            color: #333;
          }
          .info-item:last-child {
            border-bottom: none;
          }
          .phone-link {
            color: #1890ff;
            text-decoration: none;
          }
          @media (max-width: 400px) {
            .custom-modal .ant-modal {
              width: 95% !important;
            }
            .info-item {
              font-size: 13px;
            }
          }
        `}
      </style>
    </Modal>
  );
};

export default StudentProfileModal;
