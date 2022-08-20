import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {useState} from 'react';

function Feeling() {

    const history = useHistory();
    const dispatch = useDispatch();

    const [feeling, setFeeling] = useState('');

    const handleNext = () => {

        dispatch({
            type: 'SET_FEELING',
            payload: Number(feeling)
        });history.push('/understanding')
    }

  return (
    <>
      <h1>How are you feeling today?</h1>
      <input type="number" placeholder="Feeling?" onChange={ (event) => setFeeling(event.target.value) }/>
      {/* <Link to="/understanding"> */}
      <button onClick={handleNext}>Next</button>
    </>
  );
}

export default Feeling;
