import React, { useEffect, useState, useRef } from 'react'
import uuid from 'react-uuid';


import ViewList from './ViewBox/ViewList';
import ListData from './ViewBox/ListData';
import Buttons from './ViewBox/Buttons';
import Indicators from './ViewBox/Indicators';
import Slide_wrapper from './ViewBox/Slide_wrapper';
import './ViewBox.scss'

function ViewBox() { 

  
  // const ListData = ListData;
  const total = ListData.length - 1;
  const timed = 1000;
  const [count, setCount] = useState(0);
  const [ intervalState, setIntervalState ] = useState(true); // PERMOSSION = true
  const moveSlide = useRef(null); //moveSlide.current = null
  
  const handlerNextClick = (e) => { 
    e && e.preventDefault();
    // count >= ListData.length-1 ? setCount(0) : setCount(count + 1);
    setCount( count >= total ? 0 : count + 1);
  }
  const handlerPrevClick = (e) => { 
    e.preventDefault();
    // count <= 0 ? setCount(ListData.length-1) : setCount(count - 1);
    setCount( count <= 0 ? total : count - 1);
  } 

  const startSlide = () => {
    setIntervalState(true);
  if (moveSlide.current !== null) {return}
  moveSlide.current = setInterval(() => handlerNextClick(), timed)
};
  
function stopSlide(){
  setIntervalState(false);
  if( moveSlide.current === null) { return}  
  clearInterval(moveSlide.current);
  moveSlide.current = null;
  }   
  
  useEffect( ()=> {
    intervalState && startSlide();;
    return () => stopSlide();
  },[count, intervalState])

  return (
    <section id="viewBox" onMouseEnter={stopSlide} onMouseLeave={startSlide}>
      <h2 className='blind'>광고 영역</h2>

      <Buttons nextEvent={handlerNextClick} prevEvent={handlerPrevClick} />

      <Indicators
      ListData={ListData}
      count={count} 
      total={total}
      setCount={setCount}
      />

      <Slide_wrapper 
      ListData={ListData}
      count={count}
      />

      </section>
  )
}

export default ViewBox