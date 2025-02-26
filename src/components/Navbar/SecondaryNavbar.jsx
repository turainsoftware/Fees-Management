import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SecondaryNavbar = ({
  title,
  isCreateBtnActive = false,
  createBtnPath,
  crateBtnText,
}) => {
  const navigate = useNavigate();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate 10% of the page height
      const scrollThreshold = document.body.scrollHeight * 0.01;
      // Check if the user has scrolled past 10% of the page
      if (window.scrollY > scrollThreshold) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="dash-header"
      className={isSticky ? "position-fixed top-0 start-0 w-100" : ""}
      style={{ zIndex: 1000, transition: "all 0.3s ease-in-out" }}
    >
      <header className="bg-white py-2 border-bottom border-subtile-secondary d-flex align-items-center">
        <div className="container px-3">
          <div className="row g-2 align-items-center flex-nowrap">
            <span
              onClick={() => navigate(-1)}
              className="col-auto d-block"
              style={{ cursor: "pointer" }}
            >
              <i className="ri-arrow-left-line fs-2"></i>
            </span>
            <div className="col">
              <div className="d-flex align-items-center justify-content-between">
                <h1 className="mb-0 fs-6 ps-2">{title}</h1>
                {isCreateBtnActive && (
                  <Link to={createBtnPath} className="btn1 p-2">
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