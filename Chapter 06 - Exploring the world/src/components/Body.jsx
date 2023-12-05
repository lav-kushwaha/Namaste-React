import RestaurantCard from "./Restaurantcard";
// import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  //State variable - useState Hooks.
  const[list,setList] = useState([]);
  const[filterList,setFilterList] = useState([]);
  const[search,setSearch] = useState("");

//=>This callback function is call after the our component render is finished.
  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async () =>{
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.2920121&lng=70.7874667&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      //optional chaining=>?.
       restaurantInfo = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map((item)=>item?.info);
      setList(restaurantInfo)
      setFilterList(restaurantInfo)
  }

  //Filteration Logic.
  const FilterCard =()=>{
     const ratingsFilter = list.filter((item)=>item.avgRating > 4)
     setFilterList(ratingsFilter)
  }

  //Reset Button.
  const ResetFilter =()=>{
    setFilterList(restaurantInfo)
  }

  //Search Functionality.
  const SearchFood = () =>{
    const searching = list.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase()))
    setFilterList(searching);
  }


//if element list length is zero then render shimmer components.
//Conditional Rendering.
  // if(list.length === 0){
  //   return <Shimmer/>
  // }

  //Whenever i type on input field everytime body component is render bcz state variable is update everytime in value="search".
  //Whenever state varaible is updates, react triggers a reconciliation cycle(re-renders the component)
  // console.log("Body Component Render");


    return(
        list.length == 0 ? (<Shimmer/>):(
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
              </div>
            <div className='res-container'>            
            {
              filterList.map((item)=>(
               <RestaurantCard key={item.id} resData={item}/>
              ))
            }
            </div>
        </div>
    ));
}
export default Body;