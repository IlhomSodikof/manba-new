import React from "react";

import { useParams } from "react-router-dom";
// import MapSearch from "../Components/component/MapSearch";
import Filter from "../Components/component/Filter";
import BigCacdFilter from "../Components/component/BigCardFilter";

export default function Shablon() {
  const params = useParams();
  // console.log(params, 'paramsdagi malumot shablonjsdan');
  return (
    <div className="shablon-container">
      <div className="filt-cont-shablonmanba">
        <Filter />
      </div>
      <BigCacdFilter />

    </div>
  );
}