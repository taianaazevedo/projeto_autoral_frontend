import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../contexts/userContext";
import styled from "styled-components";
import { StyledFavorite } from "./favoriteStyle";
import BackToHome from "../backToHome/buttonToHome";
import { getFavorite } from "../../services/themeApi";
import FavoriteBox from "./favoriteBox";

export default function FavoritePage() {
  const { user } = useContext(UserContext);
  const [favorites, setFavorites] = useState([]);

  async function getFavorites() {
    try {
      const favorites = await getFavorite(user.token);
      setFavorites(favorites);
      console.log(favorites);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <>
      <StyledFavorite>
        <h1>Meus temas favoritos</h1>
        {favorites?.length > 0 ? (
          <FavoriteBox favorites={favorites} />
        ) : (
          <Alert>Você ainda não salvou nenhum tema.</Alert>
        )}
      </StyledFavorite>
      <BackToHome />
    </>
  );
}

const Alert = styled.p`
  font-weight: bold;
  margin-left: 10px;
  margin-right: 10px;
  background-color: transparent;
  padding-top: 5rem;
  font-size: 1.2rem;
  text-align: center;
  color: #505050;
`;
