import React from "react";
import { Button, Popconfirm } from "antd";
import { RiLogoutBoxLine, RiEditLine } from "react-icons/ri";
import { useAuth } from "../../contexts/AuthContext";

const Logout = () => {
  const {logout}=useAuth();
  return (
    <Popconfirm
      title="Are you sure you want to logout?"
      okText="Yes"
      cancelText="No"
      placement="topRight"
      onConfirm={() => logout()}
      icon={
        <RiLogoutBoxLine color="red"/>
      }
    >
      <a
        href="#"
        className="btn btn-danger btn-sm d-flex align-items-center me-2"
      >
        <RiLogoutBoxLine className="fs-16 me-2" /> {/* Logout Icon */}
        Logout
      </a>
    </Popconfirm>
  );
};
export default Logout;
