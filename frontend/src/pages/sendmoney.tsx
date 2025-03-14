import { useSearchParams } from "react-router-dom"
import { BACKEND_URL } from "../config"
import { useRef } from "react"
import  axios  from "axios"


export function Sendmoney(){
    const [searchparams]=useSearchParams()
    
    const name=searchparams.get("name")
    const id=searchparams.get("id")
    const amountinputref=useRef<HTMLInputElement>(null)
    const amount=amountinputref.current?.value
    return<div className="bg-green-100 h-screen flex justify-center items-center">
        <div className="bg-white h-80 w-100 rounded-lg shadow-lg  p-4 ">
            
            <div className="text-3xl text-green-500 pb-8 flex justify-center">send money</div>
            <div className="pt-6">
                <div className="flex  ">
                    
                    <div 
                    className="bg-green-600 px-4 py-2 text-2xl flex items-center  rounded-4xl">
                        {/* @ts-ignore */}
                        {name[0].toUpperCase()}
                        </div>
                    <div className="text-2xl pt-2 pl-3">{name}</div>
                </div>
                <div className="pt-4 pl-2">enter amount (in Rs)</div>
                <div className="pl-2">
                    <input ref={amountinputref} placeholder="enter amount" className="bg-gray-300 px-18 py-2 rounded-lg "></input>
                </div>
                
               <div className="pt-4">
                <div onClick={()=>{
                    axios.post(BACKEND_URL+"/api/v1/account/transfer",{
                        to:id,
                        amount:amount
                    },{
                        headers:{
                            authenticationt:"bearer "+localStorage.getItem("token")
                        }
                    })
                }} className="flex justify-center items-center p-2 bg-green-500 rounded-lg text-lg  ">send money</div>
               </div>
            </div>
           

             
        </div>
    </div>
}