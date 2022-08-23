import styled from "styled-components";

const Wrapper = styled.section`
  margin: 0 auto;
  background-color: var(--white);
  border-radius: var(--borderRadius);
  box-shadow: var(--shadow-2);

  .form {
    padding: 4.8rem 3.2rem 6.4rem;

    h3,
    h4 {
      font-weight: normal;
      margin-bottom: 2.2rem;
    }

    &__content {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      align-items: center;
      column-gap: 1.6rem;
      row-gap: 1.2rem;
    }

    &__row {
      margin-bottom: 0;
    }

    button {
      margin-top: 0;
      align-self: end;
      height: 3.6rem;
    }

    &__buttons {
      font-size: 1.6rem;

      align-self: end;
      display: grid;
      align-items: center;
      grid-template-columns: 1fr 1fr;
      column-gap: 1.6rem;

      &-clear {
        background-color: var(--grey-500);
        color: var(--white);

        &:hover {
          background-color: var(--black);
        }
      }

      &-submit {
        color: var(--white);
      }

      &-clear-filters {
        font-size: 1.6rem;
        color: var(--red-dark);
        background-color: var(--red-light);

        &:hover {
          background-color: var(--red-dark);
          color: var(--white);
        }
      }
    }
  }

  .form.form--all-jobs {
    padding: 3.2rem 4rem;
    margin: 4.8rem 0;
    transition: var(--transition);

    &:hover {
      box-shadow: var(--shadow-4);
    }

    .form__content {
      column-gap: 3.2rem;

      @media only screen and (max-width: 70em) {
        grid-template-columns: repeat(3, 1fr);
      }

      @media only screen and (max-width: 62em) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media only screen and (max-width: 48em) {
        grid-template-columns: 1fr;
      }
    }
  }

  @media only screen and (max-width: 70em) {
    .form__content {
      grid-template-columns: repeat(2, 1fr);
      row-gap: 2rem;

      button {
        margin-top: 1.6rem;
      }
    }
  }

  @media only screen and (max-width: 62em) {
    .form__content {
      grid-template-columns: 1fr;
      row-gap: 2rem;

      button {
        margin-top: 1.6rem;
      }
    }
  }
`;

export default Wrapper;
