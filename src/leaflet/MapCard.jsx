import React, { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';

const MapCard = () => {
  const [position, setPosition] = useState([12.938785560006243, 77.5737017765864]); // Initial center position

  useEffect(() => {
    const getPosition = async () => {
      //  Try getting user location if available
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((pos) => {
          setPosition([pos.coords.latitude, pos.coords.longitude]);
        });
      }
    };
    getPosition();
  }, []);

  const markerStyle = {
    icon: L.icon({
      iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
      iconSize: [25, 41], // Adjust size as needed
      iconAnchor: [12.5, 41], // Adjust anchor point as needed
    }),
  };

  const meshNetworkNodes = [
    { name: 'Node 1', lat: 12.938785560006243, lng: 77.5737017765864}, //12.938785560006243, 77.5737017765864
    { name: 'Node 2', lat: 12.940324610327737, lng: 77.5733415306369}, //12.940324610327737, 77.5733415306369
    { name: 'Node 3', lat: 12.941101384360556, lng: 77.58349117733465}, // 12.941101384360556, 77.58349117733465
    { name: 'Node 4', lat: 12.952338078641318, lng: 77.56473731867246}, // 12.952338078641318, 77.56473731867246
    { name: 'Node 5', lat: 12.936765097189626, lng: 77.5700955640045}, // 12.936765097189626, 77.5700955640045
    { name: 'Node 6', lat: 12.941008131666353, lng: 77.56789485610027}, // 12.941008131666353, 77.56789485610027
    { name: 'Node 7', lat: 12.9525245755166, lng: 77.57751099281226}, // 12.9525245755166, 77.57751099281226
    { name: 'Node 8', lat: 12.940681746961975, lng: 77.56813406348117}, // 12.940681746961975, 77.56813406348117
    { name: 'Node 9', lat: 12.941241263336474, lng: 77.56660313624344}, // 12.941241263336474, 77.56660313624344
    { name: 'Node 10', lat: 12.939096443749715, lng: 77.57818077347876},// 12.939096443749715, 77.57818077347876
    { name: 'Node 11', lat: 12.940401988303913, lng: 77.5676078072432},// 12.940401988303913, 77.5676078072432
    { name: 'Node 12', lat: 12.94692960853263, lng: 77.5733009429085 },// 12.94692960853263, 77.5733009429085
    { name: 'Node 13', lat: 12.94497134041143, lng: 77.56588551410076 },// 12.94497134041143, 77.56588551410076
    { name: 'Node 13', lat: 12.938490295740536, lng: 77.57004772252833 },// 12.938490295740536, 77.57004772252833
    // ... other nodes with latitude (lat) and longitude (lng)
  ];

  const connections = [
    [meshNetworkNodes[0], meshNetworkNodes[1]], 
    [meshNetworkNodes[1], meshNetworkNodes[2]],
    [meshNetworkNodes[2], meshNetworkNodes[3]],
    [meshNetworkNodes[3], meshNetworkNodes[4]],
    [meshNetworkNodes[4], meshNetworkNodes[5]],
    [meshNetworkNodes[5], meshNetworkNodes[6]],
    [meshNetworkNodes[6], meshNetworkNodes[7]],
    [meshNetworkNodes[7], meshNetworkNodes[8]],
    [meshNetworkNodes[8], meshNetworkNodes[9]],
    [meshNetworkNodes[9], meshNetworkNodes[10]],
    [meshNetworkNodes[10], meshNetworkNodes[11]],
    [meshNetworkNodes[11], meshNetworkNodes[12]],
    [meshNetworkNodes[12], meshNetworkNodes[0]],
    [meshNetworkNodes[11], meshNetworkNodes[2]],
    [meshNetworkNodes[7], meshNetworkNodes[12]],
    [meshNetworkNodes[0], meshNetworkNodes[9]],
    [meshNetworkNodes[4], meshNetworkNodes[10]],
    [meshNetworkNodes[3], meshNetworkNodes[11]],
    [meshNetworkNodes[1], meshNetworkNodes[6]],
    [meshNetworkNodes[7], meshNetworkNodes[12]],
    
  ];
  
  return (
       <MapContainer center={position} zoom={12} style={{ height: '500px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {meshNetworkNodes.map((node, index) => (
                <Marker position={[node.lat, node.lng]} key={index} style={markerStyle}>
                    <Popup>{node.name}</Popup>
                </Marker>
            ))}
            {connections.map((connection) => (
                <Polyline
                    key={`${connection[0].name}-${connection[1].name}`}
                    positions={[[connection[0].lat, connection[0].lng], [connection[1].lat, connection[1].lng]]}
                    color="blue" // adjust color as needed
                />
            ))}
        </MapContainer>
  );
};

export default MapCard;