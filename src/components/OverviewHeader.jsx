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
import { batchService } from "../services/BatchService";

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

  const [feesData, setFeesData] = useState({});
  const [isFeesLoading, setIsFeesLoading] = useState(true);

  const [batchData, setBatchData] = useState({});
  const [isBatchLoading, setIsBatchLoging] = useState(true);

  const fetchFeesAnalysis = async () => {
    try {
      setIsFeesLoading(true);
      const data = await feesService.feesAnalysis({ authToken: authToken });
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
      const data = await batchService.getAnalysis({ authToken: authToken });

      console.log(data);
      setBatchData(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsBatchLoging(false);
    }
  };

  useEffect(() => {
    fetchFeesAnalysis();
    batchAnalysis();
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewHeader;
