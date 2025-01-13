import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

const MonthlyAnalysisChart = () => {
  const fullData = {
    series: [
      {
        name: "Fees Received",
        type: "column",
        data: [600, 400, 500, 450, 700, 300, 550, 400, 650, 800, 450],
      },
      {
        name: "Students",
        type: "line",
        data: [42, 25, 37, 22, 43, 27, 39, 22, 31, 50, 20],
      },
    ],
    labels: [
      "1 Jan",
      "2 Jan",
      "3 Jan",
      "4 Jan",
      "5 Jan",
      "6 Jan",
      "7 Jan",
      "8 Jan",
      "9 Jan",
      "10 Jan",
      "11 Jan",
    ],
  };

  const mobileData = {
    series: [
      {
        name: "Fees Received",
        type: "column",
        data: [450, 400, 250, 300],
      },
      {
        name: "Students",
        type: "line",
        data: [42, 25, 37, 22],
      },
    ],
    labels: ["1 Jan", "2 Jan", "3 Jan", "4 Jan"],
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const [chartOptions, setChartOptions] = useState({});
  const [chartSeries, setChartSeries] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const selectedData = isMobile ? mobileData : fullData;

    setChartSeries(selectedData.series);

    setChartOptions({
      chart: {
        height: isMobile ? 300 : 350,
        type: "line",
        toolbar: {
          show: true,
          tools: {
            download: true,
            selection: true,
            zoom: true,
            zoomin: true,
            zoomout: true,
            pan: true,
            reset: true,
          },
        },
      },
      stroke: {
        width: [0, 2],
        curve: "smooth",
      },
      title: {
        text: "Monthly Analysis",
        align: "left",
        style: {
          fontSize: "16px",
          fontWeight: "600",
          color: "#333",
        },
      },
      dataLabels: {
        enabled: true,
        style: {
          fontSize: "10px",
          fontWeight: "500",
        },
      },
      colors: ["#3b82f6", "#34d399"],
      labels: selectedData.labels,
      yaxis: [
        {
          title: {
            text: "Fees Received",
            style: {
              fontSize: "12px",
              color: "#333",
              fontWeight: "400",
            },
          },
          labels: {
            style: {
              fontSize: "10px",
              colors: "#555",
              fontWeight: "400",
            },
          },
        },
        {
          opposite: true,
          title: {
            text: "Students",
            style: {
              fontSize: "12px",
              color: "#333",
              fontWeight: "400",
            },
          },
          labels: {
            style: {
              fontSize: "10px",
              colors: "#555",
            },
          },
        },
      ],
      grid: {
        borderColor: "#e4e4e4",
        strokeDashArray: 5,
        row: {
          colors: ["#EFF7FF", "#fff"],
        },
      },
      legend: {
        position: "bottom",
        horizontalAlign: "center",
        fontSize: "12px",
        markers: {
          radius: 12,
        },
      },
    });
  }, [isMobile]);

  return (
    <Chart
      options={chartOptions}
      series={chartSeries}
      type="line"
      height={isMobile ? 300 : 350}
    />
  );
};

export default MonthlyAnalysisChart;
