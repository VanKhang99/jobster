import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "../Components/Logo";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { FormRow } from "../Components";
import { loginUser, registerUser } from "../features/user/userSlice";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

function Register() {
  const dispatch = useDispatch();
  const { isLoading, user } = useSelector((store) => store.user);
  const [values, setValues] = useState(initialState);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, password, isMember } = values;

    if (!email || !password || (!isMember && !name)) {
      toast.error("Please fill out all fields!");
      return;
    }

    if (isMember) {
      dispatch(loginUser({ email: email, password: password }));
      return;
    }

    dispatch(registerUser({ name, email, password }));
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const toggleMember = (e) => {
    e.preventDefault();
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleLogInDemo = () => {
    dispatch(loginUser({ email: "testUser@test.com", password: "secret" }));
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [user, navigate]);

  return (
    <Wrapper className="page-full">
      <form className="form" onSubmit={handleSubmit}>
        <Logo />

        <h3 className="heading--third">
          {values.isMember ? "Login" : "Register"}
        </h3>

        {!values.isMember && (
          <FormRow
            type="text"
            id="name"
            value={values.name}
            name="name"
            labelText="name"
            handleChange={handleChange}
          />
        )}

        <FormRow
          type="email"
          id="email"
          value={values.email}
          name="email"
          labelText="email"
          handleChange={handleChange}
        />
        <FormRow
          type="password"
          id="password"
          value={values.password}
          name="password"
          labelText="password"
          handleChange={handleChange}
        />

        <button
          type="submit"
          className="button button--full form__button"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Submit"}
        </button>
        <button
          type="button"
          className="button button--full form__button form__button--demo"
          disabled={isLoading}
          onClick={handleLogInDemo}
        >
          {isLoading ? "Loading..." : " Demo App"}
        </button>

        <p>
          {values.isMember ? "Not a member yet?" : "Already a member?"}
          <button className="button--member" onClick={toggleMember}>
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  align-items: center;
  justify-items: center;

  .form {
    width: var(--fluid-width);
    max-width: 40rem;
    padding: 3.2rem 4rem;
    border-top: 5px solid var(--primary-500);
    background-color: var(--white);
    border-radius: var(--borderRadius);
    box-shadow: var(--shadow-2);
    transition: var(--transition);

    &:hover {
      box-shadow: var(--shadow-4);
    }

    img {
      margin: 0 auto 2.2rem;
    }

    h3 {
      text-align: center;
      font-weight: 400;
      margin: 0 auto 2.2rem;
    }

    &__button {
      height: 3.6rem;
    }

    &__button--demo {
      background-color: var(--primary-200);
      color: var(--primary-500);

      &:hover {
        background-color: var(--primary-700);
        color: var(--primary-200);
      }
    }

    p {
      text-align: center;
      margin: 1.6rem 0 0;
      font-size: 1.6rem;
    }
  }
`;

export default Register;
