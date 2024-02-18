import styled from "styled-components";

export const CardDetailsStyled = styled.div`
  .card-details {
    display: flex;
    flex-direction: column;
    gap: 4px;

    font-size: 12px;
    font-weight: 400;
    color: var(--primary-black);
  }
  .card-details-first,
  .card-details-second {
    opacity: var(--opacity-text);
  }
`;
