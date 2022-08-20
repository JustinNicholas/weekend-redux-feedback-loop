import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {useState} from 'react';
import RatingButtons from '../RatingButtons/RatingButtons';

function Understanding() {

  const history = useHistory();
  const dispatch = useDispatch();
  const [understanding, setUnderstanding] = useState('');

  const handleNext = () => {
    if ( understanding === ''){
      alert('Please select 1 through 10')
    } else {
      dispatch({
          type: 'SET_UNDERSTANDING',
          payload: Number(understanding)
      });
      
      history.push('/support')
    }
  }

  return (
    <>
      <h1>How well are you understanding the content?</h1>
      <RatingButtons onClick={(event) => setUnderstanding(event.target.value)} />
      {/* <input type="number" placeholder="Understanding?" onChange={ (event) => setUnderstanding(event.target.value) }/> */}
      <button onClick={handleNext}>Next</button>
    </>
  );
}

export default Understanding;
