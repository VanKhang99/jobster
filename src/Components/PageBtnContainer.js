import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { changePage } from "../features/allJobs/allJobsSlice";

function PageBtnContainer() {
  const dispatch = useDispatch();
  const { numOfPages, page } = useSelector((store) => store.allJobs);

  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });

  const handleNextPage = () => {
    let newPage = page + 1;
    if (newPage > numOfPages) {
      newPage = 1;
    }
    dispatch(changePage(newPage));
  };

  const handlePrevPage = () => {
    let newPage = page - 1;
    if (newPage < 1) {
      newPage = numOfPages;
    }
    dispatch(changePage(newPage));
  };

  return (
    <Wrapper className="paginate">
      <button className="button paginate__prev" onClick={handlePrevPage}>
        <HiChevronDoubleLeft />
        Prev
      </button>
      <div className="paginate__buttons">
        {pages.map((pageNumber) => {
          return (
            <button
              key={pageNumber}
              className={
                pageNumber === page
                  ? "button paginate__button paginate__button--active"
                  : "button paginate__button"
              }
              onClick={() => dispatch(changePage(pageNumber))}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>
      <button className="button paginate__next" onClick={handleNextPage}>
        Next
        <HiChevronDoubleRight />
      </button>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 1.6rem;

  height: 9.6rem;
  margin-top: 3.2rem;

  .paginate__prev,
  .paginate__next {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;

    width: 10rem;
    height: 4rem;
    font-size: 1.6rem;
    color: var(--primary-500);
    background-color: var(--white);
    box-shadow: unset;

    &:hover {
      color: var(--white);
      background-color: var(--primary-500);
    }
  }

  .paginate__buttons {
    border-radius: var(--borderRadius);
    background-color: var(--primary-100);
  }

  .paginate__button {
    width: 5rem;
    height: 4rem;
    font-weight: 700;
    font-size: 2rem;
    color: var(--primary-500);
    box-shadow: unset;
    background-color: transparent;
  }

  .paginate__button.paginate__button--active {
    background-color: var(--primary-500);
    color: var(--white);
  }
`;

export default PageBtnContainer;
