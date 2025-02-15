const DetailsCardShimmer = () => {
  return (
    <div className="col-auto col-md-3">
      <div className="inner-contain light-blue-border radius-8 bg-white">
        {/* Header Section Shimmer */}
        <div className="pb-12 border-bottom px-14 pt-14">
          <div className="d-flex align-items-center justify-content-between mb-2">
            <div className="skeleton skeleton-heading"></div>
            <div className="skeleton skeleton-icon"></div>
          </div>
          <div className="skeleton skeleton-text"></div>
        </div>

        {/* Footer Section Shimmer */}
        <div className="d-flex align-items-center justify-content-between px-14 py-2">
          <div className="skeleton skeleton-label"></div>
          <div className="skeleton skeleton-badge"></div>
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

        .skeleton {
          background: linear-gradient(90deg, #f0f0f0 25%, #e6e6e6 37%, #f0f0f0 63%);
          background-size: 200% 100%;
          animation: shimmer 1.5s ease-in-out infinite;
          border-radius: 4px;
        }

        .skeleton-heading {
          width: 60%;
          height: 24px;
        }

        .skeleton-icon {
          width: 24px;
          height: 24px;
          border-radius: 30%;
        }

        .skeleton-text {
          width: 80%;
          height: 13px;
          margin-top: 8px;
        }

        .skeleton-label {
          width: 40%;
          height: 12px;
        }

        .skeleton-badge {
          width: 50px;
          height: 16px;
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
};

export default DetailsCardShimmer;