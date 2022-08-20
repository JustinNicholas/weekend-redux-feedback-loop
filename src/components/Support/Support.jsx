import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {useState} from 'react';

function Support() {

  const history = useHistory();
  const dispatch = useDispatch();
  const [support, setSupport] = useState('');

  const handleNext = () => {

    dispatch({
        type: 'SET_SUPPORT',
        payload: Number(support)
    });
    
    history.push('/comments')
  }

  return (
    <>
      <h1>How well are you being supported?</h1>
      <input type="number" placeholder="Supported?" onChange={ (event) => setSupport(event.target.value) }/>
      <button onClick={handleNext}>Next</button>
    </>
  );
}

export default Support;
