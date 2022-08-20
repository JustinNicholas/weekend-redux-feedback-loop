import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {useState} from 'react';
import RatingButtons from '../RatingButtons/RatingButtons';

function Feeling() {

    const history = useHistory();
    const dispatch = useDispatch();
    const [feeling, setFeeling] = useState('');

    function update(){
        
    }

    const handleNext = () => {

        if (feeling === ''){
            alert('Please select 1 through 10')
        } else {

            dispatch({
                type: 'SET_FEELING',
                payload: Number(feeling)
            });
            
            history.push('/understanding')
        }
    }

  return (
    <>
      <h1>How are you feeling today?</h1>
      <RatingButtons onClick={(event) => setFeeling(event.target.value)} />
      {/* <input type="number" placeholder="Feeling?" onChange={ (event) => setFeeling(event.target.value) }/> */}
      <button onClick={handleNext}>Next</button>
    </>
  );
}

export default Feeling;
