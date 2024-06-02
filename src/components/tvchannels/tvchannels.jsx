import channels from "../../data/channels.json";
import React, { useState } from "react";
import "../tvchannels/tvchannels.scss";

const TvChannels = ({
  selectedChannel,
  handleSelectedChannel,
  scTotalPrice,
}) => {
  return (
    <div className="tvchannels">
      <h3 className="tvchannels__title">TV Channels </h3>
      <div className="tvchannels__container">
        <div className="tvchannels__list">
          {channels.map((channel) => (
            <div
              key={channel.id}
              className={`tvchannels__card ${
                selectedChannel.includes(channel) ? "selected" : ""
              }`}
              onClick={() => handleSelectedChannel(channel)}
            >
              <div className="tvchannels__card-front">
                <img
                  src={channel.imageUrl}
                  alt="{channel.name}"
                  className="tvchannels__logo"
                />
              </div>

              <div ClassName="tvchannels__card-back">
                <h3 className="tvchannels__provider">{channel.name}</h3>
                <p className="tvchannels__price">{channel.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="streaming__total-price">
        <h3 className="streaming__total">Total Price: ${scTotalPrice}</h3>
      </div>
    </div>
  );
};
export default TvChannels;
