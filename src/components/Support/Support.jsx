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
    if (support === ''){
      alert('Please select 1 through 5')
    } else {
      dispatch({
          type: 'SET_SUPPORT',
          payload: Number(support)
      });
      
      history.push('/comments')
    }
  }

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
