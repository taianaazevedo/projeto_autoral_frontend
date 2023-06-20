import { StyledBox } from "./themeStyle";
import { Link } from "react-router-dom";

export default function BoxTheme({ themes }) {
  return (
    <>
      {themes.map((theme) => {
        return (
          <StyledBox key={theme.id}>
            <div className="user-info">
              <h1>Você postou o tema:</h1>
            </div>
            <p>{theme.title}</p>
            <div className="see-more">
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