import { useState } from 'react'
import {auth, googleProvider} from '../config/firebase'
import {createUserWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'

export const Auth = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const signIn = async () =>{
        try{
            await createUserWithEmailAndPassword(auth, email, password)
        }catch(err){
            console.log(err)
        }  
    };

    const signInWithGoogle = async () =>{
        try{
            await signInWithPopup(auth, googleProvider)
        }catch(err){
            console.log(err)
        }  
    };

    const logout = async () =>{
        try{
            await signOut(auth)
        }catch(err){
            console.log(err)
        }  
    };
   return(
    <div>
        <input 
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
        />
        <input 
            placeholder="password"
            type='password'
            onChange={(e)=>setPassword(e.target.value)}
        />
        <button onClick={signIn}>sign in</button>
        <button onClick={signInWithGoogle}>Sign in wit Google</button>
        <button onClick={logout}>Logout</button>
    </div>
    )
}