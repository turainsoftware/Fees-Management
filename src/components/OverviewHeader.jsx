import React from "react";

//Images
import studentIcon from "./../assets/images/dashboard/student-icon.svg";
import feesIcon from "./../assets/images/dashboard/fees-icon.svg";
import subjectIcon from "./../assets/images/dashboard/subject-icon.svg";
import teacherIcon from "./../assets/images/dashboard/teacher-icon.svg";
import DetailsCard from "./Cards/DetailsCard";

// Card Static Data
const cardData = [
  {
    value: "2,14,010",
    icon: feesIcon,
    description: "This Month’s Fees",
    changeType: "Increased by",
    changeValue: "+18%",
    changeClass: "green-color",
  },
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
  return (
    <section className="my-3 overview">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="hori-scroll">
              <div className="row g-2 flex-nowrap overflow-auto">
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
