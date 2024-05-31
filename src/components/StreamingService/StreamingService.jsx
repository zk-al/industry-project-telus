import "../StreamingService/StreamingService.scss";
import StreamingServiceData from "../../data/streamingService.json";
import React, { useState } from "react";

const StreamingPartners = ({
  selectedPartners,
  handleSelectPartner,
  spTotalPrice,
}) => {
  return (
    <div className="streaming">
      <h2 className="streaming__title">Streaming Partners</h2>
      <p className="streaming__para">Stream to your heart's content</p>
      <div className="streaming__container">
        <div className="streaming__list">
          {StreamingServiceData.map((partner) => (
            <div
              key={partner.id}
              className={`streaming__card ${
                selectedPartners.includes(partner) ? "selected" : ""
              }`}
              onClick={() => handleSelectPartner(partner)}
            >
              <div className="streaming__card-front">
                <img
                  className="streaming__logo"
                  src={partner.imageURL}
                  alt={partner.name}
                />
              </div>
              <div className="streaming__card-back">
                <h3 className="streaming__provider">{partner.name}</h3>
                <p className="streaming__price">{partner.pricing}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="streaming__total-price">
        <h3 className="streaming__total">Total Price: ${spTotalPrice}</h3>
      </div>
    </div>
  );
};

export default StreamingPartners;
