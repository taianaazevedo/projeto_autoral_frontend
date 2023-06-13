import {
  StyledMenu,
  UserInfo,
  AllThemes,
  Songs,
  Series,
  Movies,
  Books,
} from "./menuStyle";
import { UserContext } from "../../contexts/userContext";
import { useContext } from "react";

export default function Menu() {
  const { user } = useContext(UserContext);

  return (
    <StyledMenu>
      <UserInfo>
        <img src={user.imgUrl} alt="user_image"/>
        <p>Meu perfil</p>
      </UserInfo>
      <AllThemes>
        <p>➜ Todos os temas</p>
      </AllThemes>
      <Songs>
        <p>➜ Temas com músicas</p>
      </Songs>
      <Series>
        <p>➜ Temas com séries</p>
      </Series>
      <Movies>
        <p>➜ Temas com filmes</p>
      </Movies>
      <Books>
        <p>➜ Temas com livros</p>
      </Books>
    </StyledMenu>
  );
}
