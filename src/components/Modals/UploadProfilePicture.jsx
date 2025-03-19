import { Button, Modal, Alert, message, Spin } from "antd";
import React, { useState } from "react";
import { FaUpload } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { useAuth } from "./../../contexts/AuthContext";
import { teacherService } from "./../../services/TeacherService";
import { PiSelectionForegroundThin } from "react-icons/pi";

const UploadProfilePicture = ({
  isProfileModalOpen,
  setIsProfileModalOpen,
  previewImage,
  setPreviewImage,
  selectedUploadImage,
  setSelectedUploadImage,
  teacher,
}) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { authToken } = useAuth();
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) {
      setErrorMessage("Invalid file.");
      return;
    }

    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/gif",
      "image/heic",
      "image/bmp",
    ];
    const maxSize = 5 * 1024 * 1024; // 5MB

    if (!allowedTypes.includes(file.type)) {
      setErrorMessage("Only JPEG, PNG, GIF, HEIC, or BMP files are allowed.");
      return;
    }

    if (file.size > maxSize) {
      setErrorMessage("File size must be less than 5MB.");
      return;
    }

    // Clear error if valid
    setErrorMessage("");

    // Set selected file
    setSelectedUploadImage(file);

    // Generate preview image URL
    const imageUrl = URL.createObjectURL(file);
    setPreviewImage(imageUrl);
  };

  const handleUpload = async () => {
    if (selectedUploadImage === null) {
      message.error("Select an image");
      return;
    }

    try {
      setIsLoading(true);
      const data = await teacherService.updateProfilePic({
        authToken: authToken,
        profilePic: selectedUploadImage,
      });
      if (data?.status) {
        message.success("Profile Picture uploaded successfully");
        setIsProfileModalOpen(false);
        teacher.profilePic = data.message;
      } else {
        message.error("Something went wrong");
      }
      console.log(data);
    } catch (error) {
      console.error(error);
      message.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal
      title="Change Profile Picture"
      open={isProfileModalOpen}
      onOk={handleUpload}
      onCancel={() => setIsProfileModalOpen(false)}
      okText={isLoading ? <Spin size="small" /> : "Update"}
      cancelText="Cancel"
      okButtonProps={{ disabled: isLoading }}
    >
      <div style={{ textAlign: "center", marginBottom: "15px" }}>
        {previewImage ? (
          <img
            src={previewImage}
            alt="Profile Preview"
            style={{
              width: "200px",
              maxHeight: "200px",
              objectFit: "cover",
              borderRadius: "10px",
              borderColor: "blueviolet",
            }}
          />
        ) : (
          <Button icon={<FiPlus size={20} />}>Select Image</Button>
        )}
      </div>

      <label
        htmlFor="file-upload"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          margin: "20px auto",
          padding: "12px 24px",
          background: "linear-gradient(135deg, #1E3A8A, #3B82F6)",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px",
          fontFamily: "'Inter', sans-serif",
          width: "200px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          transition: "all 0.3s ease",
        }}
        onMouseOver={(e) => {
          e.target.style.transform = "translateY(-2px)";
          e.target.style.boxShadow = "0 6px 16px rgba(0, 0, 0, 0.15)";
        }}
        onMouseOut={(e) => {
          e.target.style.transform = "translateY(0)";
          e.target.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
        }}
      >
        <FaUpload size={18} />
        Upload Image
      </label>
      <input
        id="file-upload"
        type="file"
        accept="image/jpeg,image/png,image/gif,image/heic,image/bmp"
        onChange={handleImageChange}
        style={{ display: "none" }}
      />

      {errorMessage && (
        <Alert
          message={errorMessage}
          type="error"
          showIcon
          style={{ marginTop: "10px" }}
        />
      )}
    </Modal>
  );
};

export default UploadProfilePicture;
