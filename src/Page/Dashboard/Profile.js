import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { FormRow } from "../../Components";
import { toast } from "react-toastify";
import { updateUser } from "../../features/user/userSlice";
import Wrapper from "./FormCSS";

function Profile() {
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((store) => store.user);

  const initialState = {
    name: user?.name || "",
    lastName: user?.lastName || "",
    location: user?.location || "",
    email: user?.email || "",
  };

  const [userData, setUserData] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, lastName, location, name } = userData;

    if (!email || !lastName || !location || !name) {
      toast.error("Please fill out all fields!");
      return;
    }

    dispatch(updateUser(userData));
  };

  const handleInputProfileForm = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3 className="heading--third">Profile</h3>

        <div className="form__content">
          <FormRow
            type="text"
            id="name"
            value={userData.name}
            name="name"
            labelText="name"
            handleChange={handleInputProfileForm}
          />

          <FormRow
            type="text"
            id="lastName"
            value={userData.lastName}
            name="lastName"
            labelText="last name"
            handleChange={handleInputProfileForm}
          />

          <FormRow
            type="email"
            id="email"
            value={userData.email}
            name="email"
            labelText="email"
            handleChange={handleInputProfileForm}
          />

          <FormRow
            type="text"
            id="location"
            value={userData.location}
            name="location"
            labelText="location"
            handleChange={handleInputProfileForm}
          />

          <button
            type="submit"
            className="button button--full"
            disabled={isLoading}
          >
            {isLoading ? "Please wait..." : " Save changes"}
          </button>
        </div>
      </form>
    </Wrapper>
  );
}

export default Profile;
