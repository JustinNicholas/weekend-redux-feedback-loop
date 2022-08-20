import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import './Comments.css'

function Comments() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [comments, setComments] = useState("");

  const handleNext = () => {
    dispatch({
      type: "SET_COMMENTS",
      payload: comments
    });

    history.push("/review");
  };

  return (
    <>
      <h1 className='card-heading'>Any comments you want to leave?</h1>
      <textarea
        className="comment-input"
        type="text"
        placeholder="Comments?"
        onChange={(event) => setComments(event.target.value)}
      />
      <div className='next-button' onClick={handleNext}><p className='button-text'>Next</p></div>
    </>
  );
}

export default Comments;
