import React from "react";

const ItemListShimmer = ({ count = 5 }) => {
  const shimmerStyle = {
    background:
      "linear-gradient(to right, #f0f0f0 8%, #e0e0e0 18%, #f0f0f0 33%)",
    backgroundSize: "200% 100%",
    animation: "shimmer 1.5s infinite",
  };

  const shimmerKeyframes = `
    @keyframes shimmer {
      0% {
        background-position: -200px 0;
      }
      100% {
        background-position: 200px 0;
      }
    }
  `;

  return (
    <>
      {/* Inject shimmer keyframes */}
      <style>{shimmerKeyframes}</style>

      <div className="row justify-content-between g-0 bg-white mx-2 mb-3" style={{borderRadius: 10}}>
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className="col-12 border-bottom menu-border"
            style={{
              padding: "16px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* Left shimmer block */}
            <div
              style={{
                width: "60%",
                height: "20px",
                borderRadius: "4px",
                ...shimmerStyle,
              }}
            ></div>

            {/* Right shimmer block */}
            <div
              style={{
                width: "10%",
                height: "20px",
                borderRadius: "4px",
                ...shimmerStyle,
              }}
            ></div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ItemListShimmer;
