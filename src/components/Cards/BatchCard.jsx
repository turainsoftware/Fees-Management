import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const BatchCard = ({ data }) => {
  // Hooks States
  const navigate = useNavigate();

  const {
    id,
    name,
    // board,
    // classes,
    days,
    startMonth,
    startYear,
    endMonth,
    endYear,
    // language,
    monthlyExamFees,
    monthlyFees,
    // subjects,
    startTime,
    endTime,
  } = data;

  // Array of background colors
  const backgroundColors = [
    "#FFF7B1", // Light Yellow
    "#F0FFF0", // Honeydew
    "#E6FFFA", // Mint Cream
    "#F5F5DC", // Beige
    "#FAEBD7", // AntiqueWhite
    "#FFE4C4", // Bisque
    "#F0F8FF", // AliceBlue
    "#AFEEEE", // PaleTurquoise
    "#B0E0E6", // PowderBlue
    "#ADD8E6", // LightBlue
    "#E0FFFF", // LightCyan
    "#7FFFD4", // Aquamarine
    "#F8F8FF", // GhostWhite
    "#FFF0F5", // LavenderBlush
    "#FFEBCD", // BlanchedAlmond
    "#EEE8AA", // PaleGoldenrod
    "#98FB98", // PaleGreen
    "#F5FFFA", // MintCream
    "#FFEFD5", // PapayaWhip
  ];

  // Function to get a random background color
  const getRandomBackgroundColor = () => {
    return backgroundColors[
      Math.floor(Math.random() * backgroundColors.length)
    ];
  };

  const backgroundColor = getRandomBackgroundColor();

  const formatDateRange = () => {
    const startMonthName = new Date(
      startYear,
      startMonth - 1,
      1
    ).toLocaleString("default", { month: "short" });
    const endMonthName = new Date(endYear, endMonth - 1, 1).toLocaleString(
      "default",
      { month: "short" }
    );

    return `${startMonthName} ${startYear} - ${endMonthName} ${endYear}`;
  };

  const formatDays = () => {
    return days.join(", ");
  };

  const formatTime = (timeString) => {
    const [hours, minutes] = timeString.slice(0, 5).split(":"); // Extract HH:MM
    let hoursInt = parseInt(hours, 10);
    const ampm = hoursInt >= 12 ? "PM" : "AM";
    hoursInt = hoursInt % 12;
    hoursInt = hoursInt ? hoursInt : 12; // the hour '0' should be '12'
    return `${hoursInt}:${minutes} ${ampm}`;
  };

  const formatTimeRange = () => {
    return `${formatTime(startTime)} - ${formatTime(endTime)}`;
  };

  return (
    <StyledWrapper backgroundColor={backgroundColor}>
      <div className="card cursor-pointer" onClick={() => {
        navigate(`batch-details/${id}`);
      }}>
        <div className="card-header">
          <span>{name}</span>
        </div>
        <div className="card-details">
          <p>
            <b>Class Duration:</b> {formatTimeRange()}
          </p>
          <p>
            <b>Days:</b> {formatDays()}
          </p>
          <p>
            <b>Duration:</b> {formatDateRange()}
          </p>
        </div>
        <div className="fees-details">
          <p>
            <b>Monthly Fees:</b> ₹{monthlyFees}
          </p>
          <p>
            <b>Monthly Exam Fees:</b> ₹{monthlyExamFees}
          </p>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 320px;
    height: 250px; /* set a fixed height */
    position: relative;
    padding: 20px;
    background: radial-gradient(
          178.94% 106.41% at 26.42% 106.41%,
          ${(props) => props.backgroundColor} 0%,
          rgba(255, 255, 255, 0) 71.88%
        )
        /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
      #ffffff;
    box-shadow: 0px 155px 62px rgba(0, 0, 0, 0.01),
      0px 87px 52px rgba(0, 0, 0, 0.05), 0px 39px 39px rgba(0, 0, 0, 0.09),
      0px 10px 21px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
    border-radius: 23px;
    transition: all 0.8s cubic-bezier(0.15, 0.83, 0.66, 1);
    cursor: pointer;
    margin-bottom: 20px; // Add some margin below each card
    overflow: hidden; /* Hide content that overflows */
  }

  .card:hover {
    transform: scale(1.05);
  }

  .card-header {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 10px;
  }

  .card-header span {
    word-break: break-all;
    font-weight: 700;
    font-size: 14px;
    line-height: 135%;
    color: rgba(87, 77, 51, 0.66);
  }

  .card-details {
    margin-bottom: 10px;
  }

  .card-details p {
    font-size: 14px;
    color: rgba(87, 77, 51, 0.8);
    margin-bottom: 5px;
  }

  .fees-details {
  }

  .fees-details p {
    font-size: 14px;
    color: rgba(87, 77, 51, 0.8);
    margin-bottom: 5px;
  }
`;

export default BatchCard;
