import React from "react";
import MonthlyAnalysisChart from './Charts/MonthlyAnalysisChart'

const ChartSection = () => {
  return (
    <section className="mb-3 chart">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="bg-white py-2 px-1 radius-8 light-blue-border main-chart">
              <MonthlyAnalysisChart/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChartSection;
