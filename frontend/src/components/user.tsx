
import { useNavigate } from "react-router-dom";
import { Button } from "./button";

export function User({ user ,userid}: { user: string,userid:Object }) {
    const navigate=useNavigate()
    if (!user) {
        return <div>No user provided</div>;
    }

    const word = user.split('')[0]; // Get the first character
    return (
        <div className="flex justify-between pt-4 shadow items-center">
            <div className="pl-5 pb-3 flex">
                <div className="rounded-3xl px-3 py-1 bg-black text-white text-xl flex items-center">{word}</div>
                <div className="pl-3 text-2xl flex items-center">{user}</div>
            </div>
            <div className="pr-80 pb-3">
                <Button onClick={()=>{
                       navigate("/sendmoney?id="+ userid +"&name=" +user )
                }} variant="secondary" size="sm" text="send money"></Button>
            </div>
        </div>
    );
}