import React, { useEffect, useState } from 'react'
import CardList from './Card/CardList'

function CardArea({cardData}) {
    // console.log( cardData );
    console.log(attr);
    const [attr, setAttr] = useState(cardData);
    
    useEffect(()=>{setAttr(cardData)},[attr])

    return (
    <div>
        <ul>
            {cardData.map(data =>
                <CardList 
                attr={data} 
                key={data.id} />
            )}
        </ul>
    </div>
  )
}

export default CardArea