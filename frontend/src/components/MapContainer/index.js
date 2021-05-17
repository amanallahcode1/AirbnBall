import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import './mapcontainer.css'
const containerStyle = {
  width: '420px',
  height: '1000px',
  
};

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
        className="googleMapContainer"
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        
        
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <>
           <Marker position={{
                lat: 33.96656837335523, 
                lng: -118.30624648642248
            }} />
           <Marker position={{
                lat: 33.91783222870072, 
                lng: -118.34763572791854,
            }} />
           <Marker position={{
                lat: 34.014695835163906, 
                lng: -118.17984962772498
            }} />
           <Marker position={{
                lat: 34.00719626003012, 
                lng: -118.45209080052575
            }} />
           <Marker position={{
                lat: 34.11144905254902, 
                lng: -118.21603878664123
            }} />
           <Marker position={{
                lat: 34.04196143714446, 
                lng: -118.27032252470978
            }} />
           <Marker position={ {
                lat: 34.08965515246749,
                lng: -118.31802641598476
            }} />
           <Marker position={ {
                lat: 34.104639060545665,
                lng:  -118.12474340823275
            }} />
           <Marker position={ {
                lat: 34.00719626003012, 
                lng: -118.45209080052575
            }} />
           <Marker position={{
                lat: 33.94922266000164,
                lng:  -118.27525740999612
            }} />

        </>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MapContainer)