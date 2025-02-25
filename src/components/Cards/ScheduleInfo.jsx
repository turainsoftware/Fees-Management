import { Form, Input, message, Modal, Select } from "antd";
import React, { useState } from "react";
import { FaCalendarAlt, FaCalendarDay, FaClock, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import { dayOptions, formatMonth, formatTime } from "../../utils/Common";
import { batchService } from "../../services/BatchService";

const ScheduleInfo = ({
  batchId,
  days,
  startTime,
  endTime,
  startMonth,
  startYear,
  endMonth,
  endYear,
  authToken,
}) => {
  const [selectedDays, setSelectedDays] = useState(days);
  const [batchStartTime, setBatchStartTime] = useState(startTime);
  const [batchEndTime, setBatchEndTime] = useState(endTime);
  const [tempSelectedDays, setTempSelectedDays] = useState(days);
  const [tempBatchStartTime, setTempBatchStartTime] = useState(startTime);
  const [tempBatchEndTime, setTempBatchEndTime] = useState(endTime);

  // Duration states
  const [startYearState, setStartYearState] = useState(startYear);
  const [startMonthState, setStartMonthState] = useState(startMonth);
  const [endYearState, setEndYearState] = useState(endYear);
  const [endMonthState, setEndMonthState] = useState(endMonth);
  const [tempStartYear, setTempStartYear] = useState(startYear);
  const [tempStartMonth, setTempStartMonth] = useState(startMonth);
  const [tempEndYear, setTempEndYear] = useState(endYear);
  const [tempEndMonth, setTempEndMonth] = useState(endMonth);

  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async () => {
    if (
      tempSelectedDays.length === 0 ||
      !tempBatchStartTime ||
      !tempBatchEndTime ||
      !tempStartYear ||
      !tempStartMonth ||
      !tempEndYear ||
      !tempEndMonth
    ) {
      toast.info("All fields are required");
      return;
    }

    const startDate = new Date(tempStartYear, tempStartMonth - 1);
    const endDate = new Date(tempEndYear, tempEndMonth - 1);
    if (startDate > endDate) {
      toast.error("Start date must be before end date");
      return;
    }

    const selectedStartTime = new Date(`1970-01-01T${tempBatchStartTime}`);
    const selectedEndTime = new Date(`1970-01-01T${tempBatchEndTime}`);
    if (selectedStartTime >= selectedEndTime) {
      toast.error("Start time must be before end time");
      return;
    }

    if (
      tempSelectedDays === selectedDays &&
      tempBatchStartTime === batchStartTime &&
      tempBatchEndTime === batchEndTime &&
      tempStartYear === startYearState &&
      tempStartMonth === startMonthState &&
      tempEndYear === endYearState &&
      tempEndMonth === endMonthState
    ) {
      toast.info("No changes made");
      return;
    }

    try {
      setIsLoading(true);
      // Add your API call here

      


      const data = await batchService.updateSchedule({
        authToken: authToken,
        batchId: batchId,
        dayPayload: tempSelectedDays,
        startMonth: tempStartMonth,
        startYear: tempStartYear,
        endMonth: tempEndMonth,
        endYear: tempEndYear,
        startTime: tempBatchStartTime,
        endTime: tempBatchEndTime,
      });

      console.log(data);
      if (data.status) {
        // Update all state variables on successful save
      setSelectedDays(tempSelectedDays);
      setBatchStartTime(tempBatchStartTime);
      setBatchEndTime(tempBatchEndTime);
      setStartYearState(tempStartYear);
      setStartMonthState(tempStartMonth);
      setEndYearState(tempEndYear);
      setEndMonthState(tempEndMonth);
        message.success("Schedule updated successfully");
        setShowModal(false);
      } else {
        message.error(data.message);
      }
    } catch (error) {
      console.error("Failed to update schedule", error);
      toast.error("Failed to update schedule");
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateClick = () => {
    setTempSelectedDays(selectedDays);
    setTempBatchStartTime(batchStartTime);
    setTempBatchEndTime(batchEndTime);
    setTempStartYear(startYearState);
    setTempStartMonth(startMonthState);
    setTempEndYear(endYearState);
    setTempEndMonth(endMonthState);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className="col-md-6">
      <div className="card shadow-sm h-100">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="card-title text-primary d-flex align-items-center">
              <FaCalendarAlt className="fs-4 me-2" />
              Schedule
            </h5>
            <button
              className="btn btn-sm d-flex justify-content-center align-items-center"
              onClick={handleUpdateClick}
            >
              <FaEdit size={16} color="blue" />
            </button>
          </div>
          <hr className="border-light opacity-75" />
          <div className="mb-4">
            <small className="text-body-secondary d-flex align-items-center mb-2">
              <FaCalendarDay className="me-2" />
              Class Days
            </small>
            <div className="d-flex flex-wrap gap-2">
              {selectedDays.sort().map((day, index) => (
                <span
                  key={index}
                  className="badge bg-primary-subtle text-primary-emphasis px-3 py-2 rounded-pill"
                >
                  {day}
                </span>
              ))}
            </div>
          </div>
          <div className="mb-3">
            <small className="text-body-secondary d-flex align-items-center mb-2">
              <FaClock className="me-2" />
              Timing
            </small>
            <p className="mb-0 text-primary fw-semibold">
              {`${formatTime(batchStartTime)} - ${formatTime(batchEndTime)}`}
            </p>
          </div>
          <div>
            <small className="text-body-secondary">Duration</small>
            <p className="mb-0 text-primary fw-semibold">
              {`${formatMonth(
                startMonthState
              )} ${startYearState} - ${formatMonth(
                endMonthState
              )} ${endYearState}`}
            </p>
          </div>
        </div>
      </div>

      <Modal
        title="Update Schedule"
        visible={showModal}
        onOk={handleSave}
        onCancel={handleClose}
        okText={isLoading ? "Saving..." : "Save"}
        cancelText="Cancel"
        okButtonProps={{ disabled: isLoading }}
      >
        <Form layout="vertical">
          <Form.Item label="Class Days">
            <Select
              mode="multiple"
              value={tempSelectedDays}
              onChange={setTempSelectedDays}
              options={dayOptions}
            />
          </Form.Item>

          <Form.Item label="Batch Start Time">
            <Input
              type="time"
              value={tempBatchStartTime}
              onChange={(e) => setTempBatchStartTime(e.target.value)}
            />
          </Form.Item>

          <Form.Item label="Batch End Time">
            <Input
              type="time"
              value={tempBatchEndTime}
              onChange={(e) => setTempBatchEndTime(e.target.value)}
            />
          </Form.Item>

          <div className="row">
            <div className="col-md-6">
              <Form.Item label="Start Year" required>
                <select
                  value={tempStartYear}
                  onChange={(e) => setTempStartYear(Number(e.target.value))}
                  className="form-select shadow-none"
                >
                  <option value="">Select year</option>
                  {Array.from(
                    { length: 10 },
                    (_, i) => new Date().getFullYear() + i
                  ).map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </Form.Item>
            </div>
            <div className="col-md-6">
              <Form.Item label="Start Month" required>
                <select
                  value={tempStartMonth}
                  onChange={(e) => setTempStartMonth(Number(e.target.value))}
                  className="form-select shadow-none"
                >
                  <option value="">Select month</option>
                  {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => {
                    const isDisabled =
                      tempStartYear === new Date().getFullYear() &&
                      month < new Date().getMonth() + 1;
                    return (
                      <option key={month} value={month} disabled={isDisabled}>
                        {formatMonth(month)}
                      </option>
                    );
                  })}
                </select>
              </Form.Item>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-6">
              <Form.Item label="End Year" required>
                <select
                  value={tempEndYear}
                  onChange={(e) => setTempEndYear(Number(e.target.value))}
                  className="form-select shadow-none"
                >
                  <option value="">Select year</option>
                  {Array.from(
                    { length: 10 },
                    (_, i) => new Date().getFullYear() + i
                  ).map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </Form.Item>
            </div>
            <div className="col-md-6">
              <Form.Item label="End Month" required>
                <select
                  value={tempEndMonth}
                  onChange={(e) => setTempEndMonth(Number(e.target.value))}
                  className="form-select shadow-none"
                >
                  <option value="">Select month</option>
                  {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => {
                    const isDisabled =
                      tempEndYear === new Date().getFullYear() &&
                      month < new Date().getMonth() + 1;
                    return (
                      <option key={month} value={month} disabled={isDisabled}>
                        {formatMonth(month)}
                      </option>
                    );
                  })}
                </select>
              </Form.Item>
            </div>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default ScheduleInfo;
