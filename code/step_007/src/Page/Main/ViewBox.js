import React, { useEffect, useState, useRef } from 'react'
import UseRef from '../../Component/UseRef';
// import{ v4 as uuid4 } from 'uuid';
// import uuid from 'react-uuid';
import './ViewBox.scss'
import ViewList from './ViewBox/ViewList';
// let listData = {current:null};

function ViewBox() { 
  const total = 4;
  const timed = 1000;
  const [count, setCount] = useState(0);
  const listData = [
      {num:1, color:'#adf', id:'slide_001'},
      {num:2, color:'#f4a', id:'slide_002'},
      {num:3, color:'#af7', id:'slide_003'},
      {num:4, color:'#af7', id:'slide_004'},
      {num:5, color:'#faa', id:'slide_005'}
  ];
 
  const moveSlide = useRef();

  const startSlide = () => moveSlide.current = setInterval(() => { handlerNextClick() },timed);
  const stopSlide = () => clearInterval(moveSlide.current) 
  
  useEffect( ()=> {
    startSlide();
    return stopSlide();
  })

  // const listData = [1,2,3,4,5];
  // const listColor = ['#adf', '#f4a', 'af7', '#ccf', '#faa'];
  // const setUUID = [uuid(), uuid(), uuid(), uuid()];

  useEffect( () => {
    console.log( count );
  },[count]);

  const handlerNextClick = (e) => { 
    e && e.preventDefault();
    count >= total ? setCount(0) : setCount(count + 1);
  } //count가 4보다 같거나 작으면 setCount값을 0으로 한다. 아니면 count +1 값으로 한다.
  const handlerPrevClick = (e) => { 
    e.preventDefault();
    count <= 0 ? setCount(total) : setCount(count - 1);
  } //count가 0보다 작거나 같으면 setCount값을 total으로 한다. 아니면 count -1 값으로 한다.

  return (
    <section id="viewBox" onMouseEnter={stopSlide} onMouseLeave={startSlide}>
      <h2 className='blind'>광고 영역</h2>
        <div className='buttons'>
          <button type="button" className='next' onClick={handlerNextClick}>
            <span className='blind'>next</span>
          </button>
          <button type="button" className='prev' onClick={handlerPrevClick}>
            <span className='blind'>prev</span>
            </button>
        </div>
        <div className='indicators'>
          <ul className='blind_area'>
            {
            listData.map((data,index)=> {
              return ( <li key={data.num[index]} className={count === index ? 'action' : null}>
                  <a href="#" onClick={(e)=> {e.preventDefault(); return setCount(index)} }>
                    <span>{data.num}번째 광고 요약 설명</span>
                  </a>
                </li>)
              }
            )}
          </ul>
          <p>
            <span className='now'>{count + 1}</span>
            /
            <span className='total'>{ total + 1 }</span>
          </p>
        </div>
      <div className='slide_wrapper fade_area'>
        <ul>
          {listData.map((data,index) =>
            <ViewList 
            key={data.num[index]} 
            action={count === index ? 'action' : null} 
            bgColor={data.color}
            content={data.id} /> 
          )}
        </ul>
      </div>
      </section>
  )
}

export default ViewBox