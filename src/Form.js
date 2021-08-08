import React, { useState } from 'react';
import Bet from './Bet';

export default function Form() {
  const [bet, setBet] = useState({});


  function handleChange({target}) {
    const {name, value} = target;
    setBet((prevBet) => ({
      ...prevBet,
      [name]: value
    }));
  }



  function handleSubmit(event) {

    if (bet) {
    event.preventDefault();
    alert(JSON.stringify(bet, '', 2));
    return (<Bet name={bet.title}  amount={bet.amount}/>)

    }
  }
  return (
    <>
    <h2>Enter a bet:</h2>
    <form action="" onChange={handleChange} onSubmit={() => {
      handleSubmit();

    }
    }>
      <label htmlFor="">Enter a bet name:</label>
      <input type="text" name="title" value={bet.title}/>
      <label htmlFor="">Enter a bet amount:</label>
      <input type="decimal" name="amount" id="" value={bet.amount}/>
      <input type='submit' />
    </form>

    </>
    )
}
