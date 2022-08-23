import React from "react";
import styled from "styled-components";
import moment from "moment";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { JobContentInfo } from "./index";
import { setEditJob, deleteJob } from "../features/addJob/addJobSlice";

function Job({
  _id,
  position,
  company,
  jobLocation,
  jobType,
  createdAt,
  status,
}) {
  const dispatch = useDispatch();

  const handleEditJob = () => {
    dispatch(
      setEditJob({
        editJobId: _id,
        position,
        company,
        jobLocation,
        jobType,
        status,
      })
    );
  };

  const handleDeleteJob = () => {
    dispatch(deleteJob(_id));
  };

  return (
    <Wrapper className="job">
      <header className="header">
        <div className="header__logo">{company[0]}</div>
        <div className="header__info">
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>

      <div className="content">
        <div className="content__body">
          <JobContentInfo icon={<FaLocationArrow />} text={jobLocation} />
          <JobContentInfo
            icon={<FaBriefcase />}
            text={moment(createdAt).format("MMM Do, YYYY")}
          />
          <JobContentInfo icon={<FaCalendarAlt />} text={jobType} />
          <div className={`content__status ${status}`}>{status}</div>
        </div>

        <footer className="content__footer">
          <Link
            to="/add-job"
            className="content__button button--edit"
            onClick={handleEditJob}
          >
            Edit
          </Link>
          <button
            className="content__button button--delete"
            onClick={handleDeleteJob}
          >
            Delete
          </button>
        </footer>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border-radius: var(--borderRadius);
  background-color: var(--white);
  box-shadow: var(--shadow-2);

  display: grid;
  grid-template-rows: 1fr auto;

  .header {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;

    padding: 1.6rem 2.4rem;
    border-bottom: 1px solid var(--grey-100);

    &__logo {
      display: flex;
      align-items: center;
      justify-content: center;

      margin-right: 3.2rem;
      width: 6rem;
      height: 6rem;
      font-size: 2.4rem;
      font-weight: bold;
      color: var(--white);
      text-transform: uppercase;
      border-radius: var(--borderRadius);
      background-color: var(--primary-500);
    }

    &__info {
      text-transform: capitalize;

      h5 {
        margin: 0 0 4px 0;
        font-size: 2rem;
        font-weight: normal;
        line-height: 1.3;
      }

      p {
        font-size: 1.6rem;
        margin: 0px;
        color: var(--grey-400);
        letter-spacing: var(--letterSpacing);
      }
    }
  }

  .content {
    padding: 1.6rem 2.4rem;

    &__body {
      display: grid;
      align-items: center;
      grid-template-columns: 1fr 1fr;
      row-gap: 0.8rem;

      @media only screen and (max-width: 70em) {
        grid-template-columns: 1fr;
      }
    }

    &__status {
      margin-top: 0.8rem;
      width: 10rem;
      height: 3rem;
      font-size: 1.6rem;
      text-transform: capitalize;
      border-radius: var(--borderRadius);
      letter-spacing: var(--letterSpacing);

      display: flex;
      align-items: center;
      justify-content: center;

      &.interview {
        background-color: #e0e8f9;
        color: #647acb;
      }

      &.pending {
        background-color: #fcefc7;
        color: #e9b949;
      }

      &.declined {
        background-color: #ffeeee;
        color: #d66a6a;
      }
    }

    &__footer {
      margin-top: 1.6rem;

      display: flex;
      align-items: center;
    }

    &__button {
      padding: 0.6rem 1.2rem;
      font-size: 1.6rem;
      height: 3rem;
      border: none;
      border-radius: var(--borderRadius);
      letter-spacing: var(--letterSpacing);
      box-shadow: var(--shadow-2);
      transition: var(--transition);

      &:hover {
        box-shadow: var(--shadow-3);
        cursor: pointer;
      }
    }
  }
`;

export default Job;
