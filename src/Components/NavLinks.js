import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import links from "../utils/links";

function NavLinks() {
  return (
    <Wrapper>
      <ul className="sidebar__list">
        {links.map((link) => {
          const { id, path, text, icon } = link;

          return (
            <li key={id} className="sidebar__item">
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? "sidebar__link sidebar__link--active"
                    : "sidebar__link"
                }
              >
                <span className="sidebar__link-icon">{icon}</span>
                {text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  .sidebar {
    &__link {
      display: flex;
      align-items: center;

      padding: 1.6rem 0 1.6rem 4rem;
      font-size: 1.6rem;
      line-height: 1.5;
      color: var(--grey-500);
      text-transform: capitalize;
      letter-spacing: var(--letterSpacing);
      transition: var(--transition);

      &:hover {
        background-color: var(--grey-50);
        color: var(--grey-900);
        padding-left: 4.8rem;
      }

      &:hover svg {
        color: var(--primary-500);
      }
    }

    &__link-icon {
      margin-right: 1.6rem;

      svg {
        display: flex;
        align-items: center;
        width: 2.4rem;
        height: 2.4rem;
      }
    }

    &__link--active {
      color: var(--grey-900);

      svg {
        color: var(--primary-500);
      }
    }
  }
`;

export default NavLinks;
