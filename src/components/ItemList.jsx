import React from "react";
import { Link } from "react-router-dom";

const ItemList = ({ data = [] }) => {
  console.log(data)
  return (
    <section className="student-nav my-3">
      <div className="container px-0">
        <div className="row justify-content-between g-0 bg-white">
          {data.map((item, index) => {
            return (
              <Link
                key={index}
                className="col-12 d-block border-bottom menu-border"
              >
                <div className="menu-contain px-4 py-2 d-flex align-items-center justify-content-between">
                  <p className="mb-0 fs-14 text-color-2 fw-medium">
                    {item.name}
                  </p>
                  <div>
                    <i className="ri-arrow-right-s-line fs-4 primary-color"></i>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ItemList;
