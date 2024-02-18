import { useSelector } from "react-redux";
import CatalogList from "../Catalog/CatalogList/CatalogList";
import { FavoritesStyled, TitleFavorites } from "./Favorites.styled";
import { getFavoritesAdverts } from "../../redux/favorites/selector";

const Favorites = () => {
  const favorites = useSelector(getFavoritesAdverts);

  return (
    <>
      <FavoritesStyled>
        <TitleFavorites>Your favorites advert</TitleFavorites>
        {favorites.length > 0 ? (
          favorites.map((advert) => (
            <CatalogList key={advert.id} advert={advert} />
          ))
        ) : (
          <p>No favorites yet...</p>
        )}
      </FavoritesStyled>
    </>
  );
};

export default Favorites;
