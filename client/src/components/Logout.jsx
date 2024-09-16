import React from "react";
import { useNavigate } from "react-router-dom";
import { UserData } from "../context/UserContext";

const Logout = ()=>{
    const navigate = useNavigate();
    const {setIsAuth, setUser} = UserData();
    return(
        <div className="bg-gray-100 rounded-md p-2">
            <div onClick={()=>{
                    localStorage.clear()
                    setIsAuth(false);
                    setUser([])
                    navigate('/')

                }} className="cursor-pointer">Logout</div>
        </div>
    )
}

export default Logout;