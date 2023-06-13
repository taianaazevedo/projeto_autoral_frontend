import styled from "styled-components";

export const StyledMenu = styled.menu`
  background-color: #ffe195;
  width: 100%;
  max-width: 275px;
  height: 60vh;
  border-radius: 0px 0px 5px 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  animation: scale-in-ver-top 0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  @keyframes scale-in-ver-top {
  0% {
    -webkit-transform: scaleY(0);
            transform: scaleY(0);
    -webkit-transform-origin: 100% 0%;
            transform-origin: 100% 0%;
    opacity: 1;
  }
  100% {
    -webkit-transform: scaleY(1);
            transform: scaleY(1);
    -webkit-transform-origin: 100% 0%;
            transform-origin: 100% 0%;
    opacity: 1;
  }
}
  p {
    background-color: transparent;
    font-weight: 400;
    font-size: 20px;
    color: #505050;
    margin-left: 8px;
  }

`;

export const UserInfo = styled.div`
  margin-left: 5px;
  display: flex;
  align-items: center;
  width: 95%;
  height: 51px;
  background: #fff2cf;
  border-radius: 5px;
  img {
    margin-left: 5px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;

export const AllThemes = styled.div`
  margin-left: 5px;
  display: flex;
  align-items: center;
  width: 95%;
  height: 51px;
  background: #fff2cf;
  border-radius: 5px;

`

export const Songs = styled.div`
  margin-left: 5px;
  display: flex;
  align-items: center;
  width: 95%;
  height: 51px;
  background: #fff2cf;
  border-radius: 5px;

`

export const Movies = styled.div`
  margin-left: 5px;
  display: flex;
  align-items: center;
  width: 95%;
  height: 51px;
  background: #fff2cf;
  border-radius: 5px;

`

export const Series = styled.div`
  margin-left: 5px;
  display: flex;
  align-items: center;
  width: 95%;
  height: 51px;
  background: #fff2cf;
  border-radius: 5px;

`

export const Books = styled.div`
  margin-left: 5px;
  display: flex;
  align-items: center;
  width: 95%;
  height: 51px;
  background: #fff2cf;
  border-radius: 5px;

`