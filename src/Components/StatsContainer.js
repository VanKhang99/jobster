import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import StatItem from "./StatItem";
import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from "react-icons/fa";

function StatsContainer() {
  const {
    stats: { pending, interview, declined },
  } = useSelector((store) => store.allJobs);

  const defaultStatsData = [
    {
      title: "pending applications",
      count: pending || 0,
      icon: <FaSuitcaseRolling />,
      color: "#e9b949",
      bcg: "#fcefc7",
    },
    {
      title: "interviews scheduled",
      count: interview || 0,
      icon: <FaCalendarCheck />,
      color: "#647acb",
      bcg: "#e0e8f9",
    },
    {
      title: "jobs declined",
      count: declined || 0,
      icon: <FaBug />,
      color: "#d66a6a",
      bcg: "#ffeeee",
    },
  ];

  return (
    <Wrapper className="stats">
      <div className="stats__content">
        {defaultStatsData.map((item, index) => {
          return <StatItem key={index} {...item} />;
        })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .stats__content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 1.6rem;

    @media only screen and (max-width: 70em) {
      grid-template-columns: repeat(2, 1fr);
      row-gap: 3.2rem;
    }

    @media only screen and (max-width: 48em) {
      grid-template-columns: 1fr;
      row-gap: 3.2rem;
    }
  }
`;
export default StatsContainer;
