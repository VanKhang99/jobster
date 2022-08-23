import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { BarChartComponent, AreaChartComponent } from "./index";

function ChartContainer() {
  const [barChart, setBarChart] = useState(true);
  const { monthlyApplications: dataChart } = useSelector(
    (store) => store.allJobs
  );

  const handleTypeChart = () => {
    setBarChart(!barChart);
  };

  return (
    <Wrapper className="chart">
      <div className="chart__content">
        <h4 className="heading--fourth">Monthly Applications</h4>
        <button className="chart__type" onClick={handleTypeChart}>
          {barChart ? "Bar Chart" : "Area Chart"}
        </button>

        {barChart ? (
          <AreaChartComponent data={dataChart} />
        ) : (
          <BarChartComponent data={dataChart} />
        )}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin-top: 6.4rem;
  font-size: 1.6rem;

  .chart__content {
    text-align: center;

    h4 {
      font-weight: normal;
      margin-bottom: 1.2rem;
    }

    button {
      font-size: 2rem;
      color: var(--primary-500);
      text-transform: capitalize;
      border-color: transparent;
      background-color: unset;
      cursor: pointer;
    }
  }
`;

export default ChartContainer;
