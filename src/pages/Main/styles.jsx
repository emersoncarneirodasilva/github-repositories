import { styled, keyframes, css } from "styled-components";

export const Container = styled.div`
  max-width: 700px;
  padding: 30px;
  margin: 80px auto;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  background-color: #fff;

  h1 {
    display: flex;
    align-items: center;
    font-size: 20px;

    svg {
      margin-right: 10px;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  margin-top: 30px;

  input {
    flex: 1;
    font-size: 17px;
    padding: 10px 15px;
    border-radius: 4px;
    border: 1px solid ${(props) => (props.error ? "#ff0000" : "#ddd")};
  }
`;

// Creating button animation
const animate = keyframes`
  from {
    transform: rotate(0deg)
  } to {
    transform: rotate(360deg)
  }
`;

export const SubmitButton = styled.button.attrs((props) => ({
  type: "submit",
  disabled: props.loading,
}))`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 15px;
  margin-left: 10px;
  border: 0;
  border-radius: 4px;
  background-color: #0d2636;
  transition: all 0.3s ease;

  &:hover {
    background-color: #1c5070;
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }

  ${(props) =>
    props.loading &&
    css`
      svg {
        animation: ${animate} 2s linear infinite;
      }
    `}
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 20px;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0;

    & + li {
      border-top: 1px solid #ddd;
    }

    a {
      text-decoration: none;
      color: #0d2636;
      transition: all 0.3s ease;

      &:hover {
        color: #0071db;
        scale: 1.07;
      }
    }
  }
`;

export const DeleteButton = styled.button.attrs({ type: "button" })`
  padding: 8px 7px;
  border: none;
  border-radius: 4px;
  outline: none;
  background-color: transparent;
  color: #0d2636;
  transition: all 0.2s ease;

  &:hover {
    color: #ee2d2d;
    scale: 1.1;
  }
`;
