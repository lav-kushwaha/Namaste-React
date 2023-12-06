import RestaurantCard from "./Restaurantcard";
// import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import{Link} from "react-router-dom"
import { RESTAURANTS_API } from "../utils/constant";

const Body = () => {
  //State variable - useState Hooks.
  const[list,setList] = useState([]);
  const[filterList,setFilterList] = useState([]);
  const[search,setSearch] = useState("");

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
     const ratingsFilter = list.filter((item)=>item.avgRating > 4.3)
     setFilterList(ratingsFilter)
  }

  //Reset Button.
  const ResetFilter =()=>{
    setFilterList(list)
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
  // console.log("Body Component Render");


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
              </div>
            <div className='res-container'>            
            {
              filterList.map((item)=>(
                //path:"/restaurants/:resID", element:<RestaurantMenu/>
                //Key should be on the parent Jsx that we map.
                <Link key={item.id} to={`restaurants/${item.id}`}><RestaurantCard resData={item}/></Link>
              ))
            }
            </div>
        </div>
        </div>
    )
    );
}
export default Body;