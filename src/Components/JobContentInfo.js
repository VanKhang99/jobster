import React from "react";
import styled from "styled-components";

const JobContentInfo = ({ icon, text }) => {
  return (
    <Wrapper className="content__info">
      <span className="content__icon">{icon}</span>
      <span className="content__text">{text}</span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  margin-top: 0.8rem;

  .content {
    &__icon {
      display: flex;
      align-items: center;
      margin-right: 1.6rem;

      svg {
        width: 1.6rem;
        height: 1.6rem;
        color: var(--grey-400);
      }
    }

    &__text {
      font-size: 1.6rem;
      text-transform: capitalize;
      letter-spacing: var(--letterSpacing);
    }
  }
`;

export default JobContentInfo;
