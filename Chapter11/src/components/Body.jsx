import RestaurantCard, { VegItems } from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import{Link} from "react-router-dom"
import { RESTAURANTS_API } from "../utils/constant";
import useOnlinestatus from "../utils/useOnlinestatus";
import InternetConnectionChecker from "./Nointernet";

const Body = () => {
  //State variable - useState Hooks.
  const[list,setList] = useState([]);
  const[filterList,setFilterList] = useState([]);
  const[search,setSearch] = useState("");


//Higher Order Component=> It takes a component which is Restaurant Card.
const VegItem = VegItems(RestaurantCard);

  // console.log(list)
  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async () =>{
      const data = await fetch(RESTAURANTS_API);
      const json = await data.json();
      //optional chaining.
      const restaurantInfo = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map((item)=>item?.info);
      setList(restaurantInfo)
      setFilterList(restaurantInfo)
  }

  //Filteration Logic.
  const FilterCard =()=>{
     const ratingsFilter = list.filter((item)=>item.avgRating > 4)
     setFilterList(ratingsFilter)
  }

  //Pure Veg.
  const PureVeg=()=>{
     const veg = list.filter((item)=>item.veg==true);
     setFilterList(veg)
  }

  //LessThan 300
  const LessThan300 = () => {
      const less = list.filter((item) => {
      const costForTwoNumeric = parseInt(item.costForTwo.match(/\d+/)[0], 10);
      return costForTwoNumeric < 300;
    });
      setFilterList(less);
  };
  

  //Reset Button.
  const ResetFilter =()=>{
    setFilterList(list)
  }

  //Search Functionality.
  const SearchFood = () =>{
    const searching = list.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase()))
    setFilterList(searching)
  }

  const status = useOnlinestatus();
  if(status === false) return <InternetConnectionChecker/>

    return(
        list.length == 0 ? (<Shimmer/>):(
        <div className="body-section">
          <div className='Body'>
            <div className='filter'>
              <div className="search">
                <input type="text" 
                placeholder="search for restaurant and food"
                 value={search} 
                 onChange={(e)=>setSearch(e.target.value)}/>
                  <button onClick={SearchFood}>Search</button>
              </div>
              <button className="filter-btn" onClick={FilterCard}>Top Rated Restaurant</button>
              <button className="filter-btn" onClick={ResetFilter}>Reset</button>
              <button className="filter-btn" onClick={PureVeg}>Pure Veg</button>
              <button className="filter-btn" onClick={LessThan300}>Less than Rs. 300</button>
              </div>
            <div className='res-container'>            
              {
              filterList.map((item)=>(
                //path:"/restaurants/:resID", element:<RestaurantMenu/>
                //Key should be on the parent Jsx that we map.
                <Link key={item.id} to={`restaurants/${item.id}`}>
                 {
                
                 //if item.veg is true then return HOC Component(VegItem) otherwise return normal RestauarantCard.
                 item.veg?<VegItem resData={item}/>
                 :<RestaurantCard resData={item}/>
                 }
                </Link>
              ))
            }
            </div>
        </div>
        </div>
    )
    );
}
export default Body;