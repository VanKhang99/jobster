import customFetch, { checkForUnauthorizedResponse } from "../../utils/axios";

const getAllJobsThunk = async (_, thunkAPI) => {
  const { page, search, searchStatus, searchType, sort } =
    thunkAPI.getState().allJobs;

  let url = `/jobs?status=${searchStatus}&jobType=${searchType}&sort=${sort}&page=${page}`;
  if (search) {
    url = url + `&search=${search}`;
  }

  try {
    const res = await customFetch.get(url);

    return res.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};

const showStatsThunk = async (_, thunkAPI) => {
  try {
    const res = await customFetch.get("/jobs/stats");
    return res.data;
  } catch (error) {
    thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export { getAllJobsThunk, showStatsThunk };
