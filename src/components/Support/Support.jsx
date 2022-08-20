import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {useState} from 'react';
import RatingButtons from '../RatingButtons/RatingButtons';

function Support() {

  const history = useHistory();
  const dispatch = useDispatch();
  const [support, setSupport] = useState('');

  const handleNext = () => {
    if (support === ''){
      alert('Please select 1 through 10')
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
      <h1>How well are you being supported?</h1>
      <RatingButtons onClick={(event) => setSupport(event.target.value)} />
      {/* <input type="number" placeholder="Supported?" onChange={ (event) => setSupport(event.target.value) }/> */}
      <button onClick={handleNext}>Next</button>
    </>
  );
}

export default Support;
