import React, { useState }  from "react";
import { Link } from 'react-router-dom';
import Rating from './Rating';




const Home = () => { 
const randomNum = Array(7).fill().map(() => (Math.floor(Math.random() * 6)))
const [rank, setRank] = useState(randomNum);
let average = (randomNum.reduce((a,b)=>a+b,0)/7).toFixed(1)
const [ave , setAve] = useState(average)
const reset = () => {let a= 0.0;
  setAve(a) }
const reload = () => (window.location.reload(false))
  return (
    <> 
      <div className="App">
      <h2 style={{marginTop:"15px"}}>내 일주일은?</h2>
    <div className='wrap'>
      <div><h3 style={{marginRight:"20px", marginLeft:"20px"}}>일</h3></div>
      <Rating rank={rank[0]} />
      <Link to="/dayrating/일요일"><div className="rank"/></Link>
      </div>
    <div className='wrap'>
      <div><h3 style={{marginRight:"20px", marginLeft:"20px"}}>월</h3></div>
      <Rating rank={rank[1]}/>
      <Link to="/dayrating/월요일"><div className="rank"/></Link>
    </div>
    <div className='wrap'>
      <div><h3 style={{marginRight:"20px", marginLeft:"20px"}}>화</h3></div>
      <Rating rank={rank[2]}/>
      <Link to="/dayrating/화요일"><div className="rank"/></Link>
    </div>
    <div className='wrap'>
      <div><h3 style={{marginRight:"20px", marginLeft:"20px"}}>수</h3></div>
      <Rating rank={rank[3]}/>
      <Link to="/dayrating/수요일"><div className="rank"/></Link>
    </div>
    <div className='wrap'>
      <div><h3 style={{marginRight:"20px", marginLeft:"20px"}}>목</h3></div>
      <Rating rank={rank[4]}/>
      <Link to="/dayrating/목요일"><div className="rank"/></Link>
    </div>
    <div className='wrap'>
      <div><h3 style={{marginRight:"20px", marginLeft:"20px"}}>금</h3></div>
      <Rating rank={rank[5]}/>
      <Link to="/dayrating/금요일"><div className="rank"/></Link>
    </div>
    <div className='wrap'>
      <div><h3 style={{marginRight:"20px", marginLeft:"20px"}}>토</h3></div>
      <Rating rank={rank[6]}/>
      <Link to="/dayrating/토요일"><div className="rank"/></Link>
    </div>
    <div>평균 평점</div>
    <div>{ave}</div>
    <div><button onClick={() =>{reset()}} className='mybtn'>Reset</button></div>
    </div>

    
    </>
    
  )
  
}

export default Home;