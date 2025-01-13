import React from "react";
import MonthlyAnalysisChart from './Charts/MonthlyAnalysisChart'

const ChartSection = () => {
  return (
    <section class="mb-3 chart">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="bg-white py-2 px-1 radius-8 light-blue-border main-chart">
              <MonthlyAnalysisChart/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChartSection;
