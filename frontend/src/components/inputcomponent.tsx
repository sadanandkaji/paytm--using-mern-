
type inputcom={
    placeholder:string,
    reference:any
}
export function Inputcomponent({placeholder,reference}:inputcom){
    return <div className="pt-3">
        <input type="text" placeholder={placeholder} ref={reference} 
        className="border-1 border-black rounded-lg p-2 bg-gray-400 text-black  px-6" ></input>

    </div>
}