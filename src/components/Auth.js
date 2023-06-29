import { useState } from 'react'
import {auth} from '../config/firebase'
import {createUserWithEmailAndPassword} from 'firebase/auth'

export const Auth = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const signIn = async () =>{
        try{
            await createUserWithEmailAndPassword(auth, email, password)
        }catch(err){
            console.log(err)
        }
        
    }

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
    </div>
    )
}