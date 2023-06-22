import { StyledBox } from "./themeStyle";
import { Link } from "react-router-dom";
import { LuEdit } from "react-icons/lu";
import { BsTrash } from "react-icons/bs";
import { deleteTheme } from "../../services/themeApi";

export default function BoxTheme({ themes, setThemes, user }) {

  async function deleteThemeById(id) {
    try {
      await deleteTheme(user.token, id);
      alert("Tema excluído com sucesso!");
      setThemes((prevThemes) =>
      prevThemes.filter((theme) => theme.id !== id)
    );
    } catch (error) {
      alert(error.response.data.message);
    }
  }

  return (
    <>
      {themes.map((theme) => {
        return (
          <StyledBox key={theme.id}>
            <div className="user-info">
              <h1>Tema:</h1>
            </div>
            <p>{theme.title}</p>
            <div className="see-more">
              <div className="delete" onClick={() => deleteThemeById(theme.id)}>
                <BsTrash />
                <span>Excluir</span>
              </div>
              <Link to={`/theme/${theme.id}`} className="link-to">
                Ver mais ➔
              </Link>
            </div>
          </StyledBox>
        );
      })}
    </>
  );
}
