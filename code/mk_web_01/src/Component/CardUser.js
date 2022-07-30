import React from 'react'
import './CardUser.scss'

function CardUser(props) {
    console.log( props );
  return (
    <div className='card_user'>
        <div className="user_image" style={{backgroundImage:`url(${props.bgImg})`}}>
            <img src={props.bgImg} alt={props.usefamily} />
        </div>
        <p className='user_name'><span>{props.userName}</span> <span>{props.usefamily}</span></p>
        <p className='user_position'>{props.userPosition}</p>
    </div>
  )
}

export default CardUser