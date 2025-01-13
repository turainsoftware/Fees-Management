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
    <section class="my-3 overview">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="hori-scroll">
              <div class="row g-2 flex-nowrap overflow-auto">
                {cardData.map((data, index) => (
                  <div class="col-auto col-md-3">
                    <div class="inner-contain light-blue-border radius-8 bg-white">
                      <div class="pb-12 border-bottom px-14 pt-14">
                        <div class="d-flex align-items-center justify-content-between mb-2">
                          <h2 class="mb-0 fs-20 fw-semibold">{data?.value}</h2>
                          <img src={data?.icon} alt="" />
                        </div>
                        <p class="mb-0 text-color fs-13">{data?.description}</p>
                      </div>
                      <div class="d-flex align-items-center justify-content-between px-14 py-2">
                        <span class={`fs-12 ${data.changeClass} fw-medium`}>
                          {data?.changeType}
                        </span>
                        <span class={`my-badge ${data?.changeClass==="green-color"?data?.changeClass:"my-badge-red"} fw-semibold fs-10 radius-5`}>
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
