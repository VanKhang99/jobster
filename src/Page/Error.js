import React from "react";
import styled from "styled-components";
import errorImage from "../assets/images/not-found.svg";
import { Link } from "react-router-dom";

function Error() {
  return (
    <Wrapper className="error page-full">
      <img src={errorImage} alt="Error" />
      <h3 className="heading--third">Ohh! Page Not Found</h3>
      <p>We can't seem to find the page you're looking for</p>
      <Link to="/" className="error__button">
        Back Home
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-size: 1.6rem;
  text-align: center;

  img {
    width: 90vw;
    max-width: 60rem;
    margin-bottom: 3.2rem;
  }

  h3 {
    margin-bottom: 0.8rem;
    font-weight: 400;
  }

  p {
    margin: 0 0 0.8rem;
    color: var(--grey-500);
  }

  .error__button {
    text-decoration: underline;
    color: var(--primary-500);
    letter-spacing: var(--letterSpacing);
    text-transform: capitalize;
  }
`;

export default Error;
