import { useEffect, useState } from "react"
import { MENU_LINK } from "./constant";
//custom hook
const useRestaurantMenu = (resID) =>{
    const [resList,setRestList] = useState(null)

    useEffect(()=>{
        fetchData();
    },[])

    //Fetching Data.
    const fetchData = async()=>{
        const data = await fetch(MENU_LINK + resID);
        const json = await data.json();
        setRestList(json.data);
    }

    return resList;
}
export default useRestaurantMenu;