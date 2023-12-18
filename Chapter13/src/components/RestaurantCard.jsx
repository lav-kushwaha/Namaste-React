import {CDN_LINK} from "../utils/constant";

const RestaurantCard = ({resData}) =>{
    // const{resData} = props;
    const{name,cuisines,avgRating,costForTwo,sla,cloudinaryImageId} = resData;
    return(
        <div className='res-card'>
           <img alt="food-card" src={`${CDN_LINK}/${cloudinaryImageId}`}/>
            <div className='card-details'>
             <h3>{name}</h3>
             <p>{cuisines.join(", ")}</p>
             <p>⭐{avgRating}</p> 
             <p>{costForTwo}</p> 
             <p>{sla.deliveryTime} minutes</p> 
            </div>
        </div>
    );
}


//Higher Order Component =>VegItems
//This VegItems Is Takes a component "RestaurantCard" and its return new modified component with <p>Veg</p>.
export const VegItems = (RestaurantCard)=>{
    return(props)=>{
        return(
           <>
            <label className="veg-items">Veg</label>
            <RestaurantCard {...props}/>
           </>
        )
    }
}
export default RestaurantCard;
