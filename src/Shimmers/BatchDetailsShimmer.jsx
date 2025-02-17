import React from "react";

const baseColor = "#ffffff"; // White background for cards
const shimmerColor = "rgba(255, 255, 255, 0.4)"; // Light shimmer effect
const textColor = "#e5e5e5"; // Gray 200 for text and icons

const shimmerAnimation = {
  animation: "shimmer 1.5s infinite linear",
  background: textColor,
  backgroundImage: `linear-gradient(90deg, transparent 0%, ${shimmerColor} 50%, transparent 100%)`,
  backgroundSize: "200% 100%",
};

const shimmerStyles = {
  shimmer: {
    ...shimmerAnimation,
    borderRadius: "8px",
    backgroundColor: baseColor,
  },
  shimmerLine: {
    height: "15px",
    borderRadius: "4px",
    ...shimmerAnimation,
  },
  shimmerBadge: {
    height: "20px",
    borderRadius: "12px",
    ...shimmerAnimation,
  },
  shimmerBadgeLg: {
    height: "30px",
    width: "80px",
    borderRadius: "15px",
    ...shimmerAnimation,
  },
  shimmerIcon: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    ...shimmerAnimation,
  },
};

const BatchDetailsShimmer = () => {
  return (
    <div className="container py-4 pb-100">
      <div className="row g-4">
        {/* Main Batch Info Shimmer */}
        <div className="col-12">
          <div className="card shadow-sm" style={shimmerStyles.shimmer}>
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div
                  style={{ ...shimmerStyles.shimmerLine, width: "50%" }}
                  className="h3"
                ></div>
                <div
                  style={{ ...shimmerStyles.shimmerBadge, width: "25%" }}
                ></div>
              </div>
              <hr className="border-light opacity-75" />
              <div className="row g-3">
                {[1, 2].map((i) => (
                  <div key={i} className="col-md-6">
                    <div className="d-flex align-items-center">
                      <div style={shimmerStyles.shimmerIcon}></div>
                      <div className="ms-3 w-75">
                        <div
                          style={{
                            ...shimmerStyles.shimmerLine,
                            marginBottom: "4px",
                          }}
                          className="small"
                        ></div>
                        <div style={shimmerStyles.shimmerLine}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Schedule Info Shimmer */}
        <div className="col-md-6">
          <div className="card shadow-sm h-100" style={shimmerStyles.shimmer}>
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <div style={shimmerStyles.shimmerIcon}></div>
                <div
                  style={{ ...shimmerStyles.shimmerLine, width: "50%" }}
                  className="ms-2 h5"
                ></div>
              </div>
              <hr className="border-light opacity-75" />
              <div className="mb-4">
                <div
                  style={{ ...shimmerStyles.shimmerLine, width: "25%" }}
                  className="small mb-2"
                ></div>
                <div className="d-flex flex-wrap gap-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} style={shimmerStyles.shimmerBadge}></div>
                  ))}
                </div>
              </div>
              <div className="mb-3">
                <div
                  style={{ ...shimmerStyles.shimmerLine, width: "25%" }}
                  className="small mb-2"
                ></div>
                <div
                  style={{ ...shimmerStyles.shimmerLine, width: "75%" }}
                ></div>
              </div>
              <div>
                <div
                  style={{ ...shimmerStyles.shimmerLine, width: "25%" }}
                  className="small mb-2"
                ></div>
                <div
                  style={{ ...shimmerStyles.shimmerLine, width: "100%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Fees Structure Shimmer */}
        <div className="col-md-6">
          <div className="card shadow-sm h-100" style={shimmerStyles.shimmer}>
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <div style={shimmerStyles.shimmerIcon}></div>
                <div
                  style={{ ...shimmerStyles.shimmerLine, width: "50%" }}
                  className="ms-2 h5"
                ></div>
              </div>
              <hr className="border-light opacity-75" />
              <div className="d-flex justify-content-between">
                <div style={{ width: "45%" }}>
                  <div
                    style={{ ...shimmerStyles.shimmerLine, width: "50%" }}
                    className="small mb-1"
                  ></div>
                  <div style={shimmerStyles.shimmerLine} className="h4"></div>
                </div>
                <div style={{ width: "45%" }}>
                  <div
                    style={{ ...shimmerStyles.shimmerLine, width: "50%" }}
                    className="small mb-1"
                  ></div>
                  <div style={shimmerStyles.shimmerLine} className="h4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 mt-3">
          <div className="card shadow-sm" style={shimmerStyles.shimmer}>
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div
                  style={{ ...shimmerStyles.shimmerLine, width: "50%" }}
                  className="h3"
                ></div>
                <div
                  style={{ ...shimmerStyles.shimmerBadge, width: "25%" }}
                ></div>
              </div>
              <hr className="border-light opacity-75" />
              <div className="row g-3">
                {[1, 2].map((i) => (
                  <div key={i} className="col-md-6">
                    <div className="d-flex align-items-center">
                      <div style={shimmerStyles.shimmerIcon}></div>
                      <div className="ms-3 w-75">
                        <div
                          style={{
                            ...shimmerStyles.shimmerLine,
                            marginBottom: "4px",
                          }}
                          className="small"
                        ></div>
                        <div style={shimmerStyles.shimmerLine}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </div>
  );
};

export default BatchDetailsShimmer;