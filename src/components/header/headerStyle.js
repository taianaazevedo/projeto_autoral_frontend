import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  background: rgb(255, 169, 82);
  background: linear-gradient(
    90deg,
    rgba(255, 169, 82, 1) 0%,
    rgba(255, 245, 146, 1) 50%,
    rgba(182, 212, 89, 1) 100%
  );
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  input {
    color: #404040;
    font-size: 14px;
    font-weight: 700;
    width: 50%;
    height: 30px;
    border: none;
    border-radius: 5px;
  }
  input:focus {
    outline: none;
    background-color: transparent;
  }
`;
