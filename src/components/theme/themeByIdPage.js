import { useContext, useEffect, useState } from "react";
import { getThemeById } from "../../services/themeApi";
import { UserContext } from "../../contexts/userContext";
import { StyledThemeById } from "./themeByIdStyle";
import BackToHome from "../backToHomeButton/buttonToHome";


export default function ThemeById({ id }) {
  const { user } = useContext(UserContext);
  const [themeById, setThemeById] = useState([]);

  async function getThemeByIdApi() {
    try {
      const themeData = await getThemeById(user.token, id);
      setThemeById(themeData);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getThemeByIdApi();
  }, [id]);

  return (
    <>
      <StyledThemeById>
        <h1>Tema: {themeById?.title}</h1>
        <div className="author-post">
          <h2>
            Postado por: <span>{themeById?.User?.name}</span>
          </h2>
        </div>
        <div className="references">
          <p>Referências:</p>
          <div className="music">
            <p>
              Música:{" "}
              {themeById?.Song?.length > 0 ? (
                <span>{themeById?.Song[0]?.title}</span>
              ) : (
                <span>-</span>
              )}
            </p>
            <p>
              Intérprete:{" "}
              {themeById?.Song?.length > 0 ? (
                <span>{themeById?.Song[0]?.performer}</span>
              ) : (
                <span>-</span>
              )}
            </p>
          </div>
          <div className="movie">
            <p>
              Filme:{" "}
              {themeById?.Movie?.length > 0 ? (
                <span>{themeById?.Movie[0]?.title}</span>
              ) : (
                <span>-</span>
              )}
            </p>
            <p>
              Onde assistir:{" "}
              {themeById?.Movie?.length > 0 ? (
                <span>{themeById?.Movie[0]?.streaming}</span>
              ) : (
                <span>-</span>
              )}
            </p>
          </div>
          <div className="serie">
            <p>
              Série:{" "}
              {themeById?.Serie?.length > 0 ? (
                <span>{themeById?.Serie[0]?.title}</span>
              ) : (
                <span>-</span>
              )}
            </p>
            <p>
              Onde assistir:{" "}
              {themeById?.Serie?.length > 0 ? (
                <span>{themeById?.Serie[0]?.streaming}</span>
              ) : (
                <span>-</span>
              )}
            </p>
          </div>
          <div className="book">
            <p>
              Livro:{" "}
              {themeById?.Book?.length > 0 ? (
                <span>{themeById?.Book[0]?.title}</span>
              ) : (
                <span>-</span>
              )}
            </p>
            <p>
              Autor(a):{" "}
              {themeById?.Book?.length > 0 ? (
                <span>{themeById?.Serie[0]?.author}</span>
              ) : (
                <span>-</span>
              )}
            </p>
          </div>
        </div>
      </StyledThemeById>
      <BackToHome/>
    </>
  );
}
