import { useState } from "react";
import {
  SearchFormStyled,
  LabelContainer,
  LabelTitle,
  InputContainer,
  SearchFormBtn,
} from "./SearchForm.styled";
import makes from "../../data/makes.json";

const SearchForm = ({ setQuery, advert }) => {
  const [brand, setBrand] = useState("");
  const [priceForHour, setPriceForHour] = useState("");
  const [mileageFrom, setMileageFrom] = useState("");
  const [mileageTo, setMileageTo] = useState("");

  const brandOptions = makes;

  const handleBrandChange = (e) => {
    setBrand(e.target.value);
  };

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
          <select
            className="search-input"
            type="text"
            id="brand"
            value={brand}
            onChange={handleBrandChange}
          >
            <option value="">Enter the text</option>
            {brandOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </LabelContainer>
        <LabelContainer>
          <LabelTitle>Price/ 1 hour</LabelTitle>
          <select
            className="search-input"
            type="text"
            id="priceForHour"
            value={priceForHour}
            onChange={(e) => setPriceForHour(e.target.value)}
          >
            <option value="">To $</option>
            {[...Array(100)].map((_, index) => (
              <option key={index} value={(index + 1) * 10}>
                {(index + 1) * 10}
              </option>
            ))}
          </select>
        </LabelContainer>
        <LabelContainer>
          <LabelTitle>Car mileage / km</LabelTitle>
          <div className="wrap">
            <InputContainer>
              <span className="span-left">From</span>
              <input
                className="search-input-km left"
                type="text"
                id="mileageFrom"
                value={mileageFrom}
                onChange={(e) => setMileageFrom(e.target.value)}
                pattern="[0-9]*"
              />
            </InputContainer>
            <InputContainer>
              <span className="span-right">To</span>
              <input
                className="search-input-km right"
                type="text"
                id="mileageTo"
                value={mileageTo}
                onChange={(e) => setMileageTo(e.target.value)}
                pattern="[0-9]*"
              />
            </InputContainer>
          </div>
        </LabelContainer>
        <SearchFormBtn onClick={handleSearch}>Search</SearchFormBtn>
      </form>
    </SearchFormStyled>
  );
};

export default SearchForm;
