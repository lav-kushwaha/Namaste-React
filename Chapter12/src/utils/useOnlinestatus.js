import { useEffect, useState } from "react";

const useOnlinestatus = ()=>{

    const[Onlinestatus,setOnlinestatus] = useState(true)

    useEffect(()=>{
        window.addEventListener("online",()=>{
            setOnlinestatus(true)
        })
        window.addEventListener("offline",()=>{
            setOnlinestatus(false)
        })
    },[])

    return Onlinestatus;
}

export default useOnlinestatus;