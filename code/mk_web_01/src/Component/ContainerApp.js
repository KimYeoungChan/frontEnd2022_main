import React from 'react'

function Contaniner(props) {
  // console.log( props );
  return (
    <div className='container'>
          {props.children}
    </div>
  )
}

export default Contaniner