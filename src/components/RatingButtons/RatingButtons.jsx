import './RatingButtons.css'

function RatingButtons({onClick}) {
  return (
    <>
    <div className='button-container'>
      <button className='rating-button' onClick={() => onClick(1)} value={1}><p>1</p></button>
      <button className='rating-button' onClick={() => onClick(2)} value={2}><p>2</p></button>
      <button className='rating-button' onClick={() => onClick(3)} value={3}><p>3</p></button>
      <button className='rating-button' onClick={() => onClick(4)} value={4}><p>4</p></button>
      <button className='rating-button' onClick={() => onClick(5)} value={5}><p>5</p></button>
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
