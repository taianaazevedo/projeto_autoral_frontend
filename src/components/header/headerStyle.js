import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  background-color: #f7b54a;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  input {
    color: #404040;
    font-size: 14px;
    width: 50%;
    height: 30px;
    border: none;
    border-radius: 5px;
  }
  input:focus {
    outline: none;
  }
`;
