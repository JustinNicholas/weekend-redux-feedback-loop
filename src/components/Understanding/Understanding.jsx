import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {useState} from 'react';
import RatingButtons from '../RatingButtons/RatingButtons';
import './Understanding.css'

function Understanding() {

  const history = useHistory();
  const dispatch = useDispatch();
  const [understanding, setUnderstanding] = useState('');

  const handleNext = () => {
    if ( understanding === ''){
      alert('Please select 1 through 5')
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
      <h1 className='card-heading'>How well are you understanding the content?</h1>
      <RatingButtons onClick={(event) => setUnderstanding(event)} />
      {/* <input type="number" placeholder="Understanding?" onChange={ (event) => setUnderstanding(event.target.value) }/> */}
      <div className='next-button' onClick={handleNext}><p className='button-text'>Next</p></div>
    </>
  );
}

export default Understanding;
