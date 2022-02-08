import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components/dist/tailwind';
import {CarLists} from './components/Data/carList'

function RightCarSelectorContainer({pickupCoordinates,dropoffCoordinates}) {
    const [rideCost, SetRideCost] = useState(0);
   useEffect(()=>{
    fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1IjoibmlraXRhLS0tMDEiLCJhIjoiY2t6MzFkc2V6MDJmajJva2FlNGt2YjB6cCJ9.LiMRkC3HhWLLNAQD23izZg`
        ).then(response => response.json())
        .then(data=>{
            if(data.routes){
            SetRideCost(data.routes[0].duration/100)
            }
        })
    },[pickupCoordinates,dropoffCoordinates])
    
  return (
  <Wrapper>
              <Title>Choose a ride or swipe up for more</Title>
              <CarContainer>
                  <CarList>
                      {CarLists.map((car,index)=>(
                          <Car key={index}>
                          <CarImage src={car.imgUrl}/>
                          <CarDetails>
                              <Service>{car.service}</Service>
                              <Time>5 min Away</Time>
                          </CarDetails>
                          <CarPrice>{'Rs.' + (rideCost * car.multiplier).toFixed(2)}</CarPrice>
                          </Car>
                      ))}
                      
                  </CarList>
              </CarContainer>
  </Wrapper>
  );
}

export default RightCarSelectorContainer;
const Wrapper = tw.div`
flex-1 overflow-y-scroll flex flex-col
`
const Car = tw.div`
p-2 flex items-center
` 

const CarContainer = tw.div`
border-t-2 
`

const CarList = tw.div`

`

const Title = tw.div`
text-xs text-gray-500 text-center p-2
`

const CarImage = tw.img`
h-14 mr-4
`

const CarDetails = tw.div`
flex-1 items-center
`

const Service = tw.div`
font-medium 
`

const Time = tw.div`
text-blue-500 text-xs
`

const CarPrice = tw.div`
text-sm 
`
