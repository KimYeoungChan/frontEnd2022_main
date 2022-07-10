import React, { useEffect, useState } from 'react'
import './ViewBox.scss'

function ViewBox() {
  const total = 4;
  const [count, setCount] = useState(0);
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

  // const Next = document.querySelector('.next');
  // Next.addEventListener('click', handlerNextClick)

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
            <li className='action'><a herf="#">
              <span>1번째 광고 요약 설명</span>
              </a></li>
            <li><a herf="#">
              <span>2번째 광고 요약 설명</span>
              </a></li>
            <li><a herf="#">
              <span>3번째 광고 요약 설명</span>
              </a></li>
            <li><a herf="#">
              <span>4번째 광고 요약 설명</span>
              </a></li>
            <li><a herf="#">
              <span>5번째 광고 요약 설명</span>
              </a></li>
          </ul>
          <p>
            <span className='now'>{count + 1}</span>
            /
            <span className='total'>{ total + 1 }</span>
          </p>
        </div>
      <div className='slide_wrapper fade_area'>
        <ul>
          <li>광고1</li>
          <li>광고2</li>
          <li>광고3</li>
          <li>광고4</li>
          <li>광고5</li>
        </ul>
      </div>
      </section>
  )
}

export default ViewBox