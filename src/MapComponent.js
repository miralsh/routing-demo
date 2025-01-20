import React, { Component } from "react";

import { Map, GoogleApiWrapper,Marker } from "google-maps-react";

class MapComponent extends Component {
    mapContainerStyles = {
        width: "100%",
        height: "100%",
      };
    
      mapStyles = {
        width: "100%",
        height: "100%",
      };

render() {

return (
<div style={this.mapContainerStyles}>
<Map

google={this.props.google}

zoom={14} // Adjust the initial zoom level as needed

initialCenter={{ lat:47.513106494133154, lng:-122.64523406021591}} // Set your initial map center
style={this.mapStyles}
// styles={[

//     {
    
//     featureType: "water",
    
//     elementType: "geometry",
    
//     stylers: [
    
//     {
    
//     color: "#e9e9e9",
    
//     },
    
//     ],
    
//     },
    
//     // Add more style rules as needed
    
//     ]}
>
<Marker position={{ lat:47.513106494133154, lng:-122.64523406021591}} />
{/* Add a marker */}



{/* Add an info window */}





</Map>
</div>
);

}

}

export default GoogleApiWrapper({

apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,

})(MapComponent);