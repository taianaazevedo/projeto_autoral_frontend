import styled from "styled-components";

export const StyledPage = styled.div`
  width: 100%;
  height: 100%;
  .container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 100px;
    .text {
      width: 40%;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      p {
        margin-top: 15px;
        line-height: 35px;
        text-align: justify;
        font-size: 20px;
        color: #5d5d5d;
      }
      h1 {
        font-family: "Gochi Hand";
        font-size: 35px;
        text-align: left;
        line-height: 45px;
        color: #5d5d5d;
        text-align: center;
      }
      @media (max-width: 768px) {
        width: 90%;
      }
    }
    .images {
      display: flex;
      flex-direction: column;
      width: 20%;
      @media (max-width: 768px) {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-top: 20px;
        width: 50%;
      }
    }
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      margin-left: 15px;
      margin-right: 15px;
    }
  }
  .header {
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: rgb(255, 169, 82);
    background: linear-gradient(
      90deg,
      rgba(255, 169, 82, 1) 0%,
      rgba(255, 245, 146, 1) 50%,
      rgba(182, 212, 89, 1) 100%
    );
    width: 100%;
    height: 50px;
    .buttons {
      width: 20%;
      display: flex;
      justify-content: space-evenly;
      background-color: transparent;
      span {
        background-color: transparent;
        font-size: 18px;
        cursor: pointer;
        color: #5d5d5d;
        font-weight: 700;
      }
      span:hover {
        color: white;
        text-decoration: underline;
      }
      @media (max-width: 768px) {
        width: 90%;
        display: flex;
        justify-content: space-evenly;
      }
    }
    .name {
      display: flex;
      background-color: transparent;
      .p1 {
        background-color: transparent;
        font-family: "Gochi Hand";
        font-weight: 400;
        font-size: 1.75em;
        color: #e85a0b;
      }
      .p2 {
        background-color: transparent;
        margin-left: 6px;
        font-family: "Gochi Hand";
        font-weight: 400;
        font-size: 1.75em;
        color: #768420;
      }
    }
    .link {
      text-decoration: none;
      background-color: transparent;
    }
    @media (max-width: 768px) {
      .name {
        display: none;
      }
    }
  }
`;
