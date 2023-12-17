import Shimmer from "./Shimmer";
import {CDN_LINK} from "../utils/constant";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
    //Object destructuring.
      const {resID} = useParams();
      
      //custom Hooks.
      const menu = useRestaurantMenu(resID);

      //Managing controlled component.
      const[showIndex,setShowIndex] = useState(0);

      //if menu is null then return shimmer otherwise move to the next line.
      if (menu === null) {
        return <Shimmer />;
      }

      // const {itemCards } = menu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
      const {name, cuisines, costForTwoMessage,avgRating } = menu?.cards[0]?.card?.card?.info;
      const categories =
      menu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) =>
          c.card?.["card"]?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );

     return (
        <div className="menu">
            <div className="menu-image-container">
            <img src={`${CDN_LINK}/${ menu?.cards[0]?.card?.card?.info.cloudinaryImageId}`} alt="img" />
            <div className="menu-detail">
                <h3>{name}</h3>
                <h3>{cuisines.join(', ')}</h3>
                <h2>{costForTwoMessage}</h2>
                <p>⭐{avgRating}</p>
            </div>
            </div>
           <div className="menu-recommended-container">
            <h1>BurgerScript Cafe</h1>
             {categories.map((category,index) => (
                  //Controlled Component.
                    <RestaurantCategory key={category?.card?.card?.title} 
                    {...category.card.card} 
                    showItems={index===showIndex?true:false || showIndex===index&&setShowIndex(!setShowIndex) }
                    showIndex={() => setShowIndex((prevIndex) => (prevIndex === index ? null : index))}
                    />
                ))}
                 
           </div>
        </div>
    )
}
export default RestaurantMenu;