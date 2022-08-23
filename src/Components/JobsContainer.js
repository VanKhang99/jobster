import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { Loading, Job, PageBtnContainer } from "./index";
import { getAllJobs } from "./../features/allJobs/allJobsSlice";

function JobsContainer() {
  const dispatch = useDispatch();
  const {
    isLoading,
    jobs,
    numOfPages,
    totalJobs,
    page,
    search,
    searchStatus,
    searchType,
    sort,
  } = useSelector((store) => store.allJobs);

  useEffect(() => {
    dispatch(getAllJobs());
  }, [page, search, searchStatus, searchType, sort]);

  if (isLoading) {
    return <Loading center />;
  }

  if (!jobs.length) {
    return (
      <Wrapper>
        <h2 className="heading--second">No jobs to display...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>
        {totalJobs} job{jobs.length > 1 ? "s" : ""} found
      </h5>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  h2 {
    font-weight: normal;
    padding-top: 1.6rem;
  }

  h5 {
    margin: 0 0 2.2rem;
    font-size: 2rem;
    font-family: var(--headingFont);
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
  }

  .jobs {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1.6rem;
    row-gap: 1.6rem;

    @media only screen and (max-width: 62em) {
      grid-template-columns: 1fr;
      row-gap: 3.2rem;
    }
  }
`;

export default JobsContainer;
