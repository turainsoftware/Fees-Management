import { useState, useEffect } from "react";
import { Card, Skeleton, message } from "antd";
import {
  ProfilePageCard,
  InfoSection,
  SecondaryNavbar,
} from "./../../components/index";
import { useAuth } from "../../contexts/AuthContext";
import { teacherService } from "../../services/TeacherService";
import { MdSubject } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";
import { LiaChalkboardSolid } from "react-icons/lia";
import { FaLanguage } from "react-icons/fa6";



// Mock data for options
const allSubjects = [
  { id: 19, name: "Computer Science" },
  { id: 18, name: "Computer Applications" },
  { id: 20, name: "Mathematics" },
  { id: 21, name: "Physics" },
];

const allClasses = [
  { id: 12, name: "Class 11" },
  { id: 13, name: "Class 12" },
  { id: 14, name: "Class 10" },
  { id: 15, name: "Class 9" },
];

const allBoards = [
  { id: 54, name: "West Bengal Board of Secondary Education (WBBSE)" },
  {
    id: 55,
    name: "West Bengal Council of Higher Secondary Education (WBCHSE)",
  },
  { id: 10, name: "Central Board of Secondary Education (CBSE)" },
  { id: 11, name: "Indian Certificate of Secondary Education (ICSE)" },
];

const allLanguages = [
  { id: 4, name: "Bengali" },
  { id: 18, name: "Hindi" },
  { id: 12, name: "English" },
  { id: 13, name: "Sanskrit" },
];

export default function TeacherProfile() {
  // State Variables
  const { authToken } = useAuth();
  const [teacher, setTeacher] = useState({
    id: 1,
    name: "Jhantu Bala",
    phone: "9775746484",
    email: null,
    otp: "12345",
    otpExpiry: "2025-02-18T07:25:03.000+00:00",
    gender: "Male",
    profilePic: "72139e47-b8d3-496e-a3aa-b554c2011ecb.jpg",
    role: "TEACHER",
    createdAt: "2025-02-11",
    updateAt: "2025-02-18T07:20:03.000+00:00",
    subjects: [
      {
        id: 19,
        name: "Computer Science",
      },
      {
        id: 18,
        name: "Computer Applications",
      },
    ],
    classes: [
      {
        id: 12,
        name: "Class 11",
      },
      {
        id: 13,
        name: "Class 12",
      },
    ],
    boards: [
      {
        id: 54,
        name: "West Bengal Board of Secondary Education (WBBSE)",
      },
      {
        id: 55,
        name: "West Bengal Council of Higher Secondary Education (WBCHSE)",
      },
      {
        id: 10,
        name: "Central Board of Secondary Education (CBSE)",
      },
    ],
    languages: [
      {
        id: 4,
        name: "Bengali",
      },
      {
        id: 18,
        name: "Hindi",
      },
      {
        id: 12,
        name: "English",
      },
    ],
  });

  const handleUpdate = (section, data) => {
    if (!teacher) return;

    setTeacher((prev) => {
      if (!prev) return prev;
      return { ...prev, [section]: data };
    });
    message.success("Updated successfully");
  };

  const fetchTeacherProfile = async () => {
    try {
      const data = await teacherService.profile({ authToken: authToken });
      console.log(data);
      setTeacher(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTeacherProfile();
  }, []);

  return (
    <main className="wrapper home-wrapper ">
      <SecondaryNavbar title={"Profile"} />
      <div className="container py-4 pb-100">
        <div className="row g-4">
          <div className="col-12 col-lg-4">
            <ProfilePageCard teacher={teacher} onUpdate={handleUpdate} />
          </div>

          <div className="col-12 col-lg-8">
            <div className="row g-4">
              <div className="col-12 col-md-6">
                <InfoSection
                  title="Subjects"
                  items={teacher.subjects}
                  icon={<MdSubject />}
                  options={allSubjects}
                  onUpdate={(items) => handleUpdate("subjects", items)}
                />
              </div>
              <div className="col-12 col-md-6">
                <InfoSection
                  title="Classes"
                  items={teacher.classes}
                  icon={<SiGoogleclassroom/>}
                  options={allClasses}
                  onUpdate={(items) => handleUpdate("classes", items)}
                />
              </div>
              <div className="col-12 col-md-6">
                <InfoSection
                  title="Boards"
                  items={teacher.boards}
                  icon={<LiaChalkboardSolid/>}
                  options={allBoards}
                  onUpdate={(items) => handleUpdate("boards", items)}
                />
              </div>
              <div className="col-12 col-md-6">
                <InfoSection
                  title="Languages"
                  items={teacher.languages}
                  icon={<FaLanguage />}
                  options={allLanguages}
                  onUpdate={(items) => handleUpdate("languages", items)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
