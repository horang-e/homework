import React from "react";
import './style.css'

function Average(){
  const getRandom = (min, max) =>Math.floor (Math.random() * (max - min) + min);
  const star_count = Array.from({length: 7}, (v,i)=> i);
  console.log(getRandom(0, 5));
  console.log(star_count);
  const sum = star_count.reduce((a,b) => a+b,0)
  return (
    sum/7
   )
}





export default Average;