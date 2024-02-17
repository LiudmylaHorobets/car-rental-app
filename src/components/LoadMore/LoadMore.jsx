import { LoadMoreBtnStyled } from "./LoadMore.styled";

const LoadMore = ({ onClick }) => {
  return (
    <LoadMoreBtnStyled type="button" onClick={() => onClick()}>
      Load more
    </LoadMoreBtnStyled>
  );
};

export default LoadMore;
