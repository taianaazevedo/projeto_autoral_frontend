import { StyledBox } from "./favoriteStyle";
import { Link } from "react-router-dom";

export default function FavoriteBox({ favorites }) {
  return (
    <>
      {favorites.map((fav) => {
        return (
          <StyledBox key={fav.id}>
            <div className="user-info">
              <img src={fav.Theme.User.imgUrl} alt="user_img"/>
              <h1>{fav.Theme.User.name}</h1>
            </div>
            <p>{fav.Theme.title}</p>
            <div className="see-more">
              <Link to={`/theme/${fav.Theme.id}`} className="link-to">
                Ver mais ➔
              </Link>
            </div>
          </StyledBox>
        );
      })}
    </>
  );
}
