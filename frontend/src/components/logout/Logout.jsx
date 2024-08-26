import { Button } from "primereact/button";
import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = ()=>{
    const navigate = useNavigate();

    const logout = () =>{
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        navigate("/")
    }


    return(
        <>
        <Button label="Sair" onClick={logout}/>
        </>
    );

}
export default Logout;