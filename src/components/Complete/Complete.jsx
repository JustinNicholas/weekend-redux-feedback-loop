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
      <button onClick={handleSubmitNew}>Submit New Feedback</button>
    </>
  );
}

export default Complete;
