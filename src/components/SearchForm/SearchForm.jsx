import { useState } from "react";

const SearchForm = () => {
  const [brand, setBrand] = useState("");
  const [priceForHour, setPriceForHour] = useState("");
  const [mileageFrom, setMileageFrom] = useState("");
  const [mileageTo, setMileageTo] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    //   dispatch action
  };

  return (
    <form>
      <label htmlFor="brand">Car brand</label>
      <input
        type="text"
        id="brand"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
        placeholder="Enter the text"
      />
      <label htmlFor="priceForHour">Price/ 1 hour</label>
      <input
        type="text"
        id="priceForHour"
        value={priceForHour}
        onChange={(e) => setPriceForHour(e.target.value)}
      />
      <label htmlFor="mileage">Car mileage / km</label>
      <input
        type="text"
        id="mileage"
        value={mileageFrom}
        onChange={(e) => setMileageFrom(e.target.value)}
      />
      <input
        type="text"
        id="mileage"
        value={mileageTo}
        onChange={(e) => setMileageTo(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </form>
  );
};

export default SearchForm;
