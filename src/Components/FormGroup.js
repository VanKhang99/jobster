import React from "react";
import styled from "styled-components";

function FormRow({ type, id, name, value, handleChange, labelText }) {
  return (
    <Wrapper className="form__row">
      <label htmlFor={id} className="form__label">
        {labelText}
      </label>

      <input
        type={type}
        id={id}
        value={value}
        name={name}
        className="form__input"
        onChange={handleChange}
      />
    </Wrapper>
  );
}

function FormSelect({ id, name, value, labelText, handleChange, options }) {
  return (
    <Wrapper className="form__row">
      <label htmlFor={id} className="form__label">
        {labelText}
      </label>

      <select
        name={name}
        id={id}
        value={value}
        className="form__select"
        onChange={handleChange}
      >
        {options.map((option, index) => {
          return (
            <option key={index} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-bottom: 1.6rem;

  .form__label {
    display: block;

    margin-bottom: 0.8rem;
    font-size: 1.6rem;
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
  }

  .form__input,
  .form__select {
    padding: 0.6rem 1.2rem;
    font-size: 1.6rem;
    width: 100%;
    height: var(--input-height);
    border-radius: var(--borderRadius);
    border: 1px solid var(--grey-200);
    background-color: var(--backgroundColor);
  }
`;

export { FormRow, FormSelect };
