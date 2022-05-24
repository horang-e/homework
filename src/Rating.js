import React from "react";
import './style.css'


function Rating(){
  const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);
  const [rank, setRank] = React.useState(getRandom(0, 5));

  const star_count = Array.from({length: rank}, (v,i)=> i);
  const star_count2 = Array.from({length: 5-rank}, (v,j)=> j);

  return(
      <div>
    {star_count2.map((n,j) =>{
            return <>
            <div key={j} className="circle2"></div></>
    })}
     {star_count.map((n,i) =>{
            return <><div key={i} className="circle"></div>
            </>
    })}
    
      {/* <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div> */}
      </div>
  )

}




export default Rating;
