import React from "react";
import styled from "styled-components";

const CommonLoader = () => {
  return (
    <StyledParent>
      <StyledWrapper>
        <div className="loading-wave">
          <div className="loading-bar" />
          <div className="loading-bar" />
          <div className="loading-bar" />
          <div className="loading-bar" />
        </div>
      </StyledWrapper>
    </StyledParent>
  );
};

const StyledParent = styled.div`
  width: 100%;
  height: 35vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledWrapper = styled.div`
  .loading-wave {
    width: 200px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }

  .loading-bar {
    width: 15px;
    height: 8px;
    margin: 0 4px;
    background-color: #3498db;
    border-radius: 4px;
    animation: loading-wave-animation 1s ease-in-out infinite;
  }

  .loading-bar:nth-child(2) {
    animation-delay: 0.1s;
  }

  .loading-bar:nth-child(3) {
    animation-delay: 0.2s;
  }

  .loading-bar:nth-child(4) {
    animation-delay: 0.3s;
  }

  @keyframes loading-wave-animation {
    0% {
      height: 8px;
    }

    50% {
      height: 40px;
    }

    100% {
      height: 8px;
    }
  }
`;

export default CommonLoader;
