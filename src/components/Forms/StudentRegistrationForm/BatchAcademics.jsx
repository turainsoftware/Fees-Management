import React, { useEffect, useState } from "react";
import { boardOptions } from "../../../utils/dummy";
import Select from "react-select";
import { batchService } from "./../../../services/BatchService";
import { useAuth } from "../../../contexts/AuthContext";

const BatchAcademics = ({
  authToken,
  selectedBatch,
  setSelectedBatch,
  selectedClass,
  setSelectedClass,
}) => {
  const [batchInfo, setBatchInfo] = useState([]);

  // State Variables

  const fetchBatchData = async () => {
    try {
      const data = await batchService.getAllBatches({ authToken: authToken });
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
    setSelectedBatch(batchSelected);
  };

  const handleClassChange = (e) => {
    const id = e.target.value;
    const classSelected = selectedBatch.classes.find(
      (item) => item.id === parseInt(id)
    );
    setSelectedClass(classSelected);
  };

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
              name=""
              id=""
              className="form-select shadow-none fs-14 fw-medium"
            >
              <option value={{}} defaultValue={true}>
                Select Batch
              </option>
              {batchInfo.map((item, index) => {
                return (
                  <option key={index} value={item.id}>
                    {item.name}
                  </option>
                );
              })}
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
            >
              <option value={{}} defaultValue={true}>
                Select Class
              </option>
              {selectedBatch?.classes
                ? selectedBatch?.classes.map((item) => (
                    <option value={item.id}>{item.name}</option>
                  ))
                : null}
            </select>
          </div>
          <div className="col-12">
            <label htmlFor="" className="fs-13 mb-2 fw-medium">
              Batch Fees
            </label>
            <input
              value={selectedBatch?.monthlyFees}
              disabled
              type="text"
              className="form-control shadow-none fs-14 fw-medium"
              placeholder=""
            />
          </div>
          <div className="col-12">
            <label htmlFor="" className="fs-13 mb-2 fw-medium">
              Subject
            </label>
            <Select
              isMulti
              value={
                selectedBatch.subjects
                  ? selectedBatch.subjects.map((item) => ({
                      label: item.name,
                      value: item.id,
                    }))
                  : []
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
                selectedBatch.classes
                  ? selectedBatch.classes.map((item) => ({
                      label: item.name,
                      value: item.id,
                    }))
                  : []
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
              value={selectedBatch?.board?.name}
              disabled
              className="form-control shadow-none fs-14 fw-medium"
              placeholder=""
            ></input>
          </div>
        </div>
      </div>
    </>
  );
};

export default BatchAcademics;
