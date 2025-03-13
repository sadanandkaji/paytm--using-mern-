 import { useRef } from "react";
 import { Inputcomponent } from "../components/inputcomponent";
 import { Button } from "../components/button";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";
import axios from "axios";
 
 
 export function Signup(){
 
     const usernameref=useRef<HTMLInputElement>(null)
     const passwordref=useRef<HTMLInputElement>(null)
     const firstnameref=useRef<HTMLInputElement>(null)
     const lastnameref=useRef<HTMLInputElement>(null)
     const navigate=useNavigate()     

     async function signup(){
        const username=usernameref.current?.value;
        const password=passwordref.current?.value;
        const firstname=firstnameref.current?.value;
        const lastname=lastnameref.current?.value;
        
        if(!username || !password ||!firstname || !lastname){
            alert("please fill in all the details")
            return;
        }

        try{
            await axios.post(BACKEND_URL+"/api/v1/user/signup",{
                username,
                password,
                firstname,
                lastname
            })
            navigate("/signin",{replace:true})
        }catch(e){       
             //@ts-ignore     
           alert(e.response?.data?.message || "error while signin up")
        }

     }
     return <div>
           
        <div className=" bg-black  h-screen w-screen flex justify-center items-center ">       
             <div className="border-3 border-gray-600 h-80 w-70 text-white rounded-lg flex justify-center " >
                 <div >
                     <div className="flex justify-center text-3xl text-gray-500 pb-10 pt-5 p-8 border-b  border-gray-300">
                     signup
                     </div>
                     <div>                       
                         <Inputcomponent placeholder="username" reference={usernameref} ></Inputcomponent>                                               
                         <Inputcomponent placeholder="password" reference={passwordref} ></Inputcomponent>                                            
                         <Inputcomponent placeholder="firstname" reference={firstnameref} ></Inputcomponent>                                            
                         <Inputcomponent placeholder="lastname" reference={lastnameref} ></Inputcomponent>                                            
                     </div>
                     <div className="pt-3 flex justify-center border-b  border-gray-300 pb-3">
                         <Button onClick={signup} variant="primary" size="lg" text="signup"></Button>
                     </div>
                 </div>
             </div>        
         </div>    
     </div>
 }
 

