import { useEffect, useState } from "react";
import LoadMore from "../../components/LoadMore/LoadMore";
import { useDispatch } from "react-redux";
import { CatalogWrapper } from "./CatalogPage.styled";
import { fetchAdverts } from "../../redux/advert/operation";
import SearchForm from "../../components/SearchForm/SearchForm";
import CatalogList from "../../components/Catalog/CatalogList/CatalogList";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [nextPage, setNextPage] = useState(false);
  const [query, setQuery] = useState(false);

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
    <>
      <CatalogWrapper>
        <SearchForm setQuery={setQuery} />
        <CatalogList query={query} />
        {nextPage && <LoadMore onClick={onClick} />}
      </CatalogWrapper>
    </>
  );
};

export default CatalogPage;
