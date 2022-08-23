import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { FormRow, FormSelect } from "./index";
import { handleChange, clearValues } from "../features/allJobs/allJobsSlice";
import Wrapper from "../Page/Dashboard/FormCSS";

function SearchContainer() {
  const dispatch = useDispatch();
  const { search, searchStatus, searchType, sort, sortOptions, isLoading } =
    useSelector((store) => store.allJobs);
  const { statusOptions, jobTypeOptions } = useSelector(
    (store) => store.addJob
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(clearValues());
  };

  const handleChangeAllJobsForm = (e) => {
    const { name, value } = e.target;
    if (isLoading) return;
    dispatch(handleChange({ name, value }));
  };

  return (
    <Wrapper>
      <form className="form form--all-jobs" onSubmit={handleSubmit}>
        <h4 className="heading--fourth">Search Form</h4>

        <div className="form__content">
          <FormRow
            type="text"
            id="search"
            value={search}
            name="search"
            labelText="search"
            handleChange={handleChangeAllJobsForm}
          />

          <FormSelect
            id="status"
            value={searchStatus}
            name="searchStatus"
            labelText="status"
            options={["all", ...statusOptions]}
            handleChange={handleChangeAllJobsForm}
          />

          <FormSelect
            id="type"
            value={searchType}
            name="searchType"
            labelText="type"
            options={["all", ...jobTypeOptions]}
            handleChange={handleChangeAllJobsForm}
          />

          <FormSelect
            id="sort"
            value={sort}
            name="sort"
            labelText="sort"
            options={sortOptions}
            handleChange={handleChangeAllJobsForm}
          />

          <button
            className="button button-full form__buttons-clear-filters"
            disabled={isLoading}
          >
            Clear Filters
          </button>
        </div>
      </form>
    </Wrapper>
  );
}

export default SearchContainer;
