// import { useState } from "react";
import { CardStyled } from "./CatalogListCard.styled";
// import CatalogModal from "../../CatalogModal/CatalogModal";
// import Modal from "../../Modal/Modal";

const CatalogListCard = ({ advert }) => {
  // const [visible, setVisible] = useState(false);

  return (
    <CardStyled>
      <li key={advert.id}>
        <div className="card-container">
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
        </div>
        <button
          className="card-button"
          type="button"
          // onClick={() => setVisible(true)}
        >
          Learn more
        </button>
      </li>
      {/* {visible && (
        <Modal setVisible={setVisible}>
          <CatalogModal advert={advert} />
        </Modal>
      )} */}
    </CardStyled>
  );
};

export default CatalogListCard;
