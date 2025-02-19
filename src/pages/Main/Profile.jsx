import { useState, useEffect } from "react";
import { message } from "antd";
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
import { ProfilePageShimmer } from "../../Shimmers";

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
  const [teacher, setTeacher] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const handleUpdate = async ({ section, data }) => {
    if (!teacher) return;
    if (section === "profile") {
      try {
        console.log(data);
        const responseData = await teacherService.updateProfile({
          authToken: authToken,
          name: data.name,
          email: data.email,
          gender: data.gender,
        });
        if (responseData?.status) {
          teacher.name = data.name;
          teacher.email = data.email;
          teacher.gender = data.gender;
          return true;
        } else {
          return false;
        }
      } catch (error) {
        console.log(error);
        return false;
      }
    }
    message.success("Updated successfully");
    return true;
  };

  const fetchTeacherProfile = async () => {
    setIsLoading(true);
    try {
      const data = await teacherService.profile({ authToken: authToken });
      console.log(data);
      setTeacher(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTeacherProfile();
  }, []);

  return (
    <main className="wrapper home-wrapper ">
      <SecondaryNavbar title={"Profile"} />
      {isLoading ? (
        <ProfilePageShimmer />
      ) : (
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
                    onUpdate={(items) =>
                      handleUpdate({ section: "subjects", data: items })
                    }
                  />
                </div>
                <div className="col-12 col-md-6">
                  <InfoSection
                    title="Classes"
                    items={teacher.classes}
                    icon={<SiGoogleclassroom />}
                    options={allClasses}
                    onUpdate={(items) =>
                      handleUpdate({ section: "classes", data: items })
                    }
                  />
                </div>
                <div className="col-12 col-md-6">
                  <InfoSection
                    title="Boards"
                    items={teacher.boards}
                    icon={<LiaChalkboardSolid />}
                    options={allBoards}
                    onUpdate={(items) =>
                      handleUpdate({ section: "boards", data: items })
                    }
                  />
                </div>
                <div className="col-12 col-md-6">
                  <InfoSection
                    title="Languages"
                    items={teacher.languages}
                    icon={<FaLanguage />}
                    options={allLanguages}
                    onUpdate={(items) =>
                      handleUpdate({ section: "languages", data: items })
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
