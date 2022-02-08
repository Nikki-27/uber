import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components/dist/tailwind';
import Map from './components/Map';
import {useRouter} from 'next/router';
import RightCarSelectorContainer from './RightCarSelectorContainer';

const Confirm = () => {
    const router = useRouter();
    const {pickup,dropoff} = router.query;

    // console.log(pickup);
    // console.log(dropoff)

    const [pickupCoordinates, setPickupCoordinats] = useState([0,0]);
    const [dropoffCoordinates, setDropoffCoordinates] = useState([0,0]);
    const pickUpCoordinates = (pickup) => {
        const location = pickup;
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?` + 
            new URLSearchParams({
                access_token : "pk.eyJ1IjoibmlraXRhLS0tMDEiLCJhIjoiY2t6MzFkc2V6MDJmajJva2FlNGt2YjB6cCJ9.LiMRkC3HhWLLNAQD23izZg",
                limit: 1
            })
        )
            .then(response => response.json())
            .then(data => {
                // console.log(data.features[0].center)
                setPickupCoordinats(data.features[0].center);
            })  
    }
    const dropOffCoordinates = (dropoff) => {
        const location = dropoff;
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?` + 
            new URLSearchParams({
                access_token : "pk.eyJ1IjoibmlraXRhLS0tMDEiLCJhIjoiY2t6MzFkc2V6MDJmajJva2FlNGt2YjB6cCJ9.LiMRkC3HhWLLNAQD23izZg",
                limit: 1
            })
        )
            .then(response => response.json())
            .then(data => {
                // console.log(data.features[0].center)
                setDropoffCoordinates(data.features[0].center);
            })  
    }
    useEffect(() => {
        pickUpCoordinates(pickup);
        dropOffCoordinates(dropoff);
    }, [pickup,dropoff]);
    return (
        <Wrapper>
            <Map pickupCoordinates={pickupCoordinates} dropoffCoordinates={dropoffCoordinates} />
            <RightContainer>
                <RightCarSelectorContainer pickupCoordinates={pickupCoordinates} dropoffCoordinates={dropoffCoordinates} />
                <ConfirmButtonContainer>
                    <ConfirmButton>
                        Confirm Location
                    </ConfirmButton>
                </ConfirmButtonContainer>
            </RightContainer>
        </Wrapper>
    )
};

export default Confirm;

const Wrapper = tw.div`
flex h-screen flex-col
`

const RightContainer = tw.div`
flex-1 flex flex-col h-1/2
`
const ConfirmButtonContainer = tw.div`
border-t-2
`
const ConfirmButton = tw.div`
bg-black text-white my-4 py-4 mx-4 text-xl text-center
`
