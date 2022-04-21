import React from "react";
import { Container, MoreInfoCardTitle, MoreInfoCardInfo } from "./style";

export const MoreInfoCard = ({ title, data, info = {} }) => {
  return (
    <Container>
      <MoreInfoCardTitle>{title}</MoreInfoCardTitle>
      {title === "Max. / Min." ? (
        <MoreInfoCardInfo>
          {data.temp_max} / {data.temp_min}
        </MoreInfoCardInfo>
      ) : (
        <MoreInfoCardInfo>
          {data} {info}
        </MoreInfoCardInfo>
      )}
    </Container>
  );
};
