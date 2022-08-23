import customFetch from "../../utils/axios";
import { logoutUser } from "./userSlice";
import { clearAllJobsState } from "../allJobs/allJobsSlice";
import { clearValues } from "../addJob/addJobSlice";
import { checkForUnauthorizedResponse } from "../../utils/axios";

const registerUserThunk = async (user, thunkAPI) => {
  try {
    const res = await customFetch.post("/auth/register", user);
    return res.data;
  } catch (error) {
    //error.response.data.msg
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

const loginUserThunk = async (user, thunkAPI) => {
  try {
    const res = await customFetch.post("/auth/login", user);
    return res.data;
  } catch (error) {
    //error.response.data.msg
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

const updateUserThunk = async (user, thunkAPI) => {
  try {
    const res = await customFetch.patch("/auth/updateUser", user);
    return res.data;
  } catch (error) {
    // console.log(error.response);
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};

const clearStoreThunk = async (message, thunkAPI) => {
  try {
    thunkAPI.dispatch(logoutUser(message));
    thunkAPI.dispatch(clearAllJobsState());
    thunkAPI.dispatch(clearValues());
    return Promise.resolve();
  } catch (error) {
    return Promise.reject();
  }
};

export { registerUserThunk, loginUserThunk, updateUserThunk, clearStoreThunk };
