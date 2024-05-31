import { useEffect, useState } from "react";
import "./PriceCalc.scss";
import Modal from "../Modal/Modal";

function PriceCalc({ spTotalPrice, tpTotalPrice, scTotalPrice }) {
  const combinedTotalPrice = (
    parseFloat(spTotalPrice) +
    parseFloat(tpTotalPrice) +
    parseFloat(scTotalPrice)
  ).toFixed(2);

  return (
    <div>
      

      <div className="cart-container">
        <div className="title-container"><h3 className="title">Price Summary:</h3></div>
        <div className="subtotal-container"><p className="price">{combinedTotalPrice}</p></div>
        
      </div>
      <div className="modal-container-home"><div><Modal /></div></div>
    </div>
  );
}

export default PriceCalc;
