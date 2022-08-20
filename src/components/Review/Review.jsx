import {useHistory} from 'react-router-dom';
import { useDispatch } from "react-redux";
import axios from 'axios';
import {useSelector} from 'react-redux';
import { useState } from 'react';
//try
import Confetti from 'react-dom-confetti';

function Review() {

  const dispatch = useDispatch();
  const form = useSelector(store => store.formReducer)
  const history = useHistory();

  const handleSubmit = () => {
    setIsSubmitted(true);
    axios.post('/feedback', form)
      .then( response => {
        setTimeout(() => celebrate(), 2000)
        dispatch({
          type: "CLEAR_FORM"
        });
      }).catch( err => {
        console.log('cs post fail');
        console.log(err);
      })
  }
  const celebrate = async () => {
//
    // alert('thanks for remembering')
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
    if(updatedForm.feeling === '' || updatedForm.support === '' || updatedForm.understanding === '') {
      alert('must have value for feeling, support, and understanding')
    } else {
    setIsSubmitted(true);
    axios.post('/feedback', updatedForm)
      .then( response => {
        setIsSubmitted(true);
        setTimeout(() => celebrate(), 2000)
        dispatch({
          type: "CLEAR_FORM"
        });
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
    elementCount: 70,
    dragFriction: 0.12,
    duration: 3000,
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
        <p>Feelings: <strong>{form.feeling}</strong></p>
        <p>Understanding: <strong>{form.understanding}</strong></p>
        <p>Support: <strong>{form.support}</strong></p>
        <p>Comments: <strong>{form.comments}</strong></p>
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={updateEditState}>Edit</button>
        <button onClick={() => setIsSubmitted(!isSubmitted)}>confetti</button>
        <Confetti active={ isSubmitted } config={ config }/>
      </>
      
    )
  } else {
    return (
      <>
        <h1>Review</h1>
        <p>Feelings: <input onChange={(event) => handleFeelingChange(event)} type="number" min='1' max='5' value={updatedForm.feeling}/></p>
        <p>Understanding: <input onChange={(event) => handleUnderstandingChange(event)} type="number" min='1' max='5' value={updatedForm.understanding}/></p>
        <p>Support: <input onChange={(event) => handleSupportChange(event)} type="number" min='1' max='5' value={updatedForm.support}/></p>
        <p>Comments: <input onChange={(event) => handleCommentsChange(event)} type="text" value={updatedForm.comments}/></p>
        <button onClick={handleSubmitUpdated}>Submit</button>
        <button onClick={updateEditState}>Cancel Edit</button>
        <Confetti active={ isSubmitted } config={ config }/>
      </>
    )
  }
    ;
}

export default Review;
