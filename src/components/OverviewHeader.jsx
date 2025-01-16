import React from "react";

//Images
import studentIcon from "./../assets/images/dashboard/student-icon.svg";
import feesIcon from "./../assets/images/dashboard/fees-icon.svg";
import subjectIcon from "./../assets/images/dashboard/subject-icon.svg";
import teacherIcon from "./../assets/images/dashboard/teacher-icon.svg";

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

const OverviewHeader = () => {
  return (
    <section className="my-3 overview">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="hori-scroll">
              <div className="row g-2 flex-nowrap overflow-auto">
                {cardData.map((data, index) => (
                  <div className="col-auto col-md-3" key={index}>
                    <div className="inner-contain light-blue-border radius-8 bg-white">
                      <div className="pb-12 border-bottom px-14 pt-14">
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <h2 className="mb-0 fs-20 fw-semibold">{data?.value}</h2>
                          <img src={data?.icon} alt="" />
                        </div>
                        <p className="mb-0 text-color fs-13">{data?.description}</p>
                      </div>
                      <div className="d-flex align-items-center justify-content-between px-14 py-2">
                        <span className={`fs-12 ${data.changeClass} fw-medium`}>
                          {data?.changeType}
                        </span>
                        <span className={`my-badge ${data?.changeClass==="green-color"?data?.changeClass:"my-badge-red"} fw-semibold fs-10 radius-5`}>
                          {data?.changeValue}
                        </span>
                      </div>
                    </div>
                  </div>
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
