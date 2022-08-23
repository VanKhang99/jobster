import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { NavLinks, Logo } from "./index";

function Sidebar() {
  const { isSidebarOpen } = useSelector((store) => store.user);

  return (
    <Wrapper className="sidebar">
      <div
        className={
          isSidebarOpen
            ? "sidebar__container sidebar--show"
            : "sidebar__container"
        }
      >
        <header>
          <Logo />
        </header>

        <NavLinks />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.aside`
  .sidebar__container {
    position: sticky;
    top: 0;

    width: 25rem;
    margin-left: -25rem;
    background-color: var(--white);
    transition: var(--transition);

    &.sidebar--show {
      margin-left: 0;
    }
  }

  header {
    display: flex;
    align-items: center;

    padding-left: 4rem;
    height: var(--nav-height);
  }

  nav {
    padding-top: 3.2rem;

    min-height: calc(100vh - var(--nav-height));
    box-shadow: 1px 0 0 0 rgba(0, 0, 0, 0.1);
  }

  @media only screen and (max-width: 62em) {
    display: none;
  }
`;

export default Sidebar;
