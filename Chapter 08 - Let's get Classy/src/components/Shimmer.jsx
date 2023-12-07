import React from 'react';

const Shimmer = () => {
  return (
    <div className="shimmer-container">
        {/*This uses the spread syntax (...) to spread the elements of the newly created array into a new array.*/}
        {/* =>Essentially, it creates a new array with 20 undefined elements. */}
      {[...Array(20)].map((_, index) => (
        <div className="shimmer-card" key={index}></div>
      ))}
    </div>
  );
};

export default Shimmer;
