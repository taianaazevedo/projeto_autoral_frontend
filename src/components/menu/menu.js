import { StyledMenu, UserInfo, PostTheme, Favorites } from "./menuStyle";
import { UserContext } from "../../contexts/userContext";
import { useContext } from "react";

export default function Menu() {
  const { user } = useContext(UserContext);

  return (
    <StyledMenu>
      <UserInfo>
        <img src={user.imgUrl} alt="user_image" />
        <p>Meu perfil</p>
      </UserInfo>
      <Favorites>
        <p>• Meus favoritos</p>
      </Favorites>
      <PostTheme>
        <p>• Postar um tema</p>
      </PostTheme>
    </StyledMenu>
  );
}
