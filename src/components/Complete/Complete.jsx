import { useHistory } from "react-router-dom";
import {useDispatch} from 'react-redux';

function Complete() {
  const history = useHistory();
  const dispatch = useDispatch();
  // once the submit new feedback button is clicked, we clear the form and bring the user back to /.
  const handleSubmitNew = () => {
    dispatch({
      type: 'CLEAR_PROGRESS'
    });

    history.push("/");
  };

  return (
    <>
      <h1>Complete!</h1>
      <div className="next-button" onClick={handleSubmitNew}><p className="button-text">Submit New Feedback</p></div>
    </>
  );
}

export default Complete;
