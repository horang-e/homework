import React, { useState }  from "react";
import { Link } from 'react-router-dom';
import Rating from './Rating';
import Button from './Button';
import Average from "./Average";



const reset= () => { window.location.reload(false)}
const Home = () => { 
  return (
    <>
      <div className="App">
      <h2 style={{marginTop:"15px"}}>내 일주일은?</h2>
    <div className='wrap'>
      <div><h3 style={{marginRight:"20px", marginLeft:"20px"}}>일</h3></div>
      <Rating />
      <Link to="/dayrating/일요일"><Button /></Link>
    </div>
    <div className='wrap'>
      <div><h3 style={{marginRight:"20px", marginLeft:"20px"}}>월</h3></div>
      <Rating />
      <Link to="/dayrating/월요일"><Button /></Link>
    </div>
    <div className='wrap'>
      <div><h3 style={{marginRight:"20px", marginLeft:"20px"}}>화</h3></div>
      <Rating />
      <Link to="/dayrating/화요일"><Button /></Link>
    </div>
    <div className='wrap'>
      <div><h3 style={{marginRight:"20px", marginLeft:"20px"}}>수</h3></div>
      <Rating />
      <Link to="/dayrating/수요일"><Button /></Link>
    </div>
    <div className='wrap'>
      <div><h3 style={{marginRight:"20px", marginLeft:"20px"}}>목</h3></div>
      <Rating />
      <Link to="/dayrating/목요일"><Button /></Link>
    </div>
    <div className='wrap'>
      <div><h3 style={{marginRight:"20px", marginLeft:"20px"}}>금</h3></div>
      <Rating />
      <Link to="/dayrating/금요일"><Button /></Link>
    </div>
    <div className='wrap'>
      <div><h3 style={{marginRight:"20px", marginLeft:"20px"}}>토</h3></div>
      <Rating />
      <Link to="/dayrating/토요일"><Button /></Link>
    </div>
    <div>평균 평점</div>
    <div><Average /></div>
    <div><button onClick={reset} className='mybtn'>Reset</button></div>
    </div>
    </>
  )
}

export default Home;