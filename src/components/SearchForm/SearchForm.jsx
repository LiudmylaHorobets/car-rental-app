import { useState } from "react";
import {
  SearchFormStyled,
  LabelContainer,
  LabelTitle,
  InputWrraper,
  SearchFormBtn,
} from "./SearchForm.styled";

const SearchForm = (setQuery) => {
  const [brand, setBrand] = useState("");
  const [priceForHour, setPriceForHour] = useState("");
  const [mileageFrom, setMileageFrom] = useState("");
  const [mileageTo, setMileageTo] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const query = {
      brand,
      priceForHour,
      mileageFrom,
      mileageTo,
    };
    setQuery(query);
  };

  return (
    <SearchFormStyled>
      <form className="search-form" onSubmit={handleSearch}>
        <LabelContainer>
          <LabelTitle>Car brand</LabelTitle>
          <input
            className="search-input"
            type="text"
            id="brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            placeholder="Enter the text"
          />
        </LabelContainer>
        <LabelContainer>
          <LabelTitle>Price/ 1 hour</LabelTitle>

          <input
            className="search-input"
            type="text"
            id="priceForHour"
            value={priceForHour}
            onChange={(e) => setPriceForHour(e.target.value)}
            placeholder="To $"
          />
        </LabelContainer>
        <LabelContainer>
          <LabelTitle>Car mileage / km</LabelTitle>
          <InputWrraper>
            <span className="span-km-left">From</span>
            <input
              className="search-input-kmleft"
              type="text"
              id="mileageFrom"
              value={mileageFrom}
              onChange={(e) => setMileageFrom(e.target.value)}
            />
          </InputWrraper>
          <InputWrraper>
            <span className="span-km-right">To</span>
            <input
              className="search-input-km right"
              type="text"
              id="mileageTo"
              value={mileageTo}
              onChange={(e) => setMileageTo(e.target.value)}
            />
          </InputWrraper>
        </LabelContainer>
        <SearchFormBtn onClick={handleSearch}>Search</SearchFormBtn>
      </form>
    </SearchFormStyled>
  );
};

export default SearchForm;
