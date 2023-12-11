import Shimmer from "./Shimmer";
import {CDN_LINK} from "../utils/constant";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    //Object destructuring.
    const {resID} = useParams();
    
    //custom Hooks.
    const menu = useRestaurantMenu(resID);

      //if menu is null then return shimmer otherwise move to the next line.
      if (menu === null) {
        return <Shimmer />;
      }

      const { itemCards } = menu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
      const {cloudinaryImageId, name, cuisines, costForTwoMessage } = menu?.cards[0]?.card?.card?.info;
      
     return (
        <div className="menu">
            <img src={`${CDN_LINK}/${cloudinaryImageId}`} alt="img" />
            <h2>{name}</h2>
            <h2>{cuisines.join(', ')}</h2>
            <h2>{costForTwoMessage}</h2>
            <h1>{menu?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card.title}</h1>
            <ul>
                {
                     itemCards?.map((item)=>{
                                return (
                                // console.log(item)
                                <li key={item?.card?.info?.id}>
                                    Name:  {item?.card?.info?.name}   
                                    Rs : {item?.card?.info?.price/100}
                                 </li>
                         )
                 })
                }
            </ul>
        </div>
    )
}
export default RestaurantMenu;