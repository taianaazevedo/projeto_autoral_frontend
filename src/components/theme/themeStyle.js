import styled from "styled-components";

export const StyledTheme = styled.article`
  background-color: white;
  width: 50%;
  height: auto;
  margin: 35px auto;
  border-radius: 10px;
  border: 1px solid #f2f091;
  p {
    font-weight: bold;
    margin-left: 10px;
    margin-right: 10px;
    background-color: transparent;
    padding-top: 1rem;
    font-size: 1.2rem;
    text-align: center;
    color: #505050;
    padding-bottom: 10px;
  }
  .user-info {
    background-color: transparent;
    display: flex;
    align-items: center;
    padding-top: 10px;
    margin-left: 10px;
    img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
  h1 {
    background-color: transparent;
    font-weight: 700;
    padding-top: 10px;
    font-size: 1.1rem;
    margin-left: 10px;
    color: #768420;
  }
}
  .see-more {
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-left: auto;
    margin-right: 15px;
    padding-bottom: 10px;
    .link-to {
      background-color: transparent;
      font-size: 15px;
      font-weight: 400;
      color: #f0690e;
      text-decoration: none;
    }
    .link-to:hover{
      color: #768420;
    }
  }

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
  }

  @media (max-width: 480px) {
    width: 90%;
    height: auto;
    margin: 30px auto;
  }
`;
