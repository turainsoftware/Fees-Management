import React, { useContext, useEffect, useState } from "react";
import { SecondaryNavbar, TeacherRagistrationForm } from "../../components";
import { commonService } from "../../services/CommonService";

const Register = () => {
  const [languages, setLanguages] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [boards, setBoards] = useState([]);
  const [classes, setClasses] = useState([]);

  const fetchLanguages = async () => {
    const languages = await commonService.allLanguage();
    setLanguages(languages);
  };

  const fetchSubjects = async () => {
    const subjects = await commonService.allSubjects();
    setSubjects(subjects);
  };

  const fetchClasses = async () => {
    const classes = await commonService.allClass();
    setClasses(classes);
  };

  const fetchBoards = async () => {
    const boards = await commonService.allBoards();
    setBoards(boards);
  };

  useEffect(() => {
    fetchLanguages();
    fetchSubjects();
    fetchClasses();
    fetchBoards();
  }, []);

  return (
    <main className="wrapper home-wrapper">
      <SecondaryNavbar title={"Register as a Teacher"} />
      <TeacherRagistrationForm
        language={languages}
        board={boards}
        classes={classes}
        subject={subjects}
      />
    </main>
  );
};

export default Register;
