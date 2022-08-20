import { useHistory } from "react-router-dom";
import { useState } from "react";

function Complete() {
  const history = useHistory();

  const handleSubmitNew = () => {

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
