import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { FaTimes } from "react-icons/fa";
import { NavLinks, Logo } from "./index";
import { toggleSidebar } from "../features/user/userSlice";

function MobileSidebar() {
  const { isSidebarOpen } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleHideMobileSidebar = (e) => {
    if (
      e.target.classList.contains("m-sidebar__container") ||
      e.target.closest(".sidebar__link") ||
      e.target.closest(".m-sidebar__button")
    ) {
      return dispatch(toggleSidebar());
    }
  };

  return (
    <Wrapper className="m-sidebar">
      <div
        className={
          isSidebarOpen
            ? "m-sidebar__container"
            : "m-sidebar__container  m-sidebar--show"
        }
        onClick={handleHideMobileSidebar}
      >
        <div className="m-sidebar__content">
          <button className="button--close m-sidebar__button">
            <FaTimes />
          </button>

          <header>
            <Logo />
          </header>

          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.aside`
  display: none;

  .m-sidebar__container {
    position: fixed;

    width: 100%;
    min-height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    opacity: 0;
    visibility: hidden;
    transition: var(--transition);

    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
  }

  .m-sidebar--show {
    opacity: 1;
    visibility: visible;
  }

  .m-sidebar__content {
    position: relative;

    width: var(--fluid-width);
    /* height: 95vh; */
    padding: 6.4rem 3.2rem;
    background-color: var(--white);
    border-radius: var(--borderRadius);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  .m-sidebar__button {
    position: absolute;
    top: 1rem;
    right: 1rem;

    svg {
      width: 3.2rem;
      height: 3.2rem;
    }
  }

  .sidebar__list {
    padding-top: 4rem;

    & .sidebar__link {
      padding: 1.6rem 0;

      &:hover {
        background-color: unset;
        color: var(--grey-900);
        padding-left: 0;
      }
    }
  }

  @media only screen and (max-width: 62em) {
    display: block;
  }
`;

export default MobileSidebar;
