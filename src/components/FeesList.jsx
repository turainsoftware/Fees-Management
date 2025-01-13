import React from "react";

const feesData = [
  {
    name: "Bikash Dubay",
    description: "Class 9th student",
    amount: 250,
    date: "19-12-2024",
    status: "green", // Use 'green' for received, 'red' for pending
  },
  {
    name: "Bikash Dubay",
    description: "Class 9th student",
    amount: 250,
    date: "19-12-2024",
    status: "red",
  },
  {
    name: "Bikash Dubay",
    description: "Class 9th student",
    amount: 250,
    date: "19-12-2024",
    status: "green",
  },
  {
    name: "Bikash Dubay",
    description: "Class 9th student",
    amount: 250,
    date: "19-12-2024",
    status: "red",
  },
  {
    name: "Bikash Dubay",
    description: "Class 9th student",
    amount: 250,
    date: "19-12-2024",
    status: "green",
  },
];

const FeesList = () => {
  return (
    <section className="pb-100 student-list">
      <div className="container">
        <div className="inner-contain light-blue-border bg-white radius-8">
          <div className="border-bottom d-flex align-items-center justify-content-between px-14 py-14">
            <h6 className="mb-0 fw-semibold">Fees List</h6>
            <a
              href="javascript:void(0);"
              className="d-flex align-items-center fs-6"
            >
              <i className="ri-equalizer-2-line fs-20 primary-color me-1"></i>
              <span className="fw-semibold primary-color">Filter</span>
            </a>
          </div>
          {feesData.map((fee, index) => (
            <div
              key={index}
              className="px-14 d-flex align-items-center justify-content-between py-14 border-bottom"
            >
              <div>
                <h6 className="mb-1 fs-15 fw-semibold">{fee.name}</h6>
                <span className="text-muted fs-13 fw-medium">
                  {fee.description}
                </span>
              </div>
              <div>
                <h6
                  className={`mb-1 fs-18 fw-bold text-end ${
                    fee.status === "green" ? "green-color" : "red-color"
                  }`}
                >
                  ₹ {fee.amount}
                </h6>
                <span className="text-muted fs-13 fw-medium text-end">
                  Received in {fee.date}
                </span>
              </div>
            </div>
          ))}
          <div className="my-4 text-center">
            <a href="#" className="btn2">
              View more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeesList;
