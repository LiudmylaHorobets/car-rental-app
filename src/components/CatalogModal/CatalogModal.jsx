import {
  CatalogModalStyled,
  ModalDiscription,
  ModalButton,
} from "./CatalogModal.styled";

const CatalogModal = ({ advert }) => {
  return (
    <>
      <CatalogModalStyled>
        <img className="modal-img" src={advert.img} alt={advert.model} />
        <div className="modal-title-wrap">
          <p className="modal-title">
            <span>{advert.make}</span>
            <span
              className={`modal-info-model ${
                advert.model ? "modal-blue-text" : "modal-black-text"
              }`}
            >
              {advert.model},
            </span>
            <span>{advert.year}</span>
          </p>
        </div>
        <ModalDiscription>
          <ul className="modal-list modal-list-first">
            <li className="modal-list-item">
              {[
                advert.address[2],
                advert.address[3],
                `Id: ${advert.id}`,
                `Year: ${advert.year}`,
                `Type: ${advert.type}`,
              ]
                .filter(Boolean)
                .join(" | ")}
            </li>
            <li className="modal-list-item">
              {[
                `Fuel Consumption: ${advert.fuelConsumption}`,
                `Engine Size: ${advert.engineSize}`,
              ]
                .filter(Boolean)
                .join(" | ")}
            </li>
          </ul>
          <p className="text-desc">{advert.description}</p>
          <div>
            <h3 className="desc-sub-title">Accessories and functionalities:</h3>
            <ul className="modal-list modal-list-second">
              {advert.accessories.map((item, index) => (
                <li className="modal-list-item" key={item}>
                  {item}
                  {index < advert.accessories.length - 1 && " | "}
                </li>
              ))}
              {advert.functionalities.map((item, index) => (
                <li className="modal-list-item" key={item}>
                  {item}
                  {index < advert.functionalities.length - 1 && " | "}
                </li>
              ))}
            </ul>
          </div>
          <div className="condition-block">
            <h3 className="desc-sub-title">Rental Conditions:</h3>
            <ul className="condition-list">
              {advert.rentalConditions.split("\n").map((item, index) => (
                <li className="condition-item" key={index}>
                  {item}
                </li>
              ))}
              <li className="condition-item">Mileage: {advert.mileage}</li>
              <li className="condition-item">Price: {advert.rentalPrice}</li>
            </ul>
          </div>
        </ModalDiscription>
        <ModalButton
          onClick={() => {
            window.location.href = "tel:+380730000000";
          }}
        >
          Rental car
        </ModalButton>
      </CatalogModalStyled>
    </>
  );
};

export default CatalogModal;
