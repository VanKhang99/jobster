import React from "react";
import main from "../assets/images/main.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../Components/Logo";

function Landing() {
  return (
    <Wrapper className=" container">
      <nav>
        <Logo />
      </nav>

      <section className="hero page">
        <div className="hero__left">
          <h1 className="heading--first">
            Job <span>Tracking</span> App
          </h1>
          <p className="hero__description limit-width">
            Crucifix narwhal street art asymmetrical, humblebrag tote bag pop-up
            fixie raclette taxidermy craft beer. Brunch bitters synth, VHS
            crucifix heirloom meggings bicycle rights.
          </p>
          <Link to="/register" className="button button--hero">
            Login/Register
          </Link>
        </div>
        <div className="hero__right">
          <img src={main} alt="Hero Img" className="hero__image" />
        </div>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  nav {
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }

  .hero {
    margin-top: -4.8rem;

    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    column-gap: 4.8rem;

    span {
      color: var(--primary-500);
    }

    &__description {
      color: var(--grey-600);
      font-size: 1.6rem;
      margin: 1.6rem 0 2.4rem;
    }

    img {
      width: 100%;
    }
  }

  @media only screen and (max-width: 62em) {
    .hero {
      grid-template-columns: 1fr;

      &__right {
        display: none;
      }
    }
  }
`;

export default Landing;
