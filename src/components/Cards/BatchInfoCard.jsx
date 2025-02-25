import { useEffect, useState } from "react";
import { Card, Tag, Button, Modal, message, Input } from "antd";
import { FaEdit, FaGraduationCap, FaBook } from "react-icons/fa";
import Select from "react-select";
import { teacherService } from "../../services/TeacherService";
import { batchService } from "../../services/BatchService";

const BatchInfoCard = ({
  batchId,
  name,
  board,
  classes,
  language,
  authToken,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State for editable fields
  const [currentName, setCurrentName] = useState(name);
  const [currentBoard, setCurrentBoard] = useState(board);
  const [currentClasses, setCurrentClasses] = useState(classes);
  const [currentLanguage, setCurrentLanguage] = useState(language);

  // State for form inputs
  const [selectedName, setSelectedName] = useState(name);
  const [selectedBoard, setSelectedBoard] = useState({
    value: board.id,
    label: board.name,
  });
  const [selectedClasses, setSelectedClasses] = useState(
    classes.map((cls) => ({ value: cls.id, label: cls.name }))
  );
  const [selectedLanguage, setSelectedLanguage] = useState({
    value: language.id,
    label: language.name,
  });

  // Options
  const [languageOptions, setLanguageOptions] = useState();
  const [boardOptions, setBoardOptions] = useState();
  const [classOptions, setClassOptions] = useState();

  const fetchOptionsData = async () => {
    try {
      const boards = await teacherService.boards({ authToken: authToken });
      setBoardOptions(
        boards.map((item) => ({
          value: item.id,
          label: item.name,
        }))
      );
      const classes = await teacherService.classes({ authToken: authToken });
      setClassOptions(
        classes.map((item) => ({
          value: item.id,
          label: item.name,
        }))
      );
      const languages = await teacherService.languages({
        authToken: authToken,
      });
      setLanguageOptions(
        languages.map((item) => ({
          value: item.id,
          label: item.name,
        }))
      );
    } catch (err) {
      console.err(err);
    }
  };

  useEffect(() => {
    fetchOptionsData();
  }, []);

  // Open modal and set initial form values
  const handleEditClick = () => {
    setSelectedName(currentName);
    setSelectedBoard({ value: currentBoard.id, label: currentBoard.name });
    setSelectedClasses(
      currentClasses.map((cls) => ({ value: cls.id, label: cls.name }))
    );
    setSelectedLanguage({
      value: currentLanguage.id,
      label: currentLanguage.name,
    });
    setIsModalOpen(true);
  };

  // Handle form submission
  const handleSubmit = async () => {
    // Check if any changes were made
    const isNameChanged = selectedName !== currentName;
    const isBoardChanged =
      selectedBoard.value !== currentBoard.id ||
      selectedBoard.label !== currentBoard.name;
    const isClassesChanged =
      JSON.stringify(selectedClasses) !==
      JSON.stringify(
        currentClasses.map((cls) => ({ value: cls.id, label: cls.name }))
      );
    const isLanguageChanged =
      selectedLanguage.value !== currentLanguage.id ||
      selectedLanguage.label !== currentLanguage.name;
  
    if (
      !isNameChanged &&
      !isBoardChanged &&
      !isClassesChanged &&
      !isLanguageChanged
    ) {
      message.info("No changes were made.");
      return;
    }
  
    try {
      const data = await batchService.updateBatchDetails({
        authToken: authToken,
        batchId: batchId,
        batchName: selectedName,
        boardId: selectedBoard.value,
        classPayload: selectedClasses.map((item) => item.value),
        languageId: selectedLanguage?.value,
      });
  
      if (data.status) {
        message.success(data?.message);
        
        // ✅ Update current values with new selected values
        setCurrentName(selectedName);
        setCurrentBoard({ id: selectedBoard.value, name: selectedBoard.label });
        setCurrentClasses(
          selectedClasses.map((cls) => ({ id: cls.value, name: cls.label }))
        );
        setCurrentLanguage({ id: selectedLanguage.value, name: selectedLanguage.label });
  
        setIsModalOpen(false);
      } else {
        message.error(data.message);
      }
    } catch (error) {
      console.error(error);
      message.error("Something went wrong!");
    }
  };
  

  const handleClassChange = (selectedOptions) => {
    const existingClassIds = currentClasses.map((cls) => cls.id);
    const removedClasses = selectedClasses.filter(
      (cls) => !selectedOptions.some((opt) => opt.value === cls.value)
    );

    if (removedClasses.some((cls) => existingClassIds.includes(cls.value))) {
      message.info("Existing classes cannot be removed.");
      return; // Prevent changes
    }

    // Update selected classes if no existing classes are removed
    setSelectedClasses(selectedOptions);
  };

  return (
    <div className="col-12">
      <Card
        className="shadow-sm"
        title={
          <div className="d-flex justify-content-between align-items-center">
            <h2 className="card-title mb-0 text-primary fw-bold">
              {currentName}
            </h2>
            <Button
              type="text"
              icon={<FaEdit size={16} />}
              onClick={handleEditClick}
              style={{ color: "hsl(228, 74%, 60%)" }}
            />
          </div>
        }
      >
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <Tag
              color="blue"
              style={{
                padding: "4px 12px",
                borderRadius: "16px",
                backgroundColor: "hsl(228, 74%, 95%)",
                color: "hsl(228, 74%, 60%)",
                border: "1px solid hsl(228, 74%, 90%)",
              }}
            >
              {currentLanguage.name}
            </Tag>
          </div>
          <hr className="border-light opacity-75" />
          <div className="row g-3">
            <div className="col-md-6">
              <div className="d-flex align-items-center">
                <FaGraduationCap className="text-primary fs-4 me-3" />
                <div>
                  <small className="text-body-secondary">Board</small>
                  <p className="mb-0 text-primary fw-semibold">
                    {currentBoard.name}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex align-items-center">
                <FaBook className="text-info fs-4 me-3" />
                <div>
                  <small className="text-body-secondary">Class</small>
                  <p className="mb-0 text-primary fw-semibold">
                    {currentClasses.map((cls) => cls.name).join(", ")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Edit Modal */}
      <Modal
        title="Edit Batch Details"
        open={isModalOpen}
        okText={"Save"}
        onOk={handleSubmit}
        onCancel={() => setIsModalOpen(false)}
        width={600}
      >
        <div>
          <div className="mb-3">
            <label>Batch Name</label>
            <Input
              value={selectedName}
              onChange={(e) => setSelectedName(e.target.value)}
              placeholder="Enter Batch Name"
            />
          </div>
          <div className="mb-3">
            <label>Board</label>
            <Select
              isClearable={false}
              value={selectedBoard}
              onChange={(selectedOption) => setSelectedBoard(selectedOption)}
              options={boardOptions}
              placeholder="Select Board"
            />
          </div>
          <div className="mb-3">
            <label>Classes</label>
            <Select
              isMulti
              value={selectedClasses}
              onChange={handleClassChange}
              options={classOptions}
              placeholder="Select Classes"
            />
          </div>
          <div className="mb-3">
            <label>Language</label>
            <Select
              value={selectedLanguage}
              onChange={(selectedOption) => setSelectedLanguage(selectedOption)}
              options={languageOptions}
              placeholder="Select Language"
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default BatchInfoCard;
