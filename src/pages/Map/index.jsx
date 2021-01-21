import React from "react";

import Sidebar from "components/Sidebar";
import Ash from "components/Ash";

import * as S from "./styled";


const MapPage = () => (
  <S.MapWrapper className="map">
    <Sidebar />

    <Ash />

  </S.MapWrapper>
);

export default MapPage;
