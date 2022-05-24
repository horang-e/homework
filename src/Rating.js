import React from "react";
import './style.css'
import Average from "./Average";

function Rating(){
  
  const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);
  const [rank, setRank] = React.useState(getRandom(0, 5));
  console.log(getRandom(0, 5))
  const star_count = Array.from({length: 5-rank}, (v,i)=> i);
  //console.log(star_count)
  const star_count2 = Array.from({length: rank}, (v,j)=> j);
  //console.log(star_count2)

  return(
      <div>
          {star_count.map((n,i) =>{
            return <><div key={i} id={i} className="circle2"></div>
            </>
    })}
    {star_count2.map((n,j) =>{
            return <>
            <div key={j} id={j} className="circle"></div></>
           
    })} 
   
    
     
      </div>
  )

}




export default Rating;
