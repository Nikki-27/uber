import React, { useState } from 'react';
import tw from "tailwind-styled-components";
import Link from 'next/link';

const Search = () => {
    const[pickup, setPickup] = useState("");
    const[dropoff, setDropoff] = useState("");
    // console.log(pickup);
    // console.log(dropoff)
  return (
      <Wrapper>
          <ButtonContainer>
          <Link href="/">
              <BackButton src="https://img.icons8.com/ios-filled/50/000000/long-arrow-left.png"/>
          </Link>
          </ButtonContainer>
          <InputContainer>
          <FromToIcons>
              <Circle src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADQ0lEQVRoge2ZP0wUQRSHf29vsTDY+KcgQHEJCiVhZ5XQYWyk0sJgRBMLGwIk9sbCxNgbOSIxoYIEDgtN1JIayCzQkIgJiUHUQqHhIuHc22dx17g3e7uzt7de4n3lzJu972XmdmfeAC1a/N9QEg/J5/OZnp6ey8w87HmeRUR9ADoAtFdCCgC+MfOOYRgOgJWBgYF1IvLq/e26ElhfX+82DGMCwF0AnZrD9wHMu66bGxwc3I/rECuBjY2NC6VS6SkR3QdwKu6PVygCmAPwWAjxU3ewdgJSyjsAXgA4qzs2hANmnrRte1FnUOQEpJRtAGYAPNA104GIZpl5SgjxO1J8lCAp5Wkies3M1+vTi8wHALeEEL/CAo2wACllW8ryADBCRG+3t7dD/1+hCQCYSVkeAMDM146Pj5+HxdVcQo7jjDHzfHJa+hDRbcuylgL7gzrW1tbOZTKZjwDON8QsOocAeoNesYFLyDCMZ/j38kD5df0kqFM5A6urq12mae6i/o9UUhQBXBRC7Pk7lDNgmuYkmkceKLuMqzqqEmBmA8BYo41icC+fz2f8jVUJbG5uXgHQlYqSHp3ZbNbyN6pmYDgdH32I6Kq/TZWASEcnFuEzAOBSCiJx6fU3qBLoSEEkLlVuqgTaFW3Nwhl/Q5TNXFOjSqCQukV0jvwNqgS+pyASlyo3VQKfUhCJy46/oSoBIpLpuMSiyk01AyspiMTC87wqt6rtNDMbjuN8BtCdilV09izLyvqreaol5AFYSE0rOguqUqTyO+C6bg7lQ0SzcGKaZk7VoUygUquca6iSBkT0qr+//6uqL/BLXCwWHwHQrlU2gANmDjwTByYwNDR0yMxTjXHSYrxW0bfmXsi27UUimk3eKRrMnBNCLNeKCd3M7e7uTgB4k5hVdN4XCoWHYUGRi7sAlgGM1GsVkXcARhMp7gJA5UE3ALysUywUZs4dHR3djCIPxLjgcBxnlJmnkXzV7geAibA170f7QGNZ1lKpVOpD+bLjRHe8ghMimi4Wi3268kCdl3xbW1udrutOolwI0907fQEwb5pmLugjFYVErlmZ2ZBSikrdxkK5etCJv69Z91E+a0jP81Zs23aSuGZt0eJ/5w/Fw/1pccv6qwAAAABJRU5ErkJggg=="/>
              <Line src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAABmJLR0QA/wD/AP+gvaeTAAABE0lEQVR4nO3dsVHDUBBF0RXjFmgEVUI/DumHSkQjFCEnDkiV3D8ezsk2e3Mb2BmAy7bVA644juNzZt6f5+++798r91xxWz3givM87zPz8Tx/ZuZlQr+tHvBfCB0ROiJ0ROiI0BGhI0JHhI4IHRE6InRE6IjQEaEjQkeEjggdEToidEToiNARoSNCR4SOCB0ROiJ0ROiI0BGhI0JHhI4IHRE6InRE6IjQEaEjQkeEjggdEToidEToiNARoSNCR4SOCB0ROiJ0ROiI0BGhI0JHhI4IHRE6InRE6IjQEaEjQkeEjggdEToidEToiNARoSNCR4SOCB0ROiJ0ROiI0BGhI0JHhI681IfObdu+5s8r1JVbAAIPhPUMWxf3BZYAAAAASUVORK5CYII"/> 
              <Square src="https://img.icons8.com/windows/64/000000/square-full.png"/>
          </FromToIcons>
          
          <InputBoxes>
          <Input placeholder="enter pickup location" 
             value={pickup}
             onChange={(e)=> setPickup(e.target.value)}
          />
          <Input placeholder="where to"
           value={dropoff}
           onChange={(e)=> setDropoff(e.target.value)}
            />
          </InputBoxes>
          <PlusIcon src="https://img.icons8.com/ios/50/000000/plus-math.png"/>
          </InputContainer>
          <SavedPlaces>
              <StarIcon src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABOUlEQVRIieWUPUoDQRzF3wQ/6kgiAfEAUTthURRvkMLOCwSjjVew0d4riNbiFWzFVuz9IOCClRBB95ciIw5xdndmNYX4YGA+3v+9NzPMSP8KwDFwNCnxdb6wNgmDc8fg7LfF54GBY/AGtEJqa4EePUmzznhGUjc2qBfAFPDAdzwB02X1xhFakLQlqSGpaVtL0qKk1Zz6G0n3kvqSnm1LJV0ZYx7Hk955UlbF7aeuewcX5QcWjEvvLHAAfPwgeQYcFloD28BrBfEBsBO0PyAB+hHiKbAZdYhAJ8Kgk6dT9NBWIvIsVzHYiDDI5RrfJGA0ejBzgQYvkhrGmGx8IW8HSx7xVKP/p2v7LuqS2oFhJKDnXGAGnAJNZ70OnADvDm83xmDfFl0DSQEvsRyAvRiDGtAGSr/zGO7fxBBzrQOKmDfQHQAAAABJRU5ErkJggg=="/>
              Saved Places
          </SavedPlaces>
          <Link href={{pathname:"/confirm",query:{pickup : pickup,dropoff:dropoff}}}>
          <ConfirmButton>
              Confirm Location
          </ConfirmButton>
          </Link>
      </Wrapper>

  )
};

export default Search;

const Wrapper = tw.div`
bg-gray-200 h-screen
`

const ButtonContainer = tw.div`
bg-white px-4
`

const BackButton = tw.img`
h-12 cursor-pointer
`

const FromToIcons = tw.div`
w-10 flex flex-col mr-2 items-center
`

const InputContainer = tw.div`
bg-white flex items-center px-4 mb-2
`

const Circle = tw.img`
h-2.5
`

const Line = tw.img`
h-10
`

const Square = tw.img`
h-3
`

const InputBoxes = tw.div`
flex flex-col flex-1 
`

const Input = tw.input`
h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none border-none
`
const PlusIcon = tw.img`
w-10 h-10 bg-gray-200 rounded-full ml-3
`

const SavedPlaces = tw.div`
flex items-center bg-white px-4 py-4
`

const StarIcon = tw.img`
bg-gray-400 w-10 h-10 p-2 rounded-full mr-2
`
const ConfirmButton = tw.div`
bg-black text-white flex justify-center mx-5 my-4 py-3 cursor-pointer text-2xl
`