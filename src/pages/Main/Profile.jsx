import { useState, useEffect } from "react";
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
import { commonService } from "../../services/CommonService";

export default function TeacherProfile() {
  // State Variables
  const { authToken } = useAuth();
  const [teacher, setTeacher] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [allSubjects, setAllSubjects] = useState([]);
  const [allClasses, setAllClasses] = useState([]);
  const [allBoards, setAllBoards] = useState([]);
  const [allLanguages, setAllLanguages] = useState([]);

  const handleUpdate = async ({ section, data }) => {
    if (!teacher) return;
    if (section === "profile") {
      try {
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
        return false;
      }
    }

    // Subjects
    if (section === "subjects") {
      try {
        const responseData = await teacherService.updateSubjects({
          authToken: authToken,
          payload: data,
        });
        if (responseData.status) {
          const updatedTeachers = { ...teacher, subjects: data };
          setTeacher(updatedTeachers);
        }
        return responseData.status;
      } catch (error) {
        return false;
      }
    }

    // Classes
    if (section === "classes") {
      try {
        const responseData = await teacherService.updateClasses({
          authToken: authToken,
          payload: data,
        });
        if (responseData.status) {
          const updatedTeachers = { ...teacher, classes: data };
          setTeacher(updatedTeachers);
        }
        return responseData.status;
      } catch (error) {
        return false;
      }
    }

    // Boards
    if (section === "boards") {
      try {
        const responseData = await teacherService.updateBoards({
          authToken: authToken,
          payload: data,
        });
        if (responseData.status) {
          const updatedTeachers = { ...teacher, boards: data };
          setTeacher(updatedTeachers);
        }
        return responseData.status;
      } catch (error) {
        return false;
      }
    }

    // Language
    if (section === "languages") {
      try {
        const responseData = await teacherService.updateLanguages({
          authToken: authToken,
          payload: data,
        });
        if (responseData.status) {
          const updatedTeachers = { ...teacher, languages: data };
          setTeacher(updatedTeachers);
        }
        return responseData.status;
      } catch (error) {
        return false;
      }
    }

    return true;
  };

  const fetchTeacherProfile = async () => {
    setIsLoading(true);
    try {
      const data = await teacherService.profile({ authToken: authToken });
      setTeacher(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchAllOtherDetails = async () => {
    try {
      const subjects = await commonService.allSubjects();
      setAllSubjects(subjects);
      const classes = await commonService.allClass();
      setAllClasses(classes);
      const boards = await commonService.allBoards();
      setAllBoards(boards);
      const languages = await commonService.allLanguage();
      setAllLanguages(languages);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTeacherProfile();
    fetchAllOtherDetails();
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
