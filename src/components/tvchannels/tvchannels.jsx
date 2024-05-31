

function tvChannels (props) {
    const {channels} = props;

    return (
        <div className ="tvchannels__list">
            <h3 className ="tvchannels__list-heading"> </h3>

                {channels.map((channel)=> (
                <ChannelItem 
                key={channel.id}
                data={channel}
                />         
                
                ))}

            


        </div>
    )
}
export default tvChannels;