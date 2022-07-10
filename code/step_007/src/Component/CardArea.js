import React, { useEffect, useState } from 'react'
import CardList from './Card/CardList'

function CardArea({cardData}) {
    // 조건부랜더링 : 조건문의 형식과 유사하지만 그 형식을 단순하게 수행할 수 있도록 처리
    // if(true){}else{} -> () ? 실행 : null ; -> 값 && 값이 있을 때 수행q  

    const [attr, setAttr] = useState(cardData);
    
    useEffect(()=>{setAttr(cardData)},[attr])

    // const codeList = cardData ? cardData.map(data => <CardList attr={data} key={data.id} />) : null;
    // codeList는 cardData 값이 없으면 null이라고 하면 된다.
    // const codeList = cardData && cardData.map(data => { return <CardList attr={data} key={data.id} />});

    return (
    <div className='CardArea'>
        <ul>
            {
                cardData && cardData.map(data => { return <CardList attr={data} key={data.id} />})
            }
        </ul>
    </div>
  )
}

export default CardArea