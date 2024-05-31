import { useEffect, useState } from "react";
import "./PriceCalc.scss";

function PriceCalc({ spTotalPrice, tpTotalPrice, scTotalPrice }) {
  const combinedTotalPrice = (
    parseFloat(spTotalPrice) +
    parseFloat(tpTotalPrice) +
    parseFloat(scTotalPrice)
  ).toFixed(2);

  return (
    <div>
      <h3>TV</h3>

      <h3>Streaming</h3>

      <h3>Bundles</h3>

      <div>
        <h3>Price Sumamry</h3>
        <p>{combinedTotalPrice}</p>
      </div>
    </div>
  );
}

export default PriceCalc;
