import {CDN_LINK} from "../utils/constant";

const RestaurantCard = ({resData}) =>{
    // const{resData} = props;
    const{name,cuisines,avgRating,costForTwo,sla,cloudinaryImageId} = resData;

    return(
        <div className='w-[280px] h-[200px] p-[6px] text-start mb-[8vw]'>
           <img className="w-52" alt="food-card" src={`${CDN_LINK}/${cloudinaryImageId}`}/>
            <div className='card-details '>
             <h3>{name}</h3>
             <p>{cuisines.join(", ")}</p>
             <p>⭐{avgRating}</p> 
             <p>{costForTwo}</p> 
             <p>{sla.deliveryTime} minutes</p> 
            </div>
        </div>
    );
}
export default RestaurantCard;
