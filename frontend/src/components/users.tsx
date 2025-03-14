import { useEffect, useState } from "react";
import { User } from "./user";
import { BACKEND_URL } from "../config";
import axios from "axios";

interface UserType {
    username: string;
    firstname: string;
    lastname: string;
    _id: string;
}

export function Users() {
    const [users, setUsers] = useState<UserType[]>([]); 
    const [filter,setfilter]=useState<string>("")

    useEffect(() => {
        axios
            .get<{ user: UserType[] }>(`${BACKEND_URL}/api/v1/user/bulk?filter=${filter}`) // Define the expected response type
            .then((res) => {
                if (Array.isArray(res.data.user)) {
                    setUsers(res.data.user); // Set the users array from the response
                } else {
                    console.error("Unexpected response structure:", res.data);
                }
            })
            .catch((err) => {
                console.error("Error fetching users:", err);
            });
    }, [filter]);

    return (
        <div>
            <div className="pl-8 text-2xl pt-3 pb-3">Users</div>
            <div className="pl-8 pb-10">
                <input
                    className="bg-white px-20 py-2 border-2 border-black rounded-md"
                    placeholder="search users"
                    type="text"
                    onChange={(e)=>{
                        setfilter(e.target.value)
                    }}

                />
            </div>

            <div>
                {users.map((user) => (
                    <User key={user._id} user={user.firstname } userid={user._id} /> // Pass the username to the User component
                ))}
            </div>
        </div>
    );
}