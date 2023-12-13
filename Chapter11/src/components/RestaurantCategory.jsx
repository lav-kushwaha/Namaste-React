import React from 'react'
import ItemList from './ItemList';
const RestaurantCategory = (props)=>{
    return(     
         <div className="menu-recommended">
            <div className="menu-items">
                <span>{props?.title} ({props.itemCards?.length})</span>
                <span>⬇️</span>
            </div>
            <ItemList items={props.itemCards}/>
         </div>      
    )
}
export default RestaurantCategory;