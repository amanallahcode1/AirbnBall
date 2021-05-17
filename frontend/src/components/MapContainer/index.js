import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '420px',
  height: '1000px',
  
};
 const locations = [
        {
            name: "Location 1",
            location: {
                lat: 33.96656837335523, 
                lng: -118.30624648642248
            },
        },
        {
            name: "Location 2",
            location: {
                lat: 33.91783222870072, 
                lng: -118.34763572791854,
            },
        },
        {
            name: "Location 3",
            location: {
                lat: 34.014695835163906, 
                lng: -118.17984962772498
            },
        },
        {
            name: "Location 4",
            location: {
                lat: 34.00719626003012, 
                lng: -118.45209080052575
            },
        },
        {
            name: "Location 5",
            location: {
                lat: 34.11144905254902, 
                lng: -118.21603878664123
            },
        },
        {
            name: "Location 6",
            location: {
                lat: 34.04196143714446, 
                lng: -118.27032252470978
            },
        },
        {
            name: "Location 7",
            location: {
                lat: 34.08965515246749,
                lng: -118.31802641598476
            },
        },
        {
            name: "Location 8",
            location: {
                lat: 34.104639060545665,
                lng:  -118.12474340823275
            },
        },
        {
            name: "Location 9",
            location: {
                lat: 34.00719626003012, 
                lng: -118.45209080052575
            },
        },
        {
            name: "Location 10",
            location: {
                lat: 33.94922266000164,
                lng:  -118.27525740999612
            },
        }
    ];


const center = {
  lat:33.96656837335523,
  lng: -118.30624648642248
};

function MapContainer() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAQfjQr8dZO1Nio3JrE_PBuk79lJTEZoi8"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={11}
        
        
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <>
           <Marker position={{
                lat: 33.96656837335523, 
                lng: -118.30624648642248
            }} />
           <Marker position={{ lat: -34.397, lng: 150.644 }} />
           <Marker position={{ lat: -34.397, lng: 150.644 }} />
           <Marker position={{ lat: -34.397, lng: 150.644 }} />
           <Marker position={{ lat: -34.397, lng: 150.644 }} />
           <Marker position={{ lat: -34.397, lng: 150.644 }} />
           <Marker position={{ lat: -34.397, lng: 150.644 }} />
           <Marker position={{ lat: -34.397, lng: 150.644 }} />
           <Marker position={{ lat: -34.397, lng: 150.644 }} />
           <Marker position={{ lat: -34.397, lng: 150.644 }} />

        </>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MapContainer)