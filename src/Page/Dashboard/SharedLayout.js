import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Sidebar, MobileSidebar } from "../../Components";
import styled from "styled-components";

function SharedLayout() {
  return (
    <Wrapper className="dashboard">
      <Sidebar />
      <MobileSidebar />
      <div>
        <Navbar />
        <div className="dashboard-page">
          <Outlet />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: auto 1fr;

  .dashboard-page {
    width: 90%;
    margin: 0 auto;
    padding: 3.2rem 0;
  }

  @media only screen and (max-width: 62em) {
    grid-template-columns: 1fr;

    .dashboard-page {
      width: 90vw;
    }
  }
`;

export default SharedLayout;
