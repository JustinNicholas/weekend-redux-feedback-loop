import {useHistory} from 'react-router-dom';
import { useDispatch } from "react-redux";
import axios from 'axios';
import {useSelector} from 'react-redux';
import { useState } from 'react';
import './Review.css'
import Confetti from 'react-dom-confetti';

function Review() {

  const dispatch = useDispatch();
  const form = useSelector(store => store.formReducer)
  const history = useHistory();

  const handleSubmit = () => {
    if(form.feeling < 1 || form.support < 1 || form.understanding < 1){
      alert('must have value for feeling, support, and understanding')
    } else {
    setIsSubmitted(true);
    axios.post('/feedback', form)
      .then( response => {
        setTimeout(() => celebrate(), 1500)
      }).catch( err => {
        console.log('cs post fail');
        console.log(err);
      })
    }
  }
  const celebrate = async () => {
    dispatch({
      type: "CLEAR_FORM"
    });

    history.push('/complete')
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
    if(updatedForm.feeling === '' || updatedForm.support === '' || updatedForm.understanding === '' || updatedForm.feeling < 1 || updatedForm.support < 1 || updatedForm.understanding < 1 || updatedForm.feeling > 5 || updatedForm.support > 5 || updatedForm.understanding > 5) {
      alert('must have value for feeling, support, and understanding')
    } else {
    setIsSubmitted(true);
    axios.post('/feedback', updatedForm)
      .then( response => {
        setIsSubmitted(true);
        setTimeout(() => celebrate(), 1500)
      }).catch( err => {
        console.log('cs post fail');
        console.log(err);
      })
    }
  }

  //try
  const config = {
    angle: 90,
    spread: 360,
    startVelocity: 40,
    elementCount: 200,
    dragFriction: 0.12,
    duration: 1500,
    stagger: 3,
    width: "10px",
    height: "10px",
    perspective: "500px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
  };

  const [isSubmitted, setIsSubmitted] = useState(false)

  if (isEditing === false){
    return (
      <>
        <h1>Review</h1>
        <div className='review-text-container'>
          <p className='review-text'><strong>Feelings:</strong> {form.feeling}</p>
          <p className='review-text'><strong>Understanding:</strong> {form.understanding}</p>
          <p className='review-text'><strong>Support:</strong> {form.support}</p>
          <div className='comment-review-text'><strong>Comments:</strong> {form.comments}</div>
        </div>
        <div className='review-button-container'>
          <div className='submit-button' onClick={handleSubmit}><p className='button-text'>Submit</p></div>
          <div className='edit-button' onClick={updateEditState}><p className='button-text'>Edit</p></div>
        </div>
        <Confetti active={ isSubmitted } config={ config }/>
      </>
      
    )
  } else {
    return (
      <>
        <h1>Review</h1>
        <div className='review-text-container'>
          <p className='review-text'><strong>Feelings:</strong> <input onChange={(event) => handleFeelingChange(event)} type="number" min='1' max='5' value={updatedForm.feeling}/></p>
          <p className='review-text'><strong>Understanding:</strong> <input onChange={(event) => handleUnderstandingChange(event)} type="number" min='1' max='5' value={updatedForm.understanding}/></p>
          <p className='review-text'><strong>Support:</strong> <input onChange={(event) => handleSupportChange(event)} type="number" min='1' max='5' value={updatedForm.support}/></p>
          <p className='review-text'><strong>Comments:</strong> <input onChange={(event) => handleCommentsChange(event)} type="text" value={updatedForm.comments}/></p>
        </div>
        <div className='review-button-container'>
          <div className='submit-button' onClick={handleSubmitUpdated}><p className='button-text'>Submit</p></div>
          <div className='edit-button' onClick={updateEditState}><p className='button-text'>Cancel Edit</p></div>
        </div>
        <Confetti active={ isSubmitted } config={ config }/>
      </>
    )
  }
    ;
}

export default Review;
