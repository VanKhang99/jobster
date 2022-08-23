import React, { useState } from "react";
import styled from "styled-components";
import { Logo } from "../Components";
import { toggleSidebar, clearStore } from "../features/user/userSlice";

import { useDispatch, useSelector } from "react-redux";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";

function Navbar() {
  const [showLogoutButton, setShowLogoutButton] = useState(false);
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  const handleShowDropdown = () => {
    setShowLogoutButton(!showLogoutButton);
  };

  return (
    <Wrapper className="navbar">
      <div className="navbar__center">
        <button
          className="navbar__toggle button--toggle"
          onClick={handleToggleSidebar}
        >
          <FaAlignLeft />
        </button>

        <h3 className="heading--third">Dashboard</h3>
        <Logo />

        <div className="logout">
          <button
            className="button logout__button"
            onClick={handleShowDropdown}
          >
            <FaUserCircle />
            <span className="logout__username">{user?.name}</span>
            <FaCaretDown />
          </button>

          <div
            className={
              showLogoutButton
                ? "logout__dropdown logout__dropdown--show"
                : "logout__dropdown"
            }
          >
            <button
              className="button--dropdown"
              onClick={() => dispatch(clearStore("Logout successful..."))}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  grid-column: 2 / -1;
  position: sticky;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 9.6rem;
  background-color: var(--white);
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
  transition: var(--transition);

  .navbar__center {
    width: 90%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
      margin-bottom: 0;
      font-weight: normal;
    }

    img {
      display: none;
    }
  }

  .navbar__toggle svg {
    width: 2.8rem;
    height: 2.8rem;
    cursor: pointer;
  }

  .logout {
    position: relative;

    &__button {
      padding: 0.6rem 1.2rem;
      font-size: 1.6rem;
      line-height: 1.15;
      color: var(--white);
      border: none;

      display: flex;
      align-items: center;
      gap: 0.8rem;

      svg {
        width: 1.6rem;
        height: 1.6rem;
      }
    }

    &__dropdown {
      position: absolute;
      top: 4rem;
      left: 0;
      width: 100%;

      font-size: 1.6rem;
      padding: 0.8rem;
      box-shadow: var(--shadow-2);
      border-radius: var(--borderRadius);
      background-color: var(--primary-100);

      visibility: hidden;
      opacity: 0;
      transition: var(--transition);
      cursor: pointer;
    }

    &__dropdown--show {
      opacity: 1;
      visibility: visible;
    }
  }

  @media only screen and (max-width: 62em) {
    .navbar__center {
      width: 90vw;

      h3 {
        display: none;
      }

      img {
        display: block;
        width: 10.8rem;
      }
    }
  }
`;

export default Navbar;
