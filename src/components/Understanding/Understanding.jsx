import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {useState} from 'react';

function Understanding() {

  const history = useHistory();
  const dispatch = useDispatch();
  const [understanding, setUnderstanding] = useState('');

  const handleNext = () => {

    dispatch({
        type: 'SET_UNDERSTANDING',
        payload: Number(understanding)
    });
    
    history.push('/support')
  }

  return (
    <>
      <h1>How well are you understanding the content?</h1>
      <input type="number" placeholder="Understanding?" onChange={ (event) => setUnderstanding(event.target.value) }/>
      <button onClick={handleNext}>Next</button>
    </>
  );
}

export default Understanding;
