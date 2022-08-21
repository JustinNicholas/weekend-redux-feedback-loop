import './RatingButtons.css'

function RatingButtons({onClick}) {
  // We render the 5 rating buttons on each page and pass through the value of each on click to the on click function in the prop.
  // these are called in feelings, support, and understanding.
  return (
    <>
    <div className='button-container'>
      <button className='rating-button' onClick={() => onClick(1)} value={1}><p>1</p></button>
      <button className='rating-button' onClick={() => onClick(2)} value={2}><p>2</p></button>
      <button className='rating-button' onClick={() => onClick(3)} value={3}><p>3</p></button>
      <button className='rating-button' onClick={() => onClick(4)} value={4}><p>4</p></button>
      <button className='rating-button' onClick={() => onClick(5)} value={5}><p>5</p></button>
    </div>
    </>
  );
}

export default RatingButtons;
