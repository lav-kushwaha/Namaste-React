import RestaurantCard from "./Restaurantcard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  //State variable - useState Hooks.
  const[list,setList] = useState(resList);

  //Regular Variable.
  // const list = resList;

  //Another way to write Usestate.
  // const arr = useState(resList);
  //Array destructuring.
  // const [list,setList] = arr;
  // const list = arr[0];
  // const setList = arr[1]


  //Filteration Logic.
  const FilterCard =()=>{
     const ans = list.filter((item)=>item.data.avgRating > 4.4)
     setList(ans)
  }

  //Reset Button.
  const ResetFilter =()=>{
    setList(resList);
  }

    return(
        <div className='Body'>
            <div className='filter'>
              <button className="filter-btn" onClick={FilterCard}>Top Rated Restaurant</button>
              <button className="filter-btn" onClick={ResetFilter}>Reset</button>
              </div>
            <div className='res-container'>            
            {
              list.map((item,index)=>(
               <RestaurantCard key={item.data.id} resData={item}/>
              ))
            }
            </div>
        </div>
    );
}
export default Body;