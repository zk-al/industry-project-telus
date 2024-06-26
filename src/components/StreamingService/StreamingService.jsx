import "../StreamingService/StreamingService.scss";
import StreamingServiceData from "../../data/streamingService.json";
import channelData from "../../data/channels.json";
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

const ChannelPartners = () => {
  const [selectedPartners, setSelectedPartners] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("none");

  const handleSelectPartner = (partner) => {
    let updatedSelectedPartners;
    if (selectedPartners.includes(partner)) {
      updatedSelectedPartners = selectedPartners.filter(
        (p) => p.id !== partner.id
      );
    } else {
      updatedSelectedPartners = [...selectedPartners, partner];
    }
    setSelectedPartners(updatedSelectedPartners);

    const total = updatedSelectedPartners.reduce(
      (sum, p) => sum + parseFloat(p.pricing.slice(1)),
      0
    );
    setTotalPrice(total.toFixed(2));
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="streaming">
      <h2 className="streaming__title">Streaming Partners</h2>
      <div className="streaming__container">
        <div className="filter">
          <label htmlFor="channelFilter" className="filter__input-label">
            Filter By Category:{" "}
          </label>
          <select
            name="channelFilter"
            className="filter__input"
            onChange={handleCategoryChange}
          >
            <option value="BlockBusters">Blockbusters</option>
            <option value="Prime Time">Prime Time</option>
            <option value="More Sports">More Sports</option>
            <option value="Living">Living</option>
          </select>
        </div>
        <div className="streaming__list">
          {channelData.map((partner) => (
            <div
              key={partner.id}
              className={`streaming__card ${
                selectedPartners.includes(partner) ? "selected" : ""
              } ${selectedCategory === partner.category ? "" : "filter-hide"}`}
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
        <h3 className="streaming__total">Total Price: ${totalPrice}</h3>
      </div>
    </div>
  );
};

export default StreamingPartners;
