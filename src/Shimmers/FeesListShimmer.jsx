import React from 'react';

const FeesListShimmer = () => {
  return (
    <section className="pb-100 mt-3 student-list">
      <div className="container">
        <div className="inner-contain light-blue-border bg-white radius-8">
          {/* Header Shimmer */}
          <div className="border-bottom d-flex align-items-center justify-content-between px-14 py-14">
            <div className="shimmer-bg" style={{ width: '120px', height: '24px' }}></div>
            <div className="shimmer-bg" style={{ width: '80px', height: '24px' }}></div>
          </div>

          {/* List Items Shimmer */}
          {[1, 2, 3].map((_, index) => (
            <div
              key={index}
              className="px-14 d-flex align-items-center justify-content-between py-14 border-bottom"
            >
              <div className="w-50">
                <div className="shimmer-bg mb-2" style={{ height: '20px', width: '60%' }}></div>
                <div className="shimmer-bg" style={{ height: '16px', width: '80%' }}></div>
              </div>
              <div className="w-40 text-end">
                <div className="shimmer-bg mb-2" style={{ height: '24px', width: '50%', marginLeft: 'auto' }}></div>
                <div className="shimmer-bg" style={{ height: '16px', width: '70%', marginLeft: 'auto' }}></div>
              </div>
            </div>
          ))}

          {/* View More Button Shimmer */}
          <div className="my-4 text-center">
            <div className="shimmer-bg mx-auto" style={{ width: '120px', height: '40px', borderRadius: '20px' }}></div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .shimmer-bg {
          background: #f6f7f8;
          background-image: linear-gradient(
            to right,
            #f6f7f8 0%,
            #e8e9ea 20%,
            #f6f7f8 40%,
            #f6f7f8 100%
          );
          background-repeat: no-repeat;
          background-size: 800px 104px;
          display: inline-block;
          position: relative;
          animation-duration: 1s;
          animation-fill-mode: forwards;
          animation-iteration-count: infinite;
          animation-name: shimmer;
          animation-timing-function: ease-in-out;
        }

        @keyframes shimmer {
          0% {
            background-position: -468px 0;
          }

          100% {
            background-position: 468px 0;
          }
        }
      `}</style>
    </section>
  );
};

export default FeesListShimmer;