import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {CDN_LINK,MENU_LINK} from "../utils/constant";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    //whenever API is called then that api data we passed to state variable[menu] and when state variable is change our UI will change.
    const[menu,setMenu]=useState(null)

    // params is an object of {resID: '20'} which is a path:"/restaurants/:resID", of element:<RestaurantMenu/>.
    // const params = useParams();

    //Object destructuring.
    const {resID} = useParams();
    // console.log(resID); //20

    useEffect(()=>{
        fetchMenu()
    },[])

    //Fetching Menu Data.
    const fetchMenu = async () => {
        try {
          const data = await fetch(MENU_LINK + resID);
          const json = await data.json();
          setMenu(json.data);
        } catch (error) {
          // Handle the error here
          console.log("Error fetching menu:", error);
        }
      }

      //if menu is null then return shimmer otherwise move to the next line.
      if(menu === null) return <Shimmer/>

    //   const{itemCards}= menu?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    //   console.log(itemCards);

     return (
        <div className="menu">
            <img src={`${CDN_LINK}/${ menu?.cards[0]?.card?.card?.info.cloudinaryImageId}`} alt="img" />
            <h1>{menu?.cards[0]?.card?.card?.info?.name}</h1>
            <h1>{menu?.cards[0]?.card?.card?.info?.cuisines.join(', ')}</h1>
            <h1>{menu?.cards[0]?.card?.card?.info?.costForTwoMessage}</h1>
            <ul>
                {
                   menu?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map((item)=>{
                            return(
                                <li key={item?.card?.info?.id}>
                                    Name:{item?.card?.info?.name} 
                                     Rs.{item?.card?.info?.price}
                                 </li>
                            )
                        })
                }
            </ul>
        </div>
    )
}
export default RestaurantMenu;