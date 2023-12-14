import React from "react";
import { CDN_LINK } from "../utils/constant";

const ItemList = ({ items }) => {
  return (
    <div className="items-description">
      {items.map((item) => (
        <div className="Item-list-data" key={item.card.info.id}>
          <div className="list-image">
            <img
              src={`${CDN_LINK}/${item.card.info.imageId}`}
              alt="Item-list-Image"
            />
            <button>Add+</button>
          </div>
          <div className="Item-list">
            <span>{item.card.info.name}</span>
            <span>₹{item.card.info.price / 100}</span>
            <p>{item.card.info.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
