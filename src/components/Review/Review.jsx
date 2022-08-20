import {useHistory} from 'react-router-dom';
import { useDispatch } from "react-redux";
import axios from 'axios';
import {useSelector} from 'react-redux';
import { useState } from 'react';

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

  const [isEditing, setIsEditing] = useState(false);

  const updateEditState = () => {
    setUpdatedForm({feeling: form.feeling, understanding: form.understanding, support: form.support, comments: form.comments})
    setIsEditing(!isEditing);
  }

  const [updatedForm, setUpdatedForm] = useState({feeling: 0, understanding: 0, support: 0, comments: ''})

  const handleFeelingChange = (event) => {
    setUpdatedForm({
      ...updatedForm,
      feeling: event.target.value
    })
  }

  const handleUnderstandingChange = (event) => {
    setUpdatedForm({
      ...updatedForm,
      understanding: event.target.value
    })
  }

  const handleSupportChange = (event) => {
    setUpdatedForm({
      ...updatedForm,
      support: event.target.value
    })
  }

  const handleCommentsChange = (event) => {
    setUpdatedForm({
      ...updatedForm,
      comments: event.target.value
    })
  }

  const handleSubmitUpdated = () => {
    if(updatedForm.feeling === '' || updatedForm.support === '' || updatedForm.understanding === '') {
      alert('must have value for feeling, support, and understanding')
    } else {
    axios.post('/feedback', updatedForm)
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
  }

  if (isEditing === false){
    return (
      <>
        <h1>Review</h1>
        <p>Feelings: {form.feeling}</p>
        <p>Understanding: {form.understanding}</p>
        <p>Support: {form.support}</p>
        <p>Comments: {form.comments}</p>
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={updateEditState}>Edit</button>
      </>
  
    )
  } else {
    return (
      <>
        <h1>Review</h1>
        <p>Feelings: <input onChange={(event) => handleFeelingChange(event)} type="number" min='1' max='10' value={updatedForm.feeling}/></p>
        <p>Understanding: <input onChange={(event) => handleUnderstandingChange(event)} type="number" min='1' max='10' value={updatedForm.understanding}/></p>
        <p>Support: <input onChange={(event) => handleSupportChange(event)} type="number" min='1' max='10' value={updatedForm.support}/></p>
        <p>Comments: <input onChange={(event) => handleCommentsChange(event)} type="text" value={updatedForm.comments}/></p>
        <button onClick={handleSubmitUpdated}>Submit</button>
        <button onClick={updateEditState}>Cancel Edit</button>
      </>
    )
  }
    ;
}

export default Review;
