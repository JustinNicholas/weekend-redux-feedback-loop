import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";

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
      <h1>Any comments you want to leave?</h1>
      <input
        type="text"
        placeholder="Comments?"
        onChange={(event) => setComments(event.target.value)}
      />
      <button onClick={handleNext}>Next</button>
    </>
  );
}

export default Comments;
