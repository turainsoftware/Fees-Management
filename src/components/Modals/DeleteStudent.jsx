import React from "react";
import { Modal, Typography, Button, Space, Spin } from "antd";
import { FaExclamationTriangle } from "react-icons/fa"; // Use a triangle for warning

const { Text } = Typography;

const DeleteStudent = ({
  setIsDelete,
  isDelete,
  handleRemove,
  isLoading = false,
}) => {
  const handleClose = () => {
    setIsDelete(false);
  };

  return (
    <Modal
      title={
        <div
          style={{ display: "flex", alignItems: "center", color: "#faad14" }}
        >
          {" "}
          {/* Use orange for warning */}
          <FaExclamationTriangle
            style={{ marginRight: 8, fontSize: "1.2em" }}
          />
          <Text strong>Confirm Student Removal</Text>
        </div>
      }
      open={isDelete}
      onCancel={handleClose}
      onClose={handleClose}
      footer={[
        <Button key="cancel" onClick={handleClose}>
          Cancel
        </Button>,
        <Button
          disabled={isLoading}
          onClick={handleRemove}
          key="delete"
          type="primary"
          danger
        >
          {isLoading ? "Removing..." : "Remove Student"}
        </Button>,
      ]}
    >
      <div style={{ textAlign: "center", padding: "24px 0" }}>
        <FaExclamationTriangle
          style={{ fontSize: "64px", color: "#faad14", marginBottom: "16px" }}
        />
        <Text
          style={{ fontSize: "16px", display: "block", marginBottom: "8px" }}
        >
          Are you sure you want to <Text strong>remove</Text> the student from
          this batch?
        </Text>
        <Text type="secondary">This action cannot be undone.</Text>
      </div>
    </Modal>
  );
};

export default DeleteStudent;
