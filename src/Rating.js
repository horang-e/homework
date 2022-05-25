import React, {useState} from "react";
import './style.css'
import Average from "./Average";
import Home from "./Home";

function Rating(){
  
  const getRandom = Math.floor(Math.random() * 6);
  const [rank, setRank] = useState(getRandom);
  //console.log(getRandom(0, 5))
  const star_count = Array.from({length: 5-rank}, (i)=> i);
 console.log(rank)
  const star_count2 = Array.from({length: rank}, (j)=> j);
  //console.log(star_count2)

  // const average = (rank)=>{
  //   const randomNum = [0,0,0]
  //   const randomArr = randomNum.map((a)=>(a = this.rank))
  //   console.log(this.rank)}

  return(
      <div>
          {star_count2.map((n,j) =>{
            return <div key={j} id={j} className="circle2"/>
    })}
           {star_count.map((n,i) =>{
            return  <div key={i} id={i} className="circle"/>
           
    })} 
   
    
     
      </div>
  )

}




export default Rating;
