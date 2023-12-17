import React from "react";
import { CDN_LINK } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {

  //useDispatch hooks is react-redux library.
  //It us used to dispatch action on reducers. 
  const dispatch = useDispatch();
  const handleAddItems = (item)=>{
     const ans = dispatch(addItem(item))
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
            <button onClick={()=>handleAddItems(item)}>Add+</button>
          </div>
          <div className="Item-list">
            <span>{item.card.info.name}</span>
            <span>₹{item.card.info.price / 100 || item.card.info.defaultPrice/100}</span>
            <p>{item.card.info.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
