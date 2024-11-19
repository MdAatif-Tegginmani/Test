import React from 'react'

const TestCard = ({smoothie}) => {
  return (
    <div className='card'>
    <h3>{smoothie.title}</h3>
    <p>{smoothie.method}</p>
    <div className='rating'>{smoothie.rating}</div>
    </div>
  )
}

export default TestCard