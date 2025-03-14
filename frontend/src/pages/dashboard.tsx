import { Appbar } from "../components/appbar";
import { Balance } from "../components/balance";
import { Users } from "../components/users";

export function Dashboard(){
    return <div className=" h-screen bg-green-100 ">
        <div>
            <Appbar></Appbar>
        </div>
        <div>
            <Balance currentbalance="20,000"></Balance>
        </div>
        <div>
            <Users></Users>
        </div>

    </div>
}