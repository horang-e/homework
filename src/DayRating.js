import React from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import Rating from './Rating';
import { useState } from 'react';

const DayRating = (props) => {
  const {day} = useParams();
  console.log(day);
  // console.log(props);

return (
    <>
   <div className="App">
    <h1> <span className="day">{day}</span> 평점 남기기</h1>
    <div className="wrap">
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
    </div>
    <Link to="/"><button className="mybtn2">평점 남기기</button></Link>
     </div>

     
    </>
);
};

export default DayRating;