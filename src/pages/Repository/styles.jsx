import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: #fff;
`;

export const Container = styled.div`
  max-width: 700px;
  padding: 30px;
  margin: 80px auto;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  background-color: #fff;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 150px;
    margin: 10px 0;
    border-radius: 20%;
  }

  h1 {
    font-size: 30px;
    color: #0d2636;
  }

  p {
    text-align: center;
    line-height: 1.4;
    font-size: 14px;
    margin-top: 5px;
    max-width: 400px;
    color: #000;
  }
`;

export const BackButton = styled(Link)`
  border: none;
  outline: none;
  background-color: transparent;

  svg {
    transition: all 0.3s ease;

    &:hover {
      scale: 1.05;
    }
  }
`;

export const IssuesList = styled.ul`
  margin-top: 30px;
  padding-top: 30px;
  border-top: 1px solid #ddd;
  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;

    & + li {
      margin-top: 12px;
    }

    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid #0d2636;
    }

    div {
      flex: 1;
      margin-left: 12px;

      strong {
        font-size: 15px;

        a {
          text-decoration: none;
          color: #222;
          transition: all 0.2s ease;

          &:hover {
            color: #0071db;
          }
        }

        span {
          font-size: 12px;
          font-weight: 600;
          padding: 5px 7px;
          margin-left: 10px;
          border-radius: 4px;
          background-color: #222;
          color: #fff;
        }
      }

      p {
        font-size: 12px;
        margin-top: 10px;
        color: #000;
      }
    }
  }
`;

export const PageActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    outline: none;
    border: none;
    border-radius: 4px;
    padding: 5px 10px;
    background-color: #0d2636;
    color: #fff;
    transition: all 0.2s ease;

    &:hover {
      background-color: #1b455f;
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }
`;

export const FilterList = styled.div`
  margin: 15px 0;

  button {
    padding: 8px;
    margin: 0 3px;
    border-radius: 4px;
    border: none;
    outline: none;
    background-color: #0d2636;
    color: #fff;
    transition: all 0.2s ease;

    &:hover {
      background-color: #1b455f;
    }

    &:nth-child(${(props) => props.active + 1}) {
      background-color: #0071db;
      color: #fff;
    }
  }
`;
