import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = ()=>{
    const navigate = useNavigate();
    return(
        <div className="bg-gray-100 rounded-md p-2">
            <div onClick={()=>{
                    localStorage.clear()
                    navigate('/')

                }} className="cursor-pointer">Logout</div>
        </div>
    )
}

export default Logout;