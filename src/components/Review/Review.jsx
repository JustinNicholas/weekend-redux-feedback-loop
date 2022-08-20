import {useHistory} from 'react-router-dom';
import { useDispatch } from "react-redux";
import axios from 'axios';
import {useSelector} from 'react-redux';

function Review() {

  const dispatch = useDispatch();
  const form = useSelector(store => store.formReducer)
  const history = useHistory();

  const handleSubmit = () => {

    axios.post('/feedback', form)
      .then( response => {
        dispatch({
          type: "CLEAR_FORM"
        });
        history.push('/complete')
      }).catch( err => {
        console.log('cs post fail');
        console.log(err);
      })
      
      
  }

  return (
    <>
      <h1>Review</h1>
      <p>Feelings: {form.feeling}</p>
      <p>Understanding: {form.understanding}</p>
      <p>Support: {form.support}</p>
      <p>Comments: {form.comments}</p>
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}

export default Review;
