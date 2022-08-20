import {useHistory} from 'react-router-dom';
import axios from 'axios';
import {useSelector} from 'react-redux';

function Review() {

  const form = useSelector(store => store.formReducer)
  const history = useHistory();

  const handleSubmit = () => {

    axios.post('/feedback', form)
      .then( response => {
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
