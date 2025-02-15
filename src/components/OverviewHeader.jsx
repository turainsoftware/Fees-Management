import React, { useEffect, useState } from "react";

//Images
import studentIcon from "./../assets/images/dashboard/student-icon.svg";
import feesIcon from "./../assets/images/dashboard/fees-icon.svg";
import subjectIcon from "./../assets/images/dashboard/subject-icon.svg";
import teacherIcon from "./../assets/images/dashboard/teacher-icon.svg";

// Components
import DetailsCard from "./Cards/DetailsCard";
import { DetailsCardShimmer } from "../Shimmers";

// Services
import { useAuth } from "../contexts/AuthContext";
import { analyseService } from "../services/AnalyseService";

// Card Static Data
const cardData = [
  {
    value: "1254",
    icon: studentIcon,
    description: "Total Students",
    changeType: "Decreased by",
    changeValue: "-04%",
    changeClass: "red-color",
  },
  {
    value: "69",
    icon: subjectIcon,
    description: "Total Subjects",
    changeType: "Increased by",
    changeValue: "+18%",
    changeClass: "green-color",
  },
];

const OverviewHeader = ({ isLoading = false }) => {
  //credentials
  const { authToken } = useAuth();

  //State variables
  const [feesData, setFeesData] = useState({});
  const [batchData, setBatchData] = useState({});
  const [studentsData, setStudentsData] = useState({});

  // Loading states
  const [isFeesLoading, setIsFeesLoading] = useState(true);
  const [isBatchLoading, setIsBatchLoging] = useState(true);
  const [isStudentLaoding, setIsStudentLoading] = useState(true);

  const fetchFeesAnalysis = async () => {
    try {
      setIsFeesLoading(true);
      const data = await analyseService.feesAnalysis({ authToken: authToken });
      setFeesData(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsFeesLoading(false);
    }
  };

  const batchAnalysis = async () => {
    try {
      setIsBatchLoging(true);
      const data = await analyseService.batchAnalyse({ authToken: authToken });

      console.log(data);
      setBatchData(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsBatchLoging(false);
    }
  };

  const studentAnalysis = async () => {
    setIsStudentLoading(true);
    try {
      const data = await analyseService.studentAnalysis({
        authToken: authToken,
      });
      setStudentsData(data);
    } catch (error) {
    } finally {
      setIsStudentLoading(false);
    }
  };

  useEffect(() => {
    fetchFeesAnalysis();
    studentAnalysis();
    batchAnalysis();

  }, []);

  return (
    <section className="my-3 overview">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="hori-scroll">
              <div className="row g-2 flex-nowrap overflow-auto">
                {/* For Month Analysis Start*/}
                {isFeesLoading ? (
                  <DetailsCardShimmer />
                ) : (
                  <DetailsCard
                    icon={feesIcon}
                    description={"This Months Fees"}
                    value={`₹${feesData?.current}`}
                    changeClass={
                      feesData?.percentage >= 0 ? "green-color" : "red-color"
                    }
                    changeType={`${feesData?.trend} by`}
                    changeValue={`${
                      feesData.percentage >= 0 ? "+" : "-"
                    }${new Number(feesData.percentage).toFixed(1)}%`}
                  />
                )}
                {/* For Month Analysis End*/}

                {/* Student Analysis Start*/}
                {isStudentLaoding ? (
                  <DetailsCardShimmer />
                ) : (
                  <DetailsCard
                    icon={studentIcon}
                    description={"Total Students"}
                    value={studentsData?.current}
                    changeClass={
                      studentsData?.percentage >= 0 ? "green-color" : "red-color"
                    }
                    changeType={`${studentsData?.trend} by`}
                    changeValue={`${
                      studentsData.percentage >= 0 ? "+" : "-"
                    }${new Number(studentsData.percentage).toFixed(1)}%`}
                  />
                )}
                {/* Student Analysis End*/}

                {cardData.map((data, index) => (
                  <DetailsCard
                    changeClass={data.changeClass}
                    changeType={data.changeType}
                    description={data.description}
                    icon={data.icon}
                    value={data.value}
                    changeValue={data.changeValue}
                    isLoading={isLoading}
                    key={index}
                  />
                ))}

                {/* Batch Analysis Start*/}
                {isBatchLoading ? (
                  <DetailsCardShimmer />
                ) : (
                  <DetailsCard
                    icon={teacherIcon}
                    description={"Total Batches"}
                    value={batchData?.current}
                    changeClass={
                      batchData?.percentage >= 0 ? "green-color" : "red-color"
                    }
                    changeType={`${batchData?.trend} by`}
                    changeValue={
                      batchData.percentage >= 0
                        ? `+${batchData.percentage}%`
                        : `-${batchData.percentage}%`
                    }
                  />
                )}
                {/* Batch Analysis End */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewHeader;
