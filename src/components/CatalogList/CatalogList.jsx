import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdverts } from "../../redux/advert/selector";
import { fetchAdverts } from "../../redux/advert/operation";
import CatalogListCard from "./CatalogListCard/CatalogListCard";
import { CatalogListStyled } from "./CatalogList.styled";

const CatalogList = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(getAdverts);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  return (
    <CatalogListStyled>
      {adverts.map((advert) => (
        <CatalogListCard key={advert.id} advert={advert} />
      ))}
    </CatalogListStyled>
  );
};

export default CatalogList;