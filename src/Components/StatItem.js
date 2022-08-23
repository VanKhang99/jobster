import React from "react";
import styled from "styled-components";

function StatItem({ title, count, icon, color, bcg }) {
  return (
    <Wrapper className="stats__item" color={color} bcg={bcg}>
      <header>
        <span className="stats__number">{count}</span>
        <span className="stats__icon">{icon}</span>
      </header>

      <h5 className="stats__title">{title}</h5>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 3.2rem;
  background-color: var(--white);
  border-radius: var(--borderRadius);
  border-bottom: 5px solid ${(props) => props.color};

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .stats {
    &__number {
      font-size: 5rem;
      font-weight: bold;
      color: ${(props) => props.color};
    }

    &__icon {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 7rem;
      height: 6rem;
      border-radius: var(--borderRadius);
      background-color: ${(props) => props.bcg};

      svg {
        width: 3.2rem;
        height: 3.2rem;
        color: ${(props) => props.color};
      }
    }

    &__title {
      margin: 0.8rem 0 0;

      font-size: 2rem;
      font-weight: normal;
      font-family: var(--headingFont);
      line-height: 1.3;
      text-transform: capitalize;
      letter-spacing: var(--letterSpacing);
    }
  }
`;

export default StatItem;
