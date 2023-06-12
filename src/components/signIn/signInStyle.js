import styled from "styled-components";

export const StyledSignIn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .link-sign-up {
    margin-top: 30px;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 16px;
    text-align: center;
    color: #382f2f;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
  .p1 {
    font-family: "Gochi Hand";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    text-align: center;
    color: #e85a0b;
  }
  .p2 {
    font-family: "Gochi Hand";
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 20px;
    text-align: center;
    color: #768420;
  }
  img {
    width: 107px;
    height: 100px;
  }

  .scale-in-center {
    animation: scale-in-center 1s;
  }
  @keyframes scale-in-center {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 1;
    }
  }
`;
