import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {useState} from 'react';
import RatingButtons from '../RatingButtons/RatingButtons';
import './Feelings.css';


function Feeling() {

    const history = useHistory();
    const dispatch = useDispatch();
    const [feeling, setFeeling] = useState('');

    
    const handleNext = () => {
          // checks that input is entered before sending the rating to the store.
        if (feeling === ''){
            alert('Please select 1 through 5')
        } else {
          //sends rating to store
            dispatch({
                type: 'SET_FEELING',
                payload: Number(feeling)
            });
          //sends user to /understanding
            history.push('/understanding')
        }
    }

    // heading, rating buttons, and next button are rendered to card. Next button takes user to /understanding.
  return (
    <>
      <h1 className='card-heading'>How are you feeling today?</h1>
      <RatingButtons onClick={(event) => setFeeling(event)} />
      {/* <input type="number" placeholder="Feeling?" onChange={ (event) => setFeeling(event.target.value) }/> */}
      <div className='next-button' onClick={handleNext}><p className='button-text'>Next</p></div>
    </>
  );
}

export default Feeling;
