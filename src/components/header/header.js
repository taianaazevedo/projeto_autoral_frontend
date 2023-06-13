import { useContext, useEffect, useState } from "react";
import { HeaderContainer } from "./headerStyle";
import { AiOutlineMenu } from "react-icons/ai";
import { RxExit } from "react-icons/rx";
import Menu from "../menu/menu";
import { UserContext } from "../../contexts/userContext";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const { setUser } = useContext(UserContext);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  function handleMenu() {
    setShowMenu(!showMenu);
  }

  function logout() {
    setUser({});
    localStorage.removeItem("user");
    navigate("/");
  }

  useEffect(() => {
    const token = localStorage.getItem("user");
    if (!token) {
      navigate("/");
    }
  });

  return (
    <>
      <HeaderContainer>
        <AiOutlineMenu
          style={{ color: "white", margin: "15px", cursor: "pointer" }}
          size={30}
          onClick={handleMenu}
        />
        <input type="text" placeholder="Pesquise o tema por palavra-chave" />
        <RxExit
          style={{ color: "white", margin: "15px", cursor: "pointer" }}
          size={30}
          onClick={logout}
        />
      </HeaderContainer>
      {showMenu && <Menu />}
    </>
  );
}
