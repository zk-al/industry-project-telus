import channels from "../../data/channels.json";
import "../tvchannels/tvchannels.scss";


function TvChannels () {
    
 

    return (
        <div className ="tvchannels__list-wrapper">
            <h3 className ="tvchannels__list-heading"> </h3>
            <ul className="tvchannels__list">

                {channels.map((channel)=> (
                <li 
                key={channel.id}
            
                data={channel}
                >
                {/* {channel.name} */}
                <img src={channel.imageUrl} alt="thumbnail of video" className="tvchannels__list-img"/>
                </li>
                ))}
            
            </ul>
            


        </div>
    )
}
export default TvChannels;