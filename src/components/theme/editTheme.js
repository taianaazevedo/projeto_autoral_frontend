import { useParams } from "react-router-dom";
import { StyledEdit } from "./themeStyle";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/userContext";
import { getThemeById } from "../../services/themeApi";

export default function Edit() {
  const { user } = useContext(UserContext);
  const { id } = useParams();
  const [theme, setTheme] = useState([]);
  const [editTheme, setEditTheme] = useState(false);
  const [editSong, setEditSong] = useState(false);
  const [editMovie, setEditMovie] = useState(false);
  const [editSerie, setEditSerie] = useState(false);
  const [editBook, setEditBook] = useState(false);
  const [isDisable, setIsDisable] = useState(false);

  async function getTheme() {
    try {
      const themeApi = await getThemeById(user.token, id);
      console.log(themeApi);
      setTheme(themeApi);
    } catch (error) {
      console.log(error);
    }
  }

  function editThemeButton() {
    setEditTheme(!editTheme);
  }
  function editSongButton() {
    setEditSong(!editSong);
  }
  function editMovieButton() {
    setEditMovie(!editMovie);
  }
  function editSerieButton() {
    setEditSerie(!editSerie);
  }
  function editBookButton() {
    setEditBook(!editBook);
  }

  useEffect(() => {
    getTheme();
  }, [id]);

  return (
    <StyledEdit>
      <h1>Edite o tema</h1>
      <div className="theme">
        <p>Tema: {theme?.title}</p>
        <button onClick={editThemeButton}>Editar</button>
      </div>
      {editTheme && (
        <form className="edit-theme">
          <input type="text" placeholder="Edite o tema" required />
          <button
            type="submit"
            disabled={isDisable}
            style={{ background: isDisable ? "grey" : "#ffa438" }}
          >
            Salvar
          </button>
        </form>
      )}
      <div className="music">
        <p>
          Música: {theme?.Song?.[0]?.title} - {theme?.Song?.[0]?.performer}
        </p>
        <button onClick={editSongButton}>Editar</button>
      </div>
      {editSong && (
        <form className="edit-music">
          <input type="text" placeholder="Edite a música" required />
          <input type="text" placeholder="Edite o(a) cantor(a)" required />
          <button
            type="submit"
            disabled={isDisable}
            style={{ background: isDisable ? "grey" : "#ffa438" }}
          >
            Salvar
          </button>
        </form>
      )}
      <div className="movie">
        <p>
          Filme: {theme?.Movie?.[0]?.title} - {theme?.Movie?.[0]?.streaming}
        </p>
        <button onClick={editMovieButton}>Editar</button>
      </div>
      {editMovie && (
        <form className="edit-movie">
          <input type="text" placeholder="Edite o filme" required />
          <input
            type="text"
            placeholder="Edite a plataforma de streaming"
            required
          />
          <button
            type="submit"
            disabled={isDisable}
            style={{ background: isDisable ? "grey" : "#ffa438" }}
          >
            Salvar
          </button>
        </form>
      )}
      <div className="serie">
        <p>
          Filme: {theme?.Serie?.[0]?.title} - {theme?.Serie?.[0]?.streaming}
        </p>
        <button onClick={editSerieButton}>Editar</button>
      </div>
      {editSerie && (
        <form className="edit-serie">
          <input type="text" placeholder="Edite a série" required />
          <input
            type="text"
            placeholder="Edite a plataforma de streaming"
            required
          />
          <button
            type="submit"
            disabled={isDisable}
            style={{ background: isDisable ? "grey" : "#ffa438" }}
          >
            Salvar
          </button>
        </form>
      )}
      <div className="book">
        <p>
          Filme: {theme?.Book?.[0]?.title} - {theme?.Book?.[0]?.author}
        </p>
        <button onClick={editBookButton}>Editar</button>
      </div>
      {editBook && (
        <form className="edit-book">
          <input type="text" placeholder="Edite o livro" required />
          <input type="text" placeholder="Edite o(a) autor(a)" required />
          <button
            type="submit"
            disabled={isDisable}
            style={{ background: isDisable ? "grey" : "#ffa438" }}
          >
            Salvar
          </button>
        </form>
      )}
    </StyledEdit>
  );
}
