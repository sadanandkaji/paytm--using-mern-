interface balanceprops{
currentbalance:string
}

export function Balance(props:balanceprops){
    return <div className="flex shadow-sm border-b border-gray-400 p-6 items-center ">
        <div className="text-2xl">your balance</div>
        <div className="text-xl pl-5 pr-1">Rs</div>
        <div className="text-gray-800 text-lg  pt-1"> {props.currentbalance}</div>

    </div>
}