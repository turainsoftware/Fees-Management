import { useState } from "react";
import { Card, Tag, Button, Modal, Form, message } from "antd";
import { FaEdit } from "react-icons/fa";
import Select from "react-select";

const InfoSection = ({ title, items, icon, options = [], onUpdate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState(
    items.map((item) => ({ value: item.id, label: item.name }))
  );

  const handleSubmit = () => {
    const formattedItems = selectedItems.map((option) => ({
      id: option.value,
      name: option.label,
    }));
    const responseData = onUpdate(formattedItems);
    if (responseData) {
      message.success("Updated Successfully");
    } else {
      message.error("Something went wrong!");
      return;
    }
    setIsModalOpen(false);
  };

  const selectOptions = options.map((option) => ({
    value: option.id,
    label: option.name,
  }));

  const handleChange = (selectedOptions, actionMeta) => {
    if (
      actionMeta.action === "remove-value" ||
      actionMeta.action === "pop-value"
    ) {
      const removedId = actionMeta.removedValue?.value;
      const isValid = items.some(
        (item) => parseInt(item.id) === parseInt(removedId)
      );
      console.log(isValid);
      if (isValid) {
        message.info(`can't remove item`);
        return;
      }
    }
    setSelectedItems(selectedOptions);
  };

  return (
    <>
      <Card
        title={
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-2">
              <span>{icon}</span>
              <span className="fw-bold">{title}</span>
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
          {items.map((item) => (
            <Tag
              key={item.id}
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
              {item.name}
            </Tag>
          ))}
        </div>
      </Card>

      <Modal
        title={`Edit ${title}`}
        open={isModalOpen}
        okText={"Save"}
        onOk={handleSubmit}
        onCancel={() => setIsModalOpen(false)}
        width={600}
      >
        <Form layout="vertical">
          <Form.Item
            rules={[
              {
                required: true,
                message: `Please select at least one ${title.toLowerCase()}`,
              },
            ]}
          >
            <Select
              isMulti
              options={selectOptions}
              value={selectedItems}
              onChange={handleChange}
              className="react-select-container"
              classNamePrefix="react-select"
              placeholder={`Select ${title.toLowerCase()}`}
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
    </>
  );
};

export default InfoSection;
