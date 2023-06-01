import {initializeApp} from 'firebase/app';
import { getAuth,signInWithPopup,GoogleAuthProvider } from "firebase/auth";
export const firebaseConfig = {
    apiKey: "AIzaSyDaTpDNKdFpfu2mEuLcoguQ-vrP2rxzLnM",
    authDomain: "fir-react-a3501.firebaseapp.com",
    projectId: "fir-react-a3501",
    storageBucket: "fir-react-a3501.appspot.com",
    messagingSenderId: "430544783199",
    appId: "1:430544783199:web:f0a22a8b9e03c24a3f18ea",
    measurementId: "G-ECM5ME6PFE"
  };
  export function initializeFirebase(){
    const app= initializeApp(firebaseConfig);
  }

  export function LoginWithGoogel(){
    const provider= new GoogleAuthProvider;
    const auth = getAuth();
    signInWithPopup(auth, provider)
    .then((result) => {
        let {user}=result;
        let userobj={
            name:user?.displayName,
            email:user?.email,
            imageUrl:user?.photoURL,

        }
        localStorage.setItem('user',JSON.stringify(userobj))
        window.location.href='/'
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    console.log(error)
  });
  }
  export const isLoggedIn=()=>{
    let userStr=localStorage.getItem('user')
    if(userStr){
        return true
    }
    else{
        return false
    }
  }

export const getUser=()=>{
 let userStr=localStorage.getItem('user')
 if(userStr){
  return JSON.parse(userStr)
 }
} 
 