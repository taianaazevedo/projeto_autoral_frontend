import { useContext, useState, useEffect } from "react";
import { StyledHome } from "./homeStyle";
import logo from "../../assets/notebook.png";
import Theme from "../theme/theme";
import { UserContext } from "../../contexts/userContext";
import { getThemes } from "../../services/themeApi";

export default function HomePage() {
  const { user } = useContext(UserContext);
  const [themes, setThemes] = useState([]);

  async function getThemesApi() {
    try {
      const themesApi = await getThemes(user.token);
      setThemes(themesApi)
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getThemesApi();
  }, []);

  return (
    <>
      <StyledHome>
        <div className="logo">
          <img src={logo} alt="logo_img" />
          <p className="p1">Citação</p>
          <p className="p2">em Foco</p>
        </div>
      </StyledHome>
      <Theme themes={themes} />
    </>
  );
}
