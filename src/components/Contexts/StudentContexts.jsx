import { Modal } from "antd";
import React, { useState } from "react";
import { FaUser, FaTrash } from "react-icons/fa"; // Importing icons for Profile and Delete

const StudentContexts = ({ xPosition, yPosition, isDelete = false , setIsProfileOpen}) => {
  // Define styles as JavaScript objects
  const menuStyle = {
    position: "fixed",
    width: "180px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    zIndex: 1000,
    overflow: "hidden",
    top: `${yPosition}px`,
    left: `${xPosition}px`,
  };

  const itemStyle = {
    display: "flex",
    alignItems: "center",
    padding: "10px 15px",
    cursor: "pointer",
    transition: "background-color 0.2s",
  };

  const hoverStyle = `
    .context-item:hover {
      background-color: #f5f5f5;
    }
  `;


  return (
    <>
      <div style={menuStyle}>
        {/* Global styles for hover effect */}
        <style jsx>{hoverStyle}</style>

        {/* Profile Option */}
        <div
          className="context-item"
          style={{
            ...itemStyle,
          }}
          onClick={()=>setIsProfileOpen(true)}
        >
          <FaUser style={{ marginRight: "10px", color: "#555" }} />
          <span style={{ fontSize: "14px", color: "#333" }}>Profile</span>
        </div>

        {/* Delete Option */}
        <div
          className="context-item"
          onClick={() => onDeleteClick(student)}
          style={{
            ...itemStyle,
            borderTop: "1px solid #eee", // Separator between items
          }}
        >
          <FaTrash style={{ marginRight: "10px", color: "#e74c3c" }} />
          <span style={{ fontSize: "14px", color: "#e74c3c" }}>Delete</span>
        </div>
      </div>
    </>
  );
};

export default StudentContexts;
