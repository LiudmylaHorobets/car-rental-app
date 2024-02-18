import React from "react";
import { CardDetailsStyled } from "./CardDetails.styled";

const CardDetails = ({ advert }) => {
  return (
    <CardDetailsStyled>
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
    </CardDetailsStyled>
  );
};

export default CardDetails;
