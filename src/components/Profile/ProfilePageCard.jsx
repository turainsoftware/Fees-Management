import {
  Card,
  Avatar,
  Tag,
  Button,
  Modal,
  Form,
  Input,
  Select,
  message,
} from "antd";
import {
  FaPhone,
  FaEnvelope,
  FaCalendarAlt,
  FaUser,
  FaEdit,
} from "react-icons/fa";
import { useState } from "react";
import {
  isValidEmail,
  isValidMobile,
  isValidName,
} from "../../utils/Validations";

function ProfilePageCard({ teacher, onUpdate }) {
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (values) => {
    if (
      values.name === teacher.name &&
      values.email === teacher.email &&
      values.gender === teacher.gender
    ) {
      message.warning("No changes made");
      return;
    }
    if (values.phone !== teacher.phone) {
      message.warning("Phone number cannot be changed");
      return;
    }
    if (values.email && !isValidEmail(values.email)) {
      message.warning("Enter a valid email");
      return;
    }
    try {
      const data = await onUpdate({ section: "profile", data: values });
      if (data) {
        message.success("Updated successfully");
        setIsModalOpen(false);
      } else {
        message.error("Failed to update");
        setIsModalOpen(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Card className="border-0" style={{ backgroundColor: "white" }}>
        <div className="d-flex justify-content-between mb-3">
          <div className="text-center flex-grow-1">
            <Avatar
              size={120}
              src={import.meta.env.VITE_PROFILEURL + teacher.profilePic}
              alt={teacher.name}
            />
            <h2 className="mt-3 mb-1 fw-bold">{teacher.name}</h2>
            <Tag
              color="blue"
              className="text-uppercase"
              style={{
                backgroundColor: "hsl(228, 74%, 95%)",
                color: "hsl(228, 74%, 60%)",
                border: "none",
              }}
            >
              {teacher.role}
            </Tag>
          </div>
          <Button
            type="text"
            icon={<FaEdit size={16} />}
            onClick={() => setIsModalOpen(true)}
            style={{ color: "hsl(228, 74%, 60%)" }}
          />
        </div>

        <div className="d-flex flex-column gap-3">
          <div className="d-flex align-items-center gap-2">
            <FaPhone style={{ color: "hsl(228, 74%, 60%)" }} size={20} />
            <span>{teacher.phone}</span>
          </div>

          {teacher.email && (
            <div className="d-flex align-items-center gap-2">
              <FaEnvelope style={{ color: "hsl(228, 74%, 60%)" }} size={20} />
              <span>{teacher.email}</span>
            </div>
          )}

          <div className="d-flex align-items-center gap-2">
            <FaUser style={{ color: "hsl(228, 74%, 60%)" }} size={20} />
            <span>{teacher.gender}</span>
          </div>

          <div className="d-flex align-items-center gap-2">
            <FaCalendarAlt style={{ color: "hsl(228, 74%, 60%)" }} size={20} />
            <span>
              Joined {new Date(teacher.createdAt).toLocaleDateString()}
            </span>
          </div>
        </div>
      </Card>

      <Modal
        title="Edit Profile"
        open={isModalOpen}
        onOk={() => form.submit()}
        onCancel={() => setIsModalOpen(false)}
        width={600}
      >
        <Form
          form={form}
          layout="vertical"
          initialValues={teacher}
          onFinish={handleSubmit}
        >
          <Form.Item
            name="name"
            label="Name"
            rules={[
              { required: true },
              {
                validator: (_, value) => {
                  if (!isValidName(value)) {
                    return Promise.reject("Invalid name");
                  }
                  return Promise.resolve();
                },
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="phone" label="Phone" rules={[{ required: true }]}>
            <Input maxLength={10} disabled />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                validator: (_, value) => {
                  if (!value || isValidEmail(value)) {
                    return Promise.resolve();
                  }
                  return Promise.reject("Invalid email");
                },
              },
            ]}
          >
            <Input type="email" />
          </Form.Item>
          <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
            <Select>
              <Select.Option value="Male">Male</Select.Option>
              <Select.Option value="Female">Female</Select.Option>
              <Select.Option value="Others">Others</Select.Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default ProfilePageCard;




// for imge updatable also
// import {
//   Card,
//   Avatar,
//   Tag,
//   Button,
//   Modal,
//   Form,
//   Input,
//   Select,
//   message,
//   Upload,
// } from "antd";
// import {
//   FaPhone,
//   FaEnvelope,
//   FaCalendarAlt,
//   FaUser,
//   FaEdit,
// } from "react-icons/fa";
// import { useState, useEffect } from "react"; // Added useEffect
// import {
//   isValidEmail,
//   isValidMobile,
//   isValidName,
// } from "../../utils/Validations";

// function ProfilePageCard({ teacher, onUpdate }) {
//   const [form] = Form.useForm();
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [previewImage, setPreviewImage] = useState(null); // State for image preview
//   const [file, setFile] = useState(null); // State for selected file

//   // Set initial preview image when modal opens
//   useEffect(() => {
//     if (isModalOpen) {
//       setPreviewImage(import.meta.env.VITE_PROFILEURL + teacher.profilePic);
//       setFile(null); // Reset file when modal opens
//       form.setFieldsValue(teacher); // Ensure form is initialized
//     }
//   }, [isModalOpen, teacher, form]);

//   // Handle image upload
//   const handleImageChange = ({ fileList }) => {
//     if (fileList.length > 0) {
//       const newFile = fileList[0].originFileObj;
//       setFile(newFile);
//       setPreviewImage(URL.createObjectURL(newFile));
//     } else {
//       setFile(null);
//       setPreviewImage(import.meta.env.VITE_PROFILEURL + teacher.profilePic);
//     }
//   };

//   const handleSubmit = async (values) => {
//     if (
//       values.name === teacher.name &&
//       values.email === teacher.email &&
//       values.gender === teacher.gender &&
//       !file // No new image selected
//     ) {
//       message.warning("No changes made");
//       return;
//     }
//     if (values.phone !== teacher.phone) {
//       message.warning("Phone number cannot be changed");
//       return;
//     }
//     if (values.email && !isValidEmail(values.email)) {
//       message.warning("Enter a valid email");
//       return;
//     }

//     // Prepare data to send
//     const updateData = { ...values };
//     if (file) {
//       updateData.profilePic = file; // Add the file to the update data
//     }

//     try {
//       const data = await onUpdate({ section: "profile", data: updateData });
//       if (data) {
//         message.success("Updated successfully");
//         setIsModalOpen(false);
//         setFile(null); // Clear file after successful update
//         setPreviewImage(import.meta.env.VITE_PROFILEURL + teacher.profilePic); // Reset to original
//       } else {
//         message.error("Failed to update");
//         setIsModalOpen(false);
//       }
//     } catch (error) {
//       console.error(error);
//       message.error("Update failed due to an error");
//     }
//   };

//   return (
//     <>
//       <Card className="border-0" style={{ backgroundColor: "white" }}>
//         <div className="d-flex justify-content-between mb-3">
//           <div className="text-center flex-grow-1">
//             <Avatar
//               size={120}
//               src={import.meta.env.VITE_PROFILEURL + teacher.profilePic}
//               alt={teacher.name}
//             />
//             <h2 className="mt-3 mb-1 fw-bold">{teacher.name}</h2>
//             <Tag
//               color="blue"
//               className="text-uppercase"
//               style={{
//                 backgroundColor: "hsl(228, 74%, 95%)",
//                 color: "hsl(228, 74%, 60%)",
//                 border: "none",
//               }}
//             >
//               {teacher.role}
//             </Tag>
//           </div>
//           <Button
//             type="text"
//             icon={<FaEdit size={16} />}
//             onClick={() => setIsModalOpen(true)}
//             style={{ color: "hsl(228, 74%, 60%)" }}
//           />
//         </div>

//         <div className="d-flex flex-column gap-3">
//           <div className="d-flex align-items-center gap-2">
//             <FaPhone style={{ color: "hsl(228, 74%, 60%)" }} size={20} />
//             <span>{teacher.phone}</span>
//           </div>

//           {teacher.email && (
//             <div className="d-flex align-items-center gap-2">
//               <FaEnvelope style={{ color: "hsl(228, 74%, 60%)" }} size={20} />
//               <span>{teacher.email}</span>
//             </div>
//           )}

//           <div className="d-flex align-items-center gap-2">
//             <FaUser style={{ color: "hsl(228, 74%, 60%)" }} size={20} />
//             <span>{teacher.gender}</span>
//           </div>

//           <div className="d-flex align-items-center gap-2">
//             <FaCalendarAlt style={{ color: "hsl(228, 74%, 60%)" }} size={20} />
//             <span>
//               Joined {new Date(teacher.createdAt).toLocaleDateString()}
//             </span>
//           </div>
//         </div>
//       </Card>

//       <Modal
//         title="Edit Profile"
//         open={isModalOpen}
//         onOk={() => form.submit()}
//         onCancel={() => {
//           setIsModalOpen(false);
//           setFile(null); // Reset file on cancel
//           setPreviewImage(import.meta.env.VITE_PROFILEURL + teacher.profilePic); // Reset preview
//         }}
//         width={600}
//       >
//         <Form
//           form={form}
//           layout="vertical"
//           initialValues={teacher}
//           onFinish={handleSubmit}
//         >
//           {/* Added Profile Image Upload */}
//           <Form.Item label="Profile Picture">
//             <Upload
//               listType="picture-card"
//               showUploadList={false}
//               beforeUpload={() => false} // Prevent auto-upload
//               onChange={handleImageChange}
//               accept="image/*"
//             >
//               {previewImage ? (
//                 <img
//                   src={previewImage}
//                   alt="Profile Preview"
//                   style={{ width: "100%", maxHeight: "100px", objectFit: "cover" }}
//                 />
//               ) : (
//                 <div>Upload</div>
//               )}
//             </Upload>
//           </Form.Item>

//           <Form.Item
//             name="name"
//             label="Name"
//             rules={[
//               { required: true },
//               {
//                 validator: (_, value) => {
//                   if (!isValidName(value)) {
//                     return Promise.reject("Invalid name");
//                   }
//                   return Promise.resolve();
//                 },
//               },
//             ]}
//           >
//             <Input />
//           </Form.Item>
//           <Form.Item name="phone" label="Phone" rules={[{ required: true }]}>
//             <Input maxLength={10} disabled />
//           </Form.Item>
//           <Form.Item
//             name="email"
//             label="Email"
//             rules={[
//               {
//                 validator: (_, value) => {
//                   if (!value || isValidEmail(value)) {
//                     return Promise.resolve();
//                   }
//                   return Promise.reject("Invalid email");
//                 },
//               },
//             ]}
//           >
//             <Input type="email" />
//           </Form.Item>
//           <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
//             <Select>
//               <Select.Option value="Male">Male</Select.Option>
//               <Select.Option value="Female">Female</Select.Option>
//               <Select.Option value="Others">Others</Select.Option>
//             </Select>
//           </Form.Item>
//         </Form>
//       </Modal>
//     </>
//   );
// }

// export default ProfilePageCard;