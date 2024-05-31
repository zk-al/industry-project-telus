import channels from "../../data/channels.json";
import React, { useState } from 'react';
import "../tvchannels/tvchannels.scss";


const TvChannels = () => {
    const [selectedChannel, setSelectedChannel] = useState([]);
    const [ totalPrice, setTotalPrice] = useState(0);


const handleSelectedChannel = (channel) => {
    let updatedChannels;
if (selectedChannel.includes(channel)){
    updatedChannels = selectedChannel.filter(c =>channel.id !== channel.id);
}else {
    updatedChannels=[...selectedChannel,channel];
}

setSelectedChannel(updatedChannels);

const total = updatedChannels.reduce((sum, c)=> sum + parseFloat(c.price.slice(1)),0);
setTotalPrice (total.toFixed(2));
};


    
 

    return (
        <div className ="tvchannels">
            <h3 className ="tvchannels__title">TV Channels </h3>
            <div className="tvchannels__container">
                <div className= "tvchannels__list">

                {channels.map((channel)=> (
                <div
                key={channel.id}
                className={`tvchannels__card ${selectedChannel.includes(channel) ? 'selected' : ''}`}
                onClick={() => handleSelectedChannel(channel)}>
                     <div className="tvchannels__card-front">
            
            
                <img src={channel.imageUrl} alt="{channel.name}" className="tvchannels__logo"/>
                </div>

                <div ClassName = "tvchannels__card-back">
                <h3 className="tvchannels__provider">{channel.name}</h3>
              <p className="tvchannels__price">{channel.price}</p>
              </div>
                </div>
                ))}
            
            </div>
            
        </div>

        </div>
    )
}
export default TvChannels;