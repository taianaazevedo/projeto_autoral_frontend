import { StyledTheme } from "./themeStyle";
import { Link } from "react-router-dom";

export default function Theme({ themes }) {
  return (
    <>
      {themes.map((theme) => {
        return (
          <StyledTheme key={theme.id}>
            <div className="user-info">
              <img src={theme.User.imgUrl} />
              <h1>{theme.User.name} postou o tema:</h1>
            </div>
            <p>{theme.title}</p>
            <div className="see-more">
              <Link to={`/themes/${theme.id}`} className="see-more-link">
                Ver mais ➔
              </Link>
            </div>
          </StyledTheme>
        );
      })}
    </>
  );
}
