import { useState, useEffect } from "react";
import { Card, Tag, Button, Modal, Form, message } from "antd";
import { FaBookOpen, FaEdit } from "react-icons/fa";
import Select from "react-select";
import { batchService } from "../../services/BatchService";
import { toast } from "react-toastify";
import { teacherService } from "./../../services/TeacherService";

const SubjectsCard = ({ batchId, defaultSubjects, authToken }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [subjects, setSubjects] = useState([]); // All subjects fetched from the API
  const [isLoading, setIsLoading] = useState(false);

  // Fetch all subjects from the API when the component mounts
  useEffect(() => {
    fetchSubjects();
  }, []);

  // Set selected subjects from props when the component mounts or `defaultSubjects` changes
  useEffect(() => {
    if (defaultSubjects && defaultSubjects.length > 0) {
      const formattedSelectedSubjects = defaultSubjects.map((subject) => ({
        value: subject.id,
        label: subject.name,
      }));
      setSelectedSubjects(formattedSelectedSubjects);
    }
  }, [defaultSubjects]);

  // Fetch all subjects from the API
  const fetchSubjects = async () => {
    try {
      const data = await teacherService.subjects({ authToken: authToken });
      if (data && data.length > 0) {
        const formattedSubjects = data.map((subject) => ({
          value: subject.id,
          label: subject.name,
        }));
        setSubjects(formattedSubjects);
      }
    } catch (error) {
      console.error("Failed to fetch subjects", error);
      message.error("Failed to fetch subjects");
    }
  };

  // Handle saving the selected subjects
  const handleSubmit = async () => {
    if (selectedSubjects.length === 0) {
      message.info("Subjects should not be empty");
      return;
    }

    const subjectsPayload = selectedSubjects.map((option) => option.value);

    try {
      setIsLoading(true);

      const data = await batchService.updateSubjects({
        authToken: authToken,
        batchId: batchId,
        subjectsPayload: subjectsPayload,
      });
      if(data.status){
        message.success("Subject updated Successfully")
        setIsModalOpen(false);
      }else{ 
        message.error("Try again to update")
      }
    } catch (error) {
      message.error("Something went wrong try again");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle changes in the selected subjects
  const handleChange = (selectedOptions, actionMeta) => {
    if (
      actionMeta.action === "remove-value" ||
      actionMeta.action === "pop-value"
    ) {
      const removedId = actionMeta.removedValue?.value;
      const isValid = defaultSubjects.some(
        (subject) => parseInt(subject.id) === parseInt(removedId)
      );
      if (isValid) {
        message.info(`Can't remove this subject`);
        return;
      }
    }
    setSelectedSubjects(selectedOptions);
  };

  return (
    <div className="col-md-12">
      <Card
        title={
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-2">
              <span>
                <FaBookOpen size={16} />
              </span>
              <span className="fw-bold">Subjects</span>
            </div>
            <Button
              type="text"
              icon={<FaEdit size={16} />}
              onClick={() => setIsModalOpen(true)}
              style={{ color: "hsl(228, 74%, 60%)" }}
            />
          </div>
        }
        className="h-100 border-0"
        style={{ backgroundColor: "white" }}
      >
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {selectedSubjects.map((item) => (
            <Tag
              key={item.value}
              color="blue"
              style={{
                padding: "4px 12px",
                borderRadius: "16px",
                marginBottom: "8px",
                maxWidth: "100%",
                whiteSpace: "normal",
                height: "auto",
                lineHeight: "1.4",
                backgroundColor: "hsl(228, 74%, 95%)",
                color: "hsl(228, 74%, 60%)",
                border: "1px solid hsl(228, 74%, 90%)",
              }}
            >
              {item.label}
            </Tag>
          ))}
        </div>
      </Card>

      <Modal
        title="Edit Subjects"
        open={isModalOpen}
        okText={isLoading ? "Saving..." : "Save"}
        onOk={handleSubmit}
        onCancel={() => setIsModalOpen(false)}
        width={600}
        okButtonProps={{
          disabled: isLoading,
        }}
      >
        <Form layout="vertical">
          <Form.Item
            rules={[
              {
                required: true,
                message: "Please select at least one subject",
              },
            ]}
          >
            <Select
              isMulti
              isClearable={false}
              options={subjects}
              value={selectedSubjects}
              onChange={handleChange}
              className="react-select-container"
              classNamePrefix="react-select"
              placeholder="Select subjects"
              theme={(theme) => ({
                ...theme,
                colors: {
                  ...theme.colors,
                  primary: "hsl(228, 74%, 60%)",
                  primary25: "hsl(228, 74%, 95%)",
                },
              })}
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default SubjectsCard;
