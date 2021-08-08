import React from 'react';

export default function Bet(props) {
  return (
    <div className='bet'>
      <h2>{props.name}</h2>
      <h3>{props.amount}</h3>
      <ul>
        {props.participants}
      </ul>
    </div>
  )
}
