// BatchAcademics.jsx
import React, { useEffect, useState } from "react";
import Select from "react-select";
import { batchService } from "./../../../services/BatchService";

const BatchAcademics = ({
  authToken,
  selectedBatch,
  setSelectedBatch,
  selectedClass,
  setSelectedClass,
  joiningYear,
  setJoininYear,
  joiningMonth,
  setJoiningMonth,
  isFieldsEnable,
  isValidBatch,
  setIsValidBatch,
}) => {
  const [batchInfo, setBatchInfo] = useState([]);

  const fetchBatchData = async () => {
    try {
      const data = await batchService.getAllBatches({ authToken });
      setBatchInfo(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBatchData();
  }, []);

  const handleBatchChange = (e) => {
    const id = e.target.value;
    const batchSelected = batchInfo.find((item) => item.id === parseInt(id));
    setSelectedBatch(batchSelected || {});
    setJoininYear(batchSelected?.startYear || null);
    setJoiningMonth("");
    if (!isFieldsEnable && batchSelected) {
      const classes = batchSelected.classes || [];
      const isValidB = classes.some((item) => item.id === selectedClass.id);
      setIsValidBatch(isValidB);
    }
  };

  const handleClassChange = (e) => {
    const id = e.target.value;
    const classSelected = selectedBatch.classes?.find(
      (item) => item.id === parseInt(id)
    );
    setSelectedClass(classSelected || {});
  };

  const isBatchSelected = !!selectedBatch && Object.keys(selectedBatch).length > 0;

  return (
    <>
      <div className="form-header-bg mt-4 px-14">
        <h5 className="mb-0 fs-6 text-white fw-semibold">
          Batch & Academic Details
        </h5>
      </div>
      <div className="px-14 mt-2 pt-2">
        <div className="row g-3">
          <div className="col-12">
            <label htmlFor="" className="fs-13 mb-2 fw-medium">
              Select Batch<span className="red-color">*</span>
            </label>
            <select
              onChange={handleBatchChange}
              className="form-select shadow-none fs-14 fw-medium"
              value={selectedBatch?.id || ""}
            >
              <option value="" disabled>
                Select Batch
              </option>
              {batchInfo.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className="col-12">
            <label htmlFor="joiningMonth" className="fs-13 mb-2 fw-medium">
              Joining Class<span className="red-color">*</span>
            </label>
            <select
              id="joiningMonth"
              className="form-select shadow-none fs-14 fw-medium"
              onChange={handleClassChange}
              disabled={!isFieldsEnable}
              value={selectedClass?.id || ""}
            >
              {!isFieldsEnable && selectedClass?.id ? (
                <option value={selectedClass.id} disabled selected>
                  {selectedClass.name}
                </option>
              ) : (
                <option value="" disabled selected>
                  Select Class
                </option>
              )}
              {isFieldsEnable && selectedBatch?.classes?.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
            {!isValidBatch && (
              <span
                className="text-danger ps-2 pe-2 py-1 d-block mt-1 fs-14 fw-semibold"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                The selected batch is not valid for the student.
              </span>
            )}
          </div>
          <div className="col-12">
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="startYear" className="fs-13 mb-2 fw-medium">
                  Joining Year<span className="red-color">*</span>
                </label>
                <select
                  id="startYear"
                  className="form-select shadow-none fs-14 fw-medium"
                  value={joiningYear || ""}
                  onChange={(e) => {
                    const year = parseInt(e.target.value, 10);
                    setJoininYear(year);
                    setJoiningMonth("");
                  }}
                  disabled={!isBatchSelected}
                >
                  <option value="" disabled>
                    Select start year
                  </option>
                  {isBatchSelected &&
                    Array.from(
                      { length: selectedBatch.endYear - selectedBatch.startYear + 1 },
                      (_, i) => selectedBatch.startYear + i
                    ).map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                </select>
              </div>
              <div className="col-md-6">
                <label htmlFor="startMonth" className="fs-13 mb-2 fw-medium">
                  Joining Month<span className="red-color">*</span>
                </label>
                <select
                  id="startMonth"
                  className="form-select shadow-none fs-14 fw-medium"
                  value={joiningMonth || ""}
                  onChange={(e) => setJoiningMonth(parseInt(e.target.value, 10))}
                  disabled={!isBatchSelected}
                >
                  <option value="" disabled>
                    Select start month
                  </option>
                  {isBatchSelected &&
                    Array.from({ length: 12 }, (_, i) => i + 1)
                      .filter((month) => {
                        if (joiningYear === selectedBatch.startYear && month < selectedBatch.startMonth) {
                          return false;
                        }
                        if (joiningYear === selectedBatch.endYear && month > selectedBatch.endMonth) {
                          return false;
                        }
                        return true;
                      })
                      .map((month) => (
                        <option key={month} value={month}>
                          {new Date(0, month - 1).toLocaleString("default", {
                            month: "long",
                          })}
                        </option>
                      ))}
                </select>
              </div>
            </div>
          </div>
          <div className="col-12">
            <label htmlFor="" className="fs-13 mb-2 fw-medium">
              Batch Fees
            </label>
            <input
              value={selectedBatch?.monthlyFees || ""}
              disabled
              type="text"
              className="form-control shadow-none fs-14 fw-medium"
            />
          </div>
          <div className="col-12">
            <label htmlFor="" className="fs-13 mb-2 fw-medium">
              Subject
            </label>
            <Select
              isMulti
              value={
                selectedBatch?.subjects?.map((item) => ({
                  label: item.name,
                  value: item.id,
                })) || []
              }
              isDisabled={true}
              options={[]}
            />
          </div>
          <div className="col-12">
            <label htmlFor="" className="fs-13 mb-2 fw-medium">
              Class
            </label>
            <Select
              isMulti
              value={
                selectedBatch?.classes?.map((item) => ({
                  label: item.name,
                  value: item.id,
                })) || []
              }
              isDisabled={true}
              options={[]}
            />
          </div>
          <div className="col-12">
            <label htmlFor="" className="fs-13 mb-2 fw-medium">
              Board
            </label>
            <input
              type="text"
              value={selectedBatch?.board?.name || ""}
              disabled
              className="form-control shadow-none fs-14 fw-medium"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BatchAcademics;