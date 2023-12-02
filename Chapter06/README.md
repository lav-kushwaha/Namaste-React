//Rajkot Loacation API.
// https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.2920121&lng=70.7874667&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING

//Another Swiggy API.
// https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING



#Shimmer UI.
#jsx file.
import React from 'react';
import './Shimmer.css';
const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {[...Array(20)].map((_, index) => (
        <div className="shimmer-card" key={index}></div>
      ))}
    </div>
  );
};

export default Shimmer;

#Css
#1st style basic and simple.

.shimmer-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2vw;
}

.shimmer-card {
  padding: 6px;
  width: 300px;
  height: 400px;
  text-align: center;
  transition: 0.3s ease-out;
  border: 2px solid rgb(217, 205, 205);
  background-color: #bbb;
  position: relative;
  overflow: hidden;
}

.shimmer-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 200%;
  height: 100%;
  background: linear-gradient(to right, transparent 0%, #fff 50%, transparent 100%);
  animation: shimmer 1.5s infinite linear;
}

@keyframes shimmer {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

#2nd-Style cool css
.shimmer-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 2vw;
  }
  
  .shimmer-card {
    padding: 20px;
    width: 300px;
    height: 400px;
    text-align: center;
    transition: 0.3s ease-out;
    border: 2px solid #3498db;
    background-color: #2980b9;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(52, 152, 219, 0.5);
  }
  
  .shimmer-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -200%;
    width: 200%;
    height: 100%;
    background: linear-gradient(to right, transparent 0%, #fff 50%, transparent 100%);
    animation: shimmer 1.5s infinite linear;
  }
  
  @keyframes shimmer {
    0% {
      left: -200%;
    }
    100% {
      left: 200%;
    }
  }
  