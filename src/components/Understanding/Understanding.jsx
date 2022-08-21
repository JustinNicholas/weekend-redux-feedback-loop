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
    // checks that input is entered before sending the rating to the store.
    if ( understanding === ''){
      alert('Please select 1 through 5')
    } else {
      //sends rating to store
      dispatch({
          type: 'SET_UNDERSTANDING',
          payload: Number(understanding)
      });
      //sends user to /support
      history.push('/support')
    }
  }
// heading, rating buttons, and next button are rendered to card. Next button takes user to /support.
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
