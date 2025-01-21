import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SecondaryNavbar = ({
  title,
  isCreateBtnActive = false,
  createBtnPath,
  crateBtnText
}) => {
  const navigate = useNavigate();
  return (
    <section id="dash-header">
      <header className="bg-white py-2 border-bottom border-subtile-secondary d-flex align-items-center">
        <div className="container px-3">
          <div className="row g-2 align-items-center">
            <span
              onClick={() => navigate(-1)}
              className="col-auto d-block"
              style={{ cursor: "pointer" }}
            >
              <i className="ri-arrow-left-line fs-2"></i>
            </span>
            <div class="col-11">
              <div class="d-flex align-items-center justify-content-between">
                <h1 class="mb-0 fs-6 ps-2">{title}</h1>
                {isCreateBtnActive && (
                  <Link to={createBtnPath} class="btn1 p-2">
                    {crateBtnText} +
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};

export default SecondaryNavbar;
