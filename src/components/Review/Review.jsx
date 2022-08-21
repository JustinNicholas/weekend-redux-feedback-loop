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
    // checks that input is entered before sending the rating to the store.
    if(form.feeling < 1 || form.support < 1 || form.understanding < 1){
      alert('must have value for feeling, support, and understanding')
    } else {
    //sets isSubmitted to true to set off confetti
    setIsSubmitted(true);
    //sends post request of all feedback info collected to server
    axios.post('/feedback', form)
      .then( response => {
        //we wait 1.5 seconds for confetti animation to go off before calling celebrate().
        setTimeout(() => celebrate(), 1500)
      }).catch( err => {
        console.log('cs post fail');
        console.log(err);
      })
    }
  }
  // we clear the form reducer in the store.
  const celebrate = async () => {
    dispatch({
      type: "CLEAR_FORM"
    });
    // this sends the user to /complete
    history.push('/complete')
  }
//this keeps track of if the edit button is clicked we need to change the view to inputs instead of previous submission.
  const [isEditing, setIsEditing] = useState(false);
// if the user clicks the edit button, all of their previous submissions are entered into the form and they only have to update type in the item they want to update.
  const updateEditState = () => {
    setUpdatedForm({feeling: form.feeling, understanding: form.understanding, support: form.support, comments: form.comments})
    setIsEditing(!isEditing);
  }
// this holds the previously entered info when edit button is clicked.
  const [updatedForm, setUpdatedForm] = useState({feeling: 0, understanding: 0, support: 0, comments: ''})

  // there is a onChange for each input to track what is updated in the form.
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
    //we check that the form has info for all required inputs.
    if(updatedForm.feeling === '' || updatedForm.support === '' || updatedForm.understanding === '' || updatedForm.feeling < 1 || updatedForm.support < 1 || updatedForm.understanding < 1 || updatedForm.feeling > 5 || updatedForm.support > 5 || updatedForm.understanding > 5) {
      alert('must have value for feeling, support, and understanding')
    } else {
      // we set off the confetti by setting isSubmitted to true.
    // setIsSubmitted(true);
    // We send a post request of all the info in the updated form.
    axios.post('/feedback', updatedForm)
      .then( response => {
        // we set off the confetti by setting isSubmitted to true.
        setIsSubmitted(true);
        // we wait 1.5 seconds before calling celebrate();
        setTimeout(() => celebrate(), 1500)
      }).catch( err => {
        console.log('cs post fail');
        console.log(err);
      })
    }
  }

  // the below is all of the specs for the confetti
  const config = {
    angle: 80,
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

  // this holds the state of isSubmitted and holds our state for confetti.
  const [isSubmitted, setIsSubmitted] = useState(false)

  // we render different layouts for the cards and have different function if they are in the edit vs normal views. 
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
        {/* this confetti install was sourced from https://daniel-lundin.github.io/react-dom-confetti/ and can be installed with npm i react-dom-confetti */}
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
