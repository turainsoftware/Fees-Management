import React, { useEffect, useState } from "react";

//Images
import studentIcon from "./../assets/images/dashboard/student-icon.svg";
import feesIcon from "./../assets/images/dashboard/fees-icon.svg";
import subjectIcon from "./../assets/images/dashboard/subject-icon.svg";
import teacherIcon from "./../assets/images/dashboard/teacher-icon.svg";
import DetailsCard from "./Cards/DetailsCard";
import { DetailsCardShimmer } from "../Shimmers";
import { feesService } from "../services/FeesService";
import { useAuth } from "../contexts/AuthContext";

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
  {
    value: "14",
    icon: teacherIcon,
    description: "Total Teachers",
    changeType: "Increased by",
    changeValue: "+18%",
    changeClass: "green-color",
  },
];

const OverviewHeader = ({ isLoading = false }) => {
  //credentials
  const { authToken } = useAuth();

  const [feesData, setFeesData] = useState({});
  const [isFeesLoading, setIsFeesLoading] = useState(true);

  const fetchFeesAnalysis = async () => {
    try {
      setIsFeesLoading(true);
      const data = await feesService.feesAnalysis({ authToken: authToken });
      console.log(data);
      setFeesData(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsFeesLoading(false);
    }
  };

  useEffect(() => {
    fetchFeesAnalysis();
  }, []);

  return (
    <section className="my-3 overview">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="hori-scroll">
              <div className="row g-2 flex-nowrap overflow-auto">
                {isFeesLoading ? (
                  <DetailsCardShimmer />
                ) : (
                  <DetailsCard icon={feesIcon} description={"This Months Fees"}
                  value={`₹${feesData?.currentMonthFees}`} changeClass={feesData?.percentageChange>=0?"green-color":"red-color"}
                  changeType={`${feesData?.trend} by`}
                  changeValue={feesData.percentageChange>=0?`+${feesData.percentageChange}%`:`-${feesData.percentageChange}%`}  />
                )}

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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewHeader;
