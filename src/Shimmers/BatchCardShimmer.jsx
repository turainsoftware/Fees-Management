import React from "react";
import styled, { keyframes } from "styled-components";

const shimmerAnimation = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

const BatchCardShimmer = () => {
  return (
    <ShimmerWrapper>
      <div className="shimmer-card">
        <div className="shimmer-header">
          <div className="shimmer-line short"></div>
          <div className="shimmer-line medium"></div>
          <div className="shimmer-line short"></div>
        </div>
        <div className="shimmer-details">
          <div className="shimmer-line long"></div>
          <div className="shimmer-line medium"></div>
          <div className="shimmer-line long"></div>
          <div className="shimmer-line medium"></div>
        </div>
      </div>
    </ShimmerWrapper>
  );
};

const ShimmerWrapper = styled.div`
  width: 100%;

  .shimmer-card {
    position: relative;
    padding: 20px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0px 155px 62px rgba(0, 0, 0, 0.01),
      0px 87px 52px rgba(0, 0, 0, 0.05), 0px 39px 39px rgba(0, 0, 0, 0.09),
      0px 10px 21px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    margin-bottom: 20px; // Add some margin below each card
  }

  .shimmer-line {
    height: 12px;
    margin-bottom: 10px;
    border-radius: 8px;
    background: linear-gradient(
      to right,
      #f0f0f0 0%,
      #e0e0e0 20%,
      #f0f0f0 40%,
      #f0f0f0 100%
    );
    background-size: 200% 100%;
    animation: ${shimmerAnimation} 1.5s infinite linear;
  }

  .short {
    width: 30%;
  }

  .medium {
    width: 50%;
  }

  .long {
    width: 80%;
  }

  .shimmer-header {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 15px;
  }

  .shimmer-details {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 15px;
  }
`;

export default BatchCardShimmer;