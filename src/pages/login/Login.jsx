import React from "react";
import { LoginWithGoogel } from "../../utils/firebaseUtils";
import './login.css';

export default function Login(){
   
    return(
        <div className="loginWrapper">
                <button onClick={()=>{
                    LoginWithGoogel()
                }}>Sign in With Google</button>
                <br/>
                 <button onClick={()=>{
                    LoginWithGoogel()
                }}>Sign in With Apple</button>
            
        </div>
    )
}

