import React from 'react';
import tw from "tailwind-styled-components";
import mapboxgl from '!mapbox-gl'
import { useEffect } from 'react';

mapboxgl.accessToken = 'pk.eyJ1IjoibmlraXRhLS0tMDEiLCJhIjoiY2t6MzFkc2V6MDJmajJva2FlNGt2YjB6cCJ9.LiMRkC3HhWLLNAQD23izZg'
const Map = (props) => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [78.8718, 21.7679],
      zoom: 3,
    })
    if(props.pickupCoordinates){
      addToMap(map,props.pickupCoordinates);
    }
    if(props.dropoffCoordinates){
      addToMap(map,props.dropoffCoordinates);
    }
    if(props.pickupCoordinates && props.dropoffCoordinates){
      map.fitBounds([
        props.pickupCoordinates,
        props.dropoffCoordinates
      ],{
        padding : 90
      })
    }
  },[props.pickupCoordinates,props.dropoffCoordinates])

  const addToMap = (map,coordinates) => {
    const marker1 = new mapboxgl.Marker()
      .setLngLat(coordinates)
      .addTo(map);

  }


  return <Wrapper id="map"></Wrapper>;
};

const Wrapper = tw.div`
flex-1 h-1/2
`

export default Map;
