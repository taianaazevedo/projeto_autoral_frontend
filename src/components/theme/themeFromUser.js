import { Alert, Title } from "./themeStyle";
import BackToHome from "../backToHome/buttonToHome";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../contexts/userContext";
import { getThemesFromUser } from "../../services/themeApi";
import BoxTheme from "./boxThemeFromUser";

export default function ThemesFromUser() {
  const { user } = useContext(UserContext);
  const [themes, setThemes] = useState([]);

  async function getThemes() {
    try {
      const themesApi = await getThemesFromUser(user.token);
      setThemes(themesApi);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getThemes();
  }, []);

  return (
    <>
      <Title>Meus posts</Title>
      {themes?.length > 0 ? (
        <BoxTheme themes={themes} />
      ) : (
        <Alert>Você ainda não criou nenhum tema.</Alert>
      )}
      <BackToHome />
    </>
  );
}
