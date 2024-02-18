import { FavoritesStyled, TitleFavorites } from "./Favorites.styled";

const Favorites = () => {
  return (
    <>
      <FavoritesStyled>
        <TitleFavorites>Your favorites advert</TitleFavorites>
        <p className="later">will be added later...</p>
        
        {/* <FavoritesCard/> */}
      </FavoritesStyled>
    </>
  );
};

export default Favorites;
