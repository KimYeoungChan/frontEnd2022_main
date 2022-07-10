import React, { useEffect, useState } from 'react'
import{ v4 as uuid4 } from 'uuid';
import './ViewBox.scss'

function ViewBox() { 
  const total = 4;
  const [count, setCount] = useState(0);
  const listData = [1,2,3,4,5];

  useEffect( () => {
    console.log( count );
  },[count]);

  const handlerNextClick = (e) => { 
    e.preventDefault();
    count >= total ? setCount(0) : setCount(count + 1);
  } //count가 4보다 같거나 작으면 setCount값을 0으로 한다. 아니면 count +1 값으로 한다.
  const handlerPrevClick = (e) => { 
    e.preventDefault();
    count <= 0 ? setCount(total) : setCount(count - 1);
  } //count가 0보다 작거나 같으면 setCount값을 total으로 한다. 아니면 count -1 값으로 한다.

  return (
    <section id="viewBox">
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
            listData.map((data,index)=>
            <li key={uuid4()} className={count === index ? 'action' : null}>
              <a href="#" onClick={(e)=> {e.preventDefault(); return setCount(index)} }>
                <span>{data}번째 광고 요약 설명</span></a>
            </li>)
            }
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
          <li key={uuid4()} className={count === index ? 'action' : null}>광고{data}</li>
          )}
        </ul>
      </div>
      </section>
  )
}

export default ViewBox