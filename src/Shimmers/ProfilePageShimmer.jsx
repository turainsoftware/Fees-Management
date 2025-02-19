import React from "react";

const ProfilePageShimmer = () => {
  return (
    <div className="container py-4 pb-100">
      <div className="row g-4">
        {/* Left Column - Profile Card Shimmer */}
        <div className="col-12 col-lg-4">
          <div className="inner-contain light-blue-border radius-8 bg-white">
            <div className="card-body text-center py-4">
              <div className="skeleton skeleton-avatar"></div>
              <div className="skeleton skeleton-heading mt-3"></div>
              <div className="skeleton skeleton-text mt-2"></div>
              <div className="skeleton skeleton-text mt-2"></div>
            </div>
          </div>
        </div>

        {/* Right Column - Info Sections Shimmer */}
        <div className="col-12 col-lg-8">
          <div className="row g-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="col-12 col-md-6">
                <div className="inner-contain light-blue-border radius-8 bg-white h-100">
                  <div className="card-body p-3">
                    <div className="d-flex align-items-center mb-3">
                      <div className="skeleton skeleton-icon"></div>
                      <div className="skeleton skeleton-label ms-3"></div>
                    </div>
                    <div>
                      {[...Array(3)].map((_, j) => (
                        <div key={j} className="skeleton skeleton-text mt-2"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
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

        .skeleton {
          background: linear-gradient(90deg, #f0f0f0 25%, #e6e6e6 37%, #f0f0f0 63%);
          background-size: 200% 100%;
          animation: shimmer 1.5s ease-in-out infinite;
          border-radius: 4px;
        }

        .skeleton-avatar {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          margin: 0 auto;
        }

        .skeleton-heading {
          width: 70%;
          height: 20px;
          margin: 0 auto;
        }

        .skeleton-icon {
          width: 30px;
          height: 30px;
          border-radius: 30%;
        }

        .skeleton-text {
          width: 80%;
          height: 15px;
          margin: 8px auto 0;
        }

        .skeleton-label {
          width: 40%;
          height: 20px;
        }
      `}</style>
    </div>
  );
};

export default ProfilePageShimmer;
