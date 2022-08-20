function RatingButtons({onClick}) {
  return (
    <>
      <button onClick={onClick} value={1}>1</button>
      <button onClick={onClick} value={2}>2</button>
      <button onClick={onClick} value={3}>3</button>
      <button onClick={onClick} value={4}>4</button>
      <button onClick={onClick} value={5}>5</button>
      <button onClick={onClick} value={6}>6</button>
      <button onClick={onClick} value={7}>7</button>
      <button onClick={onClick} value={8}>8</button>
      <button onClick={onClick} value={9}>9</button>
      <button onClick={onClick} value={10}>10</button>
    </>
  );
}

export default RatingButtons;
