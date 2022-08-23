import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FormRow, FormSelect } from "../../Components";
import { toast } from "react-toastify";
import Wrapper from "./FormCSS";
import {
  handleChange,
  clearValues,
  createJob,
  editJob,
} from "../../features/addJob/addJobSlice";

function AddJob() {
  const dispatch = useDispatch();
  const {
    isLoading,
    position,
    company,
    jobLocation,
    status,
    statusOptions,
    jobType,
    jobTypeOptions,
    isEditing,
    editJobId,
  } = useSelector((store) => store.addJob);
  const { user } = useSelector((store) => store.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!position || !company || !jobLocation) {
      toast.error("Please fill out all fields!");
      return;
    }

    if (isEditing) {
      return dispatch(
        editJob({
          jobId: editJobId,
          job: {
            position,
            company,
            jobLocation,
            status,
            jobType,
          },
        })
      );
    }

    dispatch(createJob({ position, company, jobLocation, jobType, status }));
  };

  const handleChangeAddJobForm = (e) => {
    const { value, name } = e.target;
    dispatch(handleChange({ name, value }));
  };

  const handleClearValues = () => {
    dispatch(clearValues());
  };

  useEffect(() => {
    if (!isEditing) {
      dispatch(handleChange({ name: "jobLocation", value: user.location }));
    }
  }, []);

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3 className="heading--third">{isEditing ? "Edit Job" : "Add Job"}</h3>

        <div className="form__content">
          <FormRow
            type="text"
            id="position"
            value={position}
            name="position"
            labelText="position"
            handleChange={handleChangeAddJobForm}
          />

          <FormRow
            type="text"
            id="company"
            value={company}
            name="company"
            labelText="company"
            handleChange={handleChangeAddJobForm}
          />

          <FormRow
            type="text"
            id="job-location"
            value={jobLocation}
            name="jobLocation"
            labelText="job location"
            handleChange={handleChangeAddJobForm}
          />

          <FormSelect
            id="status"
            name="status"
            value={status}
            labelText="status"
            options={statusOptions}
            handleChange={handleChangeAddJobForm}
          />

          <FormSelect
            id="job-type"
            name="jobType"
            value={jobType}
            labelText="job type"
            options={jobTypeOptions}
            handleChange={handleChangeAddJobForm}
          />

          <div className="form__buttons">
            <button
              type="button"
              className="button form__buttons-clear"
              onClick={handleClearValues}
            >
              Clear
            </button>

            <button
              type="submit"
              className="button form__buttons-submit"
              disabled={isLoading}
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
}

export default AddJob;
