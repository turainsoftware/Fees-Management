import { Form, Input, Modal } from "antd";
import React, { useState } from "react";
import { FaRupeeSign, FaEdit } from "react-icons/fa";
import axios from "axios";
import { batchService } from "../../services/BatchService";
import { toast } from "react-toastify";

const FeesStructure = ({
  batchId,
  monthlyfees,
  monthlyexamfees,
  authToken,
}) => {
  const [monthlyFees, setMonthlyFees] = useState(monthlyfees);
  const [monthlyExamFees, setMonthlyExamFees] = useState(monthlyexamfees);
  const [tempMonthlyFees, setTempMonthlyFees] = useState(monthlyfees);
  const [tempMonthlyExamFees, setTempMonthlyExamFees] =
    useState(monthlyexamfees);

  const [showModal, setShowModal] = useState(false);

  const handleSave = async () => {
    if (tempMonthlyFees === "" || tempMonthlyExamFees === "") {
      toast.info("Values Should not be empty");
      return;
    }

    if (
      tempMonthlyFees === monthlyFees &&
      tempMonthlyExamFees === monthlyExamFees
    ) {
      toast.info("No changes made");
      return;
    }

    try {
      const data = await batchService.updateFees({
        authToken: authToken,
        batchId: batchId,
        updatedFees: tempMonthlyFees,
        updatedExamFees: tempMonthlyExamFees,
      });
      console.log(data);
      if (data?.status) {
        toast.success(data.message);
        setMonthlyFees(tempMonthlyFees);
        setMonthlyExamFees(tempMonthlyExamFees);
        setShowModal(false);
      }
    } catch (error) {
      console.error("Failed to update fees", error);
    } finally {
      console.log(monthlyFees, monthlyExamFees);
    }
  };

  const handleClose = () => {
    setTempMonthlyFees(monthlyFees);
    setTempMonthlyExamFees(monthlyExamFees);
    setShowModal(false);
  };

  const handleUpdateClick = () => {
    setShowModal(true);
  };

  return (
    <div className="col-md-6">
      <div className="card shadow-sm h-100">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="card-title text-success d-flex align-items-center">
              <FaRupeeSign className="fs-4 me-2" />
              Fees Structure
            </h5>
            <button
              className="btn btn-info btn-sm d-flex justify-content-center align-items-center"
              onClick={handleUpdateClick}
            >
              <FaEdit color={"#fff"} size={20} />
            </button>
          </div>
          <hr className="border-light opacity-75" />
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <small className="text-body-secondary">Monthly Fees</small>
              <p className="mb-0 text-success fw-bold fs-4">₹{monthlyFees}</p>
            </div>
            <div className="text-end">
              <small className="text-body-secondary">Exam Fees</small>
              <p className="mb-0 text-success fw-bold fs-4">
                ₹{monthlyExamFees}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Modal
        title="Update Fees"
        visible={showModal}
        onOk={handleSave}
        onCancel={handleClose}
        okText="Save"
        cancelText="Cancel"
        okButtonProps={{ className: "btn btn-primary" }}
        cancelButtonProps={{ className: "btn btn-secondary" }}
      >
        <Form layout="vertical">
          <Form.Item label="Monthly Fees">
            <Input
              type="number"
              value={tempMonthlyFees}
              onChange={(e) => setTempMonthlyFees(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Exam Fees">
            <Input
              type="number"
              value={tempMonthlyExamFees}
              onChange={(e) => setTempMonthlyExamFees(e.target.value)}
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default FeesStructure;
