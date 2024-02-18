import { useEffect, useState } from "react";
import CatalogList from "../components/CatalogList/CatalogList";
import LoadMore from "../components/LoadMore/LoadMore";
import { useDispatch } from "react-redux";
import { fetchAdverts } from "../redux/advert/operation";
import { CatalogWrapper } from "./CatalogPage.styled";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [nextPage, setNextPage] = useState(false);

  useEffect(() => {
    dispatch(fetchAdverts(page)).then((action) => {
      if (action.payload.length < 12) {
        setNextPage(false);
      } else {
        setNextPage(true);
      }
    });
  }, [dispatch, page]);

  const onClick = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <CatalogWrapper>
      <CatalogList />
      {nextPage && <LoadMore onClick={onClick} />}
    </CatalogWrapper>
  );
};

export default CatalogPage;
