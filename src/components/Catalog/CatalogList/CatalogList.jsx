import { CatalogListStyled } from "./CatalogList.styled";
import CatalogListCard from "../CatalogListCard/CatalogListCard";
import { useSelector } from "react-redux";
import { getAdverts } from "../../../redux/advert/selector";

const CatalogList = () => {
  const adverts = useSelector(getAdverts);

  return (
    <CatalogListStyled>
      <ul className="catalog-list">
        {adverts.map((advert) => (
          <CatalogListCard key={advert.id} advert={advert} />
        ))}
      </ul>
    </CatalogListStyled>
  );
};

export default CatalogList;
