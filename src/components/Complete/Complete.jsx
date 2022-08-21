import { useHistory } from "react-router-dom";
import {useDispatch} from 'react-redux';

function Complete() {
  const history = useHistory();
  const dispatch = useDispatch();

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
