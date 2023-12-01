import CDN_LINK from "../utils/constant";
const RestaurantCard = (props) =>{
    const{resData} = props;
    const{ name,cuisines,avgRating,costForTwo,deliveryTime} = resData?.data;
    return(
        <div className='res-card'>
           <img alt="food-card" src={`${CDN_LINK}/${resData.data.cloudinaryImageId}`}/>
            <div className='card-details'>
             <h3>{name}</h3>
             <p>{cuisines.join(", ")}</p>
             <p>{avgRating} ⭐</p> 
             <p>{costForTwo/100}</p> 
             <p>{deliveryTime} minutes</p> 
            </div>
        </div>
    );
}
export default RestaurantCard;
