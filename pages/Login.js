import React, { useEffect } from 'react';
import tw from 'tailwind-styled-components/dist/tailwind';
import {useRouter} from 'next/router';
import {signInWithPopup,onAuthStateChanged}  from 'firebase/auth';
import {auth,provider} from '../firebase'


const Login = () => {
    const router = useRouter();
    useEffect(()=>{
        onAuthStateChanged(auth,user =>{
            if(user){
                router.push("/");
            }
        } 
    )},[])
  return (
      <Wrapper>
          <LoginPage>
          <UberLogo src="https://i.ibb.co/n6LWQM4/Post.png" />
          <LogIn>Sign in to access your account </LogIn>
          <LoginImg src="https://i.ibb.co/CsV9RYZ/login-image.png
" />
          <LoginButton onClick={()=> signInWithPopup(auth,provider)}>
              Sign In With Google
          </LoginButton>
          </LoginPage>
      </Wrapper>
  );
};

export default Login;
const Wrapper = tw.div`
bg-gray-200 h-screen p-10 flex justify-center
`
const LoginPage = tw.div``

const UberLogo = tw.img`
h-12 object-contain 
`

const LogIn = tw.div`
text-4xl text-gray-500 py-4
`

const LoginImg = tw.img`
w-100 h-60 object-contain ml-5
`

const LoginButton = tw.div`
bg-black text-white py-4 px-4 text-xl text-center mt-4 cursor-pointer
`
