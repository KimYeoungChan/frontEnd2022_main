import React, { useState } from 'react'
import ContaninerApp from '../../Component/ContainerApp'
import './Tesimonals.scss'

function Testimonals() {

  const cardList = [ 'r', 'r','r', 'r', 'r','r','r','r'];
  const [list, setList] = useState(cardList);
  // for(let i=0; i<35; i++){
  //   setList(list=> {...list,})
  // }

  return (
    <article id="tesimonals">
      <ContaninerApp>
        <h3>testimonals</h3>
        <p>Awsome clients we've worked with</p>
      </ContaninerApp>

      <div className="worked_card_list">
        <div className="indicator"></div>
        
        <ul className='card_list'>
          {
            cardList.map((data,index) => <li key={index}>index</li>)
          }
        </ul>
      </div>
      </article>
  )
}

export default Testimonals