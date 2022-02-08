import tw from "tailwind-styled-components";
import Map from './components/Map';
import Link from 'next/link';
import {auth} from '../firebase';
import { onAuthStateChanged,signOut } from "firebase/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const [user,setUser] = useState(null);
  const router = useRouter();
  useEffect(()=>{
    return onAuthStateChanged(auth,user =>{
       if(user){
         setUser({
           name : user.displayName,
           photoURL : user.photoURL,
         })
       }else{
         setUser(null);
         router.push('/Login')
       }
    })
  },[])
  return (
    <Wrapper>
    <Map/>
      <ActionItems>
        <Headers>
          <Logo src="https://i.ibb.co/n6LWQM4/Post.png" />
          <Profile>
            <UserName>{user && user.name}</UserName>
            <ProfileImg src={user && user.photoURL} onClick={()=>signOut(auth)}/>
          </Profile>
        </Headers>
        <ActionButtons>
          <Link href="/search">           
          <ActionButton>
            <ActionButtonImg src="https://i.ibb.co/cyvcpfF/uberx.png" />
            Ride
            </ActionButton>
          </Link>
          <Link href="/search">
          <ActionButton>
          <ActionButtonImg src="https://i.ibb.co/n776JLm/bike.png" />
            Wheels
            </ActionButton>
            </Link>
            <Link href="/search">
          <ActionButton>
          <ActionButtonImg src="https://i.ibb.co/5RjchBg/uberschedule.png" />
            Reserve
            </ActionButton>
            </Link>
        </ActionButtons>
        <Link href="/search">
        <InputButton>Where to?</InputButton>
        </Link>
      </ActionItems>
      
    </Wrapper>
  )
}

const Wrapper = tw.div`
flex flex-col h-screen 
`

const ActionItems = tw.div`
flex-1 p-4 
`
const Headers = tw.div`
flex items-center justify-evenly p-px  
`
const Logo = tw.img`
h-12 object-contain
`
const Profile = tw.div`
flex items-center 
`
const ProfileImg = tw.img`
h-10 w-10 rounded-full border border-gray-500 p-px object-cover cursor-pointer
`
const UserName = tw.text`
mr-3 font-medium text-sm
`
const ActionButtons = tw.div`
flex mt-5
`

const ActionButton = tw.div`
flex-1 bg-gray-300 m-2 p-4 flex flex-col items-center
font-bold cursor-pointer
`
const ActionButtonImg = tw.img`
object-contain h-20 w-20
`

const InputButton = tw.div`
bg-gray-300 mt-7 text-2xl flex items-center p-2 cursor-pointer m-2
`
