import React from "react";
import './style.css'
//  const Yoil = () => {
//             const dayList = ['일','월','화','수','목','금','토']
//             let day = new Date().getDay()
//             const yoil = dayList[day+1]
//            console.log(yoil)}  
function Rating(props) {
           console.log(props.rank)
  return (
    <div>
        <div className="wrap">
         {Array.from({length :(props.rank)}).map((n,i) =>{
                     return <div key={i}  className="circle2"/>})}
         {Array.from({length :(5-props.rank)}).map((n,i) =>{
                     return <div key={i}  className="circle"/>})}
        </div>
           {/* <div className="circle2"/>
            {circle_count2.map((n,i) =>{
              return <div key={i}  className="circle2"/>})}
            {circle_count.map((b,i) =>{
              return  <div key={i}  className="circle"/>})} */}
         
    </div>
  )

}




export default Rating;
