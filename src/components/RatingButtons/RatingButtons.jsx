import './RatingButtons.css'

function RatingButtons({onClick}) {
  return (
    <>
    <div className='button-container'>
      <div className='rating-button' onClick={() => onClick(1)} value={1}><p className='button-text'>1</p></div>
      <div className='rating-button' onClick={() => onClick(2)} value={2}><p className='button-text'>2</p></div>
      <div className='rating-button' onClick={() => onClick(3)} value={3}><p className='button-text'>3</p></div>
      <div className='rating-button' onClick={() => onClick(4)} value={4}><p className='button-text'>4</p></div>
      <div className='rating-button' onClick={() => onClick(5)} value={5}><p className='button-text'>5</p></div>
      {/* <button onClick={onClick} value={6}>6</button>
      <button onClick={onClick} value={7}>7</button>
      <button onClick={onClick} value={8}>8</button>
      <button onClick={onClick} value={9}>9</button>
      <button onClick={onClick} value={10}>10</button> */}
    </div>
    </>
  );
}

export default RatingButtons;
