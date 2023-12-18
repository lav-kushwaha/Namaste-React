import React from "react";
import { CDN_LINK } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {

  //useDispatch hooks is react-redux library.
  //It us used to dispatch action on reducers. 
  const dispatch = useDispatch();
  const handleAddItems = (item)=>{
     dispatch(addItem(item))
  }

  //removed items.
  const handleRemoveItems = ()=>{
      dispatch(removeItem())
  }


  return (
    <div className="items-description">
      {items.map((item) => (
        <div className="Item-list-data" key={item.card.info.id}>
          <div className="list-image">
            <img
              src={`${CDN_LINK}/${item.card.info.imageId}`}
              alt="Item-list-Image"
            />
            <button className="add-items" onClick={()=>handleAddItems(item)}>Add+</button>
            <button className="remove-items" onClick={()=>handleRemoveItems(item)}>Remove Item</button>
          </div>
          <div className="Item-list">
            <span><strong>{item.card.info.name}</strong></span>
            <span><strong>₹{item.card.info.price / 100 || item.card.info.defaultPrice/100}</strong></span>
            <p>{item.card.info.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
