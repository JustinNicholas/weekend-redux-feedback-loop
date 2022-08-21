import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {useState} from 'react';
import RatingButtons from '../RatingButtons/RatingButtons';
import './Support.css'

function Support() {

  const history = useHistory();
  const dispatch = useDispatch();
  const [support, setSupport] = useState('');

  const handleNext = () => {
    // checks that input is entered before sending the rating to the store.
    if (support === ''){
      alert('Please select 1 through 5')
    } else {
      //sends rating to store
      dispatch({
          type: 'SET_SUPPORT',
          payload: Number(support)
      });
      //sends user to /comments
      history.push('/comments')
    }
  }
// heading, rating buttons, and next button are rendered to card. Next button takes user to /comments.
  return (
    <>
      <h1 className='card-heading'>How well are you being supported?</h1>
      <RatingButtons onClick={(event) => setSupport(event)} />
      {/* <input type="number" placeholder="Supported?" onChange={ (event) => setSupport(event.target.value) }/> */}
      <div className='next-button' onClick={handleNext}><p className='button-text'>Next</p></div>
    </>
  );
}

export default Support;
