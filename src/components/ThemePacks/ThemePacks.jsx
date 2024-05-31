import "../ThemePacks/ThemePacks.scss";
import ThemePacksData from "../../data/themepacks.json";
import React, { useState } from "react";

const ThemePacks = ({ selectedPacks, handleSelectPack, tpTotalPrice }) => {
  return (
    <div className="themepacks">
      <h2 className="themepacks__title">Theme Packs</h2>
      <div className="themepacks__container">
        <div className="themepacks__list">
          {ThemePacksData.map((pack) => (
            <div
              key={pack.id}
              className={`themepacks__card ${
                selectedPacks.includes(pack) ? "selected" : ""
              }`}
              onClick={() => handleSelectPack(pack)}
            >
              <div className="themepacks__card-front">
                <img
                  className="themepacks__logo"
                  src={pack.imageURL}
                  alt={pack.name}
                />
              </div>
              <div className="themepacks__card-back">
                <h3 className="themepacks__provider">{pack.name}</h3>
                <p className="themepacks__price">{pack.pricing}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="themepacks__total-price">
        <h3 className="themepacks__total">Total Price: ${tpTotalPrice}</h3>
      </div>
    </div>
  );
};

export default ThemePacks;
