import RestaurantCard from "./Restaurantcard";
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

  //Reset Button.
  const ResetFilter =()=>{
    setFilterList(list)
  }

  //Search Functionality.
  const SearchFood = () =>{
    const searching = list.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase()))
    setFilterList(searching);
  }

  const status = useOnlinestatus();
  if(status === false) return <InternetConnectionChecker/>

    return(
        list.length == 0 ? (<Shimmer/>):(
        <div className="body-section">
          <div className='body'>
            <div className='filter flex'>
              <div className="search py-8 ml-40 ">
                <input type="text" 
                  className="border-solid border-gray p-2 w-60 rounded-s-lg focus:outline-blue-500"
                  placeholder="search for restaurant and food"
                  value={search} 
                  onChange={(e)=>setSearch(e.target.value)}
                  />
                  <button className="w-40 py-2 bg-blue-500 rounded-e-lg text-white"
                   onClick={SearchFood}>Search</button>
              </div>
             <div className="flex items-center ml-10 gap-4">
              <button className="px-5 py-2 bg-gray-100 rounded-lg" onClick={FilterCard}>Top Rated Restaurant</button>
              <button className="px-5 py-2 bg-gray-100 rounded-lg" onClick={ResetFilter}>Reset</button>
             </div>
              </div>
            <div className='flex'>            
            {
              filterList.map((item)=>(
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