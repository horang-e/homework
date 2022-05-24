import React from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useState } from 'react';


const DayRating = (props) => {
  const {day} = useParams();
  console.log(day);
  // console.log(props);
    const [clicked, setClicked] = useState(null);
return (
    <>
      <div className="App">
    <h1> <span className="day">{day}</span> 평점 남기기</h1>
    <div className="wrap">      
   {[1, 2, 3, 4, 5].map(i => (
          <div
         //className에 조건문 넣기
            className={`circle ${
   //i만큼 클릭 하면 circle2 클래스를 실행 
              (clicked >= i) && 'circle2'
            }`}
          
            onClick={() => setClicked(i)}
          />
        ))}
    </div>
    <Link to="/"><button className="mybtn2">평점 남기기</button></Link>
     </div>
    </>
);
};

export default DayRating;