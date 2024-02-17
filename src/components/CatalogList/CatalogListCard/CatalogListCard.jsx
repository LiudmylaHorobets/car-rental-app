import { CardStyled } from "./CatalogListCard.styled";

const CatalogListCard = ({ advert }) => {
  return (
    <CardStyled>
      <li key={advert.id}>
        <img className="card-img" src={advert.img} alt={advert.model} />
        <div className="card-title-wrap">
          <p className="card-title">
            <span>{advert.make}</span>
            <span
              className={`card-info-model ${
                advert.model ? "card-blue-text" : "card-black-text"
              }`}
            >
              {advert.model},
            </span>
            <span>{advert.year}</span>
          </p>
          <p className="card-price">{advert.rentalPrice}</p>
        </div>
        <div className="card-details">
          <p className="card-details-first">
            {[advert.address[2], advert.address[3], advert.rentalCompany]
              .filter(Boolean)
              .join(" | ")}
          </p>
          <p className="card-details-second">
            {[advert.type, advert.model, advert.id, advert.functionalities[0]]
              .filter(Boolean)
              .join(" | ")}
          </p>
        </div>
        <button className="card-button" type="button">
          Learn more
        </button>
      </li>
    </CardStyled>
  );
};

export default CatalogListCard;
